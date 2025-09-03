import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./UnderPrivilegedChildren.css";
import FormModal from "../../../components/FormModal/FormModal.jsx";
import UnderPrivilegedChildrenForm from "../../../components/FormModal/ApplicationForm.jsx";
import DonationFormUnderPrivileged from "../../../components/DonationForm/DonationForm.jsx";

import bannerImg from "../../../assets/Underprivileged-banner.jpg"; // replace with actual image
import gallery1 from "../../../assets/Comfortlife-Wefare.png";

const UnderPrivilegedChildren = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  return (
    <div className="underprivileged-page">
      {/* Hero Section */}
      <section
        className="hero-section upc-hero"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="overlay"></div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section upc-intro py-5">
        <Container>
          <Row className="align-items-center">
            {/* Right Image */}
            <Col md={6} className="intro-image-col">
              <img
                src={gallery1}
                alt="Children learning"
                className="intro-image"
              />
            </Col>
            {/* Left Content */}
            <Col md={6} className="intro-text-col">
              <h2>Building a Future for the Underprivileged</h2>

              <p>
                Underprivileged children often grow up in slums without access
                to basic sanitation, proper housing, or quality education,
                making it not just the problem of one child but the challenge of
                an entire generation. At Devi Foundation, our mission is to
                uplift entire communities, not just support one or two children,
                so that every child can grow with dignity, education, and
                opportunity.
              </p>

              <h6>❤️ If you want to donate</h6>
              <p>
                we encourage you to think beyond supporting just one child and
                contribute toward community-wide growth, as your generosity
                creates lasting impact across generations and ensures no child
                is left behind.
              </p>

              <h6>📑 If you are an applicant</h6>
              <p>
                you can benefit from our programs by applying through our terms
                & conditions, ensuring fairness, transparency, and equal
                opportunity for everyone.
              </p>

              <div className="intro-buttons">
                <Button
                  className="hero-btn primary-btn"
                  onClick={() => setShowDonation(true)}
                >
                  Donate for Community Growth
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

      <section className="eligibility-section upc-eligibility py-5">
        <Container>
          <h2 className="fw-bold text-center mb-3">Eligibility Criteria</h2>
          <p className="text-center text-muted mb-5">
            Children who can apply for support under our community upliftment
            programs
          </p>
          <Row className="g-4">
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="eligibility-list mb-0">
                  <li>Children belonging to poor or marginalized families</li>
                  <li>Orphans, abandoned children, or street children</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="eligibility-list mb-0">
                  <li>
                    Children engaged in child labor or at risk of exploitation
                  </li>
                  <li>
                    Children from tribal or rural areas without access to
                    schools
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
                  <h5 className="fw-bold">📚 Education Support</h5>
                  <ul>
                    <li>Free schooling, uniforms & study materials</li>
                    <li>Digital learning access</li>
                    <li>Sponsorships for higher education</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🍲 Nutrition & Health</h5>
                  <ul>
                    <li>Mid-day meals & nutrition programs</li>
                    <li>Health check-ups & vaccinations</li>
                    <li>Emergency medical assistance</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🛡️ Child Protection</h5>
                  <ul>
                    <li>Rescue from child labor & unsafe environments</li>
                    <li>Shelter for orphans & abandoned children</li>
                    <li>Legal support in abuse cases</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🎨 Skill Development</h5>
                  <ul>
                    <li>Arts, sports & creative activities</li>
                    <li>Vocational skills for older children</li>
                    <li>Leadership opportunities</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Modal with UnderPrivilegedChildrenForm */}
          {/* <FormModal
            show={showForm}
            handleClose={() => setShowForm(false)}
            title="UnderPrivileged Children - Application Form"
          >
            <UnderPrivilegedChildrenForm />
          </FormModal> */}
          <FormModal
            show={showForm}
            handleClose={() => setShowForm(false)}
            title="UnderPrivileged Children - Application Form"
          >
            {/* <UnderPrivilegedChildrenForm chooseCause="Underprivileged Children" /> */}
            <UnderPrivilegedChildrenForm />
          </FormModal>

          <FormModal
            show={showDonation}
            handleClose={() => setShowDonation(false)}
            title="Donate for Underprivileged Children"
          >
            <DonationFormUnderPrivileged defaultService="Underprivileged Children" />
          </FormModal>
        </Container>
      </section>
    </div>
  );
};

export default UnderPrivilegedChildren;
