import React from "react";
import PropTypes from "prop-types";
import {
	Button,
	Typography,
	Container,
	Box,
	makeStyles,
	Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: theme.palette.background.paper,
		padding: "15px 20px",
	},
	textContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		rowGap: 10,
		textAlign: "right",
		width: "60%",
	},
	button: {
		backgroundColor: theme.palette.primary.main,
		width: "100%",
		padding: "0px 8px",
		borderRadius: 7,
		maxWidth: 150,
		[`&:hover`]: {
			backgroundColor: theme.palette.background.default,
			color: theme.palette.common.white,
		},
	},
	avatar: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		margin: "auto",
	},
}));

const DishCard = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Avatar
				alt="food"
				src="https://picsum.photos/200/300"
				className={classes.avatar}
			/>

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
