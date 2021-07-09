import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography, Container } from "@material-ui/core";
import Sidebar from "../../../common/SideBar";
import PrevNavbar from "../../../common/PrevNavbar";

const useStyles = makeStyles((theme) => ({
	prevNavbar: {
		color: theme.palette.text.secondary,
	},
	container: {
		backgroundColor: theme.palette.background.paper,
	},
	textContainer: {
		padding: "20px",
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
			<Container className={classes.textContainer}>
				<Typography
					variant="h2"
					color={"textSecondary"}
					paragraph={true}
				>
					¿Por qué una Política de Privacidad?
				</Typography>
				<Typography
					variant="body1"
					color={"textSecondary"}
					paragraph={true}
				>
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
