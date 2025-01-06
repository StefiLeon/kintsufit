import React from "react";
import "./AboutUs.css";
import { FaMedal, FaStar } from "react-icons/fa";

function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <h2>About Us</h2>
      <div className="about-us-card">
        <div className="about-us-text">
          <h3>
            Our Mission
            <FaMedal className="about-us-symbol" />
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
            cursus ante dapibus diam.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="https://futbolfemeninoargentino.com.ar/wp-content/uploads/2025/01/our-mission.jpg"
            alt="Natalie Juncos - Kintsufit"
          />
        </div>
      </div>
      <div className="about-us-card reverse">
        <div className="about-us-text">
          <h3>
            Our Founder
            <FaStar className="about-us-symbol" />
          </h3>
          <p>
            Consectetur adipiscing elit. Nulla fringilla nunc sit amet
            pellentesque convallis.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="https://futbolfemeninoargentino.com.ar/wp-content/uploads/2024/08/kintsufit-hero.jpg"
            alt="Coach Natalie Juncos"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
