import React from "react";
import sendBtn from "./assets/send.svg";

function InputComponent({ input, setInput, handleSend }) {
  return (
    <div className="inp">
      <input
        type="text"
        placeholder="Message AgriBot"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="send" onClick={handleSend}>
        <img src={sendBtn} alt="" />
      </button>
    </div>
  );
}

export default InputComponent;
