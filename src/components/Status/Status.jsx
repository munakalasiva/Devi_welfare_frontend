import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Status.css";
import bgImage from "../../assets/Service-1.jpeg"; // background img

const Status = () => {
  const stats = [
    { id: 1, number: "1259+", label: "Donations" },
    { id: 2, number: "430+", label: "Volunteers" },
    { id: 3, number: "390+", label: "Projects" },
    { id: 4, number: "260+", label: "Campaigns" },
  ];

  return (
    <section
      className="stats-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className="overlay-box">
          <Row className="text-center">
            {stats.map((item) => (
              <Col md={3} key={item.id} style={{ color: "yellow" }}>
                <h2 className="stat-number">{item.number}</h2>
                <p className="stat-label">{item.label}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Status;
