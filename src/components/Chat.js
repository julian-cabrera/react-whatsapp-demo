import { useState } from "react";
import ChatInfo from "./ChatInfo";
import { ChatInput } from "./ChatInput";
import Message from "./Message";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, body: "Hola", status: "sent" },
    { id: 2, body: "Hola que tal", status: "received" },
    { id: 3, body: "Chau gracias", status: "sent" },
    { id: 4, body: "Noo graciavo", status: "received" },
  ]);

  return (
    <div id="wsp-chat" className="bg-pattern border-gray">
      <ChatInfo nombreContacto="contact name" />
      <div id="wsp-chatbody">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};
export default Chat;
