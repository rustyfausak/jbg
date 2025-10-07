import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle GitHub Pages routing
if (window.location.search.includes('/?/')) {
  const path = window.location.search.split('/?/')[1];
  window.history.replaceState(null, null, '/' + path);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
