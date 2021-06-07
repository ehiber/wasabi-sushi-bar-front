import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import RegisterForm from "./components/forms/RegisterForm";
import GoogleButton from "./GoogleButton";
import PrevNavbar from "../PrevNavbar";

const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: "black",
		color: "white",
		height: "100vh",
		padding: "10px 10px 40px",
	},
	mainContainer: {
		rowGap: 10,
		width: "100%",
		padding: "0px 30px",
	},
	title: {
		color: "white",
	},
}));

const LoginFormView = () => {
	const classes = useStyles();

	return (
		<Box
			className={classes.container}
			display="flex"
			flexDirection="column"
			alignItems="center"
			textAlign="center"
		>
			<PrevNavbar navbarText={"INICIO DE SESIÓN"} />
			<Box
				display="flex"
				flexDirection="column"
				className={classes.mainContainer}
			>
				<Typography
					variant="h2"
					align="center"
					className={classes.title}
				>
					INGRESÁ TUS DATOS
				</Typography>
				<RegisterForm login={true} enterButton={"INICIAR"} />
			</Box>

			<GoogleButton btnText={"Iniciar Sesión con"} />
		</Box>
	);
};

LoginFormView.propTypes = {
	login: PropTypes.bool,
	navbarText: PropTypes.string,
	btnText: PropTypes.string,
	enterButton: PropTypes.string,
};

export default LoginFormView;
