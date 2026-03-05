import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/i18n.js'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

// Register service worker for offline capabilities and caching
serviceWorkerRegistration.register({
  onSuccess: () => {
    console.log('[App] Content cached successfully. App available offline.');
  },
  onUpdate: (registration) => {
    console.log('[App] New version available. Please refresh to update.');
    // Optionally show a notification to the user
    if (registration && registration.waiting) {
      // Can implement auto-update or show update notification here
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});

