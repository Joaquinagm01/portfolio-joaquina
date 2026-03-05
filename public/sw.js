/**
 * Advanced Service Worker with Multiple Caching Strategies
 * Cache version and configuration
 */
const CACHE_VERSION = 'v1.9.0';
const CACHE_PREFIX = 'portfolio-joaquina';
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`;
const RUNTIME_CACHE = `${CACHE_PREFIX}-runtime-${CACHE_VERSION}`;
const IMAGE_CACHE = `${CACHE_PREFIX}-images-${CACHE_VERSION}`;
const FONT_CACHE = `${CACHE_PREFIX}-fonts-${CACHE_VERSION}`;
const API_CACHE = `${CACHE_PREFIX}-api-${CACHE_VERSION}`;

// Cache duration in milliseconds
const CACHE_DURATION = {
  short: 1000 * 60 * 5,      // 5 minutes
  medium: 1000 * 60 * 60,    // 1 hour
  long: 1000 * 60 * 60 * 24, // 1 day
  week: 1000 * 60 * 60 * 24 * 7, // 1 week
};

// Static assets to precache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/CV-JoaquinaGomezManna.pdf',
  '/manifest.json',
  '/vite.svg',
  // Profile images
  '/profile-300.avif',
  '/profile-600.avif',
  '/profile-1200.avif',
  '/profile-180.avif',
  '/profile-360.avif',
  '/profile-720.avif',
];

/**
 * Install event - precache static assets
 */
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS.map(url => new Request(url, {cache: 'reload'})));
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

/**
 * Activate event - cleanup old caches
 */
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              // Delete old caches that don't match current version
              return name.startsWith(CACHE_PREFIX) && !name.includes(CACHE_VERSION);
            })
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim();
      })
  );
});

/**
 * Fetch event - intelligent caching strategies
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (except fonts and images)
  if (url.origin !== self.location.origin && 
      !request.url.includes('googleapis.com') &&
      !request.url.includes('gstatic.com')) {
    return;
  }

  // Choose caching strategy based on request type
  if (request.destination === 'image' || request.url.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
    event.respondWith(cacheFirstStrategy(request, IMAGE_CACHE, CACHE_DURATION.week));
  } else if (request.url.match(/\.(woff|woff2|ttf|otf|eot)$/i) || request.url.includes('fonts.googleapis.com')) {
    event.respondWith(cacheFirstStrategy(request, FONT_CACHE, CACHE_DURATION.week * 4)); // 4 weeks
  } else if (request.url.match(/\.(js|css)$/i)) {
    event.respondWith(staleWhileRevalidateStrategy(request, RUNTIME_CACHE, CACHE_DURATION.long));
  } else if (request.destination === 'document' || request.url.endsWith('/')) {
    event.respondWith(networkFirstStrategy(request, RUNTIME_CACHE, CACHE_DURATION.short));
  } else if (request.url.includes('/api/') || request.url.includes('emailjs.com')) {
    event.respondWith(networkFirstStrategy(request, API_CACHE, CACHE_DURATION.short));
  } else {
    event.respondWith(staleWhileRevalidateStrategy(request, RUNTIME_CACHE, CACHE_DURATION.medium));
  }
});

/**
 * Cache-first strategy (good for images, fonts)
 * Try cache first, fallback to network, then cache the result
 */
async function cacheFirstStrategy(request, cacheName, maxAge) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  if (cached) {
    // Check if cache is still valid
    const cachedTime = cached.headers.get('sw-cached-time');
    if (cachedTime) {
      const age = Date.now() - parseInt(cachedTime);
      if (age < maxAge) {
        console.log('[SW] Cache hit (cache-first):', request.url);
        return cached;
      }
    }
  }

  try {
    console.log('[SW] Fetching from network:', request.url);
    const response = await fetch(request);
    
    if (response.ok) {
      const responseToCache = response.clone();
      const headers = new Headers(responseToCache.headers);
      headers.append('sw-cached-time', Date.now().toString());
      
      const blob = await responseToCache.blob();
      const cachedResponse = new Response(blob, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers
      });
      
      cache.put(request, cachedResponse);
    }
    
    return response;
  } catch (error) {
    console.log('[SW] Network failed, returning cached version:', request.url);
    return cached || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

/**
 * Network-first strategy (good for HTML, API calls)
 * Try network first, fallback to cache
 */
async function networkFirstStrategy(request, cacheName, maxAge) {
  const cache = await caches.open(cacheName);

  try {
    console.log('[SW] Fetching from network first:', request.url);
    const response = await fetch(request);
    
    if (response.ok) {
      const responseToCache = response.clone();
      const headers = new Headers(responseToCache.headers);
      headers.append('sw-cached-time', Date.now().toString());
      
      const blob = await responseToCache.blob();
      const cachedResponse = new Response(blob, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers
      });
      
      cache.put(request, cachedResponse);
    }
    
    return response;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match('/index.html');
      return offlineResponse || new Response('Offline', { status: 503 });
    }
    
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

/**
 * Stale-while-revalidate strategy (good for JS, CSS)
 * Return cached version immediately, update cache in background
 */
async function staleWhileRevalidateStrategy(request, cacheName, maxAge) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  // Fetch from network and update cache in background
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        const responseToCache = response.clone();
        const headers = new Headers(responseToCache.headers);
        headers.append('sw-cached-time', Date.now().toString());
        
        responseToCache.blob().then((blob) => {
          const cachedResponse = new Response(blob, {
            status: responseToCache.status,
            statusText: responseToCache.statusText,
            headers: headers
          });
          cache.put(request, cachedResponse);
        });
      }
      return response;
    })
    .catch(() => {
      console.log('[SW] Network failed for:', request.url);
      return null;
    });

  // Return cached version immediately if available
  if (cached) {
    console.log('[SW] Returning cached, revalidating:', request.url);
    return cached;
  }

  // If no cache, wait for network
  console.log('[SW] No cache, waiting for network:', request.url);
  return fetchPromise || new Response('Offline', { status: 503 });
}

/**
 * Handle messages from the main thread
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Received SKIP_WAITING message');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('[SW] Clearing all caches');
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => caches.delete(name))
        );
      })
    );
  }
});

/**
 * Background sync for offline form submissions (future enhancement)
 */
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Placeholder for syncing offline form submissions
  console.log('[SW] Syncing contact form submissions');
  // Implementation would retrieve pending submissions from IndexedDB
  // and submit them when connection is restored
}

console.log('[SW] Service Worker script loaded');

