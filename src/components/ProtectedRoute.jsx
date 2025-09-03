import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // Show loading while checking token
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;

// // src/components/ProtectedRoute.jsx
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   // Example: You can replace this with JWT/localStorage check
//   const isAuthenticated = localStorage.getItem("token");

//   return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
// };

// export default ProtectedRoute;
