import React from 'react';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">FY</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar; 