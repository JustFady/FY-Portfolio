// src/components/ContactSection.jsx
import React from 'react';

/**
 * ContactSection.jsx
 * Provides ways to contact you and also displays small icon links
 * for GitHub, LinkedIn, and your resume.
 */
function ContactSection() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Me</h2>
      <p>If you’d like to discuss opportunities or just say hi, reach out!</p>
      <ul>
        <li>
          Email: <a href="mailto:fyoussef2@zagmail.gonzaga.edu">fyoussef2@zagmail.gonzaga.edu</a>
        </li>
        <li>
          LinkedIn:{' '}
          <a 
            href="https://www.linkedin.com/in/your-profile/" 
            target="_blank" 
            rel="noreferrer"
          >
            Your Profile
          </a>
        </li>
      </ul>

      {/* Icon links row */}
      <div style={styles.iconRow}>
        {/* GitHub Icon Link */}
        <a 
          href="https://github.com/justfady" 
          target="_blank" 
          rel="noreferrer" 
          style={styles.iconLink}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub icon"
            style={styles.iconImage}
          />
        </a>

        {/* LinkedIn Icon Link */}
        <a
          href="https://www.linkedin.com/in/your-profile/"
          target="_blank"
          rel="noreferrer"
          style={styles.iconLink}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            alt="LinkedIn icon"
            style={styles.iconImage}
          />
        </a>

        {/* Resume Icon Link (PDF) */}
        <a
          href="/resume.pdf" 
          /* If hosted in 'public/resume.pdf', this points to that file */
          target="_blank"
          rel="noreferrer"
          style={styles.iconLink}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="Resume PDF icon"
            style={styles.iconImage}
          />
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  iconRow: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  iconLink: {
    textDecoration: 'none',
  },
  iconImage: {
    width: '32px',
    height: '32px',
  },
};

export default ContactSection;
