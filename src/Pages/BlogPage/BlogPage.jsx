import React, { useEffect, useState } from "react";
import "./BlogPage.css"; // Optional: for additional styling
import bannerImage from "../../assets/Blog.jpg"; // ✅ use any banner image
import { baseUrl } from "../../utils/api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/blogs`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="blog-page" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* ✅ Banner Section */}
      <div
        className="blog-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>
      </div>

      {/* ✅ Blog Cards Section */}
      <div className="blog-container" style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "32px" }}>
          Our Latest Stories
        </h2>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p style={{ textAlign: "center" }}>No blogs available.</p>
        ) : (
          <div
            className="blog-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="blog-card"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={
                    blog.image && blog.image !== ""
                      ? blog.image
                      : "https://via.placeholder.com/400x200?text=No+Image"
                  }
                  alt={blog.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ marginBottom: "8px" }}>{blog.title}</h3>
                  <span style={{ fontSize: "0.85rem", color: "#555" }}>
                    {formatDate(blog.publishedDate)}
                  </span>
                  <p
                    style={{
                      marginTop: "12px",
                      color: "#333",
                      lineHeight: "1.5",
                    }}
                  >
                    {blog.content.length > 120
                      ? blog.content.slice(0, 120) + "..."
                      : blog.content}
                  </p>
                  <a
                    href={`/blogs/${blog._id}`}
                    style={{
                      display: "inline-block",
                      marginTop: "12px",
                      color: "#0d9488",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
