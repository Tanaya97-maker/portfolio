import React from 'react';

const Hero = () => {
  return (
    <header className="hero reveal">
      <div className="hero-eyebrow">Software Developer | React Developer | React.js • Node.js • PostgreSQL | AI Automation</div>
      <h1 className="hero-name">Tanaya<br /><span>Sangodkar</span></h1>
      <p className="hero-role">
        I build full-stack web applications and AI-powered automation workflows — from responsive React UIs to end-to-end automation pipelines using n8n, Make, and Zapier.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-outline">Get in Touch</a>
        <a href="https://github.com/Tanaya97-maker" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub ↗</a>
      </div>
    </header>
  );
};

export default Hero;
