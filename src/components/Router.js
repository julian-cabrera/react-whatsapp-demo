import { BrowserRouter, Switch, Route } from "react-router-dom";
import Whatsapp from "./Whastapp";
import SingleMessage from "./SingleMessage";

const RouterComponent = () => {
	return (
		<BrowserRouter className="container">
			<div className="bg-dark">
				<h1 className="text-center p-5">Whatsapp Demo</h1>
				<hr />
			</div>
			<Whatsapp />
			<SingleMessage />
			<Switch>
				<Route></Route>
			</Switch>
		</BrowserRouter>
	);
};
export default RouterComponent;
