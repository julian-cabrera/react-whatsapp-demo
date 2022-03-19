import Chat from "./Chat";
import Contacts from "./Contacts";

const Whatsapp = () => {
  return (
    <div id="wsp-main" className="mx-auto shadow-lg">
      <Contacts />
      <Chat />
    </div>
  );
};
export default Whatsapp;
