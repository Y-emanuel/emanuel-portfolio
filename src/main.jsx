import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary> {/* ← Envuelve App */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)