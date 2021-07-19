import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
	TextField,
	makeStyles,
	Button,
	Typography,
	Link,
	Box,
	DialogContentText,
} from "@material-ui/core";

import Logo from "../../../../../../dist/screenshot-without-bg.png";
import ForgotPassword from "../modal/ForgotPassword";
import ModalBase from "../../ModalBase";

const ModalText = () => {
	return (
		<DialogContentText id="alert-dialog-description">
			Te enviaremos un código de vertificación a tu teléfono por mensaje
			de texto
		</DialogContentText>
	);
};

const ModalVerificationInput = () => {
	return <TextField id="outlined-basic" variant="outlined" />;
};

const ModalPasswordInput = () => {
	return <TextField id="outlined-basic" variant="outlined" />;
};

const useStyles = makeStyles((theme) => ({
	form: {
		display: "flex",
		flexDirection: "column",
		rowGap: "10px",
		alignItems: "center",
		width: "100%",
	},
	aquaModalTitle: {
		color: "#19d3c5",
		fontSize: "1.6rem",
		marginBottom: 15,
	},
	blueModalTitle: {
		color: "#009ade",
		fontSize: "1.6rem",
		marginBottom: 15,
	},
	input: {
		width: "100%",
		maxWidth: "400px",
		[`& .MuiInputLabel-formControl`]: {
			left: "50%",
			top: "50%",
			transform: "translate(-50%, -50%)",
			fontStyle: "italic",
			color: theme.palette.text.secondary,
		},
		[`& .MuiFormLabel-root.Mui-focused`]: {
			visibility: "hidden",
		},
		[`& .MuiOutlinedInput-root`]: {
			backgroundColor: "#f2f2f2",
			borderRadius: "30px",
			[`& .MuiOutlinedInput-input`]: {
				padding: "10px 14px",
			},
		},
	},
	button: {
		backgroundColor: "rgba(0,100,0,0.5)",
		borderRadius: "30px",
		padding: "7px 30px 5px",
		color: theme.palette.common.white,
		maxWidth: "150px",
	},
	text: {
		color: theme.palette.common.white,
	},
	linkContainer: {
		display: "flex",
		flexDirection: "column",
		rowGap: 15,
		marginTop: "50px",
		fontStyle: "italic",
	},
	aquaNextButton: {
		backgroundColor: "#19d3c5",
		color: "white",
		width: "100%",
		borderRadius: 20,
	},
	blueNextButton: {
		backgroundColor: "#009ade",
		color: "white",
		width: "100%",
		borderRadius: 20,
	},
}));

const RegisterForm = ({ login, enterButton }) => {
	const classes = useStyles();

	const [counter, setCounter] = React.useState(0);
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		if (counter == 4) {
			handleClose();
		}
	}, [counter]);

	const handleOpen = () => {
		if (counter == 3) {
			setCounter(4);
		} else {
			setCounter((prevCounter) => prevCounter + 1);
			setOpen(true);
		}
	};

	const handleClose = () => {
		if (counter == 0) {
			setOpen(false);
		} else if (counter == 4) {
			setCounter(0);
		} else {
			setCounter((prevCounter) => prevCounter - 1);
		}
	};

	return (
		<div>
			<form className={classes.form} noValidate autoComplete="off">
				<Box className={classes.form}>
					<TextField
						className={classes.input}
						label="Correo"
						variant="outlined"
					/>
					<TextField
						className={classes.input}
						label="Contraseña"
						variant="outlined"
					/>
				</Box>

				<Box className={classes.linkContainer}>
					{login && (
						<Box>
							<Typography>
								<Link color="inherit" onClick={handleOpen}>
									¿Olvidaste tu usuario?
								</Link>
							</Typography>
							<Typography>
								<Link color="inherit" onClick={handleOpen}>
									¿Olvidaste tu contraseña?
								</Link>
							</Typography>
							{counter == 1 ? (
								<ModalBase
									open={open}
									onOpen={handleOpen}
									onClose={handleClose}
									Logo={Logo}
									modalTitle="¿Olvidaste tu contraseña?"
									titleStyle={classes.aquaModalTitle}
									paragraphText={<ModalText />}
									nextButtonText="ENVIAR CÓDIGO"
									prevButtonText="NO, VOLVER"
									aria-labelledby="simple-modal-title"
									aria-describedby="simple-modal-description"
									buttonStyle={classes.aquaNextButton}
								/>
							) : counter == 2 ? (
								<ModalBase
									open={open}
									onOpen={handleOpen}
									onClose={handleClose}
									Logo={Logo}
									modalTitle="Ingresá el código de verificación"
									titleStyle={classes.aquaModalTitle}
									paragraphText={<ModalVerificationInput />}
									nextButtonText="VERIFICAR"
									prevButtonText="REENVIAR CÓDIGO"
									aria-labelledby="simple-modal-title"
									aria-describedby="simple-modal-description"
									buttonStyle={classes.aquaNextButton}
								/>
							) : counter == 3 ? (
								<ModalBase
									open={open}
									onOpen={handleOpen}
									onClose={handleClose}
									Logo={Logo}
									modalTitle="Ingresá tu contraseña"
									titleStyle={classes.blueModalTitle}
									paragraphText={<ModalPasswordInput />}
									nextButtonText="ACEPTAR"
									prevButtonText="SALIR"
									aria-labelledby="simple-modal-title"
									aria-describedby="simple-modal-description"
									buttonStyle={classes.blueNextButton}
								/>
							) : null}
							{/* <ForgotPassword
								open={open}
								handleClose={handleClose}
								paragraphText={<ModalText />}
								inputText={<ModalInput />}
							/> */}
						</Box>
					)}
				</Box>

				<Button variant="contained" className={classes.button}>
					{enterButton}
				</Button>
			</form>
		</div>
	);
};

RegisterForm.propTypes = {
	login: PropTypes.bool,
	enterButton: PropTypes.string,
	Logo: PropTypes.node,
	modalTitle: PropTypes.string,
	titleStyle: PropTypes.object,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
	handleClickOpen: PropTypes.func,
	paragraphText: PropTypes.node,
	nextButtonText: PropTypes.string,
	prevButtonText: PropTypes.string,
	buttonStyle: PropTypes.object,
};
export default RegisterForm;
