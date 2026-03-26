import { useEffect } from 'react';
import { Briefcase, Building2, Terminal, Globe } from 'lucide-react';
import ClayCard from '../components/ClayCard';
import './Portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const customers = [
    { name: 'Ravi Automobile Pvt Ltd', type: 'Major OEM' },
    { name: 'Road Prince (Omega Industries)', type: 'Strategic Partner' },
    { name: 'United Auto Industries', type: 'Key Client' },
    { name: 'Unique (D.S Motors)', type: 'Trusted Partner' },
    { name: 'Super Star (Vohra Automobiles)', type: 'National Distributor' },
    { name: 'Buraq (Memon Motors)', type: 'Regional Partner' },
    { name: 'Super Asia', type: 'Industrial Client' },
    { name: 'Crown Motor Co.', type: 'Legacy Partner' }
  ];

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero section animate-slide-up">
        <div className="container text-center">
           <div className="badge clay-inset mb-3">CLIENT TRUST</div>
           <h1 className="clay-inset display-4 mb-3">OUR VALUED PARTNERS</h1>
           <p className="subtitle">Powering Pakistan's Top Automotive Brands & Industrial Giants Since 1984</p>
        </div>
      </section>

      <section className="client-grid-section section pt-0">
        <div className="container">
          <div className="client-grid">
            {customers.map((client, index) => (
              <div key={index} className="client-item reveal reveal-up" style={{transitionDelay: `${index * 0.1}s`}}>
                <div className="client-card">
                  <div className="client-header">
                    <div className="client-icon flex-center">
                      <Building2 size={40} />
                    </div>
                  </div>
                  <div className="client-body">
                    <h3 className="client-name">{client.name}</h3>
                  </div>
                  <div className="client-footer">
                    <span className="client-type">{client.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="portfolio-footer-box clay-card mt-5 reveal reveal-up">
            <div className="footer-flex flex-center">
               <Globe className="color-red" size={32} />
               <p className="ms-3 mb-0">Our solutions are deployed across the national landscape, supporting the mobility and energy needs of Pakistan.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
