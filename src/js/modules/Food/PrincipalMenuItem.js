import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "green",
		width: "100%",
		height: "100%",
		borderRadius: 20,
	},
	title: {
		color: "white",
		textTransform: "uppercase",
	},
}));

const PrincipalMenuItem = ({ title }) => {
	const classes = useStyles();

	return (
		<Link href="/menu-platos" className={classes.container}>
			<Typography variant="h2" className={classes.title}>
				{title}
			</Typography>
		</Link>
	);
};

PrincipalMenuItem.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
};
export default PrincipalMenuItem;
