import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import Profile from "./Profile";

const Contacts = ({ contactList, contact }) => {
  const [contactListState, setContactListState] = useState([]);

  const getContacts = () => {
    axios
      .get(`http://localhost:8080/chat/full`)
      .then((resp) => setContactListState(resp.data))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getContacts();
  }, []);

  const dateFormatter = (unixTimestamp) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(unixTimestamp);
  };

  const findContact = (id) => {
    const list = [...contactList];
    console.log("pre contact: " + contact);
    contact = list.find((contact) => contact[0] === id);
    console.log("post contact: " + contact);
  };

  return (
    <div id="wsp-contacts" className="position-relative bg-dark border-gray">
      <Profile />
      <SearchBar />
      {contactListState.map((contact) => (
        <div
          key={contact[0]}
          className="row m-1 p-1 rounded hover-light"
          onClick={() => findContact(contact[0])}>
          <div className="col-2">
            <img id="contact-photo" src={contact[1]} alt="pic" />
          </div>
          <div className="col">
            <div className="row">
              <span className="col-8 text-start text-titillium-bold">
                {contact[3]}
              </span>
              <span className="col-4 text-end text-titillium">
                {dateFormatter(contact[2])}
              </span>
            </div>
            <div className="row ps-2 text-montserrat">{contact[4]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Contacts;
