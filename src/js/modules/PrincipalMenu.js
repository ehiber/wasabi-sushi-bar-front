import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import SideBar from "./SideBar";
import PrincipalMenuItem from "./PrincipalMenuItem";
import PrevNavbar from "./PrevNavbar";

const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "black",
		color: "white",
		height: "100vh",
	},
	itemContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		rowGap: 5,
		height: "100%",
		justifyContent: "space-evenly",
		padding: 10,
	},
}));

const PrincipalMenu = () => {
	const classes = useStyles();

	const categories = {
		Entradas: "",
		Makis: "",
		"Makis tempuras": "",
		Nuevos: "",
		Combinados: "",
		Especiales: "",
		Bebidas: "",
	};

	return (
		<Box className={classes.container}>
			<SideBar />
			<PrevNavbar
				navbarText={"MENÚ"}
				previewButton={false}
				background={"white"}
			/>
			<Box className={classes.itemContainer}>
				{Object.keys(categories).map((item, index) => {
					return (
						<PrincipalMenuItem
							key={index}
							title={item}
							image={item[index]}
						/>
					);
				})}
			</Box>
		</Box>
	);
};

PrincipalMenu.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
	background: PropTypes.string,
};

export default PrincipalMenu;
