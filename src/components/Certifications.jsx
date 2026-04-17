import React, { useRef, useState } from 'react';

const Certifications = () => {
  const certs = [
    { title: "React – The Complete Guide 2025", issuer: "Udemy Certified", image: "/react certificate.webp" },
    { title: "Frontend Development Internship", issuer: "GenXsys Certified", image: "/genxsys.webp" },
    { title: "Web Development Internship", issuer: "IoDroplet Certified", image: "/iodroplet.webp" },
    { title: "G-CARED Conference Presentation", issuer: "Conference Certified", image: "/gcared.webp" }
  ];

  return (
    <section id="certifications" className="reveal">
      <div className="section-label">05 — Certifications</div>
      <h2 className="section-title">Credentials & learning.</h2>
      <div className="cert-grid">
        {certs.map((cert, idx) => (
          <CertCard key={idx} cert={cert} />
        ))}
      </div>
    </section>
  );
};

const CertCard = ({ cert }) => {
  return (
    <div className="cert-card reveal">
      <div className={`cert-image-placeholder ${cert.image ? 'has-image' : ''}`}>
        {cert.image ? (
          <img src={cert.image} alt={cert.title} />
        ) : (
          <div className="cert-placeholder-text">Image coming soon</div>
        )}
      </div>
      <div className="cert-info">
        <div className="cert-title">{cert.title}</div>
        <div className="cert-issuer">{cert.issuer}</div>
      </div>
    </div>
  );
};

export default Certifications;
