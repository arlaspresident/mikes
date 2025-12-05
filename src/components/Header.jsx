import { NavLink } from "react-router-dom";
import logo from "../assets/images/mikes-garage-logo.png";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/">
          <img src={logo} alt="Mike's Garage" className="header-logo" />
        </NavLink>
        <nav className="header-nav">
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
      </div>
    </header>
  );
}