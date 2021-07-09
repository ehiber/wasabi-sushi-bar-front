import { hot } from "react-hot-loader/root";
import PropTypes from "prop-types";
import React, { useState, useEffect, useReducer } from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./modules/Landing/pages/About";
import AppContextProvider from "./contexts/AppContext";
import loaderReducer, { initLoaderState } from "./reducers/loaderReducer";
import Home from "./modules/Landing/pages/Home";
import LoginFormView from "./modules/Auth/LoginFormView";
import RegisterFormView from "./modules/Auth/RegisterFormView";
import PrincipalMenu from "./modules/Food/PrincipalMenu";
import DishesMenu from "./modules/Food/DishesMenu";
import PersonalData from "./modules/User/PersonalData";
import HelpView from "./modules/Landing/pages/HelpView";
import Questions from "./modules/Landing/pages/Questions";
import Privacy from "./modules/Landing/pages/Privacy";
import PrivacyPage from "./modules/Landing/pages/PrivacyPage";

const Layout = (props) => {
	const [state, dispatch] = useReducer(loaderReducer, initLoaderState);
	useEffect(() => {
		if (!state.viewIsReady) {
			// this is simulating children components mounting.
			setTimeout(() => {
				dispatch({
					type: "HIDE_LOADER",
				});
			}, 2000);
		}
	}, [state.viewIsReady]);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<AppContextProvider>
					{state.viewIsReady ? (
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/nosotros" component={About} />
							<Route
								path="/register"
								component={RegisterFormView}
							/>
							<Route
								path="/login-form"
								component={LoginFormView}
							/>
							<Route
								path="/menu-principal"
								component={PrincipalMenu}
							/>
							<Route path="/menu-platos" component={DishesMenu} />

							<Route
								path="/personal-data"
								component={PersonalData}
							/>
							<Route path="/ayuda" component={HelpView} />
							<Route
								path="/preguntas-frecuentes"
								component={Questions}
							/>
							<Route path="/privacidad" component={Privacy} />
							<Route
								path="/politicas-de-privacidad"
								component={PrivacyPage}
							/>
						</Switch>
					) : (
						<div className="view-loader"></div>
					)}
				</AppContextProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default hot(Layout);
