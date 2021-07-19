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
	buttons: {
		flexDirection: "column",
		rowGap: 15,
		paddingRight: 0,
		paddingLeft: 0,
	},
	secondaryBtn: {
		borderRadius: 20,
		color: theme.palette.text.primary,
		marginLeft: "0 !important",
		width: "100%",
		backgroundColor: theme.palette.background.paper,
	},
}));

const ModalBase = ({
	Logo,
	modalTitle,
	open,
	onOpen,
	onClose,
	titleStyle,
	paragraphText,
	nextButtonText,
	prevButtonText,
	buttonStyle,
}) => {
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
				<Typography variant="h2" className={titleStyle}>
					{modalTitle}
				</Typography>

				{paragraphText}
			</DialogContent>
			<DialogActions className={classes.buttons}>
				<Button className={buttonStyle} onClick={onOpen}>
					{nextButtonText}
				</Button>
				<Button className={classes.secondaryBtn} onClick={onClose}>
					{prevButtonText}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

ModalBase.propTypes = {
	Logo: PropTypes.node,
	modalTitle: PropTypes.string,
	open: PropTypes.bool,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
	titleStyle: PropTypes.object,
	paragraphText: PropTypes.node,
	inputText: PropTypes.node,
	nextButtonText: PropTypes.string,
	prevButtonText: PropTypes.string,
	buttonStyle: PropTypes.object,
};

export default ModalBase;
