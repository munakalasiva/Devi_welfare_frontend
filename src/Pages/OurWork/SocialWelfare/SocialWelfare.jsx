import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FormModal from "../../../components/FormModal/FormModal.jsx";
import ApplicationForm from "../../../components/FormModal/ApplicationForm.jsx";
import DonationForm from "../../../components/DonationForm/DonationForm.jsx";

import bannerImg from "../../../assets/Socialwelfare-banner.jpg"; // replace with actual image
import gallery1 from "../../../assets/casestudy1.jpeg"; // replace with actual image

const SocialWelfare = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  return (
    <div className="socialwelfare-page">
      {/* Hero Section */}
      <section
        className="socialwelfare-hero position-relative w-100"
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
      <section className="intro-section socialwelfare-intro py-5">
        <Container>
          <Row className="align-items-center">
            {/* Right Image */}
            <Col md={6} className="intro-image-col">
              <img
                src={gallery1}
                alt="Social Welfare"
                className="intro-image"
              />
            </Col>
            {/* Left Content */}
            <Col md={6} className="intro-text-col">
              <h2>Empowering Communities through Social Welfare</h2>

              <p>
                Our social welfare programs extend a helping hand to the most
                vulnerable groups by supporting abandoned elderly parents,
                children deprived of education, women in distress, and families
                struggling for survival. We also run awareness initiatives
                around health, sanitation, legal rights, and social justice to
                ensure people are not only supported but also empowered to stand
                on their own.
              </p>

              <h6>❤️ If you want to donate</h6>
              <p>
                Your contribution helps us provide food, shelter, medical care,
                legal guidance, and empowerment programs for those in need.
              </p>

              <h6>📑 If you are an applicant</h6>
              <p>
                You can apply for social welfare support if you or your family
                face abandonment, poverty, violence, or lack of access to
                resources.
              </p>

              {/* <blockquote className="impact-quote">
                ✨ Together, we can restore dignity and build a stronger, inclusive society.
              </blockquote> */}

              <div className="intro-buttons">
                <Button
                  className="hero-btn primary-btn"
                  onClick={() => setShowDonation(true)}
                >
                  Donate for Social Welfare
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

      {/* Eligibility & Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">
            🎁 Our Social Welfare Initiatives
          </h2>
          <Row>
            {/* Elderly Support */}
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">👴 Support for Elderly Parents</h5>
                  <p>
                    <strong>Eligibility:</strong> Abandoned senior citizens from
                    low-income families
                  </p>
                  <ul>
                    <li>Shelter, food, and emotional care</li>
                    <li>Free medical check-ups and medicines</li>
                    <li>Social activities & counseling to reduce loneliness</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Women’s Welfare */}
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">
                    👩 Women’s Welfare & Legal Support
                  </h5>
                  <p>
                    <strong>Eligibility:</strong> Women facing violence,
                    exploitation, abandonment; widows/single mothers
                  </p>
                  <ul>
                    <li>Free legal guidance & rights awareness</li>
                    <li>Skill training for self-employment</li>
                    <li>Emergency shelter & safety support</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Community Development */}
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">🌍 Community Development</h5>
                  <p>
                    <strong>Eligibility:</strong> Rural or underdeveloped
                    communities
                  </p>
                  <ul>
                    <li>Awareness on sanitation, environment & rights</li>
                    <li>Access to clean water, nutrition & hygiene kits</li>
                    <li>Training for self-help groups & empowerment</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Modals */}
          <FormModal
            show={showForm}
            handleClose={() => setShowForm(false)}
            title="Social Welfare - Application Form"
          >
            <ApplicationForm />
          </FormModal>
          <FormModal
            show={showDonation}
            handleClose={() => setShowDonation(false)}
            title="Donate for Social Welfare"
          >
            <DonationForm defaultService="Social Welfare" />
          </FormModal>
        </Container>
      </section>
    </div>
  );
};

export default SocialWelfare;
