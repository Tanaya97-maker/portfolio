import React from 'react';

const About = () => {
  return (
    <section id="about" className="reveal">
      <div className="section-label">01 — About</div>
      <h2 className="section-title">Building things that<br />actually work.</h2>
      <div className="about-grid">
        <div className="about-text">
          <div className="status-badge"><span className="dot"></span> Available for full-time roles</div>
          <p>
            I'm a software developer from Goa, India, with a <strong>B.E. in Computer Engineering (CGPA 8.4)</strong>. My core focus is building scalable React applications backed by Node.js and PostgreSQL — clean code, real products.
          </p>
          <p>
            Beyond web dev, I've been building <strong>AI automation workflows</strong> — email agents, call qualification systems, inventory assistants — using tools like n8n, Make.com, and AI APIs.
          </p>
          <p>
            I also have a deep interest in <strong>UI/UX Design</strong>, focusing on creating interfaces that are not only functional but also visually compelling and user-centric.
          </p>
          <p>
            Currently, I'm also developing a <strong>real-world banquet hall management website</strong> for active business use — handling bookings, events, and customer management.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card reveal">
            <div className="stat-number">2</div>
            <div className="stat-label">Internships completed</div>
          </div>
          <div className="stat-card reveal">
            <div className="stat-number">1</div>
            <div className="stat-label">AIML projects</div>
          </div>
          <div className="stat-card reveal">
            <div className="stat-number">4</div>
            <div className="stat-label">Practice AI automation projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
