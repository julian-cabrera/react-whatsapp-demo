import { BrowserRouter, Switch, Route } from "react-router-dom";
import Whatsapp from "./Whastapp";

const RouterComponent = () => {
  return (
    <BrowserRouter className="container">
      <div className="row bg-dark">
        <h1 className="text-center p-2 m-1 text-catamaran-bold">
          Whatsapp Demo
        </h1>
      </div>

      <hr />

      <Whatsapp />

      <Switch>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default RouterComponent;
