import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Link, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
	linkContainer: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: theme.palette.background.paper,
		padding: "10px 0px",
	},
	link: {
		display: "flex",
		justifyContent: "space-between",
		padding: "15px 10px 15px 20px",
	},
	text: {
		color: theme.palette.text.secondary,
	},
	conditionalText: {
		color: "red",
		fontSize: "1rem",
	},
}));

const InfoItemView = ({ links, border }) => {
	const classes = useStyles();

	return (
		<Box className={classes.linkContainer}>
			{links.map((link) => {
				return (
					<Link
						key={link.id}
						href={link.url}
						className={`${classes.link} ${border}`}
					>
						<Typography
							variant="inherit"
							className={
								link.label === "Cerrar Sesión"
									? classes.conditionalText
									: classes.text
							}
						>
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
	border: PropTypes.object,
};

export default InfoItemView;
