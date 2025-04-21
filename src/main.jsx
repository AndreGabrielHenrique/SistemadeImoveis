// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Ponto de entrada principal do React
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* Componente raiz */}
  </StrictMode>,
)