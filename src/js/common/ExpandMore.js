import React, { useState, useEffect } from "react";
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

	const [scrolling, setScrolling] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const onScroll = (e) => {
			setScrollTop(e.target.documentElement.scrollTop);
			setScrolling(e.target.documentElement.scrollTop > scrollTop);
		};
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop]);

	return (
		<Box className={`${classes.arrowIconCtn} ${position}`}>
			<ExpandMoreIcon
				className={
					!scrolling
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
