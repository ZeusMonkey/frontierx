import React from 'react';
import Header from "./Header";
import Home from "./Home";
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route
} from "react-router-dom";

function Layout() {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route path="*">
						<Redirect to="/home" />
					</Route>
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default Layout;
