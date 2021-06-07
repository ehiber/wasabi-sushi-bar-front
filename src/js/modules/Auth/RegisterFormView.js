import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
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
		padding: "0px 30px",
	},
	title: {
		color: "white",
	},
	mainText: {
		color: "gray",
		fontStyle: "italic",
	},
}));

const RegisterFormView = () => {
	const classes = useStyles();

	return (
		<Box
			className={classes.container}
			display="flex"
			flexDirection="column"
			alignItems="center"
			textAlign="center"
		>
			<PrevNavbar navbarText={"REGISTRO"} />
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
				<Typography variant="p" className={classes.mainText}>
					Ingresá una cuenta de correo electrónico y una contraseña.
					La contraseña debe tener un mínimo de 5 caractéres
					alfanuméricos
				</Typography>
				<RegisterForm enterButton={"ACEPTAR"} />
			</Box>

			<GoogleButton btnText={"Registrar con"} />
		</Box>
	);
};

RegisterFormView.propTypes = {
	btnText: PropTypes.string,
	enterButton: PropTypes.string,
	navbarText: PropTypes.string,
};
export default RegisterFormView;
