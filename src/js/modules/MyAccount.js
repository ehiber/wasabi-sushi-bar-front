import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Avatar, Container, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Sidebar from "./SideBar";
import PrevNavbar from "./PrevNavbar";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import InfoItemView from "./InfoItemView";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.paper,
		position: "relative",
	},
	prevNavbar: {
		color: theme.palette.text.secondary,
		backgroundColor: theme.palette.background.paper,
	},
	accountCtn: {
		padding: 20,
	},
	navigationCtn: {
		backgroundColor: theme.palette.background.paper,
		paddingTop: 20,
		paddingBottom: 20,
	},
	avatar: {
		margin: "0px auto",
		width: theme.spacing(18),
		height: theme.spacing(18),
	},
	cameraIcon: {
		width: theme.spacing(9),
		height: theme.spacing(9),
	},
}));

const MyAccount = () => {
	const classes = useStyles();

	const myAccountLinks = [
		{
			id: 1,
			label: "Datos Personales",
			url: "/datos-personales",
		},
		{
			id: 2,
			label: "Mi Carrito",
			url: "/mi-carrito",
		},
		{
			id: 3,
			label: "Historial de Compras",
			url: "/historial",
		},
		{
			id: 4,
			label: "Ayuda",
			url: "/ayuda",
		},
		{
			id: 5,
			label: "Privacidad",
			url: "/privacidad",
		},
		{
			id: 6,
			label: "Cerrar Sesión",
			url: "/",
		},
	];

	return (
		<Box className={classes.root}>
			<Sidebar />
			<PrevNavbar
				navbarText={"MI CUENTA"}
				previewButton={true}
				linkStyle={classes.prevNavbar}
			/>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				align="center"
				height="100%"
				bgcolor="primary.main"
				className={classes.accountCtn}
			>
				<Avatar alt="profilePicture" className={classes.avatar}>
					<CameraAltIcon className={classes.cameraIcon} />
				</Avatar>
			</Box>

			<Container className={classes.navigationCtn}>
				<Typography variant="h1" align="center">
					NOMBRE DE USUARIO
				</Typography>
				<InfoItemView links={myAccountLinks} />
			</Container>
		</Box>
	);
};

MyAccount.propTypes = {
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
	linkStyle: PropTypes.object,
};

export default MyAccount;
