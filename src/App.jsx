// src/App.jsx
import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Hi, I’m Fady Youssef</h1>
        <p style={styles.heroSubtitle}>Computer Science Student & Developer</p>
        <a href="#projects" style={styles.ctaButton}>View My Work</a>
      </header>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>
          I’m a passionate software developer with experience in building web applications using React, Node.js, and more.
          I enjoy learning new technologies and solving real-world problems through code.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2>Projects</h2>
        <div style={styles.projectsGrid}>
          {/* Project 1 */}
          <div style={styles.projectCard}>
            <h3>Project One</h3>
            <p>A brief description of the project.</p>
            <a href="https://github.com/justfady" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div style={styles.projectCard}>
            <h3>Project Two</h3>
            <p>A brief description of the project.</p>
            <a href="https://github.com/justfady" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or connect with me on LinkedIn.</p>
        <ul>
          <li>
            Email: <a href="mailto:someone@example.com">someone@example.com</a>
          </li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noreferrer">Your Profile</a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Fady Youssef. All rights reserved.</p>
      </footer>
    </div>
  )
}

const styles = {
  hero: {
    background: '#222',
    color: '#fff',
    padding: '4rem 1rem',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  ctaButton: {
    padding: '0.75rem 1.5rem',
    background: '#ff6b6b',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
  section: {
    padding: '2rem 1rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  projectCard: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '1rem',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    background: '#f1f1f1',
    marginTop: '2rem',
  },
}

export default App
