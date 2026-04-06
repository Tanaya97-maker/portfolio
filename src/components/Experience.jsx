import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: "Jan 2026 – Present",
      company: "Self-Directed",
      role: "AI Automation Engineer",
      points: [
        "I've dedicated the last few months to mastering AI automation. I built a custom system that uses AI to 'read' attendance photos and automatically populate Excel spreadsheets, which completely eliminates manual data entry.",
        "To help businesses handle scale, I designed an AI-powered voice assistant using Make.com that qualifies leads on the fly—it even handles retries and knows when to transfer to a human specialist.",
        "I simplified my own communication by building an n8n workflow that uses AI to classify every incoming email and drafts appropriate replies for me, so I never miss an important inquiry.",
        "I also created an AI Inventory Assistant that lets you talk to your database in plain English—no more complex queries, just natural conversation."
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
        "This was my first deep dive into production-grade React. I built over 15 reusable components that are still being used today, focusing on performance and modularity.",
        "I specialized in data visualization, creating interactive dashboards with Chart.js that made complex datasets easy for users to understand through sorting and filtering.",
        "I learned the final steps of the development lifecycle—deploying apps on Vercel and optimizing them to hit near-perfect Lighthouse performance scores."
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
