import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FormModal from "../../../components/FormModal/FormModal.jsx";
import ApplicationForm from "../../../components/FormModal/ApplicationForm.jsx";
import DonationForm from "../../../components/DonationForm/DonationForm.jsx";

import bannerImg from "../../../assets/Disability-banner.jpg"; // replace with actual image
import gallery1 from "../../../assets/casestudy1.jpeg"; // replace with actual image

const DisabilityPeople = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  return (
    <div className="disability-page">
      {/* Hero Section */}
      <section
        className="position-relative w-100"
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
          style={{ backgroundColor: "rgba(0, 0, 0, 0.26)" }} // overlay
        ></div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section disability-intro py-5">
        <Container>
          <Row className="align-items-center">
            {/* Right Image */}
            <Col md={6} className="intro-image-col">
              <img
                src={gallery1}
                alt="Disability Support"
                className="intro-image"
              />
            </Col>
            {/* Left Content */}
            <Col md={6} className="intro-text-col">
              <h2>Creating an Inclusive Society</h2>

              <p>
                Based on each person’s abilities and performance, we provide
                training and opportunities that match their skills, while also
                distributing essential equipment like wheelchairs, crutches,
                hearing aids, and other assistive devices to improve their daily
                lives. Our goal is to make every person with disabilities feel
                independent, respected, and included in society.
              </p>

              <h6>❤️ If you want to donate</h6>
              <p>
                Your contributions directly support assistive devices, skill
                training, medical aid, and education for persons with
                disabilities. Together, we can create opportunities that empower
                them for life.
              </p>

              <h6>📑 If you are an applicant</h6>
              <p>
                You can apply for support by submitting your details along with
                valid documents (such as Disability Certificate & Income Proof).
                Our team ensures fairness and transparency in reviewing
                applications.
              </p>

              {/* <blockquote className="impact-quote">
                ✨ Empowerment begins when we replace sympathy with opportunity.
              </blockquote> */}

              <div className="intro-buttons">
                <Button
                  className="hero-btn primary-btn"
                  onClick={() => setShowDonation(true)}
                >
                  Donate for Disability Support
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
      <section className="eligibility-section disability-eligibility py-5">
        <Container>
          <h2 className="fw-bold text-center mb-3">Eligibility Criteria</h2>
          <p className="text-center text-muted mb-5">
            Applicants must meet the following conditions to receive support
            under our Disability Assistance Program.
          </p>
          <Row className="g-4">
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="eligibility-list mb-0">
                  <li>
                    Valid Disability Certificate/Medical Certificate from
                    recognized authority
                  </li>
                  <li>
                    Open to all age groups (children, adults, senior citizens)
                  </li>
                  <li>
                    For minors, applications must be submitted by a
                    parent/guardian
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="eligibility-card">
                <ul className="eligibility-list mb-0">
                  <li>
                    Priority to economically weaker sections (income
                    certificate)
                  </li>
                  <li>Applicant must be a resident of the operational area</li>
                  <li>
                    Support may include assistive devices, education, or skill
                    development
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
                  <h5 className="fw-bold">🏥 Medical & Health Support</h5>
                  <ul>
                    <li>Free/subsidized check-ups & treatments</li>
                    <li>Assistance in obtaining disability certificates</li>
                    <li>Medicines, therapy, and rehabilitation support</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🦽 Assistive Devices & Equipment</h5>
                  <ul>
                    <li>Wheelchairs, crutches, walkers</li>
                    <li>Hearing aids, spectacles, prosthetic limbs</li>
                    <li>Home modifications (ramps, handrails)</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">📚 Educational Support</h5>
                  <ul>
                    <li>Scholarships for students with disabilities</li>
                    <li>Books, laptops & special learning materials</li>
                    <li>Funding for special education programs</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">💼 Employment & Skill Development</h5>
                  <ul>
                    <li>Skill workshops (tailoring, computers, crafts)</li>
                    <li>Job placement with partner organizations</li>
                    <li>Micro-finance for self-employment</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">💰 Financial Assistance</h5>
                  <ul>
                    <li>Direct financial aid to families in need</li>
                    <li>Emergency support for surgeries/medical bills</li>
                    <li>Small monthly stipends for essentials</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🤝 Social & Emotional Support</h5>
                  <ul>
                    <li>Community events for inclusion</li>
                    <li>Counseling services for emotional well-being</li>
                    <li>Awareness campaigns to fight stigma</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Modals */}
          <FormModal
            show={showForm}
            handleClose={() => setShowForm(false)}
            title="Disability Support - Application Form"
          >
            <ApplicationForm />
          </FormModal>
          <FormModal
            show={showDonation}
            handleClose={() => setShowDonation(false)}
            title="Donate for Persons with Disabilities"
          >
            <DonationForm defaultService="Disability Support" />
          </FormModal>
        </Container>
      </section>
    </div>
  );
};

export default DisabilityPeople;
