import { BrowserRouter, Switch, Route } from "react-router-dom";
import WhatsappWindow from "./WhatsappWindow";

const RouterComponent = () => {
	return (
		<BrowserRouter className="container">
			<WhatsappWindow />
			<Switch>
				<Route></Route>
			</Switch>
		</BrowserRouter>
	);
};
export default RouterComponent;
