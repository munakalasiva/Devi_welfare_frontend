// src/components/AboutUs.jsx
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import "./AboutUs.css"; // import the styles
import aboutUsPic from "../../assets/AboutUs-Top3.jpeg"; // import the image
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Right Content */}
        <div className="about-content">
          <span className="about-subtitle">About Devi Welfare </span>
          <h2 className="main-about-title">
            "We Believe That We Can Save More Lives With You"
          </h2>
          <p className="about-text text-justify">
            At Devi Welfare Charity Trust, we believe that real change begins
            with compassion and collective action. As one of the fastest-growing
            platforms for social good, we connect nonprofits, donors, and
            communities across the globe to create meaningful impact.
          </p>
          <p className="about-text text-justify mb-3">
            Our mission is to empower those in need by providing support,
            resources, and opportunities that lead to lasting change. With your
            help, we are building a future where every child, family, and
            community can thrive with dignity.
          </p>

          {/* Features */}
          <div className="about-features">
            <div>
              <FaCheckCircle color="#15803d" /> Underprivileged Children
            </div>
            <div>
              <FaCheckCircle color="#15803d" /> Tribal Zones Growth
            </div>
            <div>
              <FaCheckCircle color="#15803d" /> Disability People Services
            </div>
            <div>
              <FaCheckCircle color="#15803d" /> Health Care
            </div>
            <div>
              <FaCheckCircle color="#15803d" /> Legal Support for Women
            </div>
            <div>
              <FaCheckCircle color="#15803d" /> Emergency Relief
            </div>
          </div>

          {/* Button */}
          <button className="about-btn" onClick={() => navigate("/aboutus")}>
            About More <FaArrowRight style={{ marginLeft: "8px" }} />
          </button>
        </div>
        {/* Left Image */}
        <div className="about-image">
          <img src={aboutUsPic} alt="Happy child" className="about-img" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
