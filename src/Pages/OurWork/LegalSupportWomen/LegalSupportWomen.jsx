import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import Modals and Forms
import FormModal from "../../../components/FormModal/FormModal.jsx";
import ApplicationForm from "../../../components/FormModal/ApplicationForm.jsx";
import DonationFormUnderPrivileged from "../../../components/DonationForm/DonationForm.jsx";

// Import Images
import bannerImg from "../../../assets/women-banner.jpg"; // replace with actual image
import gallery1 from "../../../assets/Comfortlife-Wefare.jpeg";

const UnderPrivilegedChildren = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  return (
    <div className="underprivileged-page">
      {/* Hero Section */}
      <section
        className="hero-section upc-hero position-relative w-100"
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
          style={{ backgroundColor: "rgba(0, 0, 0, 0.24)" }} // optional overlay
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
                alt="Children learning"
                className="intro-image"
              />
            </Col>

            {/* Left Content */}
            <Col md={6} className="intro-text-col">
              <h2>Legal support for women</h2>
              <p>
                Women in our society often face challenges like domestic
                violence, harassment, discrimination, and lack of access to
                justice, with many unaware of their rights or unable to afford
                legal help. Our charity supports them through legal guidance,
                awareness programs, and protection services, believing that
                empowering women with knowledge and access to justice is key to
                building a safe, equal, and dignified society.
              </p>

              <h6>❤️ If you want to donate</h6>
              <p>
                We encourage you to think big — donate not just for one child,
                but for <strong>community-wide growth</strong>. Your
                contribution helps us create lasting impact across generations,
                ensuring no child is left behind.
              </p>

              <h6>📑 If you are an applicant</h6>
              <p>
                You can apply to benefit from our programs by reviewing and
                agreeing to our <strong>terms & conditions</strong>. Together,
                we ensure fairness, transparency, and equal opportunity for all.
              </p>
              {/* 
              <blockquote className="impact-quote">
                ✨ When you give, you don’t just change one life — you transform
                the future of many.
              </blockquote> */}

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

      {/* Eligibility Section */}
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
        </Container>
      </section>

      {/* Form Modals */}
      <FormModal
        show={showForm}
        handleClose={() => setShowForm(false)}
        title="Underprivileged Children - Application Form"
      >
        <ApplicationForm />
      </FormModal>

      <FormModal
        show={showDonation}
        handleClose={() => setShowDonation(false)}
        title="Donate for Underprivileged Children"
      >
        <DonationFormUnderPrivileged defaultService="Underprivileged Children" />
      </FormModal>
    </div>
  );
};

export default UnderPrivilegedChildren;
