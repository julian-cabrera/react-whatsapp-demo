import axios from "axios";
import SearchBar from "../SearchBar";
import Profile from "./Profile";

const Contacts = ({ contactList, setContact }) => {
  const dateFormatter = (unixTimestamp) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(unixTimestamp * 1000);
  };

  const findContact = (id) => {
    const list = [...contactList];
    const findContact = list.find((cont) => cont[0] === id);
    setContact(findContact);
  };

  const checkForFile = (msgBody) => {
    if (msgBody.startsWith("https://")) {
      return;
    }
    return msgBody;
  };

  return (
    <div id="wsp-contacts" className="position-relative bg-dark border-gray">
      <Profile />
      <SearchBar />
      {contactList.map((cont) => (
        <div
          key={cont[0]}
          className="row m-1 p-1 rounded hover-light"
          onClick={() => findContact(cont[0])}>
          <div className="col-2 contact-item">
            <img id="contact-photo" src={cont[1]} alt="pic" />
          </div>

          <div className="col-10 contact-item">
            <div className="row">
              <span className="col-8 text-start text-titillium-bold">
                {cont[3]}
              </span>
              <span className="col-4 text-end text-titillium">
                {dateFormatter(cont[2])}
              </span>
            </div>
            <div className="row text-montserrat contact-last-message">
              {!cont[4].startsWith("https://") ? (
                cont[4]
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-earmark-text"
                    viewBox="0 0 16 16">
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                  {` File`}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Contacts;
