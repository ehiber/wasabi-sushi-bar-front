import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography, Container } from "@material-ui/core";
import Sidebar from "./SideBar";
import PrevNavbar from "./PrevNavbar";

const useStyles = makeStyles((theme) => ({
	prevNavbar: {
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
	},
	container: {
		backgroundColor: theme.palette.background.paper,
	},
}));

const PrivacyPage = ({ linkStyle }) => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Sidebar />
			<PrevNavbar
				navbarText={"PRIVACIDAD"}
				previewButton={true}
				linkStyle={classes.prevNavbar}
			/>
			<Container>
				<Typography variant="h2" color={"textSecondary"}>
					¿Por qué una Política de Privacidad?
				</Typography>
				<Typography variant="body1" color={"textSecondary"}>
					Cuando usas Wasabi Sushi Bar App nos confías tus datos. Nos
					comprometemos a mantener esa confianza, comenzando por
					ayudarte a entender la Política de Privacidad que establece
					nuestras prácticas en el Tratamiento y Protección de tus
					Datos al acceder a nuestros servicios, incluyendo nuestra
					página web y App.
				</Typography>
			</Container>
		</Box>
	);
};

PrivacyPage.propTypes = {
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
	linkStyle: PropTypes.object,
};

export default PrivacyPage;
