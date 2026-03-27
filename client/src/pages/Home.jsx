import { useState, useEffect } from 'react';
import { Shield, Settings, Battery, Zap, Award, Users } from 'lucide-react';
import ClayButton from '../components/ClayButton';
import ClayCard from '../components/ClayCard';
import SEO from '../components/SEO';
import './Home.css';
import logo from '../assets/CrownAccumulatorFull_Logo.png';
import soloLogo from '../assets/solo_logo.png';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <SEO 
        title="Crown Accumulator | Solo Battery & Super Shalimar Plate" 
        description="Welcome to Crown Accumulator. Pakistan's premier manufacturer of high-performance Solo batteries, automotive solutions, and precision hardware."
      />
      <section className="hero section">
        <div className="container hero-grid">
          <div className={`hero-text ${isVisible ? 'animate-slide-up' : ''}`}>
            <div className="brand-badge-box mb-4">
               <img src={soloLogo} alt="SOLO Logo" className="hero-solo-logo animate-pulse" />
            </div>
            <h1 className="hero-headline">
              PAKISTAN'S PREMIER MANUFACTURER OF <span className="highlight">AUTO & SOLAR</span> ENERGY SOLUTIONS.
            </h1>

            <p className="hero-intro">
              Engineering excellence for four decades. We specialize in high-performance motorcycle, car, and solar batteries, 
              precision sprockets, and industry-leading battery plates.
            </p>
            <div className="hero-motto-box clay-card animate-scale-in">
              <span className="motto-label">OUR MISSION:</span>
              <span className="motto-text">"QUALITY NOT TO BE COMPROMISED"</span>
            </div>
            <div className="hero-actions">
              <ClayButton variant="primary" onClick={() => window.location.href='/products'}>
                Explore Our Products
              </ClayButton>
              <ClayButton variant="default" className="ms-3" onClick={() => window.location.href='/contact'}>
                Get a Quote
              </ClayButton>
            </div>
          </div>
          
          <div className={`hero-visual ${isVisible ? 'animate-float' : ''}`}>
            <div className="clay-card hero-card flex-center">
              <div className="visual-elements">
                 <div className="floating-item item-1 clay-card"><Battery size={32} color="#0A1B44" /></div>
                 <div className="floating-item item-2 clay-card"><Zap size={32} color="#D20000" /></div>

                 <img src={logo} alt="Crown Accumulator Logo" className="hero-main-logo" />
              </div>
              <p className="visual-caption">SOLO Production Unit</p>
            </div>
          </div>

        </div>
      </section>

      <section className="pillars section reveal reveal-up">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="clay-inset display-4">OUR CORE PILLARS</h2>
          </div>
          <div className="pillars-grid">
            <ClayCard className="pillar-item">
              <Shield className="pillar-icon" size={40} />
              <h3>Quality First</h3>
              <p>Strict QA protocols ensuring every battery and sprocket meets international standards.</p>
            </ClayCard>
            <ClayCard className="pillar-item">
              <Settings className="pillar-icon" size={40} />
              <h3>Engineering</h3>
              <p>State-of-the-art production facility optimized for precision manufacturing since 1984.</p>
            </ClayCard>
            <ClayCard className="pillar-item">
              <Zap className="pillar-icon" size={40} />
              <h3>Innovation</h3>
              <p>Continuous R&D to improve the endurance and efficiency of our SOLO product range.</p>
            </ClayCard>
          </div>
        </div>
      </section>

      <section className="stats section reveal reveal-up">
        <div className="container stats-container clay-card flex-center">
          <div className="stat-item">
            <Award className="stat-icon" size={48} />
            <div className="stat-number">40+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item">
            <Users className="stat-icon" size={48} />
            <div className="stat-number">100+</div>
            <div className="stat-label">OEM Partnerships</div>
          </div>
          <div className="stat-item">
            <Battery className="stat-icon" size={48} />
            <div className="stat-number">SOLO</div>
            <div className="stat-label">Premier Brand</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

