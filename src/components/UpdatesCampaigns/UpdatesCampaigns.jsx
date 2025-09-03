import React, { useEffect, useState } from "react";

import { baseUrl } from "../../utils/api";
const UpdatesCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCampaignIndex, setCurrentCampaignIndex] = useState(0);

  // Fetch campaigns & events from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [campaignRes, eventRes] = await Promise.all([
          fetch(`${baseUrl}/api/campaigns`),
          fetch(`${baseUrl}/api/events`),
        ]);

        const [campaignData, eventData] = await Promise.all([
          campaignRes.json(),
          eventRes.json(),
        ]);

        setCampaigns(campaignData);
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // fallback in case API fails (optional)
        setCampaigns([]);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto-slide campaigns
  useEffect(() => {
    if (campaigns.length > 0) {
      const interval = setInterval(() => {
        setCurrentCampaignIndex((prevIndex) =>
          prevIndex === campaigns.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [campaigns.length]);

  const nextCampaign = () => {
    setCurrentCampaignIndex((prevIndex) =>
      prevIndex === campaigns.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCampaign = () => {
    setCurrentCampaignIndex((prevIndex) =>
      prevIndex === 0 ? campaigns.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="awards-achievements-section">
      <style jsx>{`
        @keyframes marqueeVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .awards-achievements-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
          padding: 4rem 2rem;
          font-family: "Inter", system-ui, sans-serif;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .main-title {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .main-title::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #f59e0b, #ef4444);
          border-radius: 2px;
        }

        .main-subtitle {
          font-size: 1.3rem;
          color: #64748b;
          font-weight: 500;
        }

        .content-row {
          display: flex;
          gap: 3rem;
          max-width: 1400px;
          margin: 0 auto;
          align-items: stretch;
        }

        .campaigns-section {
          flex: 1.2;
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 25px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(226, 232, 240, 0.8);
          position: relative;
        }

        .campaign-slider {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .campaign-image-container {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .campaign-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .campaign-overlay {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          gap: 10px;
        }

        .campaign-status {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .campaign-category {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 24px;
          font-weight: bold;
          color: #1e293b;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .nav-arrow:hover {
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow-left {
          left: 20px;
        }

        .nav-arrow-right {
          right: 20px;
        }

        .slide-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(97, 96, 96, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #10b981;
          transform: scale(1.3);
        }

        .campaign-content {
          padding: 2rem;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .campaign-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .campaign-description {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .learn-more-btn {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .learn-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }

        .events-section {
          flex: 1;
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 25px;
          padding: 2rem;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(226, 232, 240, 0.8);
          position: relative;
        }

        .events-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .events-marquee-container {
          height: 400px;
          overflow: hidden;
          position: relative;
        }

        .events-marquee {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: marqueeVertical 30s linear infinite;
        }

        .events-marquee:hover {
          animation-play-state: paused;
        }

        .event-card {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;

          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.15) 0%,
            rgba(245, 158, 11, 0.15) 100%
          );
          border-radius: 16px;
          border: 1px solid rgba(251, 191, 36, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
          min-height: 120px;
          flex-shrink: 0;
          text-decoration: none;
          color: inherit;
        }

        .event-card:hover {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.1) 0%,
            rgba(245, 158, 11, 0.1) 100%
          );
          transform: translateX(5px);
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.2);
        }

        .event-icon {
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          border-radius: 12px;
          flex-shrink: 0;
        }

        .event-content {
          flex: 1;
        }

        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          gap: 1rem;
        }

        .event-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.3;
          margin: 0;
          flex: 1;
        }

        .event-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex-shrink: 0;
        }

        .event-year {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          color: white;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
          text-align: center;
        }

        .event-category {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
          color: white;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
          text-align: center;
        }

        .event-description {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 400px;
          color: #64748b;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #e2e8f0;
          border-top: 4px solid #10b981;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @media (max-width: 1024px) {
          .content-row {
            flex-direction: column;
            gap: 2rem;
          }

          .main-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .awards-achievements-section {
            padding: 2rem 1rem;
          }

          .main-title {
            font-size: 2rem;
          }

          .campaigns-section,
          .events-section {
            padding: 1.5rem;
          }

          .campaign-content {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="section-header">
        <h1 className="main-title text-center">Updates & Campaigns</h1>
        <p className="main-subtitle">Making a Difference Through Action</p>
      </div>

      <div className="content-row">
        {/* Left - Active Campaigns */}
        <div className="campaigns-section">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading campaigns...</p>
            </div>
          ) : campaigns.length === 0 ? (
            <div className="loading">
              <p>No active campaigns at the moment.</p>
            </div>
          ) : (
            <div className="campaign-slider">
              <div className="campaign-image-container">
                <img
                  src={campaigns[currentCampaignIndex]?.image}
                  alt={campaigns[currentCampaignIndex]?.title}
                  className="campaign-image"
                />
              </div>

              {/* Navigation arrows */}
              <button
                className="nav-arrow nav-arrow-left"
                onClick={prevCampaign}
              >
                ‹
              </button>
              <button
                className="nav-arrow nav-arrow-right"
                onClick={nextCampaign}
              >
                ›
              </button>

              {/* Slide indicators */}
              <div className="slide-indicators">
                {campaigns.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentCampaignIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentCampaignIndex(index)}
                  />
                ))}
              </div>

              <div className="campaign-content">
                <h2 className="campaign-title">
                  {campaigns[currentCampaignIndex]?.title}
                </h2>
                <p className="campaign-description">
                  {campaigns[currentCampaignIndex]?.description}
                </p>
                {/* <button className="learn-more-btn">Learn More</button> */}
              </div>
            </div>
          )}
        </div>

        {/* Right - Recent Events */}
        <div className="events-section">
          <h2 className="events-title">Recent Events</h2>

          <div className="events-marquee-container">
            <div className="events-marquee">
              {events.concat(events).map((event, index) => (
                <a
                  href="#events"
                  key={`${event._id}-${index}`}
                  className="event-card"
                >
                  <div className="event-content">
                    <div className="event-header">
                      <h3 className="event-title">{event.title}</h3>
                      <div className="event-meta">
                        <span className="event-year">{event.year}</span>
                      </div>
                    </div>
                    <p className="event-description">{event.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesCampaigns;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./UpdatesCampaigns.css";
// import Slider from "react-slick";

// const UpdatesCampaigns = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch campaigns from API
//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/events");
//         const data = await response.json();
//         setEvents(data); // API returns array
//       } catch (error) {
//         console.error("Error fetching campaigns:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   // Fetch campaigns from API
//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/campaigns");
//         const data = await response.json();
//         setCampaigns(data); // API returns array
//       } catch (error) {
//         console.error("Error fetching campaigns:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   return (
//     <section className="updates-campaigns">
//       <Container>
//         <Row>
//           {/* Right - Active Campaigns */}
//           <Col lg={6} md={12} className="right-section">
//             <h2 className="section-title">Active Campaigns</h2>

//             {loading ? (
//               <div className="text-center py-5">
//                 <Spinner animation="border" variant="primary" />
//               </div>
//             ) : campaigns.length === 0 ? (
//               <p>No campaigns available right now.</p>
//             ) : (
//               <Slider
//                 dots={true}
//                 infinite={true}
//                 speed={800}
//                 slidesToShow={1}
//                 slidesToScroll={1}
//                 autoplay={true}
//                 autoplaySpeed={3000}
//                 arrows={false}
//               >
//                 {campaigns.map((camp) => (
//                   <Card className="campaign-card" key={camp._id}>
//                     <Card.Img variant="top" src={camp.image} alt={camp.title} />
//                     <Card.Body>
//                       <Card.Title>{camp.title}</Card.Title>
//                       <Card.Text>{camp.description}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 ))}
//               </Slider>
//             )}
//           </Col>

//           {/* Left - Latest Updates */}
//           <Col lg={6} md={12} className="left-section mb-4 mb-lg-0">
//             <h2 className="section-title">Recent Events</h2>
//             <ul className="updates-list">
//               {events.map((item, index) => (
//                 <Link to="/events" className="link">
//                   <li key={index} className="mb-3">
//                     <h6>{item.title}</h6>
//                     <p className="text-muted">{item.description}</p>
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default UpdatesCampaigns;
