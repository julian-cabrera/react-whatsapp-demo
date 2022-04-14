import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Whatsapp from "./components/Whastapp";

ReactDOM.render(
  <React.StrictMode>
    <div className="row bg-dark">
      <h1 className="text-center p-2 m-1 text-titillium-bold">WHATSAPP DEMO</h1>
    </div>

    <hr />

    <Whatsapp />
  </React.StrictMode>,
  document.getElementById("root")
);
