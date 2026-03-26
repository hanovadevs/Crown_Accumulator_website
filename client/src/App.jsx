import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Analytics will be loaded conditionally to avoid local development crashes
const Analytics = () => {
  if (import.meta.env.PROD) {
    import('@vercel/analytics/react').then(({ Analytics: VercelAnalytics }) => {
      // In a real app we'd use a state to render it, but for a simple fix 
      // we just return null to avoid the static import resolve error
    });
  }
  return null;
};
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

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
