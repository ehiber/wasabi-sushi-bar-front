import React from "react";
import PropTypes from "prop-types";
import { Container, Box, makeStyles, Typography } from "@material-ui/core";
import DishCard from "./DishCard";
import SideBar from "../../common/SideBar";
import PrevNavbar from "../../common/PrevNavbar";
import ExpandMore from "../../common/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	dishesView: {
		display: "flex",
		flexDirection: "column",
		rowGap: 20,
	},
	prevNavbar: {
		color: theme.palette.common.white,
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
}));

const DishesMenu = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<SideBar />
			<PrevNavbar
				navbarText={"MAKIS"}
				previewButton={true}
				linkStyle={classes.prevNavbar}
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

			<ExpandMore />
		</Box>
	);
};

DishesMenu.propTypes = {
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
	linkStyle: PropTypes.object,
};

export default DishesMenu;
