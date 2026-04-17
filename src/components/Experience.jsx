import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: "Jan 2026 – Present",
      company: "Self-Directed",
      role: "AI Automation Engineer",
      points: [
        "I've dedicated the last few months to mastering AI automation. I have integrated AI workflow into my website that uses AI to 'read' attendance photos and automatically populate Excel spreadsheets, which completely eliminates manual data entry.",
        "I am currently designing an AI-powered voice assistant using Make.com that qualifies leads on the fly—it even handles retries and sends messages to leads.",
      ]
    },
    {
      date: "Dec 2025 – Jan 2026",
      company: "GenXsys",
      role: "Frontend Development Intern",
      points: [
        "During this internship, I moved from simple UI to full-stack development. I worked on building features from scratch using React, while ensuring they communicated perfectly with our Node.js and PostgreSQL backends.",
        "I got hands-on with database design using Supabase, learning how to structure complex data so it remains fast and reliable as the user base grows.",
        "I focused heavily on the user experience, using Tailwind CSS to build interfaces that look great on both mobile and desktop, while keeping our code clean and maintainable via Git."
      ]
    },
    {
      date: "2025 (2 months)",
      company: "IoDroplet",
      role: "Web Development Intern",
      points: [
        "This was my first deep dive into production-grade React. I built over 15 reusable components, focusing on performance and modularity.",
        "Designed and developed a responsive sales-focused website template and Implemented reusable UI components and modern layout techniques",
        "Optimized for responsiveness and user experience across devices",
      ]
    }
  ];

  return (
    <section id="experience" className="reveal">
      <div className="section-label">03 — Experience</div>
      <h2 className="section-title">Where I've worked.</h2>
      <div className="exp-list">
        {experiences.map((exp, idx) => (
          <div className="exp-item reveal" key={idx}>
            <div className="exp-date">{exp.date}</div>
            <div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-role">{exp.role}</div>
              <ul className="exp-points">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
