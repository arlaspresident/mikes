import { Link } from "react-router-dom";
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

  // Placeholder images - replace these with your actual images later
  const instagramImages = [
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500',
  ];

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
          <p className="instagram-handle">@mikesgarage</p>
          <div className="instagram-grid">
            {instagramImages.map((image, index) => (
              <div
                key={index}
                className="instagram-item"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                />
              </div>
            ))}
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