import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science student passionate about web development and creating 
              innovative solutions. I specialize in React, JavaScript, and modern web technologies.
            </p>
            <p>
              When I'm not coding, I enjoy participating in hackathons and working on 
              exciting projects with fellow developers.
            </p>

          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="pulse-ring"></div>
              <img src="/photo.jpg" alt="Nishan" className="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;