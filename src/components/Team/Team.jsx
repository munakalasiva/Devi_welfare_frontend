// src/components/Team/Team.jsx
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { baseUrl } from "../../utils/api";
import "./Team.css";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/team`); // ✅ Your backend route
        if (!res.ok) throw new Error("Failed to fetch team members");
        const data = await res.json();
        setTeamMembers(data);
      } catch (err) {
        console.error("Error fetching team:", err);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section className="team-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Meet Our Team</h2>
        <Row>
          {teamMembers.map((member) => (
            <Col md={4} key={member._id} className="mb-4">
              <Card className="team-card text-center shadow-lg border-0">
                <Card.Img
                  variant="top"
                  src={member.image} // ✅ From DB (Cloudinary)
                  className="team-img"
                  alt={member.name}
                />
                <Card.Body className="body-cont">
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.position}
                  </Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                  <div className="social-icons">
                    {member.facebookLink && (
                      <a
                        href={member.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook />
                      </a>
                    )}
                    {member.instaLink && (
                      <a
                        href={member.instaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
