import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/mikes-garage-logo.png";
import "../styles/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="Mike's Garage" className="header-logo" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            HOME
          </NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            SERVICES
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            ABOUT
          </NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            SHOP
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            CONTACT
          </NavLink>
        </nav>

        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}>
          HOME
        </NavLink>
        <NavLink to="/services" onClick={closeMenu} className={({isActive}) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}>
          SERVICES
        </NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}>
          ABOUT
        </NavLink>
        <NavLink to="/shop" onClick={closeMenu} className={({isActive}) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}>
          SHOP
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}>
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
}