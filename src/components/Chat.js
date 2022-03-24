import ChatInfo from "./ChatInfo";
import { ChatInput } from "./ChatInput";

const Chat = () => {
  return (
    <div id="wsp-chat" className="bg-pattern  border-gray">
      <ChatInfo nombreContacto="contact name" />
      <div className="">Chat</div>
      <ChatInput />
    </div>
  );
};
export default Chat;
