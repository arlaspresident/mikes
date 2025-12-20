import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrowRightIcon from "../assets/icons/arrowright.svg";
import heroFallbackDesktop from "../assets/images/bmw.webp";
import heroFallbackMobile from "../assets/images/bmw-mobile.webp"; // or use same image if you don't have mobile version
import "../styles/animated-hero.css";

export default function AnimatedHero() {
  const [displayText, setDisplayText] = useState("");
  const [cycleIndex, setCycleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const words = ["Hi,", "it's", "me", "again"];
  const fullText = "Hi, it's me again";

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterComplete = 2000;
    const pauseAfterDelete = 500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseAfterComplete);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next cycle
          setIsDeleting(false);
          setCycleIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting && displayText.length === 0 ? pauseAfterDelete : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, cycleIndex]);

  // Function to render text with highlighted word
  const renderText = () => {
    const textArray = displayText.split(" ");
    return textArray.map((word, index) => {
      const isHighlighted = words[cycleIndex] === word || 
                            (word.endsWith(",") && words[cycleIndex] === word.slice(0, -1) + ",");
      return (
        <span key={index} className={isHighlighted ? "gold-word" : ""}>
          {word}{index < textArray.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <section className="animated-hero">
      {/* Video Background with Fallback */}
      <div className="video-background">
        {!videoError ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
          >
            <source src="/mikes_background.mp4" type="video/mp4" />
          </video>
        ) : (
          <>
            <img 
              src={heroFallbackDesktop} 
              alt="Mike's Garage Workshop" 
              className="video-placeholder video-fallback-desktop"
            />
            <img 
              src={heroFallbackMobile} 
              alt="Mike's Garage Workshop" 
              className="video-placeholder video-fallback-mobile"
            />
          </>
        )}
      </div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="animated-hero-content">
        <h1 className="typewriter-title">
          {renderText()}
          <span className="cursor">|</span>
        </h1>
        <p className="animated-subtitle">
          Expert mechanics, honest service, and quality workmanship you can trust.
        </p>
        <Link to="/services" className="btn-primary">
          OUR SERVICES
          <img src={arrowRightIcon} alt="" className="btn-icon" />
        </Link>
      </div>
    </section>
  );
}