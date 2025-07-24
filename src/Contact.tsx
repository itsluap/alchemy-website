import { useState } from 'react';
import './Contact.css';

const addressIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{marginRight: '0.6em', verticalAlign: 'middle'}}><rect x="3" y="7" width="14" height="10" rx="2" fill="#007167"/><rect x="7" y="11" width="2" height="3" rx="1" fill="#fff"/><rect x="11" y="11" width="2" height="3" rx="1" fill="#fff"/><rect x="5" y="3" width="10" height="4" rx="1.5" fill="#007167"/></svg>
);
const phoneIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{marginRight: '0.6em', verticalAlign: 'middle'}}><rect x="4" y="2" width="12" height="16" rx="2" fill="#007167"/><rect x="8" y="15" width="4" height="1.5" rx="0.75" fill="#fff"/></svg>
);
const emailIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{marginRight: '0.6em', verticalAlign: 'middle'}}><rect x="3" y="5" width="14" height="10" rx="2" fill="#007167"/><path d="M5 7l5 4 5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="container contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-subtitle">We’d love to hear from you. Reach out and our team will get back to you soon.</div>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><span className="contact-icon">{addressIcon}</span>6501 Navigation Blvd. Suite# E1<br />Houston, TX 77011</p>
          <p><span className="contact-icon">{phoneIcon}</span><a href="tel:+18326997078">+1 832 699 7078</a></p>
          <p><span className="contact-icon">{emailIcon}</span><a href="mailto:info@alchemyindustrial.com">info@alchemyindustrial.com</a></p>
          <div className="contact-social">
            <a href="#" className="contact-social-link">LinkedIn</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
          <h2>Send a Message</h2>
          {submitted && <div className="contact-success">Thank you! Your message has been sent.</div>}
          <label>Name<br /><input type="text" name="name" required /></label>
          <label>Email<br /><input type="email" name="email" required /></label>
          <label>Message<br /><textarea name="message" rows={5} required></textarea></label>
          <button type="submit" className="cta-btn">Send Message</button>
        </form>
      </div>
      <div className="contact-divider" />
      <iframe
        title="Alchemy Industrial Location"
        src="https://www.google.com/maps?q=6501+Navigation+Blvd+Suite+E1,+Houston,+TX+77011&output=embed"
        width="100%"
        height="320"
        style={{ border: 0, borderRadius: 8, marginTop: 20 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
} 