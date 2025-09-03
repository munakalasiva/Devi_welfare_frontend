import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card, Button } from "react-bootstrap";
import "./Services.css";
import { Link } from "react-router-dom";

import FormModal from "../../components/FormModal/FormModal.jsx";
import DonationForm from "../../components/DonationForm/DonationForm.jsx";
import ApplicationForm from "../FormModal/ApplicationForm.jsx";

import service1 from "../../assets/Unprivileged_childrens_pic1.png";
import service2 from "../../assets/childrens-2.png";
import service3 from "../../assets/disable.jpeg";
import service4 from "../../assets/casestudy2.jpeg";
import service5 from "../../assets/Women1.jpeg";
import service6 from "../../assets/floods-pic.jpg";
import service7 from "../../assets/social-welfare01.jpeg";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (type, serviceTitle) => {
    setModalType(type);
    setSelectedService(serviceTitle);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType("");
    setSelectedService("");
  };

  const services = [
    {
      id: 1,
      category: "Education",
      title: "Underprivileged Children",
      desc: "Providing education, nutrition, and mentorship to underprivileged children for a brighter future.",
      img: service1,
      Link: "/underprivileged-children",
    },
    {
      id: 2,
      category: "Community",
      title: "Tribal Zones Growth",
      desc: "Empowering tribal communities with resources, skill development, and sustainable growth opportunities.",
      img: service2,
      Link: "/tribalzonesgrowth",
    },
    {
      id: 3,
      category: "Inclusion",
      title: "Disability People Service",
      desc: "Dedicated programs and support services to ensure inclusion and opportunities for differently-abled people.",
      img: service3,
      Link: "/disability-people-service",
    },
    {
      id: 4,
      category: "Healthcare",
      title: "Healthcare",
      desc: "Medical camps, affordable treatment, and health awareness initiatives for underserved communities.",
      img: service4,
      Link: "/health-care",
    },
    {
      id: 5,
      category: "Legal Support",
      title: "Women Legal Support",
      desc: "Providing legal aid, awareness, and protection programs to support women in vulnerable situations.",
      img: service5,
      Link: "/legal-support-women",
    },
    {
      id: 6,
      category: "Relief",
      title: "Emergency Relief",
      desc: "Rapid response and essential aid for communities affected by natural disasters and crises.",
      img: service6,
      Link: "/emergency-relief",
    },
    {
      id: 7,
      category: "Social Welfare",
      title: "Social Welfare",
      desc: "Initiatives aimed at improving the overall well-being and quality of life for marginalized communities.",
      img: service7,
      Link: "/social-welfare",
    },
  ];

  return (
    <section className="services py-5">
      <div className="container">
        <h2 className="section-titles text-center">Our Causes</h2>
        <div className="slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            speed={1200} // Slide transition speed in ms
            autoplay={{
              delay: 2000, // 2seconds
              disableOnInteraction: false, // Keep autoplay running after interactions
            }}
            navigation={true} // Enable prev/next arrows
            pagination={{ clickable: true }}
            loop={true} // Infinite loop
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="slider-item">
                  <Link className="p-3 text-decoration-none" to={service.Link}>
                    <Card className="service-card h-100 w-100 border-0 text-center">
                      <Card.Img
                        variant="top"
                        src={service.img}
                        alt={service.title}
                        className="service-img rounded-top"
                      />
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                          <Card.Title className="fw-bold mt-2">
                            {service.title}
                          </Card.Title>
                          <Card.Text className="text-muted text-reduce">
                            {service.desc}
                          </Card.Text>
                        </div>
                        <div className="button-cont">
                          <Button
                            variant="success"
                            className="rounded-pill px-4 shadow-sm btn-hover me-2"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOpenModal("apply", service.title);
                            }}
                          >
                            Apply
                          </Button>
                          <Button
                            variant="warning"
                            className="rounded-pill px-4 shadow-sm btn-hover"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOpenModal("donate", service.title);
                            }}
                          >
                            Donate
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <FormModal
          show={showModal}
          handleClose={handleCloseModal}
          title={
            modalType === "apply"
              ? `Application Form – ${selectedService}`
              : modalType === "donate"
              ? `Donation Form – ${selectedService}`
              : ""
          }
        >
          {modalType === "apply" ? (
            <ApplicationForm service={selectedService} />
          ) : modalType === "donate" ? (
            <DonationForm service={selectedService} />
          ) : null}
        </FormModal>
      </div>
    </section>
  );
};

export default Services;
