import React from "react";
import PropTypes from "prop-types";
import {
	Button,
	Typography,
	Container,
	Box,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: theme.palette.background.paper,
		padding: "15px 20px",
	},
	textContainer: {
		display: "flex",
		flexDirection: "column",
		rowGap: 10,
		textAlign: "right",
		width: "50%",
	},
	button: {
		backgroundColor: theme.palette.primary.main,
		width: "100%",
		padding: "0px 8px",
		borderRadius: 7,
		[`&:hover`]: {
			backgroundColor: theme.palette.background.default,
			color: theme.palette.text.primary,
		},
	},
}));

const DishCard = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Box></Box>
			<Box className={classes.textContainer}>
				<Typography variant="h2">ALASKA</Typography>
				<Typography variant="h3" color="textSecondary">
					500
				</Typography>
				<Button className={classes.button}>VER</Button>
			</Box>
		</Container>
	);
};

export default DishCard;
