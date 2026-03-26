import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowRight, Battery, Settings, ShieldCheck, Instagram, Twitter, Facebook } from 'lucide-react';
import './Footer.css';
import logo from '../assets/CrownAccumulator_logo.jpeg';
import soloLogo from '../assets/solo_logo.png';

const Footer = () => {
  return (
    <footer className="footer-professional">
      <div className="footer-top-glow"></div>

      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Essence */}
          <div className="footer-col brand-col">
            <div className="footer-logo-box">
              <img src={logo} alt="Crown Accumulator Logo" className="footer-logo-img" />
            </div>
            <div className="solo-brand-box mt-3 mb-4">
              <img src={soloLogo} alt="SOLO Logo" className="footer-solo-img" />
            </div>

            <p className="brand-desc">
              Powering the nation since 1984 with premium engineering and SOLO energy solutions.
            </p>
            
            <div className="footer-social-bar mt-3 mb-4 flex-start">
               <a href="https://www.instagram.com/crownaccumulator/" target="_blank" rel="noreferrer" className="social-icon-link clay-inset flex-center" title="Instagram">
                  <Instagram size={18} />
               </a>
               <a href="https://x.com/CrownAccum_solo" target="_blank" rel="noreferrer" className="social-icon-link clay-inset flex-center" title="Twitter/X">
                  <Twitter size={18} />
               </a>
               <a href="#" className="social-icon-link clay-inset flex-center" title="Facebook (Coming Soon)">
                  <Facebook size={18} />
               </a>
            </div>

            <div className="footer-motto-badge footer-token-card">
              <ShieldCheck className="motto-icon" size={18} />
              <span>QUALITY NOT TO BE COMPROMISED</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links">
              <li><Link to="/"><ArrowRight size={14} /> Home</Link></li>
              <li><Link to="/products"><ArrowRight size={14} /> Our Products</Link></li>
              <li><Link to="/portfolio"><ArrowRight size={14} /> Client Portfolio</Link></li>
              <li><Link to="/about"><ArrowRight size={14} /> About Our Legacy</Link></li>
              <li><Link to="/contact"><ArrowRight size={14} /> Reach Out</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="footer-col">
            <h4 className="footer-heading">SOLO SOLUTIONS</h4>
            <ul className="footer-links">
              <li><Link to="/products"><Battery size={14} /> Motorcycle Batteries</Link></li>
              <li><Link to="/products"><Battery size={14} /> Car Batteries</Link></li>
              <li><Link to="/products"><Globe size={14} /> Solar Storage</Link></li>
              <li><Link to="/products"><Settings size={14} /> Precision Sprockets</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">INSTANT CONNECT</h4>
            <div className="contact-info-footer">
              <a href="tel:+923009448462" className="footer-contact-link">
                <div className="icon-box-footer flex-center"><Phone size={18} /></div>
                <span>+92 300 944 84 62</span>
              </a>
              <a href="mailto:crown.solo@gmail.com" className="footer-contact-link">
                <div className="icon-box-footer flex-center"><Mail size={18} /></div>
                <span>crown.solo@gmail.com</span>
              </a>
              <div className="footer-contact-link">
                <div className="icon-box-footer flex-center"><MapPin size={18} /></div>
                <span>GT Road Darogha wala, Lahore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="bottom-flex flex-center">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Crown Accumulator Engineering Enterprise & General Order Suppliers.
            </p>
            <div className="built-badge footer-token-card">
              PAKISTAN PRIDE 🇵🇰
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
