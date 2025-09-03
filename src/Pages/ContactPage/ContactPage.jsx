import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactPage.css";
import contactImg from "../../assets/contact-us-pic.jpg"; // side image
import contactBanner from "../../assets/contact-banner.jpg"; // 🔹 banner image
import { baseUrl } from "../../utils/api";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      const data = await res.json();
      console.log("Contact saved:", data);

      setSuccess("✅ Thank you for contacting us! We’ll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔹 Banner Section */}
      <section className="contact-banner">
        <img src={contactBanner} alt="Contact Banner" className="banner-img" />
        <div className="banner-overlay"></div>
      </section>

      {/* 🔹 Contact Section */}
      <section className="contact-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* left SIDE - Contact Form */}
            <Col md={7}>
              <Card className="border-2 contact-card">
                <Card.Body>
                  <h3 className="text-center mb-4 contact-title">
                    Contact <span className="highlight">Us</span>
                  </h3>

                  {/* ✅ Success / Error Messages */}
                  {success && (
                    <p className="text-success text-center">{success}</p>
                  )}
                  {error && <p className="text-danger text-center">{error}</p>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        required
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button
                        type="submit"
                        className="px-5 py-2 contact-btn"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            {/*right side  */}
            <Col md={5} className="mb-4 mb-md-0">
              <div className="contact-info text-center">
                <img
                  src={contactImg}
                  alt="Contact Us"
                  className="img-fluid rounded mb-4"
                />
                <div className="contact-info-text">
                  <h4 className="mb-3">Get in Touch</h4>

                  <p>
                    <FaMapMarkerAlt className="icon me-2" /> Sri Ganesh Sadan,
                    Flat-101, 39-9-17/4/2, Murali Nagar St, Tenneti Nagar,
                    Muralinagar, Madhavadhara, Visakhapatnam, Andhra Pradesh
                    530007
                  </p>
                  <p>
                    <FaPhoneAlt className="icon me-2" /> +91 98765 43210
                  </p>
                  <p>
                    <FaEnvelope className="icon me-2" /> info@deviwelfare.org
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;

// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import "./ContactPage.css";
// import contactImg from "../../assets/contact-us-pic.jpg"; // side image
// import contactBanner from "../../assets/contact-banner.jpg"; // 🔹 banner image

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Thank you for contacting us! We’ll get back to you soon.");
//   };

//   return (
//     <>
//       {/* 🔹 Banner Section */}
//       <section className="contact-banner">
//         <img src={contactBanner} alt="Contact Banner" className="banner-img" />
//         <div className="banner-overlay"></div>
//       </section>

//       {/* 🔹 Contact Section */}
//       <section className="contact-section py-5">
//         <Container>
//           <Row className="align-items-center">
//             {/* LEFT SIDE - Image + Contact Info */}
//             <Col md={5} className="mb-4 mb-md-0">
//               <div className="contact-info text-center">
//                 <img
//                   src={contactImg}
//                   alt="Contact Us"
//                   className="img-fluid rounded mb-4"
//                 />
//                 <h4 className="mb-3">Get in Touch</h4>
//                 <p>
//                   <FaMapMarkerAlt className="icon me-2" /> Bhubaneswar, Odisha,
//                   India
//                 </p>
//                 <p>
//                   <FaPhoneAlt className="icon me-2" /> +91 98765 43210
//                 </p>
//                 <p>
//                   <FaEnvelope className="icon me-2" /> info@deviwelfare.org
//                 </p>
//               </div>
//             </Col>

//             {/* RIGHT SIDE - Contact Form */}
//             <Col md={7}>
//               <Card className="border-2 contact-card">
//                 <Card.Body>
//                   <h3 className="text-center mb-4 contact-title">
//                     Contact <span className="highlight">Us</span>
//                   </h3>
//                   <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Full Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your full name"
//                         required
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                       <Form.Label>Email Address</Form.Label>
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         required
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                       <Form.Label>Phone Number</Form.Label>
//                       <Form.Control
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Enter your phone number"
//                         required
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                       <Form.Label>Your Message</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         rows={4}
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Write your message here..."
//                         required
//                       />
//                     </Form.Group>

//                     <div className="text-center">
//                       <Button type="submit" className="px-5 py-2 contact-btn">
//                         Send Message
//                       </Button>
//                     </div>
//                   </Form>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default ContactPage;
