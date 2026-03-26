import { useEffect } from 'react';
import { Target, Heart, Award, CheckCircle, TrendingUp, History } from 'lucide-react';
import './About.css';
import logo from '../assets/CrownAccumulatorFull_Logo.png';
import soloLogo from '../assets/solo_logo.png';

const About = () => {

  useEffect(() => {
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

  const milestones = [
    { year: '1984', event: 'Founded by Akram Mughal as a specialized engineering firm.', icon: <History /> },
    { year: '2005', event: 'Ventured into Battery Plate manufacturing with advanced casting techniques.', icon: <Award /> },
    { year: 'SOLO', event: 'Launch of the SOLO premium brand for batteries and sprockets.', icon: <TrendingUp /> },
    { year: '2024', event: 'Leading manufacturer of motorcycle and solar batteries in central Pakistan.', icon: <CheckCircle /> }
  ];

  return (
    <div className="about-page">
      <section className="about-hero section animate-slide-up">
        <div className="container text-center">
          <div className="badge mb-3">SINCE 1984</div>
          <h1 className="display-3 mb-4">OUR LEGACY & VISION</h1>
        </div>
      </section>

      <section className="about-story section pt-0">
        <div className="container">
          <div className="story-card-container">
            <div className="story-card reveal reveal-left">
              <div className="story-accent"></div>
              <div className="story-brand-header mb-4">
                <img src={logo} alt="Crown Accumulator" className="about-main-logo" />
              </div>
              <h2>ENGINEERING TRUST</h2>
              <p className="lead">
                From our humble beginnings in 1984 to becoming a cornerstone of
                Pakistan's automotive engineering, Crown Accumulator has stayed true to
                one promise: <strong>Quality Not To Be Compromised.</strong>
              </p>
              <div className="brand-highlight-box clay-card mt-4 mb-4">
                <img src={soloLogo} alt="SOLO Brand" className="about-solo-logo" />
                <p>SOLO represents the pinnacle of battery and hardware engineering under the Crown Accumulator umbrella.</p>
              </div>
              <div className="leadership-section mb-4">
                <p>
                  Founded by <strong>Akram Mughal</strong>, we have evolved
                  from a general order supplier into a high-precision manufacturing powerhouse.
                </p>
                <p>
                  Under the visionary leadership of our current CEO, <strong>Shahid Mehmood Mughal</strong>,
                  Crown Accumulator continues to pioneer energy solutions with the SOLO brand.
                </p>
              </div>
              <div className="story-footer">
                <div className="founder-quote">
                  "Reliability is our foundation, Excellence is our future."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="timeline-section reveal reveal-up">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5">OUR HISTORIC JOURNEY</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} reveal`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values section reveal">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5">CORE PILLARS</h2>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon-box"><Target size={32} /></div>
              <h3>Precision</h3>
              <p>Engineering every plate and sprocket with microscopic accuracy and rigorous testing.</p>
            </div>
            <div className="value-item">
              <div className="value-icon-box"><Heart size={32} /></div>
              <h3>Integrity</h3>
              <p>Building long-lasting relationships based on absolute transparency and reliability.</p>
            </div>
            <div className="value-item">
              <div className="value-icon-box"><Award size={32} /></div>
              <h3>Quality</h3>
              <p>Consistently delivering products that surpass industry standards under our SOLO brand.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
