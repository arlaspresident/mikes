import mikeImage from "../assets/images/itsme-image.png";
import "../styles/shop.css";

export default function Shop() {
  return (
    <div className="shop-page">
      <div className="shop-container">
        <div className="shop-content">
          {/* Mike's Image */}
          <div className="mike-figure-wrapper">
            <img src={mikeImage} alt="Mike" className="mike-figure" />
          </div>

          {/* Text Content */}
          <div className="shop-text">
            <h1 className="shop-title">
              Hi, it's me again…
              <br />
              <span className="shop-title-accent">
                but this time I'm bringing merch.
              </span>
            </h1>

            <div className="shop-info">
              <h2 className="shop-subtitle">
                The Mike's Garage Webshop opens soon.
              </h2>
              <p className="shop-description">
                Fresh designs. Performance vibes. Zero nonsense.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
