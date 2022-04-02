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

    console.table([...contactList]);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div id="wsp-contacts" className="position-relative bg-dark border-gray">
      <Profile />
      <SearchBar />
      {contactList.map((contacto) => (
        <div key={contacto.id} className="row m-1 p-1 rounded hover-light">
          <div className="col-2">
            <img id="contact-photo" src={contacto.foto} alt="pic" />
          </div>
          <div className="col">
            <div className="row">
              <span className="col-8 text-start text-catamaran-bold">
                {contacto.nombre}
              </span>
              <span className="col-4 text-end">{contacto.hora}</span>
            </div>
            <div className="row ps-2 text-montserrat">
              {contacto.ultMensaje}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Contacts;
