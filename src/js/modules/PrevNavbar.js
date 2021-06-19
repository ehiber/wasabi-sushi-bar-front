import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, makeStyles, Link } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		alignItems: "center",
		minHeight: 60,
		width: "100%",
		paddingLeft: 10,
		paddingRight: 10,
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
	},
	title: {
		position: "absolute",
		left: "50%",
		transform: "translateX(-50%)",
		whiteSpace: "nowrap",
	},
}));

const PrevNavbar = ({ navbarText, previewButton, closeButton, linkStyle }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Box className={`${linkStyle} ${classes.container}`}>
			{previewButton && (
				<Link
					href="#"
					className={linkStyle}
					onClick={() => {
						history.goBack();
					}}
				>
					<ArrowBackIcon />
				</Link>
			)}
			{closeButton && (
				<Link
					href="#"
					className={linkStyle}
					onClick={() => {
						history.goBack();
					}}
				>
					<CloseIcon />
				</Link>
			)}
			<Typography
				variant="h2"
				className={`${classes.title} ${linkStyle}`}
			>
				{navbarText}
			</Typography>
		</Box>
	);
};

PrevNavbar.propTypes = {
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
	closeButton: PropTypes.bool,
	linkStyle: PropTypes.string,
};

export default PrevNavbar;
