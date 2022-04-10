import React from "react";

const ChatInfo = (props) => {
  return (
    <div
      id="wsp-chatinfo"
      className="row row-cols-2 p-1 bg-dark  border-gray overflow-hidden">
      <div className="col-2 w-auto h-100">
        <img
          id="contact-photo-chat"
          className=" w-auto h-100 rounded-circle"
          src={props.profilePicture}
          alt="contact-img"
        />
      </div>
      <div className="col-10 my-auto">
        <h4 className="text-montserrat fw-bold my-auto">
          {props.nombreContacto}
        </h4>
      </div>
    </div>
  );
};
export default ChatInfo;
