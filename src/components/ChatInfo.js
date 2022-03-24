import React from "react";

const ChatInfo = (props) => {
  return (
    <div id="wsp-chatinfo" className="row row-cols-2 p-1 bg-dark  border-gray">
      <div className="col-2 w-auto h-100">
        <img
          id="contact-photo-chat"
          className=" w-auto h-100 rounded-circle"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETLV9cfLpPrl_nkiOCVNg0M19nqI6fuvn9qnXxMVBd_h5hRdhZ7UrLcI40yUbEB1w9Kk&usqp=CAU"
          alt="contact-img"
        />
      </div>
      <div className="col-10">
        <h2>{props.nombreContacto}</h2>
      </div>
    </div>
  );
};
export default ChatInfo;
