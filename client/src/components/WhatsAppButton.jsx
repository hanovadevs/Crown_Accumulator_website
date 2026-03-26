import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/923009448462" 
      className="whatsapp-float-btn animate-fade" 
      target="_blank" 

      rel="noopener noreferrer"
      aria-label="Connect on WhatsApp"
    >
      <div className="whatsapp-icon-bg">
        <MessageCircle size={32} fill="white" stroke="none" />
      </div>
      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
