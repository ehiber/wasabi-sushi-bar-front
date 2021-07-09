import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { theme } from "../../../theme";

const useStyles = makeStyles((theme) => ({
	buttons: {
		borderRadius: "50px",
		width: "180px",
	},
	buttonLogin: {
		marginTop: theme.spacing(2),
	},
	upperBox: {
		minHeight: "75%",
		background: "black",
	},
	footerBox: {
		background: "green",
		minHeight: "25%",
	},
	content: {
		position: "absolute",
		top: 0,
		bottom: 0,
		width: "100%",
		textAlign: "center",
	},
	registerBox: {
		padding: "3%",
	},
	text: {
		marginBottom: theme.spacing(2),
	},
	wrapLine: {
		width: "180px",
		alignSelf: "center",
		display: "flex",
		justifyContent: "space-between",
	},
	line: {
		background: "white",
		width: "70px",
		height: "1px",
	},
	point: {
		background: "white",
		width: "1.5px",
		height: "1px",
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<Box className={classes.content}>
			<Grid container direction="column" className={classes.upperBox}>
				<Grid xs={12}>Logo</Grid>
				<Grid>
					<Button className={classes.buttons} variant="contained">
						Ver menú
					</Button>
				</Grid>
			</Grid>
			<Grid container direction="column" className={classes.footerBox}>
				<Grid className={classes.registerBox} item>
					<Typography className={classes.text}>
						Creá tu cuenta
					</Typography>
					<Button
						color={"primary"}
						className={classes.buttons}
						variant="contained"
					>
						Registrate
					</Button>
				</Grid>
				<Box className={classes.wrapLine}>
					<Box className={classes.line}></Box>
					<Box className={classes.point}></Box>
					<Box className={classes.line}></Box>
				</Box>
				<Grid>
					<Button
						className={`${classes.buttonLogin} ${classes.buttons}`}
						variant="contained"
					>
						Iniciar Sesión
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
