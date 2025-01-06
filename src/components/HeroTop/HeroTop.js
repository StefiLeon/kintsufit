import React from "react";
import "./HeroTop.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function HeroTop() {
  return (
    <section id="hero-top" className="hero-top">
      <div className="parallax-image image1"></div>
      <div className="parallax-image image2"></div>
      <div className="parallax-image image3"></div>
      <div className="hero-content">
        <h1>Be your best self!</h1>
        <p> </p>
        <p>
          <FaMapMarkerAlt /> Houston, Texas
        </p>
      </div>
    </section>
  );
}

export default HeroTop;
