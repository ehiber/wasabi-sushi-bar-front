import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import Sidebar from "./SideBar";
import PrevNavbar from "./PrevNavbar";
import InfoItemView from "./InfoItemView";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.paper,
	},
	prevNavbar: {
		color: theme.palette.text.secondary,
	},
	pageContent: {
		borderTop: "1px solid black",
		borderCollapse: "collapse",
	},
}));

const Privacy = ({ linkStyle }) => {
	const classes = useStyles();

	const privacyInfo = [
		{
			id: 1,
			label: "¿Por qué una Política de Privacidad?",
			url: "/politicas-de-privacidad",
		},
		{
			id: 2,
			label: "Nuestros principios",
			url: "/mi-cuenta",
		},
		{
			id: 3,
			label: "Tus Derechos",
			url: "/seguridad",
		},
		{
			id: 4,
			label: "Datos de Usuarios",
			url: "/preguntas-frecuentes",
		},
		{
			id: 5,
			label: "¿Para qué utilizamos tus datos?",
			url: "/otras-consultas",
		},
		{
			id: 6,
			label: "¿Quién puede ver tus datos?",
			url: "/otras-consultas",
		},
	];

	return (
		<Box className={classes.container}>
			<Sidebar />
			<PrevNavbar
				navbarText={"PRIVACIDAD"}
				closeButton={true}
				linkStyle={classes.prevNavbar}
			/>
			<InfoItemView links={privacyInfo} border={classes.pageContent} />
		</Box>
	);
};

Privacy.propTypes = {
	navbarText: PropTypes.string,
	closeButton: PropTypes.bool,
	linkStyle: PropTypes.object,
	links: PropTypes.array,
	border: PropTypes.object,
};

export default Privacy;
