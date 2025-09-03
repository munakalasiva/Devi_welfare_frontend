import React from "react";
import welcomeImg from "../../assets/welcome-welfare.png"; // put your welcome image in /src/assets/

const Welcome = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
      }}
    >
      <h1>👋 Welcome to the Admin Panel</h1>
      <img
        src={welcomeImg}
        alt="Welcome"
        style={{
          maxWidth: "500px",
          width: "100%",
        }}
      />
      {/* <h2>Welcome to the Admin Panel</h2>
      <p>Select a section from the sidebar to get started.</p> */}
    </div>
  );
};

export default Welcome;
