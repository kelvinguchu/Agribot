import React from "react";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/agribot.png";

function ChatMessage({ text, isBot }) {
  const imgSrc = isBot ? gptImgLogo : userIcon;

  return (
    <div className={isBot ? "chat bot" : "chat"}>
      <img className="chatImg" src={imgSrc} alt="" />
      <p className="txt">{text}</p>
    </div>
  );
}

export default ChatMessage;
