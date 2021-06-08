import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, makeStyles, Link } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		alignItems: "center",
		minHeight: 60,
		width: "100%",
		color: "white",
		borderBottom: "2px solid white",
		paddingLeft: 10,
		paddingRight: 10,
	},
	title: {
		position: "absolute",
		left: "50%",
		transform: "translateX(-50%)",
		color: "inherit",
	},
}));

const PrevNavbar = ({ navbarText, previewButton }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Box className={classes.container}>
			{previewButton && (
				<Link
					href="#"
					onClick={() => {
						history.goBack();
					}}
					color="inherit"
				>
					<ArrowBackIcon />
				</Link>
			)}
			<Typography variant="h2" className={classes.title}>
				{navbarText}
			</Typography>
		</Box>
	);
};

PrevNavbar.propTypes = {
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
};

export default PrevNavbar;
