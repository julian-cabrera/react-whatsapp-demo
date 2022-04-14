import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const ChatInput = ({ chatID }) => {
  const [message, setMessage] = useState({
    audio: null,
    body: null,
    caption: null,
    chatId: null,
    filename: null,
    fromMe: true,
    quotedMsgBody: null,
    quotedMsgId: null,
    type: "chat",
  });

  const inputRef = useRef(null);
  const sendMessage = () => {
    message.chatId = chatID;

    if (
      message.body !== "" &&
      message.chatId !== "" &&
      message.body !== null &&
      message.chatId !== null
    ) {
      // axios
      //   .post(`http://localhost:8080/webhook/send`, message)
      //   .then(console.log(`Message sent!`), console.log(message))
      //   .catch((err) => alert(err));

      setMessage({ ...message, body: "" });
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const sendMessageOnKeyPress = (keyEvent) => {
    if (keyEvent.charCode === 13) {
      sendMessage();
    }
  };

  return (
    <div
      id="wsp-chatinput"
      className="row p-2 bg-dark border-gray input-group border-gray align-items-center">
      <div className="col-1">
        <button className="btn hover-light">
          {/* Button onClick => Open file browser and save file to something */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-paperclip"
            viewBox="0 0 16 16">
            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
          </svg>
        </button>
      </div>
      <div className="col-10">
        <input
          id="input-message"
          type="text"
          className="form-control rounded text-input"
          placeholder="Type a message"
          ref={inputRef}
          onChange={(e) => {
            setMessage({ ...message, body: e.target.value });
          }}
          onKeyPress={sendMessageOnKeyPress}
        />
      </div>
      <div className="col-1 mx-auto">
        <button className="btn hover-light mx-auto" onClick={sendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-send-fill mx-auto"
            viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
