import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import Sidebar from "../../../common/SideBar";
import PrevNavbar from "../../../common/PrevNavbar";

import InfoItemView from "../../../common/InfoItemView";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.paper,
	},
	pageContent: {
		borderTop: "1px solid black",
		borderCollapse: "collapse",
	},
	prevNavbar: {
		color: theme.palette.text.secondary,
	},
}));

const HelpView = ({ linkStyle }) => {
	const classes = useStyles();

	const helpQuestions = [
		{
			id: 1,
			label: "Pedidos anteriores",
			url: "/pedidos-anteriores",
		},
		{
			id: 2,
			label: "Mi Cuenta",
			url: "/mi-cuenta",
		},
		{
			id: 3,
			label: "Seguridad",
			url: "/seguridad",
		},
		{
			id: 4,
			label: "Preguntas frecuentes",
			url: "/preguntas-frecuentes",
		},
		{
			id: 5,
			label: "Otras consultas",
			url: "/otras-consultas",
		},
	];

	return (
		<Box className={classes.container}>
			<Sidebar />
			<Box className={classes.pageContent}>
				<PrevNavbar
					navbarText={"AYUDA"}
					closeButton={true}
					linkStyle={classes.prevNavbar}
				/>
				<InfoItemView
					links={helpQuestions}
					border={classes.pageContent}
				/>
			</Box>
		</Box>
	);
};

HelpView.propTypes = {
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
	bgPrevBtn: PropTypes.string,
	colorBorder: PropTypes.string,
	linkStyle: PropTypes.object,
	links: PropTypes.array,
	border: PropTypes.object,
};

export default HelpView;
