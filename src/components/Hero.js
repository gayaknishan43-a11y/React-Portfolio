import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Nishan</span>
          </h1>
          <p className="hero-subtitle">Computer Science Student & Developer</p>
          <p className="hero-description">
            Building modern web applications with passion and precision
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">See My Work</a>
            <a href="#contact" className="btn-secondary">Hire Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;