// ResumeModal Component
// Professional resume preview with dark backdrop, blur, close button, and PDF download
import React, { useEffect, useRef } from 'react';
import { FiX, FiDownload, FiPhone, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import '../../styles/ResumeModal.css';
import resumePdf from '../../assets/Mitul_Padhiyar_Resume.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  // Escape key closes modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Close when clicking outside the resume card
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Mitul_Padhiyar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview"
    >
      <div className="resume-modal-card" ref={modalRef}>
        {/* Close button */}
        <button
          className="resume-modal-close"
          onClick={onClose}
          aria-label="Close resume preview"
        >
          <FiX size={18} />
        </button>

        {/* Resume Content */}
        <div className="resume-body">

          {/* Header */}
          <div className="resume-header">
            <h1 className="resume-name">MITUL PADHIYAR</h1>
            <p className="resume-title">WEB DEVELOPER</p>
            <p className="resume-location">Anand, Gujarat, India</p>
            <div className="resume-contacts">
              <span><FiPhone size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> +91 92741 18773</span>
              <span className="resume-divider">|</span>
              <span><FiMail size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> mitulpadhiyar0369@gmail.com</span>
            </div>
            <div className="resume-contacts">
              <span>
                <a href="https://linkedin.com/in/mitul-padhiyar" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> linkedin.com/in/mitul-padhiyar
                </a>
              </span>
              <span className="resume-divider">|</span>
              <span>
                <a href="https://github.com/mitulpadhiyar369" target="_blank" rel="noopener noreferrer">
                  <FiGithub size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> github.com/mitulpadhiyar369
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-section">
            <div className="resume-section-heading">
              <h2>PROFESSIONAL SUMMARY</h2>
              <div className="resume-section-line" />
            </div>
            <p className="resume-text">
              Passionate and highly motivated B.Sc. Computer Science student with a strong interest in modern web
              development and responsive UI design. Skilled in C, HTML5, CSS3, JavaScript, and React.js. Developed and
              deployed a personal portfolio website while continuously learning modern frontend technologies, Git, GitHub,
              and AI-assisted development. A quick learner with strong problem-solving skills and a passion for creating
              clean, user-friendly web experiences.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <div className="resume-section-heading">
              <h2>TECHNICAL SKILLS</h2>
              <div className="resume-section-line" />
            </div>
            <div className="resume-skills-list">
              <p><strong>Languages:</strong> C, JavaScript</p>
              <p><strong>Tools:</strong> Git, GitHub, VS Code</p>
              <p><strong>Web Technologies:</strong> HTML5, CSS3, React.js, Responsive Web Design</p>
              <p><strong>Concepts:</strong> Responsive Design, UI Development, Version Control</p>
            </div>
          </div>

          {/* Academic Project */}
          <div className="resume-section">
            <div className="resume-section-heading">
              <h2>ACADEMIC PROJECT</h2>
              <div className="resume-section-line" />
            </div>
            <p className="resume-project-title">Personal Portfolio Website</p>
            <ul className="resume-bullets">
              <li>Designed and developed a fully responsive portfolio using React.js.</li>
              <li>Added smooth animations, modern UI, dark/light mode, and mobile-friendly layouts.</li>
              <li>Integrated clickable GitHub, LinkedIn, Email, and Resume links.</li>
              <li>Deployed using GitHub Pages.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="resume-section">
            <div className="resume-section-heading">
              <h2>EDUCATION</h2>
              <div className="resume-section-line" />
            </div>
            <p className="resume-edu-degree"><strong>Bachelor of Science (Computer Science)</strong></p>
            <p className="resume-text">M.B. Patel Science College, Anand — Affiliated with Sardar Patel University</p>
          </div>

          {/* Certification */}
          <div className="resume-section">
            <div className="resume-section-heading">
              <h2>CERTIFICATION</h2>
              <div className="resume-section-line" />
            </div>
            <ul className="resume-bullets">
              <li>Claude AI Certificate</li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="resume-section">
            <div className="resume-section-heading">
              <h2>ADDITIONAL INFORMATION</h2>
              <div className="resume-section-line" />
            </div>
            <div className="resume-additional-grid">
              <ul className="resume-bullets">
                <li>Quick Learner</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
              </ul>
              <div className="resume-additional-divider" />
              <ul className="resume-bullets">
                <li>Self-Motivated</li>
                <li>Web Development</li>
                <li>AI &amp; Modern Technologies</li>
              </ul>
            </div>
          </div>

          {/* Download Button */}
          <div className="resume-download-wrap">
            <button className="resume-download-btn" onClick={handleDownload}>
              <FiDownload size={16} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
