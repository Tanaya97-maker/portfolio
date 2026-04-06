import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      tags: ["React.js", "Next.js", "Vite", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "HTML5 / CSS3", "Chart.js"]
    },
    {
      title: "Backend & APIs",
      tags: ["Node.js", "Supabase", "PostgreSQL", "DBeaver"]
    },
    {
      title: "AI & Automation",
      tags: ["n8n", "Make.com", "Zapier", "Airtable", "Gemini API", "Anthropic Claude", "Webhooks", "OAuth"]
    },
    {
      title: "Tools & Platforms",
      tags: ["Git / GitHub", "Vercel", "Figma", "Python", "TensorFlow", "Streamlit", "Canva"]
    }
  ];

  return (
    <section id="skills" className="reveal">
      <div className="section-label">02 — Skills</div>
      <h2 className="section-title">What I work with.</h2>
      <div className="skills-wrap">
        {skillGroups.map((group, idx) => (
          <div className="skill-group reveal" key={idx}>
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-tags">
              {group.tags.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
