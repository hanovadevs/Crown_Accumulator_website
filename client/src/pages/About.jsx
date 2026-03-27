import { useEffect } from 'react';
import { Target, Heart, Award, CheckCircle, TrendingUp, History, ShieldCheck, Box, Factory } from 'lucide-react';
import SEO from '../components/SEO';
import './About.css';
import logo from '../assets/CrownAccumulatorFull_Logo.png';
import soloLogo from '../assets/solo_logo.png';
import founderPhoto from '../assets/Muhammad Akram.jpeg';

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
      <SEO 
        title="About Us | Crown Accumulator & Solo Battery" 
        description="Learn about Crown Accumulator's legacy since 1984. Discover how we built the SOLO brand into Pakistan's premier battery and automotive hardware choice."
      />
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
                <div className="founder-profile-card mt-5 mb-5">
                  <div className="founder-image-wrapper">
                    <img src={founderPhoto} alt="Founder Muhammad Akram" className="founder-img" />
                    <div className="founder-ring"></div>
                  </div>
                  <div className="founder-info">
                    <h3 className="founder-name">Muhammad Akram</h3>
                    <p className="founder-title">Founder & Visionary</p>
                    <p className="founder-bio">
                      Founded by <strong>Muhammad Akram</strong>, we evolved from a general order supplier into a high-precision manufacturing powerhouse.
                    </p>
                  </div>
                </div>
                
                <p className="text-center mt-3">
                  Under the visionary leadership of our current CEO, <strong>Shahid Mahmood Mughal</strong>,
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

      <section className="oem-services-section reveal">
        <div className="container">
          <div className="oem-card-wrapper clay-card p-5">
            <div className="oem-header text-center mb-5">
              <div className="badge mb-3">B2B SOLUTIONS</div>
              <h2 className="display-5">OEM & PRIVATE LABEL SERVICES</h2>
              <p className="subtitle mx-auto" style={{maxWidth: '700px'}}>
                We empower entrepreneurs and established companies by manufacturing high-quality energy storage 
                and automotive components under their own brand names.
              </p>
            </div>

            <div className="oem-grid">
              <div className="oem-feature reveal reveal-left">
                <div className="oem-icon-box"><Box size={24} /></div>
                <div>
                  <h4>Custom Branding</h4>
                  <p>From battery casing colors to logo moldings, we build your brand from the ground up.</p>
                </div>
              </div>
              <div className="oem-feature reveal reveal-right">
                <div className="oem-icon-box"><Factory size={24} /></div>
                <div>
                  <h4>Scalable Production</h4>
                  <p>Our facility handles massive volumes of plates, batteries, and gears for global partners.</p>
                </div>
              </div>
            </div>

            <div className="confidentiality-banner mt-5 mt-5">
              <div className="confidentiality-inner glass-card p-4">
                <div className="confidentiality-header mb-3">
                  <ShieldCheck size={28} className="color-red" />
                  <h3>STRICT CONFIDENTIALITY POLICY</h3>
                </div>
                <p>
                  At <strong>Crown Accumulator</strong>, we maintain a legacy of absolute silence. Our white-label manufacturing 
                  partnerships are protected by iron-clad <strong>Non-Disclosure Agreements (NDAs)</strong>. As per our strict policy, 
                  we never disclose which companies we manufacture for—and we extend this same protection to your brand. 
                  Your trade secrets and brand identity are safe with us.
                </p>
              </div>
            </div>
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
