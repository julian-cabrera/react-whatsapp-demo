import React from "react";

const Message = ({ message }) => {
  const msgStatus = message.fromMe ? "message-sent" : "message-received";

  if (message.type === "image") {
    return (
      <div className={`${msgStatus} rounded text-montserrat`}>
        <img className="chat-img" src={message.body} title="Click to expand" />
        <div className="row">
          <div className="col-9"></div>
          <button
            className="col-1 btn hover-light"
            title="Upload to Google Drive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-cloud-arrow-up-fill"
              viewBox="0 0 16 16">
              <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z" />
            </svg>
          </button>
          <button className="col-1 btn hover-light" title="Download file">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-file-earmark-arrow-down-fill"
              viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={`${msgStatus} rounded text-montserrat`}>{message.body}</div>
  );
};

export default Message;
