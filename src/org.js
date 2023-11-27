import "./App.css";
import gptLogo from "./assets/agribot.png";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/agribot.png";
import { sendMsgToOpenAI } from "./openai";
import { useEffect, useState, useRef } from "react";

function App() {
  const msgEnd = useRef(null);
  const [messages, setMessages] = useState([
    {
      text: "Hi I am AgriBot. Let us get to farming. ",
      isBot: true,
    },
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);
    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      await handleSend();
    }
  };

  const handleQuery = async (e) => {
    const text = e.target.value;
    setMessages([...messages, { text, isBot: false }]);
    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />{" "}
            <span className="brand">AgriBot</span>
          </div>

          <button className="midBtn" onClick={() => window.location.reload()}>
            <img src={addBtn} alt="" className="addBtn" /> New Chat
          </button>

          <div className="upperSideBottom">
            <button
              className="query"
              onClick={handleQuery}
              value={"Best farming practices"}
            >
              <img src={msgIcon} alt="" />
              Best farming practices
            </button>
            <button
              className="query"
              onClick={handleQuery}
              value={"How to venture into farming"}
            >
              <img src={msgIcon} alt="" />
              How to venture into farming
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade To Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          {messages.map((message, index) => (
            <div key={index} className={message.isBot ? "chat bot" : "chat"}>
              <img
                className="chatImg"
                src={message.isBot ? gptImgLogo : userIcon}
                alt=""
              />
              <p className="txt">{message.text}</p>
            </div>
          ))}
          <div ref={msgEnd} />
        </div>
        <div className="chatFooter"></div>
        <div className="inp">
          <input
            type="text"
            placeholder="Send a message"
            value={input}
            onKeyDown={handleEnter}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send" onClick={handleSend}>
            <img src={sendBtn} alt="" />
          </button>
        </div>
        <p>
          AgriBot may give inaccurate or incomplete responses. AgriBot November
          2023 version.
        </p>
      </div>
    </div>
  );
}

export default App;
