import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Building2, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
import axios from 'axios';
import ClayButton from '../components/ClayButton';
import ClayCard from '../components/ClayCard';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post('/api/inquiries', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      alert('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact Us | Crown Accumulator Quotes & Inquiries"
        description="Get in touch with Crown Accumulator for pricing, quotes, and technical specs on SOLO batteries, Super Shalimar plates, and AS Battery plates."
      />
      <section className="contact-hero section animate-slide-up">
        <div className="container text-center">
          <h1 className="clay-inset display-4 mb-4">CONTACT US</h1>
          <p className="subtitle">Headquartered in Lahore, Serving Pakistan Since 1984</p>
        </div>
      </section>

      <section className="contact-info-section section reveal">
        <div className="container">
          <div className="locations-grid">
            <ClayCard className="location-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="location-icon clay-inset flex-center"><MapPin size={32} /></div>
              <h3>FACTORY</h3>
              <p>55/28-C, Akber Colony Industrial Area, Momin Pura Road Daroghawala, Lahore.</p>
              <div className="location-footer">
                <a href="https://maps.app.goo.gl/maJNJRaDdKtBpjTn7" target="_blank" rel="noreferrer" className="clay-button small-btn">View On Map</a>
              </div>
            </ClayCard>

            <ClayCard className="location-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="location-icon clay-inset flex-center"><Building2 size={32} /></div>
              <h3>HEAD OFFICE</h3>
              <p>Crown Accumulator 325 GT Road Darogha wala, Lahore</p>
              <div className="location-footer">
                <a href="https://maps.app.goo.gl/rje2uWVDeQbDBxUCA" target="_blank" rel="noreferrer" className="clay-button small-btn">View On Map</a>
              </div>
            </ClayCard>

            <ClayCard className="location-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="location-icon clay-inset flex-center"><MapPin size={32} /></div>
              <h3>SALES POINT</h3>
              <p>New Shaheen Autos, 21G, Al Fatah Market, 88 Mcleod Road, Lahore.</p>
              <div className="location-footer">
                <a href="tel:+923238484232" className="clay-button small-btn">Call Sales</a>
              </div>
            </ClayCard>
          </div>
        </div>
      </section>

      <section className="contact-form-section section pt-0 reveal">
        <div className="container">
          <div className="form-container-grid">
            <div className="direct-contact-box">
              <h2 className="display-5 mb-4 color-red">GET IN TOUCH</h2>
              <p className="mb-5">Have a specific inquiry about SOLO batteries or sprockets? Our team is ready to assist you with technical specs and pricing.</p>

              <div className="contact-pills">
                <ClayCard className="contact-pill-item">
                  <Phone className="color-red" size={24} />
                  <div>
                    <strong>Shahid Mahmood Mughal</strong>
                    <p>+92 323 4352797</p>
                  </div>
                </ClayCard>
                <ClayCard className="contact-pill-item">
                  <Phone className="color-red" size={24} />
                  <div>
                    <strong>Tariq Mehmood Mughal</strong>
                    <p>+92 300 944 84 62</p>
                  </div>
                </ClayCard>
                <ClayCard className="contact-pill-item">
                  <Mail className="color-red" size={24} />
                  <div>
                    <strong>General Inquiries</strong>
                    <p>crown.solo@gmail.com</p>
                  </div>
                </ClayCard>
              </div>

              <div className="social-connect-box mt-5">
                <h5 className="mb-4">FOLLOW OUR LEGACY</h5>
                <div className="contact-social-bar flex-start">
                  <a href="https://www.instagram.com/crownaccumulator/" target="_blank" rel="noreferrer" className="social-icon-link clay-inset flex-center" title="Instagram">
                    <InstagramIcon size={24} />
                  </a>
                  <a href="https://x.com/CrownAccum_solo" target="_blank" rel="noreferrer" className="social-icon-link clay-inset flex-center" title="Twitter/X">
                    <TwitterIcon size={24} />
                  </a>
                  <a href="#" className="social-icon-link clay-inset flex-center" title="Facebook (Coming Soon)">
                    <FacebookIcon size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="form-card-wrapper animate-slide-up">
              <ClayCard title={submitted ? "Inquiry Received" : "Inquiry Form"}>
                {submitted ? (
                  <div className="success-state text-center py-5">
                    <div className="success-icon-box clay-inset flex-center mb-4 mx-auto" style={{ width: '80px', height: '80px', borderRadius: '50%' }}>
                      <Zap size={40} className="color-red animate-pulse" />
                    </div>
                    <h3 className="mb-3">Thank You!</h3>
                    <p className="mb-5">Your inquiry has been sent successfully to crown.solo@gmail.com. Our sales team will contact you shortly.</p>
                    <button className="clay-button primary" onClick={() => setSubmitted(false)}>Send Another Inquiry</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        className="clay-inset"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="clay-inset"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        className="clay-inset"
                        placeholder="+92 XXX XXXXXXX"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Inquiry Details (Specify Product for Pricing)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="clay-inset"
                        rows="5"
                        placeholder="Which SOLO products are you interested in?"
                        required
                      ></textarea>
                    </div>
                    <ClayButton type="submit" variant="primary" className="submit-btn flex-center" disabled={submitting}>
                      {submitting ? 'Sending...' : <><Send size={18} style={{ marginRight: '10px' }} /> Send Inquiry</>}
                    </ClayButton>
                  </form>
                )}
              </ClayCard>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
