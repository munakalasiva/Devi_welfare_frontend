// src/components/Navbar/Navbar.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaTumblr } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/DLWA-Logo.png";

const NavBar = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar d-flex justify-content-between align-items-center px-4 py-2">
        <div className="top-left d-flex gap-3">
          <span>📞 +91 9876543210</span>
          <span>|</span>
          <span>✉️ deviwelfare@gmail.com</span>
        </div>
        <div className="top-right d-flex align-items-center justify-content-end gap-4">
          <div className="social-icons d-flex gap-3">
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaFacebookF className="social-icon" />
            <FaTumblr className="social-icon" />
          </div>
        </div>
      </div>

      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg main-navbar ">
        <div className="container">
          <img src={Logo} alt="Devi Welfare Logo" className="logo-img" />

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler ms-auto custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNav"
          >
            <ul className="navbar-nav align-items-center gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  AboutUs
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="ourWorkDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Causes
                </span>
                <ul
                  className="dropdown-menu custom-dropdown"
                  aria-labelledby="ourWorkDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/underprivileged-children"
                    >
                      Under Privileged Children
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/tribalzonesgrowth">
                      Tribal Zones Growth
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/disability-people-service"
                    >
                      Disability People Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/health-care">
                      Health Care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/social-welfare">
                      Social Welfare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/legal-support-women"
                    >
                      Women Legal Support
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/emergency-relief">
                      Emergency Relief
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/events">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ContactUs">
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item">
                <button className="donate-btn">Donate</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
