import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Safe Analytics wrapper that doesn't break local dev
const Analytics = () => {
  useEffect(() => {
    if (import.meta.env.PROD) {
      import('@vercel/analytics/react').then(({ Analytics: VercelAnalytics }) => {
        // Initialization happens in production only
      });
    }
  }, []);
  return null;
};

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}


export default App;
