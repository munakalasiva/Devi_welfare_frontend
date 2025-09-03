import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/devi-logo.jpg"; // replace with your logo

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          {/* Logo & Tagline */}
          <Col md={4} className="footer-col mb-4">
            <img src={logo} alt="Charity Logo" className="footer-logo" />
            <p className="footer-tagline">
              Building hope and transforming lives through education,
              healthcare, and community support.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="footer-col mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/campaigns">Campaigns</a>
              </li>
              <li>
                <a href="/donate">Donate</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="footer-col mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p>Email: info@charity.org</p>
            <p>Phone: +91 98765 43210</p>
            <p>
              Address: Sri Ganesh Sadan, Flat-101, 39-9-17/4/2, Murali Nagar St,
              Tenneti Nagar, Muralinagar, Madhavadhara, Visakhapatnam, Andhra
              Pradesh 530007
            </p>
            <div className="footer-socials">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Strip */}
        <Row>
          <Col className="footer-bottom text-center">
            <p>
              © {new Date().getFullYear()} Charity Organization. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
