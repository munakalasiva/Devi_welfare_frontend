import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const AdminLayout = () => {
  const isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin) {
    return <Navigate to="/admin" />; // redirect to login
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import "../App.css"; // or Admin.css

// const AdminLayout = () => {
//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />
//       <div style={{ flex: 1, padding: "20px" }}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
