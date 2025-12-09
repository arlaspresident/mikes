import { Link } from "react-router-dom";
import mikePhoto from "../assets/images/mike.webp";
import "../styles/pages.css";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">ABOUT MIKE'S GARAGE</h1>
          <p className="page-subtitle">
            Your trusted automotive partner for over 15 years
          </p>
        </div>
      </section>

      {/* Meet Mike Section */}
      <section className="meet-mike-section">
        <div className="container">
          <div className="meet-mike-grid">
            <div className="mike-image">
              <img src={mikePhoto} alt="Mike - Founder of Mike's Garage" />
            </div>
            <div className="mike-content">
              <h2 className="section-heading">MEET MIKE</h2>
              <p className="text-block">
                Founded in 2004, Mike's Garage has been serving the local
                community with honest, reliable automotive services. What
                started as a one-man operation has grown into a fully equipped
                modern workshop with a team of certified technicians.
              </p>
              <p className="text-block">
                I was born in England and moved to Cyprus at the age of six. My
                uncle introduced me to the car world — he used to take part in
                street races, and that's where everything started. At 13, I
                began fixing bicycles, then motorbikes, and eventually worked on
                my first car: a Mini, which I managed to break three times
                before I finally understood how an engine truly works.
              </p>
              <p className="text-block">
                At 16, I started learning the trade while attending college to
                earn my automotive degree. Growing up in Cyprus, we didn't have
                access to many resources or parts, so most of what we did was
                self-taught and done by hand. With a huge passion for cars, I
                built my first Nissan Pulsar GTIR — which became the fastest
                0–400m car in my hometown of Larnaca.
              </p>
              <p className="text-block">
                Today, we're proud to be an approved BMW workshop, equipped with
                6 lifts and a team of 4 professional mechanics who share the
                same love for cars as I do. We specialize in European
                performance vehicles, particularly BMW. This isn't just my job —
                it's my passion, my hobby, and my life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-heading-center">OUR VALUES</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3 className="value-title">HONESTY</h3>
              <p className="value-text">
                We never recommend work that isn't necessary. Your trust is our
                most valuable asset.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">QUALITY</h3>
              <p className="value-text">
                Every job is done right the first time, using quality parts and
                proven techniques.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">EXPERTISE</h3>
              <p className="value-text">
                Our team stays current with the latest automotive technology and
                training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="workshop-section">
        <div className="container">
          <h2 className="section-heading-center">OUR WORKSHOP</h2>
          <div className="workshop-grid">
            <div className="workshop-image">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
                alt="Workshop"
              />
            </div>
            <div className="workshop-image">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800"
                alt="Workshop Detail"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <h2 className="cta-heading-large">VISIT US TODAY</h2>
          <p className="cta-text-large">
            Experience the difference that honest service and expert care makes
          </p>
          <Link to="/contact" className="btn-secondary">
            GET DIRECTIONS
          </Link>
        </div>
      </section>
    </div>
  );
}
