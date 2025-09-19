import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'Modern responsive portfolio website built with React',
      tech: ['React', 'tailwindcss', 'JavaScript'],
      image: '💼',
      sourceCode: 'https://github.com/gayaknishan43-a11y/React-Portfolio'
    },
    {
      title: 'The Worlds of Waigers',
      description: 'Interactive gaming platform with immersive experiences',
      tech: ['Nextjs', 'Flask', 'tailwindcss'],
      image: '🎮',
      sourceCode: 'https://github.com/drohankoirala/theworldofgame_client'
    },
    {
      title: 'Calculator App',
      description: 'Simple and elegant calculator with basic arithmetic operations',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '🧮',
      sourceCode: 'https://github.com/Tejraj-co/Calculator---By-Html-Css-JavaScript'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Project</a>
                  <a href={project.sourceCode} className="project-link">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;