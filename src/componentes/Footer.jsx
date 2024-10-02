import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "20px",
          bottom: 0,
          width: "80vw",
        }}
      >
        <p style={{ margin: 0 }}>
          © At do Vitor. Abraços e corrija com carinho.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
