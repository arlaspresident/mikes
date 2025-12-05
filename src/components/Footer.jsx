import logo from "../assets/images/mikes-garage-logo.png";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import mapPinIcon from "../assets/icons/mappin.svg";
import "../styles/footer.css";

export default function Footer() {
  const whatsappLink = "https://wa.me/35797669905";
  const emailLink = "mailto:mikesgaragecy@gmail.com";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo & Tagline */}
          <div className="footer-section">
            <img src={logo} alt="Mike's Garage" className="footer-logo" />
            <p className="footer-tagline">
              Professional automotive service and repair since 2004. Specializing in BMW M cars and performance vehicles.
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">CONTACT</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <img src={phoneIcon} alt="" className="footer-icon" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-link">
                  +357 97669905
                </a>
              </div>
              <div className="footer-contact-item">
                <img src={mailIcon} alt="" className="footer-icon" />
                <a href={emailLink} className="footer-link">
                  mikesgaragecy@gmail.com
                </a>
              </div>
              <div className="footer-contact-item">
                <img src={mapPinIcon} alt="" className="footer-icon" />
                <span>Larnaca Town, Cyprus</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="footer-section">
            <h3 className="footer-heading">OPENING HOURS</h3>
            <div className="footer-hours">
              <div className="hours-row">
                <span>Monday - Friday</span>
                <span>8:00 - 13:00, 14:00 - 17:30</span>
              </div>
              <div className="hours-row">
                <span>Saturday - Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mike's Garage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}