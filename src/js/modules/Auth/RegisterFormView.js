import React from "react";
import { Box, makeStyles, Button } from "@material-ui/core";
import RegisterForm from "./components/forms/RegisterForm";
import GoogleLogo from "../../../../dist/google.svg";

const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: "black",
		color: "white",
		height: "100vh",
		padding: "40px",
	},
	googleButton: {
		display: "flex",
		position: "relative",
		backgroundColor: "rgba(255,255,255,0.50)",
		borderRadius: "30px",
		padding: "2px 40px 2px 10px",
	},
	googleImg: {
		position: "absolute",
		right: 2,
		maxWidth: "40px",
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
			<div>
				<h2>INGRESÁ TUS DATOS</h2>
				<p>
					Ingresá una cuenta de correo electrónico y una contraseña.
					La contraseña debe tener un mínimo de 5 caractéres
					alfanuméricos
				</p>
				<RegisterForm />
			</div>

			<div className={classes.googleButton}>
				<Button>Registrate con</Button>
				<img src={GoogleLogo} className={classes.googleImg} />
			</div>
		</Box>
	);
};

export default RegisterFormView;
