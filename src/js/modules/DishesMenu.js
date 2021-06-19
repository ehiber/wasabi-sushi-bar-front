import React from "react";
import PropTypes from "prop-types";
import { Container, Box, makeStyles, Typography } from "@material-ui/core";
import DishCard from "./DishCard";
import SideBar from "./SideBar";
import PrevNavbar from "./PrevNavbar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	dishesView: {
		display: "flex",
		flexDirection: "column",
		rowGap: 20,
	},
	menuTitle: {
		backgroundColor: theme.palette.primary.main,
		fontWeight: "bold",
		textAlign: "center",
		padding: 10,
	},
	dishCardCtn: {
		width: "100%",
	},
	arrowIcon: {
		position: "absolute",
		bottom: 10,
		left: "50%",
		transform: "translateX(-50%)",
		fontSize: 50,
		zIndex: 1000,
	},
}));

const DishesMenu = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<SideBar />
			<PrevNavbar
				navbarText={"MAKIS"}
				previewButton={true}
				bgPrevBtn={"black"}
				colorBorder={"white"}
			/>
			<Container className={classes.dishesView}>
				<Box>
					<Typography
						variant="h2"
						color="textPrimary"
						className={classes.menuTitle}
					>
						CLÁSICOS
					</Typography>
				</Box>
				<Box className={classes.dishCardCtn}>
					<DishCard />
				</Box>
			</Container>

			<ExpandMoreIcon className={classes.arrowIcon} />
		</Box>
	);
};

DishesMenu.propTypes = {
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
	bgPrevBtn: PropTypes.string,
	colorBorder: PropTypes.string,
};

export default DishesMenu;
