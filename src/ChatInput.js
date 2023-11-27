import React from "react";
import sendBtn from "./assets/send.svg";

function ChatInput({ input, setInput, handleSend }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="inp">
      <input
        type="text"
        placeholder="Message AgriBot"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="send" onClick={handleSend}>
        <img src={sendBtn} alt="" />
      </button>
    </div>
  );
}

export default ChatInput;
