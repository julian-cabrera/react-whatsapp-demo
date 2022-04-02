export const ChatInput = () => {
  return (
    <div
      id="wsp-chatinput"
      className="row row-cols-2 p-2 bg-dark border-gray input-group  border-gray align-items-center">
      <div className="col-11">
        <input
          type="text"
          className="form-control rounded text-input"
          placeholder="Type a message"
        />
      </div>
      <div className="col-1 justify-content-center">
        <button className="btn hover-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-send-fill mx-auto"
            viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
