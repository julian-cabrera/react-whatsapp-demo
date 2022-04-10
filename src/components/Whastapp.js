import axios from "axios";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Contacts from "./Contacts";

const Whatsapp = () => {
  const [contactList, setContactList] = useState([]);
  const [contact, setContact] = useState({});

  const getContacts = () => {
    axios
      .get(`http://localhost:8080/chat/full`)
      .then((resp) => setContactList(resp.data))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getContacts();
    console.log("Contacts loaded");
  }, []);

  return (
    <div id="wsp-main" className="mx-auto shadow-lg">
      <Contacts contactList={contactList} setContact={setContact} />
      <Chat contact={contact} />
    </div>
  );
};
export default Whatsapp;
