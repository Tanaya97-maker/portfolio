import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="reveal">
      <div className="section-label">06 — Contact</div>
      <h2 className="section-title">Let's work together.</h2>
      <div className="contact-wrap">
        <div>
          <p style={{ color: '#8a8a8a', fontSize: '0.95rem', lineHeight: '1.85', maxWidth: '420px' }}>
            Open to full-time software developer roles, freelance projects, and collaborations. If you have something
            interesting in mind, I'd like to hear it.
          </p>
          <div className="contact-links">
            <a href="mailto:ritvis97@gmail.com" className="contact-link">
              <div className="contact-link-icon">✉</div>
              <div className="contact-link-info">
                <strong>Email</strong>
                <span>ritvis97@gmail.com</span>
              </div>
            </a>
            <a href="tel:+919322728835" className="contact-link">
              <div className="contact-link-icon">☎</div>
              <div className="contact-link-info">
                <strong>Phone</strong>
                <span>+91-9322728835</span>
              </div>
            </a>
            <a href="https://github.com/Tanaya97-maker" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon">⌥</div>
              <div className="contact-link-info">
                <strong>GitHub</strong>
                <span>github.com/Tanaya97-maker</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/tanaya-sangodkar-8132863a0" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon">⌘</div>
              <div className="contact-link-info">
                <strong>LinkedIn</strong>
                <span>linkedin.com/in/tanaya-sangodkar</span>
              </div>
            </a>
          </div>
        </div>
        <div className="avail-card">
          <div className="avail-title">What I'm looking for</div>
          <ul className="avail-list">
            <li>Full-time software developer roles</li>
            <li>React / full-stack frontend positions</li>
            <li>AI automation or workflow projects</li>
            <li>Open to remote or Goa-based roles</li>
            <li>Immediate availability</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
