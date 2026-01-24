import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

// Wrapper component to provide translation to class component
function ErrorBoundaryWithTranslation(props) {
  const { t } = useTranslation();
  return <ErrorBoundaryCore {...props} t={t} />;
}

class ErrorBoundaryCore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    
    // Log error to console for debugging
    console.error('[ErrorBoundary] Caught error:', error);
    console.error('[ErrorBoundary] Component stack:', errorInfo.componentStack);
    
    // Here you could send error to analytics service
    this.logErrorToService(error, errorInfo);
  }

  logErrorToService = (error, errorInfo) => {
    // Example: Send to analytics or error tracking service
    const errorData = {
      message: error?.message || 'Unknown error',
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window?.location?.href,
    };
    
    // For now, just log it
    console.log('[ErrorBoundary] Error data:', JSON.stringify(errorData, null, 2));
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    const { hasError, error } = this.state;
    const { t } = this.props;

    if (hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
          color: '#fff',
          fontFamily: 'Rajdhani, sans-serif',
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            animation: 'pulse 2s infinite',
          }}>
            ⚠️
          </div>
          
          <h1 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            fontFamily: 'Orbitron, sans-serif',
            color: '#00ffff',
          }}>
            {t('error.title') || '¡Ups! Algo salió mal'}
          </h1>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.8,
            maxWidth: '500px',
          }}>
            {t('error.description') || 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente.'}
          </p>
          
          {error?.message && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '2rem',
              maxWidth: '500px',
              wordBreak: 'break-word',
              fontSize: '0.9rem',
              opacity: 0.7,
            }}>
              {error.message}
            </div>
          )}
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <button
              onClick={this.handleReload}
              style={{
                padding: '0.8rem 2rem',
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #00ffff 0%, #00cccc 100%)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: '600',
                color: '#0a0a0f',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {t('error.reload') || 'Recargar página'}
            </button>
            
            <button
              onClick={this.handleGoHome}
              style={{
                padding: '0.8rem 2rem',
                fontSize: '1rem',
                background: 'transparent',
                border: '2px solid #00ffff',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: '600',
                color: '#00ffff',
                transition: 'transform 0.2s, background 0.2s',
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {t('error.goHome') || 'Ir al inicio'}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Add keyframes animation
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }
`;
document.head.appendChild(style);

export default ErrorBoundaryWithTranslation;

