import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 40, icon: '⚛️' },
    { name: 'JavaScript', level: 55, icon: '📜' },
    { name: 'Html', level: 90, icon: '🌐' },
    { name: 'CSS', level: 80, icon: '🎨' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'MongoDB', level: 50, icon: '🗄️' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;