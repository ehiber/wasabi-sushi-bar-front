import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import SideBar from "../../common/SideBar";
import PrincipalMenuItem from "./PrincipalMenuItem";
import PrevNavbar from "../../common/PrevNavbar";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
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
	prevNavbar: {
		color: theme.palette.text.primary,
	},
}));

const PrincipalMenu = () => {
	const classes = useStyles();

	const categories = [
		{
			id: 1,
			label: "Entradas",
			image: "",
		},
		{
			id: 2,
			label: "Makis",
			image: "",
		},
		{
			id: 3,
			label: "Makis tempuras",
			image: "",
		},
		{
			id: 4,
			label: "Nuevos",
			image: "",
		},
		{
			id: 5,
			label: "Combinados",
			image: "",
		},
		{
			id: 6,
			label: "Especiales",
			image: "",
		},
		{
			id: 7,
			label: "Bebidas",
			image: "",
		},
	];

	return (
		<Box className={classes.container}>
			<SideBar />
			<PrevNavbar
				navbarText={"MENÚ"}
				linkStyle={classes.prevNavbar}
				previewButton={false}
			/>
			<Box className={classes.itemContainer}>
				{categories.map((category) => {
					return (
						<PrincipalMenuItem
							key={category.id}
							title={category.label}
							image={category.image}
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
	linkStyle: PropTypes.string,
};

export default PrincipalMenu;
