import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle GitHub Pages routing for 404 redirects
if (window.location.search.includes('/?/')) {
  const searchParams = new URLSearchParams(window.location.search);
  const path = searchParams.get('/') || '';
  const decodedPath = path.replace(/~and~/g, '&');
  
  if (path) {
    window.history.replaceState(null, null, '/' + decodedPath + window.location.hash);
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
