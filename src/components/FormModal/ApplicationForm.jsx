// src/components/ApplicationForm.jsx
import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { baseUrl } from "../../utils/api";
const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    guardianName: "",
    email: "",
    phone: "",
    address: "",
    aadhaar: null,
    certificate: null,
    chooseCause: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("guardianName", formData.guardianName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      data.append("aadhaar", formData.aadhaar);
      if (formData.certificate)
        data.append("certificate", formData.certificate);
      data.append("chooseCause", formData.chooseCause || "General");

      const res = await fetch(`${baseUrl}/api/applications`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to submit application");

      const result = await res.json();
      alert("✅ Application submitted successfully!");
      console.log("Response:", result);
    } catch (err) {
      console.error("❌ Application error:", err);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <Form id="applicationForm" className="p-3" onSubmit={handleSubmit}>
      {/* Applicant Details */}
      <h4 className="fw-bold mb-3">Applicant Details</h4>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Col>

        <Col md={6} className="mb-3">
          <Form.Label>Guardian Name</Form.Label>
          <Form.Control
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            required
          />
        </Col>

        <Col md={6} className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Col>

        <Col md={6} className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Col>

        <Col md={12} className="mb-3">
          <Form.Label>Address (Village/Tribal Area)</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Col>
      </Row>

      {/* Eligibility Criteria
      <h4 className="fw-bold mb-3">Eligibility Criteria</h4>
      <p className="text-muted">Please check the boxes that apply to you.</p>
      <div className="mb-3">
        <Form.Check
          type="checkbox"
          label="I belong to a recognized tribal community"
        />
        <Form.Check
          type="checkbox"
          label="I am a resident of a rural/tribal zone"
        />
        <Form.Check
          type="checkbox"
          label="I belong to an economically weaker family"
        />
        <Form.Check
          type="checkbox"
          label="I do not have access to proper education / healthcare / employment opportunities"
        />
      </div> */}

      {/* Required Documents */}
      <h4 className="fw-bold mb-3">Required Documents</h4>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Label>Identity Card (Aadhaar or PAN etc..)</Form.Label>
          <Form.Control
            type="file"
            name="aadhaar"
            onChange={handleChange}
            required
          />
        </Col>

        <Col md={6} className="mb-3">
          <Form.Label>Eligible Certificate (Optional)</Form.Label>
          <Form.Control
            type="file"
            name="certificate"
            onChange={handleChange}
          />
        </Col>
      </Row>

      {/* Reason / Message */}
      <h4 className="fw-bold mb-3">Explain your need / concern</h4>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={4}
          name="chooseCause"
          value={formData.chooseCause}
          onChange={handleChange}
          required
        />
      </Form.Group>
      {/* Terms & Conditions */}
      <h4 className="fw-bold mb-3">Terms & Conditions</h4>
      <ol>
        <li>
          Applicant must belong to a recognized tribal or rural community.
        </li>
        <li>Benefits will be given only after verification of documents.</li>
        <li>
          Charity reserves the right to approve, reject, or modify support.
        </li>
        <li>Misuse of benefits will lead to cancellation.</li>
        <li>
          Ineligible or false applicants will face rejection and possible legal
          action.
        </li>
        <li>Benefits are non-transferable.</li>
      </ol>
      <Form.Check
        type="checkbox"
        label="I have read and agree to the above terms & conditions."
        required
        className="mt-2"
      />

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </Form>
  );
};

export default ApplicationForm;

// // src/components/ApplicationForm.jsx
// import React from "react";
// import { Form, Row, Col } from "react-bootstrap";

// const ApplicationForm = () => {
//   return (
//     <Form id="serviceForm" className="p-3">
//       {/* Applicant Details */}
//       <h4 className="fw-bold mb-3">Applicant Details</h4>
//       <Row>
//         <Col md={6} className="mb-3">
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control type="text" required />
//         </Col>

//         <Col md={6} className="mb-3">
//           <Form.Label>Guardian Name</Form.Label>
//           <Form.Control type="text" required />
//         </Col>

//         <Col md={6} className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" required />
//         </Col>

//         <Col md={6} className="mb-3">
//           <Form.Label>Phone</Form.Label>
//           <Form.Control type="tel" required />
//         </Col>

//         <Col md={6} className="mb-3">
//           <Form.Label>Address (Village/Tribal Area)</Form.Label>
//           <Form.Control as="textarea" rows={2} required />
//         </Col>
//       </Row>

//       {/* Eligibility Criteria */}
//       <h4 className="fw-bold mb-3">Eligibility Criteria</h4>
//       <p className="text-muted">Please check the boxes that apply to you.</p>
//       <div className="mb-3">
//         <Form.Check
//           type="checkbox"
//           label="I belong to a recognized tribal community"
//         />
//         <Form.Check
//           type="checkbox"
//           label="I am a resident of a rural/tribal zone"
//         />
//         <Form.Check
//           type="checkbox"
//           label="I belong to an economically weaker family"
//         />
//         <Form.Check
//           type="checkbox"
//           label="I do not have access to proper education / healthcare / employment opportunities"
//         />
//       </div>

//       {/* Required Documents */}
//       <h4 className="fw-bold mb-3">Required Documents</h4>
//       <Row>
//         <Col md={6} className="mb-3">
//           <Form.Label>Identity Card (Aadhaar or PAN etc..)</Form.Label>
//           <Form.Control type="file" required />
//         </Col>

//         <Col md={6} className="mb-3">
//           <Form.Label>Eligible Certificate (Optional)</Form.Label>
//           <Form.Control type="file" />
//         </Col>
//       </Row>

//       {/* Reason / Message */}
//       <h4 className="fw-bold mb-3">Explain your need / concern</h4>
//       <Form.Group className="mb-3">
//         {/* <Form.Label>Explain your problem / Why are you applying?</Form.Label> */}
//         <Form.Control as="textarea" rows={4} required />
//       </Form.Group>

//       {/* Terms & Conditions */}
//       <h4 className="fw-bold mb-3">Terms & Conditions</h4>
//       <ol>
//         <li>
//           Applicant must belong to a recognized tribal or rural community.
//         </li>
//         <li>Benefits will be given only after verification of documents.</li>
//         <li>
//           Charity reserves the right to approve, reject, or modify support.
//         </li>
//         <li>Misuse of benefits will lead to cancellation.</li>
//         <li>
//           Ineligible or false applicants will face rejection and possible legal
//           action.
//         </li>
//         <li>Benefits are non-transferable.</li>
//       </ol>
//       <Form.Check
//         type="checkbox"
//         label="I have read and agree to the above terms & conditions."
//         required
//         className="mt-2"
//       />
//     </Form>
//   );
// };

// export default ApplicationForm;
