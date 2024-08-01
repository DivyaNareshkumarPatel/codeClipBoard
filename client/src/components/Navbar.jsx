import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="link">
          CodeClipBoard
        </Link>
      </div>
      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navLinks ${isOpen ? 'open' : ''}`}>
        <li className="navItem">
          <Link to="/" className="link" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className="navItem">
          <Link to="/browse" className="link" onClick={() => setIsOpen(false)}>Browse Snippets</Link>
        </li>
        <li className="navItem">
          <Link to="/editor" className="link" onClick={() => setIsOpen(false)}>Upload</Link>
        </li>
        <li className="navItem">
          <Link to="/profile" className="link" onClick={() => setIsOpen(false)}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
