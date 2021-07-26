import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Visibility } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	arrowIconCtn: {
		color: theme.palette.common.white,
		width: "100%",
		backgroundImage:
			"linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.7))",
		zIndex: 1000,
	},
	arrowIcon: {
		display: "block",
		margin: "auto",
		fontSize: 50,
	},
	vibilityHidden: {
		visibility: "hidden",
		height: 0,
		transition: "height 0.5s",
	},
}));

const ExpandMore = ({ position }) => {
	const classes = useStyles();

	const [scrollablePage, setScrollablePage] = useState(true);

	window.onscroll = function (e) {
		if (
			window.innerHeight + window.pageYOffset >=
			document.body.offsetHeight
		) {
			setScrollablePage(false);
		} else {
			setScrollablePage(true);
		}
	};

	return (
		<Box className={`${classes.arrowIconCtn} ${position}`}>
			<ExpandMoreIcon
				className={
					scrollablePage
						? `${classes.arrowIcon}`
						: `${classes.arrowIcon} ${classes.vibilityHidden}`
				}
			/>
		</Box>
	);
};

ExpandMore.propTypes = {
	position: PropTypes.string,
};

export default ExpandMore;
