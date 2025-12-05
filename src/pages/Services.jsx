import { Link } from "react-router-dom";
import "../styles/pages.css";

// Import SVG icons
import wrenchIcon from "../assets/icons/wrench.svg";
import settingsIcon from "../assets/icons/settings.svg";
import carIcon from "../assets/icons/car.svg";
import gaugeIcon from "../assets/icons/gauge.svg";
import dropletIcon from "../assets/icons/droplet.svg";
import laptopIcon from "../assets/icons/laptop.svg";
import cpuIcon from "../assets/icons/cpu.svg";
import zapIcon from "../assets/icons/zap.svg";

export default function Services() {
  const services = [
    {
      icon: wrenchIcon,
      title: "GENERAL REPAIRS",
      description: "Comprehensive mechanical repairs for all vehicle makes and models. From minor fixes to major overhauls, our experienced technicians handle it all with precision and care."
    },
    {
      icon: settingsIcon,
      title: "REGULAR MAINTENANCE",
      description: "Keep your vehicle in peak condition with our scheduled maintenance services. Oil changes, filter replacements, fluid checks, and more to prevent costly breakdowns."
    },
    {
      icon: carIcon,
      title: "DIAGNOSTICS",
      description: "State-of-the-art computer diagnostics to identify and resolve any issues. We use the latest scanning tools to quickly pinpoint problems and provide accurate solutions."
    },
    {
      icon: gaugeIcon,
      title: "BRAKE SERVICE",
      description: "Complete brake system inspection, repair, and replacement. From brake pads and discs to hydraulic systems, we ensure your brakes perform flawlessly."
    },
    {
      icon: dropletIcon,
      title: "OIL & FLUID SERVICE",
      description: "Professional oil changes and fluid top-ups using quality products. We check and replace engine oil, coolant, transmission fluid, brake fluid, and power steering fluid."
    },
    {
      icon: laptopIcon,
      title: "SOFTWARE UPDATE",
      description: "Latest software updates for your vehicle's electronic systems. Keep your car's computer systems running optimally with the most current firmware and calibrations."
    },
    {
      icon: cpuIcon,
      title: "ECU TUNING",
      description: "Expert ECU tuning to unlock your engine's full potential. Improve performance, fuel efficiency, and throttle response with custom calibrations tailored to your vehicle."
    },
    {
      icon: zapIcon,
      title: "TCU TUNING",
      description: "Transmission control unit tuning for optimized gear shifts. Enhance shifting speed, smoothness, and overall transmission performance for street or track use."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">OUR SERVICES</h1>
          <p className="page-subtitle">
            Professional automotive services delivered by certified technicians with years of 
            experience. Quality workmanship guaranteed on every job.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="container">
          <div className="services-grid-full">
            {services.map((service, index) => (
              <div key={index} className="service-card-large">
                <img src={service.icon} alt="" className="service-icon-svg" />
                <h3 className="service-title-large">{service.title}</h3>
                <p className="service-description-large">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">CAN'T FIND WHAT YOU'RE LOOKING FOR?</h2>
            <p className="cta-subtext">
              Contact us to discuss your specific needs. We offer a wide range of additional services.
            </p>
            <Link to="/contact" className="btn-secondary">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}