import { Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedHero from "../components/AnimatedHero";
import wrenchIcon from "../assets/icons/wrench.svg";
import settingsIcon from "../assets/icons/settings.svg";
import carIcon from "../assets/icons/car.svg";
import arrowRightIcon from "../assets/icons/arrowright.svg";
import "../styles/home.css";

import mclarenImg from "../assets/images/mclaren.webp";
import frontBmwImg from "../assets/images/frontbmw.webp";
import rearBmwImg from "../assets/images/rearbmw.webp";
import motorImg from "../assets/images/bmw1.webp";
import motorImgMobile from "../assets/images/bmw1standing.webp";


export default function Home() {
  const services = [
    {
      icon: wrenchIcon,
      title: 'GENERAL REPAIRS',
      description: 'Expert mechanical repairs for all makes and models',
    },
    {
      icon: settingsIcon,
      title: 'MAINTENANCE',
      description: 'Regular servicing to keep your vehicle running smoothly',
    },
    {
      icon: carIcon,
      title: 'DIAGNOSTICS',
      description: 'Advanced computer diagnostics and fault finding',
    }
  ];

  // Load Instagram embed script
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="home">
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">OUR SERVICES</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.icon} alt="" className="service-icon-svg" />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn-secondary">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram-section">
        <div className="container">
          <h2 className="section-title">FOLLOW US ON INSTAGRAM</h2>
          <a
            href="https://www.instagram.com/mikes_garage_cy/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-handle"
          >
            @mikes_garage_cy
          </a>
          <div className="instagram-custom-grid">
           
            {/* Post 1 - Front BMW */}
            <a 
              href="https://www.instagram.com/reel/DHZGjCEOJst/?igsh=enQ3Yng0bHpjMWox?utm_source=ig_web_copy_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="instagram-card"
            >
              <img src={frontBmwImg} alt="Instagram post" />
              <div className="instagram-overlay">
                <svg className="instagram-icon" width="48" height="48" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="instagram-text">VIEW POST</span>
              </div>
            </a>

            {/* Post 2 - McLaren */}
            <a 
              href="https://www.instagram.com/reel/DRcidizDEDq/?igsh=bDhjbHMxcTBhdGxq?utm_source=ig_web_copy_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="instagram-card"
            >
              <img src={mclarenImg} alt="Instagram post" />
              <div className="instagram-overlay">
                <svg className="instagram-icon" width="48" height="48" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="instagram-text">VIEW POST</span>
              </div>
            </a>

            {/* Post 3 - Rear BMW */}
            <a 
              href="https://www.instagram.com/p/DOSxFKFDAuU/?img_index=2&igsh=MjU4dnJ2OGhxeGhw?utm_source=ig_web_copy_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="instagram-card"
            >
              <img src={rearBmwImg} alt="Instagram post" />
              <div className="instagram-overlay">
                <svg className="instagram-icon" width="48" height="48" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="instagram-text">VIEW POST</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Section - Dramatic Background */}
      <section className="feature-section-dramatic">
        <div className="feature-background">
          {/* Desktop Image */}
          <img 
            src={motorImg}
            alt="Professional workshop equipment"
            className="feature-bg-desktop"
          />
          {/* Mobile Image */}
          <img 
            src={motorImgMobile}
            alt="Professional workshop equipment"
            className="feature-bg-mobile"
          />
          <div className="feature-overlay"></div>
        </div>
        
        <div className="container">
          <div className="feature-content-overlay">
            <h2 className="feature-title-dramatic">STATE-OF-THE-ART FACILITY</h2>
            <p className="feature-text-dramatic">
              Our modern workshop is equipped with the latest diagnostic tools and lifting 
              equipment to handle everything from routine maintenance to complex performance 
              builds. We work on all makes and models with a specialty in European performance vehicles.
            </p>
            <ul className="feature-list-dramatic">
              <li>Professional-grade diagnostic equipment</li>
              <li>Certified technicians with years of experience</li>
              <li>Specialization in BMW and performance vehicles</li>
            </ul>
            <Link to="/about" className="btn-secondary">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">NEED A SERVICE?</h2>
          <p className="cta-text">
            Book your appointment today or contact us for a free quote
          </p>
          <Link to="/contact" className="btn-primary">
            GET IN TOUCH
            <img src={arrowRightIcon} alt="" className="btn-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
}