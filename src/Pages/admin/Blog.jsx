import React, { useState, useEffect } from "react";
import { baseUrl } from "../../utils/api";
import "./AdminPage.css";
const Blog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    publishedDate: "",
    impact: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null); // 👈 to track edit mode

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/blogs`);
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("content", formData.content);
    fd.append("publishedDate", formData.publishedDate);
    fd.append("impact", formData.impact);

    if (imageFile) {
      fd.append("image", imageFile);
    }

    try {
      const url = editingId
        ? `${baseUrl}/api/blogs/${editingId}`
        : `${baseUrl}/api/blogs`;

      const method = editingId ? "PUT" : "POST";

      const token = localStorage.getItem("token"); // 👈 get token

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`, // 👈 attach token
        },
        body: fd,
      });

      if (!res.ok) throw new Error("Failed to save blog");

      await res.json();
      setSuccessMessage(
        editingId
          ? "✏️ Blog updated successfully!"
          : "✅ Blog added successfully!"
      );

      // Reset form + refresh
      setFormData({ title: "", content: "", publishedDate: "", impact: "" });
      setImageFile(null);
      setEditingId(null);
      e.target.reset();
      fetchBlogs();
    } catch (err) {
      console.error("Blog save error:", err);
      setSuccessMessage("❌ Something went wrong. Try again!");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token"); // 👈 get token

      const res = await fetch(`${baseUrl}/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // 👈 attach token
        },
      });

      if (!res.ok) throw new Error("Failed to delete blog");

      setSuccessMessage("🗑️ Blog deleted!");
      fetchBlogs();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const fd = new FormData();
  //   fd.append("title", formData.title);
  //   fd.append("content", formData.content);
  //   fd.append("publishedDate", formData.publishedDate);
  //   fd.append("impact", formData.impact);

  //   if (imageFile) {
  //     fd.append("image", imageFile);
  //   }

  //   try {
  //     const url = editingId
  //       ? `http://localhost:5000/api/blogs/${editingId}`
  //       : "http://localhost:5000/api/blogs";

  //     const method = editingId ? "PUT" : "POST";

  //     const res = await fetch(url, {
  //       method,
  //       body: fd,
  //     });

  //     if (!res.ok) throw new Error("Failed to save blog");

  //     await res.json();
  //     setSuccessMessage(
  //       editingId
  //         ? "✏️ Blog updated successfully!"
  //         : "✅ Blog added successfully!"
  //     );

  //     // Reset form + refresh
  //     setFormData({ title: "", content: "", publishedDate: "", impact: "" });
  //     setImageFile(null);
  //     setEditingId(null);
  //     e.target.reset();
  //     fetchBlogs();
  //   } catch (err) {
  //     console.error("Blog save error:", err);
  //     setSuccessMessage("❌ Something went wrong. Try again!");
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
  //       method: "DELETE",
  //     });
  //     if (!res.ok) throw new Error("Failed to delete blog");
  //     setSuccessMessage("🗑️ Blog deleted!");
  //     fetchBlogs();
  //   } catch (err) {
  //     console.error("Delete error:", err);
  //   }
  // };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      content: blog.content,
      publishedDate: blog.publishedDate ? blog.publishedDate.split("T")[0] : "",
      impact: blog.impact,
    });
    setEditingId(blog._id);
    setImageFile(null); // reset file
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to form
  };

  // Auto-clear success message
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <>
      <div className="page-container">
        <h2 className="page-title">
          {editingId ? "Edit Blog" : "Create Blog"}
        </h2>
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Form */}
        <form
          className="custom-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-input"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              rows="4"
              className="form-input"
              value={formData.content}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="publishedDate">Published Date</label>
            <input
              type="date"
              name="publishedDate"
              id="publishedDate"
              className="form-input"
              value={formData.publishedDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="impact">Impact</label>
            <input
              type="text"
              name="impact"
              id="impact"
              className="form-input"
              value={formData.impact}
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
            {editingId ? "Update Blog" : "Submit"}
          </button>
        </form>
      </div>

      {/* Blogs Table */}
      <h3 className="mt-6 mb-3">All Blogs</h3>
      {blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        <table className="campaigns-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Content</th>
              <th>Published</th>
              <th>Impact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="campaign-img"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>{blog.title}</td>
                <td>{blog.content}</td>
                <td>
                  {blog.publishedDate
                    ? new Date(blog.publishedDate).toLocaleDateString()
                    : "-"}
                </td>
                <td>{blog.impact}</td>
                <td>
                  <button onClick={() => handleEdit(blog)} className="edit-btn">
                    Edit
                  </button>{" "}
                  <button
                    onClick={() => handleDelete(blog._id)}
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

export default Blog;
