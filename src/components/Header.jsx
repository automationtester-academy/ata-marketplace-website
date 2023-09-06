import React, { useState } from 'react';
import logoImg from '../images/ATA-logo.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <Link href="/home" className="brand-name">
        <img src={logoImg} alt="Logo" data-cy="logo-img" />
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/home"><a href="/home">Home</a></Link>
          </li>
          <li>
            <Link to="/about"><a href="/about">A Propos</a></Link>
          </li>
          <li>
            <Link to="/contact"><a href="/contact">Contactez Nous!</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
