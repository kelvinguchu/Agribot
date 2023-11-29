import React, { useState } from "react";
import "./App.css";
import { AuthContextProvider } from "./AuthContext";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import login from "./assets/login.png";
import { sendMsgToOpenAI } from "./openai";
import ChatInput from "./ChatInput";
import SidebarQueryButton from "./SidebarQueryButton";
import MessageList from "./MessageList";
import Logo from "./Logo";
import ListItem from "./ListItem";

function App() {
  const [messages, setMessages] = useState([
    {
      text: "Hi I am AgriBot. Let us get to farming.",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const userMessage = { text, isBot: false };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const botResponseText = await sendMsgToOpenAI(text);
      const botResponse = { text: botResponseText, isBot: true };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      const errorMessage = {
        text: "There was an error, AgriBot is not available at the moment. Please try again later.",
        isBot: true,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const handleSend = async () => {
    await sendMessage(input);
    setInput("");
  };

  const handleQuery = async (queryText) => {
    await sendMessage(queryText);
  };

  return (
    <AuthContextProvider>
      <div className="App">
        <div className="sideBar">
          <div className="upperSide">
            <Logo />
            <button className="midBtn" onClick={() => window.location.reload()}>
              New Chat
            </button>
            <div className="upperSideBottom">
              <SidebarQueryButton
                text="Best farming practices"
                handleQuery={handleQuery}
              />
              <SidebarQueryButton
                text="How to venture into farming"
                handleQuery={handleQuery}
              />
            </div>
          </div>
          <div className="lowerSide">
            <ListItem
              icon={login}
              text="Login/Signup"
              className="login"
              isAuthItem
            />
            <ListItem icon={saved} text="Saved" className="otherClass" />
            <ListItem
              icon={rocket}
              text="Upgrade To Pro"
              className="otherClass"
            />
          </div>
        </div>
        <div className="main">
          <MessageList messages={messages} />
          <div className="chatFooter">
            <ChatInput
              input={input}
              setInput={setInput}
              handleSend={handleSend}
            />
          </div>
          <p>
            AgriBot may give inaccurate or incomplete responses. AgriBot
            November 2023 Beta version.
          </p>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
