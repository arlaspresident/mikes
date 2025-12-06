import { Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedHero from "../components/AnimatedHero";
import wrenchIcon from "../assets/icons/wrench.svg";
import settingsIcon from "../assets/icons/settings.svg";
import carIcon from "../assets/icons/car.svg";
import arrowRightIcon from "../assets/icons/arrowright.svg";
import "../styles/home.css";

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
          <p className="instagram-handle">@mikes_garage_cy</p>
          <div className="instagram-embeds">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DR4bIlGDFln/?utm_source=ig_embed&utm_campaign=loading" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
            
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DREsXXXjHf6/?utm_source=ig_embed&utm_campaign=loading" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
            
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/DPHTFp1DCJP/?utm_source=ig_embed&utm_campaign=loading" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-image">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
                alt="Professional workshop equipment"
              />
            </div>
            <div className="feature-content">
              <h2 className="feature-subtitle">STATE-OF-THE-ART FACILITY</h2>
              <p className="feature-text">
                Our modern workshop is equipped with the latest diagnostic tools and lifting 
                equipment to handle everything from routine maintenance to complex performance 
                builds. We work on all makes and models with a specialty in European performance vehicles.
              </p>
              <ul className="feature-list">
                <li>Professional-grade diagnostic equipment</li>
                <li>Certified technicians with years of experience</li>
                <li>Specialization in BMW, Audi, and performance vehicles</li>
              </ul>
              <Link to="/about" className="btn-secondary">
                LEARN MORE
              </Link>
            </div>
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