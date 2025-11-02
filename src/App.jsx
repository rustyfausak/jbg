import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Join from './components/Join';
import Donate from './components/Donate';
import Resources from './components/Resources';
import Faq from './components/Faq';
import NotFound from './components/NotFound';

export default function App() {
  // Get basename from environment
  const basename = import.meta.env.MODE === 'development' ? '' : '';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
