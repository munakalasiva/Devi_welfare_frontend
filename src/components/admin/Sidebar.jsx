// src/components/admin/Sidebar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../App.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");

    // Optionally clear user data if you store it
    // localStorage.removeItem("admin");

    // Redirect to login page
    navigate("/admin", { replace: true });
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <nav>
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/admin/dashboard/donations">Donations</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/applications">Applications</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/campaigns">Campaigns</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/team">Team</NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#1b5e20",
                color: "white",
                border: "none",
                padding: "5px",
                width: "150px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              LOGOUT
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
