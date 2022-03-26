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
      <div className="col-1">
        <button className="btn hover-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-mic-fill"
            viewBox="0 0 16 16">
            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
