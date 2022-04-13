import axios from "axios";
import { useEffect, useState } from "react";
import ChatInfo from "./ChatInfo";
import { ChatInput } from "./ChatInput";
import Message from "./Message";

const Chat = ({ contact }) => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    axios
      .get(`http://localhost:8080/message?chatID=${contact[0]}`)
      .then((resp) => {
        setMessages(resp.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getMessages();
  }, [contact]);

  return contact[0] === undefined || contact[0] === null ? (
    <div id="wsp-chat" className="bg-pattern border-gray">
      <h1 className="text-titillium-bold text-center my-auto">
        Select a chat!
      </h1>
    </div>
  ) : (
    <div id="wsp-chat" className="bg-pattern border-gray">
      <ChatInfo nombreContacto={contact[3] + ""} profilePicture={contact[1]} />
      <div id="wsp-chatbody">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>
      <ChatInput chatID={contact[0]} />
    </div>
  );
};
export default Chat;
