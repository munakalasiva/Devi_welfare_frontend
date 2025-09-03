import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AboutUsPage.css";
import aboutImg1 from "../../assets/AboutUs-Top.jpeg"; // replace with your image

import aboutImg2 from "../../assets/about-ref.jpeg"; // replace with your image
import bannerImg from "../../assets/AboutUs-Top.png"; // add your banner image
import Team from "../../components/Team/Team";

const AboutUsPage = () => {
  return (
    <>
      {/* 🔹 Banner Section */}
      <div
        className="aboutus-banner  align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay"></div>
      </div>

      {/* 🔹 About Us Content Section */}
      <Container fluid className="aboutus-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Image */}
            <Col md={6}>
              <div className="about-collage">
                <img
                  src={aboutImg2}
                  alt="Community Support"
                  className="collage-img collage-img-1"
                />

                <img
                  src={aboutImg1}
                  alt="Tribal Development"
                  className="collage-img collage-img-3"
                />
              </div>
            </Col>

            {/* Right Side - Content */}
            <Col md={6}>
              <h2 className="about-title mb-3 fw-bold">About Us</h2>

              <p className="about-text1 text-justify">
                <strong>Devi Welfare Association</strong> is a registered in
                non-profit organization based in Visakhapatnam, dedicated to
                driving sustainable social impact and uplifting underprivileged
                communities.
              </p>

              <p className="about-text text-justify">
                At our foundation, we operate with the core values of
                transparency, accountability, and collaboration. We believe that
                meaningful change is possible only when communities,
                individuals, and organizations come together with a shared
                purpose.
              </p>

              <p className="about-text text-justify">
                Our clear vision to bring comfort, care, and change inspires us
                to work relentlessly in supporting vulnerable groups through
                education, healthcare, disaster relief, women’s empowerment, and
                community development programs.
              </p>

              <ul className="about-list">
                <li>
                  Offering legal awareness, advocacy, and assistance to women
                  facing social, domestic, or workplace challenges, empowering
                  them to stand for their rights.Providing financial aid,
                  emotional guidance, and community support to ensure children
                  of single parents have equal opportunities to thrive.
                </li>
                <li>
                  Strengthening rural and tribal regions with access to
                  education, healthcare, livelihood training, and cultural
                  preservation initiatives.Rapid response to natural disasters
                  and crises, ensuring essentials reach the most vulnerable in
                  times of need.
                </li>
              </ul>

              <p className="about-text text-justify mt-3">
                We invite corporates, institutions, and global partners to
                collaborate with us in building inclusive, resilient
                communities. Together, we can create a brighter, more
                compassionate world—where every individual, regardless of
                background, has the opportunity to live with dignity and hope.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Team />
    </>
  );
};

export default AboutUsPage;
