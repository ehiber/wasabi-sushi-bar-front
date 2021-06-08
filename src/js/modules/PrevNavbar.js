import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, makeStyles, Link } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
	container: {
		width: "100%",
		display: "flex",
		color: "white",
	},
	title: {
		color: "inherit",
		margin: "auto",
	},
}));

const PrevNavbar = ({ navbarText }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Box className={classes.container}>
			<Link
				href="#"
				onClick={() => {
					history.goBack();
				}}
				color="inherit"
			>
				<ArrowBackIcon />
			</Link>
			<Typography variant="h2" className={classes.title}>
				{navbarText}
			</Typography>
		</Box>
	);
};

PrevNavbar.propTypes = {
	navbarText: PropTypes.string,
};

export default PrevNavbar;
