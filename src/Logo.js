import React from "react";
import gptLogo from "./assets/agribot.png";

function Logo() {
  return (
    <div className="upperSideTop">
      <img src={gptLogo} alt="" className="logo" />
      <span className="brand">AgriBot</span>
    </div>
  );
}

export default Logo;
