// Contact Section – Full contact page with info, form, socials, footer
import React from 'react';
import '../../styles/Contact.css';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Contact = () => {
  useScrollAnimation();

  return (
    <section id="contact" className="contact" aria-label="Contact section">


      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <span className="section-label fade-up">Connect With Me</span>
          <h2 className="section-title fade-up delay-1">Let's Create Something Extraordinary</h2>
          <p className="section-subtitle fade-up delay-2">
            Every great opportunity begins with a simple conversation. If you have an idea,
            a collaboration, or an exciting opportunity — let's connect and build something
            impactful together.
          </p>
        </div>

        {/* Two-column: Info + Form */}
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Social Icons Row */}
        <div className="contact-socials-wrap fade-up">
          <p className="contact-socials-title">Find me on</p>
          <div className="contact-socials">
            {/* Replace href values with your actual links */}
            <a
              href="https://github.com/mitulpadhiyar369"
              className="contact-social-link"
              aria-label="GitHub Profile"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mitul-padhiyar-92433a3a0/"
              className="contact-social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mitulpadhiyar0369@gmail.com"
              className="contact-social-link"
              aria-label="Email"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail />
            </a>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
