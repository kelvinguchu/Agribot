import React from "react";

function SidebarButton({ icon, text, buttonClass }) {
  return (
    <button className={buttonClass}>
      <img src={icon} alt="" />
      {text}
    </button>
  );
}

export default SidebarButton;
