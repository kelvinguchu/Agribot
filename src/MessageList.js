import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

function MessageList({ messages }) {
  const msgEnd = useRef(null);

  useEffect(() => {
    msgEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chats">
      {messages.map((message, index) => (
        <ChatMessage key={index} text={message.text} isBot={message.isBot} />
      ))}
      <div ref={msgEnd} />
    </div>
  );
}

export default MessageList;
