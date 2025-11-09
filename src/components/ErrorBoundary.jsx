// src/components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente render muestre el fallback
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de reporte
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI de fallback
      return (
        <div className="min-h-screen flex items-center justify-center bg-dark text-white text-center p-6">
          <div>
            <h2 className="text-2xl font-bold text-red-400 mb-4">⚠️ Algo salió mal</h2>
            <p className="text-gray-300 mb-4">
              Lo sentimos, ocurrió un error inesperado. Estamos trabajando para solucionarlo.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary rounded-lg hover:bg-purple-700 transition"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;