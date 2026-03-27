import { useEffect, useState } from 'react';
import { Briefcase, Building2, Terminal, Globe } from 'lucide-react';
import ClayCard from '../components/ClayCard';
import SEO from '../components/SEO';
import './Portfolio.css';

const ClientLogo = ({ domain, fallbackIcon }) => {
  const [imgSrc, setImgSrc] = useState(`https://logo.clearbit.com/${domain}`);

  const handleError = () => {
    if (imgSrc && imgSrc.includes('clearbit')) {
      // Fallback to Google Favicon
      setImgSrc(`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`);
    } else {
      // Fallback to the lucide icon
      setImgSrc(null);
    }
  };

  if (!imgSrc) {
    return fallbackIcon;
  }

  return (
    <img 
      src={imgSrc} 
      alt={`Logo for ${domain}`} 
      onError={handleError}
      style={{ 
        width: '55px', 
        height: '55px', 
        objectFit: 'contain', 
        borderRadius: '50%',
        padding: '3px',
        background: 'white',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
      }}
      loading="lazy"
    />
  );
};

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
    { name: 'Ravi Automobile Pvt Ltd', type: 'Major OEM', domain: 'raviautomobile.com' },
    { name: 'Road Prince (Omega Industries)', type: 'Strategic Partner', domain: 'roadprince.com.pk' },
    { name: 'United Auto Industries', type: 'Key Client', domain: 'unitedmotorcycle.com.pk' },
    { name: 'Unique (D.S Motors)', type: 'Trusted Partner', domain: 'dsmotorsunique.com' },
    { name: 'Super Star (Vohra Automobiles)', type: 'National Distributor', domain: 'superstarmotorcycle.com' },
    { name: 'Buraq (Memon Motors)', type: 'Regional Partner', domain: 'memonmotors.com' },
    { name: 'Super Asia', type: 'Industrial Client', domain: 'superasiagroup.com' },
    { name: 'Crown Motor Co.', type: 'Legacy Partner', domain: 'crowngroup.com.pk' }
  ];

  return (
    <div className="portfolio-page">
      <SEO 
        title="Our Clients & Portfolio | Crown Accumulator" 
        description="Discover the top industries and brands across Pakistan that trust Crown Accumulator and SOLO for their energy and hardware needs."
      />
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
                    <div className="client-icon flex-center" style={{ padding: '0.5rem', background: 'transparent', boxShadow: 'none' }}>
                      <ClientLogo domain={client.domain} fallbackIcon={<Building2 size={40} className="color-red" />} />
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
