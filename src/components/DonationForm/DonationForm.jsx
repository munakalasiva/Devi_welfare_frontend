// src/components/DonationForm/DonationForm.jsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./DonationForm.css"; // 👉 we’ll add custom styling here

const DonationForm = ({ service }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    amount: "",
    service: service || "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuggestedAmount = (value) => {
    setFormData({ ...formData, amount: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // ✅ send to backend API here
  };

  return (
    <Form
      id="donationForm"
      onSubmit={handleSubmit}
      className="donation-form p-3"
    >
      {/* Full Name */}
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Email */}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Phone */}
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Address */}
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Enter your address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Amount with suggestions */}
      <Form.Group className="mb-3">
        <Form.Label>Donation Amount</Form.Label>
        {/* <div className="mb-2">
          {[50000, 100000,200000].map((value) => (
            <Button
              key={value}
              variant="outline-primary"
              size="sm"
              className="me-2 mt-2"
              onClick={() => handleSuggestedAmount(value)}
            >
              ₹{value}
            </Button>
          ))}
        </div> */}
        <Form.Control
          type="number"
          name="amount"
          placeholder="Min 10000 INR"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Service Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>Service / Cause</Form.Label>
        <Form.Select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a Cause --</option>
          <option value="Underprivileged Children">
            Underprivileged Children
          </option>
          <option value="Tribal Welfare">Tribal Welfare</option>
          <option value="Community Development">Community Development</option>
          <option value="Education Support">Education Support</option>
          <option value="Healthcare Support">Healthcare Support</option>
        </Form.Select>
      </Form.Group>

      {/* Message */}
      <Form.Group className="mb-3">
        <Form.Label>
          Message (Where would you like to make an impact?)
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Share your thoughts..."
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </Form.Group>

      {/* 🚫 Removed Donate Button (submit handled by Modal Footer instead) */}
    </Form>
  );
};

export default DonationForm;
