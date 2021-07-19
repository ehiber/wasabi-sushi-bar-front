import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	arrowIconCtn: {
		color: theme.palette.common.white,
		width: "100%",
		position: "fixed",
		backgroundImage:
			"linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.7))",
		bottom: 0,
		zIndex: 1000,
	},
	arrowIcon: {
		display: "block",
		margin: "auto",
		fontSize: 50,
	},
}));

const ExpandMore = () => {
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
		<Box className={classes.arrowIconCtn}>
			{scrollablePage && <ExpandMoreIcon className={classes.arrowIcon} />}
		</Box>
	);
};

export default ExpandMore;
