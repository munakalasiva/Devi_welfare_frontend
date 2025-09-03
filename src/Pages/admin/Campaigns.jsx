import React, { useState, useEffect } from "react";
import { baseUrl } from "../../utils/api";
import "./AdminPage.css";

const Campaigns = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [editingCampaign, setEditingCampaign] = useState(null); // store the campaign being edited

  // Fetch campaigns
  const fetchCampaigns = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/campaigns`);
      if (!res.ok) throw new Error("Failed to fetch campaigns");
      const data = await res.json();
      setCampaigns(data);
    } catch (err) {
      console.error("Error fetching campaigns:", err);
    }
  };

  // Handle form submit (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      let res;
      if (editingCampaign) {
        // update
        res = await fetch(`${baseUrl}/api/campaigns/${editingCampaign._id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        });
      } else {
        // create new
        res = await fetch(`${baseUrl}/api/campaigns`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        });
      }

      if (!res.ok) throw new Error("Failed to save campaign");

      await res.json();
      setSuccessMessage(
        editingCampaign
          ? "✏️ Campaign updated successfully!"
          : "✅ Campaign added successfully!"
      );

      e.target.reset();
      setEditingCampaign(null); // clear edit mode
      fetchCampaigns();
    } catch (err) {
      console.error(err);
      setSuccessMessage("❌ Something went wrong. Try again!");
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/api/campaigns/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) throw new Error("Failed to delete campaign");

      setSuccessMessage("🗑️ Campaign deleted!");
      fetchCampaigns();
    } catch (err) {
      console.error("Error deleting campaign:", err);
    }
  };

  // Start editing
  const handleEdit = (campaign) => {
    setEditingCampaign(campaign);
    // pre-fill form values manually
    document.getElementById("title").value = campaign.title;
    document.getElementById("description").value = campaign.description;
  };

  // Clear success message after 3s
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <>
      <div className="page-container">
        <h2 className="page-title">
          {editingCampaign ? "Update Campaign" : "Create Campaign"}
        </h2>
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Form */}
        <form className="custom-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="4"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">
              {editingCampaign ? "Replace Image (optional)" : "Image"}
            </label>
            <input type="file" name="image" id="image" className="form-input" />
          </div>

          <button type="submit" className="form-btn">
            {editingCampaign ? "Update" : "Submit"}
          </button>
          {editingCampaign && (
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setEditingCampaign(null);
                document.querySelector(".custom-form").reset();
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Campaigns List */}
      <h3 className="mt-6 mb-3">All Campaigns</h3>
      {campaigns.length === 0 ? (
        <p>No campaigns yet.</p>
      ) : (
        <table className="campaigns-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c._id}>
                <td>
                  <img src={c.image} alt={c.title} className="campaign-img" />
                </td>
                <td>{c.title}</td>
                <td>{c.description}</td>
                <td>
                  <button onClick={() => handleEdit(c)} className="edit-btn">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(c._id)}
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

export default Campaigns;
