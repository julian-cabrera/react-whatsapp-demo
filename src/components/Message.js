import React from "react";

const Message = ({ message }) => {
  const msgStatus = message.fromMe ? "message-sent" : "message-received";

  if (message.type === "image") {
    return (
      <div className={`${msgStatus} rounded text-montserrat`}>
        <img className="img-fluid" src={message.body} />
      </div>
    );
  }
  return (
    <div className={`${msgStatus} rounded text-montserrat`}>{message.body}</div>
  );
};

export default Message;
