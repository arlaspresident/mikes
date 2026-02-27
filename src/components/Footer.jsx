import logo from "../assets/images/mikes-garage-logo.png";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import mapPinIcon from "../assets/icons/mappin.svg";
import "../styles/footer.css";

export default function Footer() {
  const whatsappLink = "https://wa.me/35797669905";
  const emailLink = "info@mikesgaragecy.eu";
  const instagramLink = "https://www.instagram.com/mikes_garage_cy/";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo & Tagline */}
          <div className="footer-section">
            <img src={logo} alt="Mike's Garage" className="footer-logo" />
            <p className="footer-tagline">
              Professional automotive service and repair since 2004.
              Specializing in BMW M cars and performance vehicles.
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">CONTACT</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <img src={phoneIcon} alt="" className="footer-icon" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  +357 97669905
                </a>
              </div>
              <div className="footer-contact-item">
                <img src={mailIcon} alt="" className="footer-icon" />
                <a href={emailLink} className="footer-link">
                  info@mikesgaragecy.eu
                </a>
              </div>
              <div className="footer-contact-item">
                <img src={mapPinIcon} alt="" className="footer-icon" />
                <span>Larnaca Town, Cyprus</span>
              </div>
              <div className="footer-contact-item">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="footer-link">
                  @mikes_garage_cy
                </a>
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
          <p>
            &copy; {new Date().getFullYear()} Mike's Garage. All rights reserved.
            {" "} | {" "}
            <a 
              href="mailto:jankovic.andjela@outlook.com" 
              className="footer-credit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made by Andjela
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
