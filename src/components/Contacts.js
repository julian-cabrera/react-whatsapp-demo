import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import Profile from "./Profile";

const Contacts = () => {
  const [contactList, setContactList] = useState([]);
  const getContacts = () => {
    axios
      .get(`http://localhost:8080/chat`)
      .then((resp) => setContactList(resp.data))
      .catch((err) => alert(err));
  };
  const getLastMessage = (chatId) => {
    axios
      .get(`http://localhost:8080/message?chatId=${chatId}`)
      .then((resp) => setContactList(resp.data))
      .catch((err) => alert(err));
  };

  const dateFormatter = (unixTimestamp) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(unixTimestamp);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div id="wsp-contacts" className="position-relative bg-dark border-gray">
      <Profile />
      <SearchBar />
      {contactList.map((contact) => (
        <div key={contact.id} className="row m-1 p-1 rounded hover-light">
          <div className="col-2">
            <img id="contact-photo" src={contact.image} alt="pic" />
          </div>
          <div className="col">
            <div className="row">
              <span className="col-8 text-start text-titillium-bold">
                {contact.name}
              </span>
              <span className="col-4 text-end text-titillium">
                {dateFormatter(contact.last_time)}
              </span>
            </div>
            <div className="row ps-2 text-montserrat">{getLastMessage}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Contacts;
