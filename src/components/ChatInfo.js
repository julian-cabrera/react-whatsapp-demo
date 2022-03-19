import React from "react";

const ChatInfo = (props) => {
  return (
    <div className="row bg-dark">
      <div className="col-1">
        <img
          id="contact-photo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETLV9cfLpPrl_nkiOCVNg0M19nqI6fuvn9qnXxMVBd_h5hRdhZ7UrLcI40yUbEB1w9Kk&usqp=CAU"
        />
      </div>
      <h1 className="col-10">{props.nombreContacto}</h1>
    </div>
  );
};
export default ChatInfo;
