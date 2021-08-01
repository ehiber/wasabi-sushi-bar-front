import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import GoogleLogo from "../../../../dist/google.svg";

const useStyles = makeStyles(() => ({
	googleButton: {
		display: "flex",
		position: "relative",
		backgroundColor: "rgba(255,255,255,0.50)",
		borderRadius: "30px",
		padding: "2px 40px 2px 10px",
		maxWidth: "fit-content",
		margin: "0 auto",
	},
	googleImg: {
		position: "absolute",
		right: 2,
		maxWidth: "40px",
	},
}));

const GoogleButton = ({ btnText }) => {
	const classes = useStyles();

	return (
		<div className={classes.googleButton}>
			<Button>{btnText}</Button>
			<img src={GoogleLogo} className={classes.googleImg} />
		</div>
	);
};

GoogleButton.propTypes = {
	btnText: PropTypes.string,
};
export default GoogleButton;
