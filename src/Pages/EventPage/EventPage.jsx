import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { baseUrl } from "../../utils/api";
import "./EventPage.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/events`);
        const data = await res.json();

        // Transform data if needed
        const formatted = data.map((event) => ({
          title: event.title,
          description: event.description,
          // If your API gives `year`, convert to a Date (dummy day/month)
          date: event.year ? new Date(event.year, 0, 1) : new Date(),
          images: event.images.map((img) => img.url), // only keep URLs
        }));

        setEvents(formatted);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      {/* 🔹 Banner Section */}
      <div className="event-banner text-center">
        <div className="overlay">
          <h1 className="banner-title">Our Events</h1>
        </div>
      </div>

      {/* 🔹 Events Section */}
      <Container className="my-5">
        {events.map((event, index) => (
          <Row className="event-row align-items-center mb-5" key={index}>
            {index % 2 === 0 ? (
              <>
                {/* Left - Details */}
                <Col md={6}>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">
                    📅 {event.date.toLocaleDateString()}
                  </p>
                  <p className="event-desc">{event.description}</p>
                </Col>

                {/* Right - Images */}
                <Col md={6}>
                  <Row className="g-3">
                    {event.images.length > 0 && (
                      <Col xs={12} sm={6}>
                        <Card className="event-img-card shadow-sm big-img">
                          <Card.Img
                            variant="top"
                            src={event.images[0]}
                            alt="event-main"
                          />
                        </Card>
                      </Col>
                    )}
                    <Col xs={12} sm={6}>
                      <Row className="g-3">
                        {event.images.slice(1, 3).map((img, i) => (
                          <Col xs={12} key={i}>
                            <Card className="event-img-card shadow-sm small-img">
                              <Card.Img
                                variant="top"
                                src={img}
                                alt={`event-${i}`}
                              />
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </>
            ) : (
              <>
                {/* Left - Images */}
                <Col md={6}>
                  <Row className="g-3">
                    {event.images.length > 0 && (
                      <Col xs={12} sm={6}>
                        <Card className="event-img-card shadow-sm big-img">
                          <Card.Img
                            variant="top"
                            src={event.images[0]}
                            alt="event-main"
                          />
                        </Card>
                      </Col>
                    )}
                    <Col xs={12} sm={6}>
                      <Row className="g-3">
                        {event.images.slice(1, 3).map((img, i) => (
                          <Col xs={12} key={i}>
                            <Card className="event-img-card shadow-sm small-img">
                              <Card.Img
                                variant="top"
                                src={img}
                                alt={`event-${i}`}
                              />
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Col>

                {/* Right - Details */}
                <Col md={6}>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">
                    📅 {event.date.toLocaleDateString()}
                  </p>
                  <p className="event-desc">{event.description}</p>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </>
  );
};

export default EventPage;
