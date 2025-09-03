import React, { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import "./VideoSection.css";

import videoThumb from "../../assets/casestudy3.jpeg";
import sampleVideo from "../../assets/DEVI_WELFARE_VIDEO.mp4";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // hide play button
    }
  };

  return (
    <section className="video-section">
      <div className="overlay">
        <Container>
          <Row className="align-items-center">
            {/* Left - Video */}
            <Col lg={6} md={12} className="video-thumbnail">
              <div className="thumb-wrapper">
                <video ref={videoRef} width="100%" controls poster={videoThumb}>
                  <source src={sampleVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {!isPlaying && (
                  <div className="play-btn" onClick={handlePlay}>
                    <FaPlay size={40} />
                  </div>
                )}
              </div>
            </Col>

            {/* Right - Text */}
            <Col lg={6} md={12} className="video-text text-white">
              <h2 className="fw-bold">Devi Comfort Life Community</h2>
              <div className="line"></div>
              <p className="mt-3 text-justify" style={{ textIndent: "3rem" }}>
                We believe that every individual deserves dignity, comfort, and
                hope for a better tomorrow. Our organization is committed to
                serving humanity by uplifting the underprivileged, empowering
                communities, and creating meaningful change in the lives of
                those who need it most. Through our programs, we provide
                essential support, education, health care, and skill development
                opportunities, ensuring that vulnerable individuals and families
                can lead lives of independence, safety, and hope. Every
                initiative is designed to foster long-term impact, strengthen
                communities, and promote equality, inclusion, and social justice
                for all.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default VideoSection;
