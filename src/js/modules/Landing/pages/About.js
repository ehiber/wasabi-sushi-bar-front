import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Container, Typography } from "@material-ui/core";
import Sidebar from "../../../common/SideBar";
import PrevNavbar from "../../../common/PrevNavbar";
import Logo from "../../../../../dist/screenshot-without-bg.png";
import ExpandMore from "../../../common/ExpandMore";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.paper,
		position: "relative",
	},
	prevNavbar: {
		color: theme.palette.text.secondary,
	},
	logoImg: {
		width: 200,
		display: "block",
		margin: "auto",
	},
	text: {
		color: theme.palette.text.secondary,
		textAlign: "center",
		padding: "0px 25px 50px",
	},
	textBold: {
		fontWeight: "bold",
	},
	textItalic: {
		fontStyle: "italic",
	},
}));

const About = ({ linkStyle }) => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Sidebar />
			<PrevNavbar
				navbarText={"NOSOTROS"}
				closeButton={true}
				linkStyle={classes.prevNavbar}
			/>

			<Container className={classes.text}>
				<img src={Logo} className={classes.logoImg}></img>
				<Typography variant="body1" paragraph={true}>
					Wasabi Sushi nació con el deseo y la necesidad de crear una
					fusión gastronómica explosivamente deliciosa. Conformado por
					un equipo de gran calidad humana, comprometidos con el
					cuidado de cada detalle en nuestros platos.
				</Typography>
				<Typography variant="body1" paragraph={true}>
					Cada uno de nuestros ingredientes son elegidos con máximo
					cuidado, garantizando su frescura y calidad, bajo una
					constante rotación de productos, con lo que se logra el
					sabor único que ofrece Wasabi Sushi.
				</Typography>
				<Typography variant="body1" paragraph={true}>
					Contamos con la experiencia de nuestro Chef Jaimir López,
					quien hace 15 años se desempeña como Sushiman en diferentes
					restaurantes de comida japonesa. Incorporando sabores
					latinos, comenzó su propio emprendimiento en Octubre del
					2019, apostando y creyendo en el país que lo recibió con
					gran cariño. Desde entonces ha deleitado los paladares de
					sus comensales, logrando estar entre los mejores
					restaurantes de sushi de Buenos Aires.
				</Typography>
				<Typography variant="body1" paragraph={true}>
					La presencia de Daniel Alejandro Bastidas, nuestra
					&quot;piedra angular&quot;, es indispensable para la
					prosperidad de este proyecto. Con su convicción y dirección,
					logra darle al lugar todo lo que se necesita para que sea
					único.
				</Typography>
				<Typography variant="body1" paragraph={true}>
					Nuestro mayor logro es brindarle a cada uno de nuestros
					comensales, una propuesta gastronómica única e inolvidable.
				</Typography>
				<Typography
					variant="h5"
					color="textSecondary"
					className={classes.textBold}
				>
					Wasabi Sushi Bar
				</Typography>
				<Typography variant="body1" className={classes.textItalic}>
					Un viaje único en cada bocado
				</Typography>
			</Container>

			<ExpandMore />
		</Box>
	);
};

About.propTypes = {
	navbarText: PropTypes.string,
	closeButton: PropTypes.bool,
	linkStyle: PropTypes.object,
};

export default About;
