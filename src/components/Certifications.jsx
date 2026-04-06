import React, { useRef, useState } from 'react';

const Certifications = () => {
  const certs = [
    { title: "React – The Complete Guide 2025 (incl. Next.js, Redux)", issuer: "Udemy · 71.5 hours", image: "/react certificate.webp" },
    { title: "Frontend Development Internship Certificate", issuer: "GenXsys", image: "/genxsys.webp" },
    { title: "Web Development Internship Certificate", issuer: "IoDroplet", image: "/iodroplet.webp" },
    { title: "G-CARED Conference Presentation Certificate", issuer: "Mango Leaf Disease Detection", image: "/gcared.webp" },
    { title: "AI Automation Engineering Course", issuer: "In Progress" }
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
  const [image, setImage] = useState(cert.image || null);
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        setImage(readerEvent.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="cert-card reveal">
      <div
        className={`cert-image-placeholder ${image ? 'has-image' : ''}`}
        onClick={() => fileInputRef.current.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleUpload}
          style={{ display: 'none' }}
        />
        {!image && (
          <>
            <svg width="28" height="28" fill="none" stroke="#666" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
            <div className="cert-placeholder-text">Click to upload<br />certificate image</div>
          </>
        )}
        {image && <img src={image} alt={cert.title} />}
      </div>
      <div className="cert-info">
        <div className="cert-title">{cert.title}</div>
        <div className="cert-issuer">{cert.issuer}</div>
      </div>
    </div>
  );
};

export default Certifications;
