// src/App.jsx
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="hero">
        <h1>Hello, I'm Fady Youssef</h1>
        <p>Computer Science Student</p>
        <a href="#projects" className="cta">View My Work</a>
      </header>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>Short description of the project.</p>
            <a href="https://github.com/justfady" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>Short description of the project.</p>
            <a href="https://github.com/justfady" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to reach out:</p>
        <ul>
          <li>Email: <a href="mailto:fyoussef@zagmail.gonzaga.edu">fyoussef@zagmail.gonzaga.edu</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noreferrer">Your Profile</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Fady Youssef. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
