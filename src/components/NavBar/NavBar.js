import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <img
          src="https://futbolfemeninoargentino.com.ar/wp-content/uploads/2024/10/kintsufit-logo-largo.png"
          alt="Kintsufit logo"
          className="logo-img"
        />
      </div>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul
        className={`nav-links ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <li>
          <a href="#hero-top">Home</a>
        </li>
        <li>
          <a href="#book-now">Book Now</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
