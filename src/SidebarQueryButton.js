import React from "react";
import msgIcon from "./assets/message.svg";

function SidebarQueryButton({ text, handleQuery }) {
  return (
    <button className="query" onClick={() => handleQuery(text)}>
      <img src={msgIcon} alt="" />
      {text}
    </button>
  );
}

export default SidebarQueryButton;
