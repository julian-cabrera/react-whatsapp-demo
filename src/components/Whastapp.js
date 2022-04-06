import { useState } from "react";
import Chat from "./Chat";
import Contacts from "./Contacts";

const Whatsapp = () => {
  const [contactList, setContactList] = useState([]);
  const [contact, setContact] = useState({});

  return (
    <div id="wsp-main" className="mx-auto shadow-lg">
      <Contacts contactList={contactList} contact={contact} />
      <Chat contact={contact} />
    </div>
  );
};
export default Whatsapp;
