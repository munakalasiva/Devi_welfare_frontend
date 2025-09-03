import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FormModal from "../../../components/FormModal/FormModal.jsx";
import ApplicationForm from "../../../components/FormModal/ApplicationForm.jsx";
import DonationForm from "../../../components/DonationForm/DonationForm.jsx";

import bannerImg from "../../../assets/healthcare02.jpg"; // replace with actual image
import gallery1 from "../../../assets/casestudy1.jpeg"; // replace with actual image

const HealthCare = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  return (
    <div className="healthcare-page">
      {/* Hero Section */}
      <section
        className="healthcare-hero position-relative w-100"
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
      <section className="intro-section healthcare-intro py-5">
        <Container>
          <Row className="align-items-center">
            {/* Right Image */}
            <Col md={6} className="intro-image-col">
              <img
                src={gallery1}
                alt="Healthcare Support"
                className="intro-image"
              />
            </Col>
            {/* Left Content */}
            <Col md={6} className="intro-text-col">
              <h2>Helping Families Access Healthcare</h2>
              <p>
                Many families cannot afford hospital visits or even basic health
                check-ups because of poverty, so our charity works to bridge
                this gap by offering free medical camps, financial assistance
                for treatments and medicines, and emergency care support. We
                also partner with hospitals and doctors to provide low-cost or
                free treatment for the poor, ensuring no one is left behind due
                to financial struggles.
              </p>

              <h6>❤️ If you want to donate</h6>
              <p>
                Your donations help us run health camps, provide medicines, fund
                hospital treatments, and save lives in emergency cases. Every
                contribution makes a real difference in someone’s survival.
              </p>

              <h6>📑 If you are an applicant</h6>
              <p>
                You can apply for healthcare assistance by submitting proof of
                financial need and medical requirements. Our team ensures urgent
                cases are prioritized while maintaining fairness and
                transparency.
              </p>

              {/* <blockquote className="impact-quote">
                ✨ A healthy community is the foundation of a brighter future.
              </blockquote> */}

              <div className="intro-buttons">
                <Button
                  className="hero-btn primary-btn"
                  onClick={() => setShowDonation(true)}
                >
                  Donate for Healthcare
                </Button>
                <Button
                  className="hero-btn outline-btn"
                  onClick={() => setShowForm(true)}
                >
                  Apply Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-section healthcare-eligibility py-5">
        <Container>
          <h2 className="fw-bold text-center mb-3">Eligibility Criteria</h2>
          <p className="text-center text-muted mb-5">
            Applicants must meet the following conditions to receive support
            under our Healthcare Program.
          </p>
          <Row className="g-4">
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="eligibility-list mb-0">
                  <li>
                    Belong to low-income or economically weaker families (income
                    proof)
                  </li>
                  <li>
                    Those affected by injury or disability who require medical
                    attention
                  </li>

                  <li>Residents of the operational region (address proof)</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="eligibility-list mb-0">
                  <li>
                    Priority to orphans, abandoned children,Abandoned senior
                    citizens and disabled persons
                  </li>
                  <li>
                    Families in rural/tribal zones with no healthcare access
                  </li>
                  <li>
                    Verification by charity staff/volunteers; emergencies may be
                    fast-tracked
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
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🩺 Free Health Check-ups</h5>
                  <ul>
                    <li>Regular medical camps in poor communities</li>
                    <li>Screening for diabetes, BP, infections, etc.</li>
                    <li>Vaccinations & preventive care</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🏥 Hospital Treatment Support</h5>
                  <ul>
                    <li>Financial help for doctor visits & surgeries</li>
                    <li>Coverage of essential medicines</li>
                    <li>Low-cost or free treatment via hospital tie-ups</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col> */}

            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🚑 Emergency Assistance</h5>
                  <ul>
                    <li>Ambulance & emergency admission support</li>
                    <li>Quick aid for accidents and surgeries</li>
                    <li>Urgent case fast-tracking</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🦽 Assistive Medical Support</h5>
                  <ul>
                    <li>Wheelchairs, crutches, hearing aids</li>
                    <li>Spectacles, prosthetics, physiotherapy</li>
                    <li>Rehabilitation services for disabled persons</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">👨‍👩‍👧 Special Care Programs</h5>
                  <ul>
                    <li>Children → nutrition, vaccinations, anemia checks</li>
                    <li>
                      Elderly → eye check-ups, arthritis & health monitoring
                    </li>
                    <li>Women → maternity care & menstrual hygiene</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>

          {/* Modals */}
          <FormModal
            show={showForm}
            handleClose={() => setShowForm(false)}
            title="Healthcare Support - Application Form"
          >
            <ApplicationForm />
          </FormModal>
          <FormModal
            show={showDonation}
            handleClose={() => setShowDonation(false)}
            title="Donate for Healthcare"
          >
            <DonationForm defaultService="Healthcare Support" />
          </FormModal>
        </Container>
      </section>
    </div>
  );
};

export default HealthCare;
