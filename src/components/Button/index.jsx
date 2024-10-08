import React from "react";
import "./index.css";
const ButtonCom = ({ name, bgcolor, color, margin_top, border }) => {
  return (
    <div>
      <button
        className="button"
        style={{
          width: "126px",
          height: "48px",
          borderRadius: "50px",
          Padding: "12px, 20px, 12px, 20px",
          backgroundColor: "var(--colorprimary)",
          border: "none",
          marginTop: margin_top,
          fontWeight: "500",
          color: "var(--colorwhite)",
          fontSize: "var(--small)",
          lineHeight: "24px",
          letterSpacing: "0.5px",
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonCom;
