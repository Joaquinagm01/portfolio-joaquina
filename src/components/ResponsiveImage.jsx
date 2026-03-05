import PropTypes from 'prop-types';

/**
 * ResponsiveImage - Componente para imágenes responsive optimizadas
 * Soporta múltiples formatos (AVIF, WebP, JPG/PNG) y srcset automático
 */
const ResponsiveImage = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
  priority = false,
  formats = ['avif', 'webp', 'jpg'], // Formatos disponibles en orden de preferencia
  breakpoints = [300, 600, 900, 1200, 1800], // Ancho de imágenes disponibles
  style = {}
}) => {
  // Extraer nombre  base y extensión del src
  const getBaseName = (path) => {
    const parts = path.split('.');
    const ext = parts.pop();
    const name = parts.join('.');
    return { name, ext };
  };

  const { name: baseName } = getBaseName(src);

  // Generar srcSet para cada formato
  const generateSrcSet = (format) => {
    return breakpoints
      .map(bp => `${baseName}-${bp}.${format} ${bp}w`)
      .join(', ');
  };

  // Si es imagen prioritaria (hero, above the fold), no lazy load
  const loadingAttr = priority ? 'eager' : loading;

  return (
    <picture>
      {/* AVIF - Mejor compresión, soporte moderno */}
      {formats.includes('avif') && (
        <source
          type="image/avif"
          srcSet={generateSrcSet('avif')}
          sizes={sizes}
        />
      )}
      
      {/* WebP - Buena compresión, amplio soporte */}
      {formats.includes('webp') && (
        <source
          type="image/webp"
          srcSet={generateSrcSet('webp')}
          sizes={sizes}
        />
      )}
      
      {/* JPG/PNG - Fallback universal */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loadingAttr}
        decoding={decoding}
        width={width}
        height={height}
        srcSet={generateSrcSet('jpg')}
        sizes={sizes}
        style={style}
      />
    </picture>
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  decoding: PropTypes.oneOf(['async', 'sync', 'auto']),
  width: PropTypes.number,
  height: PropTypes.number,
  priority: PropTypes.bool,
  formats: PropTypes.arrayOf(PropTypes.string),
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  style: PropTypes.object
};

export default ResponsiveImage;
