import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FormModal from "../../../components/FormModal/FormModal.jsx";
import ApplicationForm from "../../../components/FormModal/ApplicationForm.jsx";
import DonationForm from "../../../components/DonationForm/DonationForm.jsx";

import bannerImg from "../../../assets/Emergency-banner.jpg"; // ✅ replace with real hero image
import gallery1 from "../../../assets/casestudy1.jpeg"; // ✅ replace with actual image

const EmergencyRelief = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  return (
    <div className="emergency-page">
      {/* Hero Section */}
      <section
        className="upc-hero position-relative w-100"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh", // full viewport height
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }} // optional overlay
        ></div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section upc-intro py-5">
        <Container>
          <Row className="align-items-center">
            {/* Right Image */}
            <Col md={6} className="intro-image-col">
              <img
                src={gallery1}
                alt="Emergency relief efforts"
                className="intro-image"
              />
            </Col>

            {/* Left Content */}
            <Col md={6} className="intro-text-col">
              <h2>Rapid Response in Times of Crisis</h2>
              <p>
                During natural disasters, accidents, or sudden crises, the
                poorest and most vulnerable often lose their homes, food, and
                safety overnight. Our charity responds quickly with emergency
                relief, providing food, shelter, medical aid, and essential
                supplies, because we believe no family should be left alone in
                their darkest hour. Together, we can restore hope and support
                recovery.
              </p>

              <h6>❤️ Want to donate?</h6>
              <p>
                Your donation provides{" "}
                <strong>food, shelter, and emergency medical care</strong> to
                those in urgent need. Every contribution helps save lives in
                times of crisis.
              </p>

              <h6>📑 Need help?</h6>
              <p>
                Families or individuals affected by disasters can apply for
                emergency relief by filling out our
                <strong> application form</strong>. We ensure fair and
                transparent support distribution.
              </p>

              {/* <blockquote className="impact-quote">
                ✨ In an emergency, your helping hand becomes someone’s lifeline.
              </blockquote> */}

              <div className="intro-buttons">
                <Button
                  className="hero-btn primary-btn"
                  onClick={() => setShowDonation(true)}
                >
                  Donate for Emergency Relief
                </Button>
                <Button
                  className="hero-btn outline-btn"
                  onClick={() => setShowForm(true)}
                >
                  Apply for Relief
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-section upc-eligibility py-5">
        <Container>
          <h2 className="fw-bold text-center mb-3">Eligibility Criteria</h2>
          <p className="text-center text-muted mb-5">
            Those who can receive emergency relief include:
          </p>
          <Row className="g-4">
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="eligibility-list mb-0">
                  <li>
                    Families and individuals affected by natural disasters
                    (floods, cyclones, droughts, earthquakes).
                  </li>
                  <li>
                    Victims of fire accidents, road accidents, or sudden crises.
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="eligibility-list mb-0">
                  <li>
                    Poor families facing emergency medical needs but unable to
                    afford care.
                  </li>
                  <li>
                    Vulnerable groups like children, elderly, and disabled
                    persons in disaster-hit areas.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">🎁 Benefits We Provide</h2>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🍲 Fast Survival Needs</h5>
                  <ul>
                    <li>
                      Distribution of food, water, clothing, and blankets.
                    </li>
                    <li>Temporary shelter for displaced families.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🩺 Medical Assistance</h5>
                  <ul>
                    <li>First-aid and emergency treatment.</li>
                    <li>Support for hospitalization in critical cases.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🛡️ Safety & Protection</h5>
                  <ul>
                    <li>Rescue support with local authorities.</li>
                    <li>Safe spaces for women, children, and elderly.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🏠 Rehabilitation Needs</h5>
                  <ul>
                    <li>
                      Helping families rebuild homes with basic materials.
                    </li>
                    <li>Providing financial aid to restart livelihoods.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Modals */}
          <FormModal
            show={showForm}
            handleClose={() => setShowForm(false)}
            title="Emergency Relief - Application Form"
          >
            <ApplicationForm />
          </FormModal>

          <FormModal
            show={showDonation}
            handleClose={() => setShowDonation(false)}
            title="Donate for Emergency Relief"
          >
            <DonationForm defaultService="Emergency Relief" />
          </FormModal>
        </Container>
      </section>
    </div>
  );
};

export default EmergencyRelief;
