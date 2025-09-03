import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/api";
const TeamAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    description: "",
    facebookLink: "",
    instaLink: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [teams, setTeams] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const token = localStorage.getItem("token");

  // Fetch teams
  const fetchTeams = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/team`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setTeams(data);
    } catch (err) {
      console.error("Fetch teams error:", err);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Submit (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("position", formData.position);
    fd.append("description", formData.description);
    fd.append("facebookLink", formData.facebookLink);
    fd.append("instaLink", formData.instaLink);

    if (imageFile) {
      fd.append("image", imageFile);
    }

    try {
      const url = editingId
        ? `${baseUrl}/api/team/${editingId}`
        : `${baseUrl}/api/team`;

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });

      if (!res.ok) throw new Error("Failed to save team member");

      await res.json();
      setSuccessMessage(
        editingId
          ? "✏️ Team member updated successfully!"
          : "✅ Team member added successfully!"
      );

      // Reset form + refresh
      setFormData({
        name: "",
        position: "",
        description: "",
        facebookLink: "",
        instaLink: "",
      });
      setImageFile(null);
      setEditingId(null);
      e.target.reset();
      fetchTeams();
    } catch (err) {
      console.error("Save error:", err);
      setSuccessMessage("❌ Something went wrong. Try again!");
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/api/team/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete member");
      setSuccessMessage("🗑️ Team member deleted!");
      fetchTeams();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Edit
  const handleEdit = (member) => {
    setEditingId(member._id);
    setFormData({
      name: member.name,
      position: member.position,
      description: member.description,
      facebookLink: member.facebookLink,
      instaLink: member.instaLink,
    });
  };

  return (
    <>
      <div className="page-container">
        <h2 className="page-title">
          {editingId ? "Edit Team Member" : "Add Team Member"}
        </h2>
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Form */}
        <form
          className="custom-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              id="position"
              className="form-input"
              value={formData.position}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="3"
              className="form-input"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="facebookLink">Facebook Link</label>
            <input
              type="text"
              name="facebookLink"
              id="facebookLink"
              className="form-input"
              value={formData.facebookLink}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="instaLink">Instagram Link</label>
            <input
              type="text"
              name="instaLink"
              id="instaLink"
              className="form-input"
              value={formData.instaLink}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              className="form-input"
              onChange={handleImageChange}
            />
          </div>

          <button type="submit" className="form-btn">
            {editingId ? "Update Member" : "Submit"}
          </button>
        </form>
      </div>

      {/* Team Members Table */}
      <h3 className="mt-6 mb-3">All Team Members</h3>
      {teams.length === 0 ? (
        <p>No team members yet.</p>
      ) : (
        <table className="campaigns-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Position</th>
              <th>Description</th>
              <th>Facebook</th>
              <th>Instagram</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((member) => (
              <tr key={member._id}>
                <td>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="campaign-img"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>{member.name}</td>
                <td>{member.position}</td>
                <td>{member.description}</td>
                <td>
                  {member.facebookLink ? (
                    <a
                      href={member.facebookLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      FB
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  {member.instaLink ? (
                    <a href={member.instaLink} target="_blank" rel="noreferrer">
                      IG
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(member)}
                    className="edit-btn"
                  >
                    Edit
                  </button>{" "}
                  <button
                    onClick={() => handleDelete(member._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TeamAdmin;
