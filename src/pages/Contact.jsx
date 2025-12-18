import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import mapPinIcon from "../assets/icons/mappin.svg";
import "../styles/contact.css";

export default function Contact() {
  // WhatsApp link - opens WhatsApp with Mike's number
  const whatsappNumber = "35797669905"; // Remove + and spaces for WhatsApp URL
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Regular phone number for display
  const phoneNumber = "+357 97669905";

  // Email link
  const emailLink = "mailto:info@mikesgaragecy.eu";

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">CONTACT US</h1>
          <p className="page-subtitle">
            Get in touch with us for bookings, quotes, or any questions about
            our services
          </p>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Cards */}
            <div className="contact-cards">
              {/* Phone Card */}
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <img src={phoneIcon} alt="" className="contact-icon" />
                </div>
                <div className="contact-info">
                  <h3 className="contact-label">PHONE</h3>
                  <p className="contact-detail-sub">
                    Call us during business hours
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <img src={mailIcon} alt="" className="contact-icon" />
                </div>
                <div className="contact-info">
                  <h3 className="contact-label">EMAIL</h3>
                  <p className="contact-detail-sub">
                    Send us a message anytime
                  </p>
                  <a href={emailLink} className="contact-detail">
                    info@mikesgaragecy.eu
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <img src={mapPinIcon} alt="" className="contact-icon" />
                </div>
                <div className="contact-info">
                  <h3 className="contact-label">ADDRESS</h3>
                  <p className="contact-detail-sub">Visit our workshop</p>
                  <p className="contact-detail">
                    Larnaca Town
                    <br />
                    Cyprus
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104628.26490355641!2d33.44463214335936!3d34.96579910000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de27f0256489ff%3A0x803dda2139447e15!2sCastrol%20Service%20Mike's%20Garage!5e0!3m2!1sen!2s!4v1764844909803!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mike's Garage Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="appointment-section">
        <div className="container">
          <div className="appointment-box">
            <h2 className="appointment-title">BOOK AN APPOINTMENT</h2>
            <p className="appointment-text">
              Ready to get your vehicle serviced? Give us a call or send an
              email to schedule your appointment. We'll get back to you as soon
              as possible.
            </p>
            <div className="appointment-buttons">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                CALL NOW
              </a>
              <a href={emailLink} className="btn-secondary">
                EMAIL US
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
