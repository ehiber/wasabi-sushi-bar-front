import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Link, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
	linkContainer: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: theme.palette.background.paper,
	},
	link: {
		display: "flex",
		justifyContent: "space-between",
		borderTop: "1px solid black",
		borderCollapse: "collapse",
		padding: "15px 10px 15px 20px",
	},
	text: {
		color: theme.palette.text.secondary,
	},
}));

const InfoItemView = ({ links }) => {
	const classes = useStyles();

	return (
		<Box className={classes.linkContainer}>
			{links.map((link) => {
				return (
					<Link
						key={link.id}
						href={link.url}
						className={classes.link}
					>
						<Typography variant="inherit" className={classes.text}>
							{link.label}
						</Typography>

						<ArrowForwardIosIcon className={classes.text} />
					</Link>
				);
			})}
		</Box>
	);
};

InfoItemView.propTypes = {
	links: PropTypes.array,
};

export default InfoItemView;
