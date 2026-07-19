// ContactForm – Premium contact form with floating labels
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Form is not connected to a backend – displays a success message on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-form-wrap slide-right">
      <h3 className="contact-form-title">Send Me a Message</h3>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <span style={{ fontSize: '2.5rem' }}>✅</span>
          <p style={{ marginTop: '16px', fontWeight: 600, color: 'var(--accent-green)', fontSize: '1.1rem' }}>
            Message sent!
          </p>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '0.9rem' }}>
            (Backend integration coming soon)
          </p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Name + Email row */}
          <div className="form-row">
            <div className="form-field">
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Full Name"
              />
              <label htmlFor="contact-name" className="form-label">Full Name</label>
            </div>
            <div className="form-field">
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email Address"
              />
              <label htmlFor="contact-email" className="form-label">Email Address</label>
            </div>
          </div>

          {/* Subject */}
          <div className="form-field">
            <input
              type="text"
              id="contact-subject"
              name="subject"
              placeholder=" "
              value={formData.subject}
              onChange={handleChange}
              required
              aria-label="Subject"
            />
            <label htmlFor="contact-subject" className="form-label">Subject</label>
          </div>

          {/* Message */}
          <div className="form-field">
            <textarea
              id="contact-message"
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Your message"
            />
            <label htmlFor="contact-message" className="form-label">Your Message</label>
          </div>

          <button
            type="submit"
            className="form-submit-btn"
            id="contact-submit-btn"
            aria-label="Send message"
          >
            <FiSend aria-hidden="true" />
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
