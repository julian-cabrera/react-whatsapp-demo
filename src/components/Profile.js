import React from "react";

const Profile = () => {
  //img - new msj - settings
  return (
    <div id="" className="row row-cols-6 m-1 p-1 bg-dark">
      <div className="col-2">
        <img
          id="contact-photo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETLV9cfLpPrl_nkiOCVNg0M19nqI6fuvn9qnXxMVBd_h5hRdhZ7UrLcI40yUbEB1w9Kk&usqp=CAU"
        />
      </div>
      <div className="col-6"></div>
      <div className="col-2 btn hover-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chat-left-text-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
        </svg>
      </div>
      <div className="col-2 btn hover-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      </div>
    </div>
  );
};
export default Profile;
