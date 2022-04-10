import SearchBar from "../SearchBar";
import Profile from "./Profile";

const Contacts = ({ contactList, setContact }) => {
  const dateFormatter = (unixTimestamp) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(unixTimestamp);
  };

  const findContact = (id) => {
    const list = [...contactList];
    const findContact = list.find((cont) => cont[0] === id);
    setContact(findContact);
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
          <div className="col-2">
            <img id="contact-photo" src={cont[1]} alt="pic" />
          </div>
          <div className="col">
            <div className="row">
              <span className="col-8 text-start text-titillium-bold">
                {cont[3]}
              </span>
              <span className="col-4 text-end text-titillium">
                {dateFormatter(cont[2])}
              </span>
            </div>
            <div className="row ps-2 text-montserrat">{cont[4]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Contacts;
