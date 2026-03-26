import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

// Safe Analytics wrapper (temporarily disabled for build debugging)
const Analytics = () => {
  // if (import.meta.env.PROD) {
  //   return <VercelAnalytics />;
  // }
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
