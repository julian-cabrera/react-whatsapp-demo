import { useState } from "react";
import SearchBar from "../SearchBar";
import Profile from "./Profile";

const Contacts = () => {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      foto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-poopybuthole-1574420029.jpg",
      nombre: "Juan",
      ultMensaje: "Hola",
      hora: "08:45 AM",
    },
    {
      id: 2,
      foto: "link",
      nombre: "María",
      ultMensaje: "Holiiii",
      hora: "09:433 AM",
    },
  ]);

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
              <span className="col-8 text-start fw-bold">
                {contacto.nombre}
              </span>
              <span className="col-4 text-end">{contacto.hora}</span>
            </div>
            <div className="row ps-2">{contacto.ultMensaje}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Contacts;
