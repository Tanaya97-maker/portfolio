import React from 'react';

const Projects = () => {
  const projects = [
    {
      badge: "● Live / In Progress",
      badgeClass: "live",
      title: "Banquet Hall Management Website",
      desc: "A real-world website built for active business use — managing bookings, event scheduling, and customer inquiries for an actual banquet hall. Currently in development with production deployment planned.",
      stack: ["React", "Tailwind CSS", "Google Sheets API"],
      github: "https://github.com/Tanaya97-maker/temple-hall",
      live: "https://temple-hall.vercel.app/"
    },
    {
      badge: "● Full Stack",
      title: "EduTrack — Attendance Management System",
      desc: "End-to-end attendance platform for academic institutions with role-based access for Admins, Faculty, and Students. Real-time tracking, schedule management, and PostgreSQL database with concurrent access optimization.",
      stack: ["React", "Vite", "Node.js", "PostgreSQL", "REST APIs"],
      github: "https://github.com/Tanaya97-maker/EduTrack",
      live: "https://edu-track-2.vercel.app/"
    },
    {
      badge: "● AI / ML",
      title: "Mango Leaf Disease Detection App",
      desc: "Real-time disease detection web app with 97.6% accuracy using DenseNet201. Trained 4 CNN models, integrated ML into a user-friendly interface, and automated pesticide recommendations. Presented at G-CARED Conference.",
      stack: ["TensorFlow", "Python", "Streamlit", "DenseNet201"],
      github: "https://github.com/Tanaya97-maker/mangoleaf"
    },
    {
      badge: "● AI Automation / In Progress",
      title: "AI Call Support Agent System and email sender",
      desc: "People can make calls to agent. Agent recieves calls and books appointments. Notifications of appointments are sent to the user via email. Agent sends a reminder email to the user before the appointment. Agent marks done once appointment is completed. Agent can also reschedule or cancel appointments.",
      stack: ["Make.com", "Google Sheets API", "AI Automation"],
      github: "#"
    },
    {
      badge: "● Frontend",
      title: "Sales Website Template",
      desc: "Responsive, conversion-focused website template with reusable UI components, modern layout techniques, and cross-device optimization. Built for quick deployment by sales-focused businesses.",
      stack: ["React", "Tailwind CSS"],
      github: "https://github.com/Tanaya97-maker/intern21",
      live: "#https://intern2024.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="reveal">
      <div className="section-label">04 — Projects</div>
      <h2 className="section-title">Things I've built.</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card reveal" key={idx}>
            <div className={`project-badge ${proj.badgeClass || ''}`}>{proj.badge}</div>
            <div className="project-title">{proj.title}</div>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-stack">
              {proj.stack.map(s => <span className="tag" key={s}>{s}</span>)}
            </div>
            <div className="project-links">
              {proj.github && <a href="https://github.com/Tanaya97-maker" target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
              {proj.live && <a href={proj.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
