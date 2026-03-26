import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Building2, Zap } from 'lucide-react';
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
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="clay-button small-btn">View On Map</a>
                </div>
             </ClayCard>

             <ClayCard className="location-card reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="location-icon clay-inset flex-center"><Building2 size={32} /></div>
                <h3>HEAD OFFICE</h3>
                <p>Crown Accumulator 325 GT Road Darogha wala, Lahore</p>
                <div className="location-footer">
                  <a href="tel:+924236853522" className="clay-button small-btn">Call Office</a>
                </div>
             </ClayCard>

             <ClayCard className="location-card reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="location-icon clay-inset flex-center"><MapPin size={32} /></div>
                <h3>SALES POINT</h3>
                <p>New Shaheen Autos, 21G, Al Fatah Market, 88 Mcleod Road, Lahore.</p>
                <div className="location-footer">
                  <a href="tel:+924237247500" className="clay-button small-btn">Call Sales</a>
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
              </div>

              <div className="form-card-wrapper animate-slide-up">
                 <ClayCard title={submitted ? "Inquiry Received" : "Inquiry Form"}>
                   {submitted ? (
                     <div className="success-state text-center py-5">
                        <div className="success-icon-box clay-inset flex-center mb-4 mx-auto" style={{width: '80px', height: '80px', borderRadius: '50%'}}>
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
                          {submitting ? 'Sending...' : <><Send size={18} style={{marginRight: '10px'}} /> Send Inquiry</>}
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
