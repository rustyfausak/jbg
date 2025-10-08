import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle GitHub Pages routing for 404 redirects
if (window.location.search.includes('/?/')) {
  const searchParams = new URLSearchParams(window.location.search);
  const redirectPath = searchParams.get('/') || '';

  if (redirectPath) {
    // For subdirectory deployment, preserve the base path
    const basePath = import.meta.env.MODE === 'development' ? '' : '/jbg';
    const fullPath = basePath + '/' + redirectPath.replace(/~and~/g, '&');
    window.history.replaceState(null, null, fullPath + window.location.hash);
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
