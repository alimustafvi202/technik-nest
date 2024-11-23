import React from "react";
import "./styles.css";
import xup from '../../assets/xup.png';
import SPCAI from '../../assets/spcai.png';
import paf from '../../assets/pafiast.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      logo: SPCAI, // Replace with the actual image path
      name: "SPCAI",
      type: "Startup",
      text: "The graphic designs from Technik Nest beautifully captured our brand's essence. Their creativity and professionalism made the collaboration enjoyable.",
    },
    {
      id: 2,
      logo: xup, // Replace with the actual image path
      name: "XUP Studio",
      type: "Startup",
      text: "Technik Nest created a fantastic mobile app for our studio. Their innovative approach and attention to detail truly enhanced the user experience.",
    },
    {
      id: 3,
      logo: paf, // Replace with the actual image path
      name: "PAF IAST",
      type: "University",
      text: "Technik Nest delivered an outstanding website for our university. Their expertise and professionalism made the entire process seamless, and we are extremely pleased with the result.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h1>Our clients say</h1>
        <p>
          Hear from our satisfied clients about their experiences working with
          Technik Nest. Our commitment to delivering exceptional service and
          innovative solutions has earned us the trust of businesses across
          various industries. Discover how our partnership has helped them
          achieve their goals and drive growth.
        </p>
      </div>
      <div className="testimonials-cards">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>{testimonial.text}</p>
            <div className="testimonial-footer">
              <img src={testimonial.logo} alt={`${testimonial.name} logo`} />
              <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
