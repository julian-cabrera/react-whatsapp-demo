import React from "react";

const Message = ({ message }) => {
  const msgStatus =
    message.status === "sent" ? "message-sent" : "message-received";

  return (
    <div
      className={`${msgStatus} rounded text-montserrat`}>{`${message.body}`}</div>
  );
};

export default Message;
