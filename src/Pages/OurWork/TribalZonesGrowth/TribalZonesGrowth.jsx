import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./TribalZonesGrowth.css";
import FormModal from "../../../components/FormModal/FormModal.jsx";
import ApplicationForm from "../../../components/FormModal/ApplicationForm.jsx";
import DonationForm from "../../../components/DonationForm/DonationForm.jsx";

import bannerImg from "../../../assets/Tribal-baner.jpg";
import gallery1 from "../../../assets/casestudy1.jpeg";

const TribalAreaGrowth = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);

  return (
    <div className="tribal-page">
      {/* Hero */}
      <div className="hero-overlay"></div>

      <section
        className="tribal-banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="overlay"></div>
      </section>

      {/* Intro */}
      <section className="intro-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="intro-image-col">
              <img
                src={gallery1}
                alt="Children learning"
                className="intro-image"
              />
            </Col>
            <Col md={6} className="tribal-col">
              <h2>Empowering Tribal Communities </h2>

              <p>
                Many tribal families face daily struggles with poverty, limited
                healthcare, and lack of basic facilities. Tribal communities
                frequently live in remote areas without access to quality
                education, proper healthcare, clean water, or skill development
                programs. This is not just the challenge of one family — it is
                the barrier faced by entire generations.
              </p>

              <p>
                At <strong>Devi Foundation</strong>, our mission is not to
                assist just a few individuals, but to uplift entire tribal
                zones. Through sustainable programs in health, education, women
                empowerment, and livelihood training, we aim to ensure that
                every community member has the opportunity to thrive.
              </p>
              {/* 
              <blockquote className="impact-quote">
                ✨ When you support, you don’t just help one person — you
                transform the future of entire communities.
              </blockquote> */}

              <div className="tribal-buttons">
                <Button
                  className="tribal-btn primary-btn"
                  onClick={() => setShowDonationForm(true)}
                >
                  Donate for Community Growth
                </Button>

                <Button
                  className="tribal-btn outline-btn"
                  onClick={() => setShowForm(true)}
                >
                  Apply Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="eligibility-section">
        <Container>
          <h2 className="fw-bold text-center mb-3">
            Eligibility Criteria for Tribal People
          </h2>
          <Row className="g-4 mt-3">
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="mb-0">
                  <li>✅ Belonging to a recognized tribal community</li>
                  <li>✅ Families below poverty line</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="mb-0">
                  <li>✅ Limited or no access to schools/healthcare</li>
                  <li>✅ Residents of remote rural zones</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits */}
      <section className="benefits-section py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            🎁How We Empower Tribal Zones
          </h2>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm text-center">
                <Card.Body>
                  <h5 className="fw-bold">📚 Education</h5>
                  <ul className="text-start">
                    <li>Schools & study materials</li>
                    <li>Scholarships for tribal students</li>
                    <li>Digital learning access</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm text-center">
                <Card.Body>
                  <h5 className="fw-bold">🍲 Healthcare</h5>
                  <ul className="text-start">
                    <li>Health camps & free checkups</li>
                    <li>Nutrition programs</li>
                    <li>Emergency medical aid</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm text-center">
                <Card.Body>
                  <h5 className="fw-bold">💼 Livelihood</h5>
                  <ul className="text-start">
                    <li>Skill training workshops</li>
                    <li>Women empowerment programs</li>
                    <li>Entrepreneurship support</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm text-center">
                <Card.Body>
                  <h5 className="fw-bold">🌍 Community Growth</h5>
                  <ul className="text-start">
                    <li>Safe housing support</li>
                    <li>Clean water initiatives</li>
                    <li>Social awareness campaigns</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Application Form Modal */}
      <FormModal
        show={showForm}
        handleClose={() => setShowForm(false)}
        title="Tribal Zones Growth - Application Form"
      >
        <ApplicationForm /> {/* ✅ Correct form here */}
      </FormModal>

      {/* Donation Form Modal */}
      <FormModal
        show={showDonationForm}
        handleClose={() => setShowDonationForm(false)}
        title="Donate for Tribal Community"
      >
        <DonationForm /> {/* ✅ Donation form here */}
      </FormModal>
    </div>
  );
};

export default TribalAreaGrowth;
