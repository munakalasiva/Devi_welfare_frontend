// src/components/GalleryBlog/GalleryBlog.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { baseUrl } from "../../utils/api";
import "./GalleryBlog.css";

const GalleryBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
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

    fetchBlogs();
  }, []);

  return (
    <section className="gallery-blog py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Blogs</h2>
        <Row>
          {blogs.map((post) => (
            <Col md={6} lg={3} key={post._id} className="mb-4">
              <Card className="blog-card shadow-sm h-100">
                <div className="img-wrapper">
                  <Card.Img
                    variant="top"
                    src={post.image}
                    className="blog-img"
                    alt={post.title}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{post.title}</Card.Title>

                  {/* Use impact if available, else trim content */}
                  <Card.Text>
                    {post.impact
                      ? post.impact
                      : post.content.length > 80
                      ? post.content.substring(0, 80) + "..."
                      : post.content}
                  </Card.Text>

                  {/* Show formatted publishedDate */}
                  <small className="text-muted d-block mb-2">
                    {new Date(post.publishedDate).toLocaleDateString()}
                  </small>

                  {/* Optionally link to blog details page */}
                  <Button
                    variant="warning"
                    size="sm"
                    href={`/blog/${post._id}`} // you can make blog detail route
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GalleryBlog;
