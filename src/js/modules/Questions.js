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

const Questions = ({ linkStyle }) => {
	const classes = useStyles();

	const Questions = [
		{
			id: 1,
			label: "¿Debo registrarme para hacer un pedido?",
			url: "/pedidos-anteriores",
		},
		{
			id: 2,
			label: "¿Debo ser mayor de edad para registrarme?",
			url: "/mi-cuenta",
		},
		{
			id: 3,
			label: "¿Cómo elimino un plato de mi carrito?",
			url: "/seguridad",
		},
		{
			id: 4,
			label: "¿Cómo se si mi orden fue recibida?",
			url: "/preguntas-frecuentes",
		},
		{
			id: 5,
			label: "¿Qué hago si la orden que recibí no es correcta?",
			url: "/otras-consultas",
		},
		{
			id: 6,
			label: "¿Cómo sé si mi orden esta en camino?",
			url: "/otras-consultas",
		},
		{
			id: 7,
			label: "¿Cómo cancelo mi orden?",
			url: "/otras-consultas",
		},
		{
			id: 8,
			label: "¿Cómo cerrar mi cuenta?",
			url: "/otras-consultas",
		},
	];

	return (
		<Box className={classes.container}>
			<Sidebar />
			<PrevNavbar
				navbarText={"PREGUNTAS FRECUENTES"}
				closeButton={true}
				linkStyle={classes.prevNavbar}
			/>
			<InfoItemView links={Questions} border={classes.pageContent} />
		</Box>
	);
};

Questions.propTypes = {
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
	bgPrevBtn: PropTypes.string,
	colorBorder: PropTypes.string,
	linkStyle: PropTypes.object,
	links: PropTypes.array,
	border: PropTypes.object,
};

export default Questions;
