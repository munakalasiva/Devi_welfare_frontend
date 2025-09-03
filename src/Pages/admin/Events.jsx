import React, { useState, useEffect } from "react";
import { baseUrl } from "../../utils/api";
import "./AdminPage.css";

const Events = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null); // Track event being edited
  const [removeImages, setRemoveImages] = useState([]); // Track images marked for removal

  // Fetch events
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/events`);
      if (!res.ok) throw new Error("Failed to fetch events");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  // Handle create event
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch(`${baseUrl}/api/events`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to add event");

      await res.json();
      setSuccessMessage("✅ Event added successfully!");
      e.target.reset();
      fetchEvents();
    } catch (err) {
      console.error(err);
      setSuccessMessage("❌ Something went wrong. Try again!");
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/api/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete event");

      setSuccessMessage("🗑️ Event deleted!");
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  // Handle edit click
  const handleEditClick = (event) => {
    setEditingEvent(event);
    setRemoveImages([]); // reset removed list
  };

  // Handle update event
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingEvent) return;

    const formData = new FormData(e.target);

    // Pass removed images list
    formData.append("removeImages", JSON.stringify(removeImages));

    try {
      const res = await fetch(`${baseUrl}/api/events/${editingEvent._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to update event");

      await res.json();
      setSuccessMessage("✏️ Event updated successfully!");
      setEditingEvent(null);
      setRemoveImages([]);
      fetchEvents();
    } catch (err) {
      console.error("Error updating event:", err);
      setSuccessMessage("❌ Something went wrong. Try again!");
    }
  };

  // Handle marking images for removal
  const toggleRemoveImage = (publicId) => {
    setRemoveImages((prev) =>
      prev.includes(publicId)
        ? prev.filter((id) => id !== publicId)
        : [...prev, publicId]
    );
  };

  // Auto-clear success message
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <div className="page-container">
        <h2 className="page-title">Create Event</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Add Event Form */}
        {!editingEvent && (
          <form className="custom-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-input"
              />
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
              <label htmlFor="year">Year</label>
              <input
                type="number"
                name="year"
                id="year"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="images">Upload Images</label>
              <input
                type="file"
                name="images"
                id="images"
                multiple
                className="form-input"
              />
            </div>

            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        )}

        {/* Edit Event Form */}
        {editingEvent && (
          <form className="custom-form" onSubmit={handleUpdate}>
            <h3>Editing: {editingEvent.title}</h3>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={editingEvent.title}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                rows="4"
                defaultValue={editingEvent.description}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                name="year"
                defaultValue={editingEvent.year}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Existing Images</label>
              <div className="image-preview-list">
                {editingEvent.images?.map((img) => (
                  <div key={img.public_id} className="image-preview">
                    <img src={img.url} alt="event" className="campaign-img" />
                    <label>
                      <input
                        type="checkbox"
                        checked={removeImages.includes(img.public_id)}
                        onChange={() => toggleRemoveImage(img.public_id)}
                      />
                      Remove
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="images">Upload New Images</label>
              <input
                type="file"
                name="images"
                id="images"
                multiple
                className="form-input"
              />
            </div>

            <button type="submit" className="form-btn">
              Update
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setEditingEvent(null)}
            >
              Cancel
            </button>
          </form>
        )}
      </div>

      {/* Events Table */}
      <h3 className="mt-6 mb-3">All Events</h3>
      {events.length === 0 ? (
        <p>No events yet.</p>
      ) : (
        <table className="campaigns-table">
          <thead>
            <tr>
              <th>Images</th>
              <th>Title</th>
              <th>Description</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>
                  <div className="image-grid">
                    {event.images?.slice(0, 3).map((img) => (
                      <img
                        key={img.public_id}
                        src={img.url}
                        alt={event.title}
                        className="campaign-img"
                      />
                    ))}
                    {event.images?.length > 3 && (
                      <span>+{event.images.length - 3} more</span>
                    )}
                  </div>
                </td>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.year}</td>
                <td>
                  <button
                    onClick={() => handleEditClick(event)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
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

export default Events;
