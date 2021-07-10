import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import RegisterForm from "./components/forms/RegisterForm";
import GoogleButton from "./GoogleButton";
import PrevNavbar from "../PrevNavbar";
import Logo from "../../../../dist/screenshot-without-bg.png";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		backgroundColor: theme.palette.common.black,
		color: theme.palette.text.primary,
		height: "100vh",
	},
	prevNavbar: {
		color: theme.palette.text.primary,
		borderBottomWidth: 0,
	},
	mainContainer: {
		rowGap: 10,
		width: "100%",
		padding: "0px 30px",
	},
	title: {
		color: theme.palette.text.primary,
	},
	logoCtn: {
		width: "70%",
		maxWidth: "300px",
		margin: "auto",
	},
	logoImg: {
		width: "100%",
		margin: "auto",
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
			<PrevNavbar
				navbarText={"INICIO DE SESIÓN"}
				previewButton={true}
				linkStyle={classes.prevNavbar}
			/>
			<Box
				display="flex"
				flexDirection="column"
				className={classes.mainContainer}
			>
				<Box className={classes.logoCtn}>
					<img src={Logo} className={classes.logoImg}></img>
				</Box>
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
	linkStyle: PropTypes.object,
	btnText: PropTypes.string,
	enterButton: PropTypes.string,
	previewButton: PropTypes.bool,
};

export default LoginFormView;
