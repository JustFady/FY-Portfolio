// src/App.jsx
import React from 'react';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <header className="hero">
        <h1>Hello, I'm Fady Youssef</h1>
        <p>Computer Science Student</p>
        <a href="#projects" className="cta">View My Work</a>
      </header>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>HoopMetrics</h3>
            <p>A basketball analytics platform that aggregates real-time data on players and teams. It allows coaches, players, and fans to track performance stats, game trends, and advanced metrics through a user-friendly interface.</p>
            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <a href="https://github.com/JustFady" className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="project-card">
            <h3>Text Analyzer Tools</h3>
            <p>A comprehensive text analysis toolkit utilizing AI and natural language processing. Built with Python, AWS services, and advanced parsing algorithms for sophisticated text analysis.</p>
            <div className="project-tech">
              <span>Python</span>
              <span>AWS</span>
              <span>NLP</span>
            </div>
            <a href="https://github.com/JustFady/TextAnalyzerTools" className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="project-card">
            <h3>Three Classic Ciphers</h3>
            <p>Implementation of three classic encryption algorithms in C++. Demonstrates fundamental cryptography concepts and secure coding practices.</p>
            <div className="project-tech">
              <span>C++</span>
              <span>Cryptography</span>
            </div>
            <a href="https://github.com/JustFady/ThreeClassicCiphers" className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="project-card">
            <h3>Car Rental System</h3>
            <p>A C++ application for managing car rentals, featuring inventory management, booking system, and customer tracking functionality.</p>
            <div className="project-tech">
              <span>C++</span>
              <span>OOP</span>
            </div>
            <a href="https://github.com/JustFady/CarRental" className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="mailto:fyoussef@zagmail.gonzaga.edu" className="contact-item">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://github.com/JustFady" target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/justfadyy/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Fady Youssef. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
