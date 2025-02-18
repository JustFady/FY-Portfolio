// src/App.jsx
import React from 'react'
import './App.css'


function App() {
  return (
    <div>
    <NavBar />
    <header style={styles.hero}>
      <h1>Hello, I'm Fady Youssef</h1>
      <p>Computer Science Student</p>
      <a href="#projects" style={styles.cta}>View My Work</a>
    </header>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>HoopMetrics</h3>
            <p>HoopMetrics is a basketball analytics platform that aggregates real-time data 
    on players and teams. It allows coaches, players, and fans to track performance 
    stats, game trends, and advanced metrics through a user-friendly interface.</p>
            <a href="https://github.com/JustFady/HoopMetrics" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>Short description of the project.</p>
            <a href="https://github.com/JustFady/Hospital-Admin-Menu" target="_blank" rel="noreferrer">
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
          <li>LinkedIn: <a href="https://www.linkedin.com/in/justfadyy/" target="_blank" rel="noreferrer">Your Profile</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Fady Youssef. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
