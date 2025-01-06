import React from "react";
import "./BookNow.css";
import { FaCalendarAlt } from "react-icons/fa";

function BookNow() {
  const services = [
    {
      title: "Individual Session",
      description: "Personalized one-on-one training.",
      price: "$50 per session",
    },
    {
      title: "Semi-private Session",
      description: "Small group training for optimal focus.",
      price: "$50 per session",
    },
    {
      title: "Team Training",
      description: "Specialized training for teams.",
      price: "$50 per session",
    },
    {
      title: "Online Programming",
      description: "Customized plans delivered online.",
      price: "$50 per session",
    },
  ];

  return (
    <section id="book-now" className="book-now">
      <h2 className="book-now-title">
        Book now!
        <FaCalendarAlt className="calendar-icon" />
      </h2>
      <div className="programs-container">
        {services.map((service, index) => (
          <div key={index} className="service-column">
            <p className="price">{service.price}</p>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="more-info-btn">More Info</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookNow;
