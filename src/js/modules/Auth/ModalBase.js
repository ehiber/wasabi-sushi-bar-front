import React from "react";
import PropTypes from "prop-types";
import {
	makeStyles,
	Dialog,
	DialogActions,
	DialogContent,
	Button,
} from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import Logo from "../../../../dist/screenshot-without-bg.png";

const useStyles = makeStyles((theme) => ({
	dialogRoot: {
		backgroundColor: "transparent",
	},
	dialogContent: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 20,
		marginBottom: 10,
	},
	logoCtn: {
		width: "70%",
		margin: "auto",
	},
	logoImg: {
		width: "100%",
		margin: "auto",
	},
	modalTitle: {
		color: "aqua",
		fontSize: "1.6rem",
		marginBottom: 15,
	},
	buttons: {
		flexDirection: "column",
		rowGap: 15,
		paddingRight: 0,
		paddingLeft: 0,
	},
	principalBtn: {
		backgroundColor: "aqua",
		color: "white",
		width: "100%",
		borderRadius: 20,
	},
	secondaryBtn: {
		borderRadius: 20,
		color: theme.palette.text.secondary,
		marginLeft: "0 !important",
		width: "100%",
		backgroundColor: theme.palette.background.paper,
	},
}));

const ModalBase = ({ open, onOpen, onClose, paragraphText }) => {
	const classes = useStyles();

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			PaperProps={{
				style: {
					backgroundColor: "transparent",
					textAlign: "center",
				},
			}}
		>
			<DialogContent className={classes.dialogContent}>
				<Box className={classes.logoCtn}>
					<img src={Logo} className={classes.logoImg}></img>
				</Box>
				<Typography variant="h2" className={classes.modalTitle}>
					¿Olvidaste <br /> tu contraseña?
				</Typography>

				{paragraphText}
			</DialogContent>
			<DialogActions className={classes.buttons}>
				<Button className={classes.principalBtn} onClick={onOpen}>
					ENVIAR CÓDIGO
				</Button>
				<Button className={classes.secondaryBtn} onClick={onClose}>
					NO, VOLVER
				</Button>
			</DialogActions>
		</Dialog>
	);
};

ModalBase.propTypes = {
	open: PropTypes.bool,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
	handleClickOpen: PropTypes.func,
	paragraphText: PropTypes.node,
	inputText: PropTypes.node,
};

export default ModalBase;
