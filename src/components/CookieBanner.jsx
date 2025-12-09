import { useState, useEffect } from "react";
import "../styles/cookie.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use Google Maps for location services. By using this site, you accept our use of cookies.
      </p>
      <button onClick={accept} className="cookie-btn">Accept</button>
    </div>
  );
}