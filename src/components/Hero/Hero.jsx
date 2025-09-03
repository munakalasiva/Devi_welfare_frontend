// src/components/Hero/Hero.jsx
import React from "react";
import Slider from "react-slick";
import "./Hero.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import banner1 from "../../assets/we-banner01.jpg";
import banner2 from "../../assets/web-banner02.jpg";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots custom-dots",
  };

  const slides = [banner1, banner2];

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map((img, i) => (
          <div key={i} className="hero-slide">
            <img src={img} alt={`banner-${i}`} className="hero-img" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
