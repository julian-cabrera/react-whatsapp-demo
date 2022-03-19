import { BrowserRouter, Switch, Route } from "react-router-dom";
import Whatsapp from "./Whastapp";
import SingleMessage from "./SingleMessage";

const RouterComponent = () => {
  return (
    <BrowserRouter className="container">
      <div className="row bg-dark">
        <h1 className="text-center p-2 m-1">Whatsapp Demo</h1>
      </div>

      <hr />

      <Whatsapp />

      {/* <SingleMessage /> */}
      <Switch>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default RouterComponent;
