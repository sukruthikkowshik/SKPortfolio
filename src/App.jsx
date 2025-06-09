
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, User } from 'lucide-react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Event Management Website",
      description: "A responsive and interactive event management website showcasing event details, registration forms, and user-friendly interfaces.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Sukruthikkowshik/event-management",
      live: "https://youreventmanagement.netlify.app",
      image: "https://th.bing.com/th/id/OIP.I7hoM1nQTH6lNca1V6KGdQHaDy?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      title: "Early Alzheimer Prediction",
      description: "A web application for early prediction of Alzheimer's disease using machine learning algorithms.",
      tech: ["HTML5", "CSS3", "XAMPP", "MySQL", "PHP"],
      github: "https://github.com/Sukruthikkowshik/alzaware",
      live: "#",
      image: "https://th.bing.com/th/id/OIP.EwLgWp5BySyo934n3VUz9gHaE1?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 70 },
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">Portfolio</div>

            <div className="desktop-menu">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-nav-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="profile-image">
            <User size={48} />
          </div>
          <h1 className="hero-title">Sukruthi K Kowshik</h1>
          <p className="hero-subtitle">Student</p>
          <p className="hero-description">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            I love bringing ideas to life through code and design.
          </p>
          <div className="social-links">
            <a href="https://github.com/Sukruthikkowshik" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/sukruthikkowshik" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mcesukruthicse@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="scroll-down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <User size={80} />
            </div>
            <div className="about-text">
              <p>
                I am a motivated and detail-oriented student pursuing a Bachelor of Engineering in Computer Science.
                With a strong foundation in programming and web development, I am passionate about building innovative solutions and expanding my technical expertise.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring peers.
              </p>
              <div className="traits">
                {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait) => (
                  <span key={trait} className="trait">{trait}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={16} /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <Mail size={32} />
              <h3>Email</h3>
              <p>mcesukruthicse@gmail.com</p>
            </div>
            <div className="contact-item">
              <Github size={32} />
              <h3>GitHub</h3>
              <p>@Sukruthikkowshik</p>
            </div>
            <div className="contact-item">
              <Linkedin size={32} />
              <h3>LinkedIn</h3>
              <p>Sukruthi Kowshik</p>
            </div>
          </div>
          <a href="mailto:mcesukruthicse@gmail.com" className="contact-btn">
            <Mail size={20} /> Let's Talk
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sukruthi Kowshik. Built with React and CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;