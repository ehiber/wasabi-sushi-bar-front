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

const ModalInput = () => {
	return (
		<TextField
			error
			id="standard-error-helper-text"
			helperText="ERROR: Código incorrecto"
		/>
	);
};

const useStyles = makeStyles((theme) => ({
	form: {
		display: "flex",
		flexDirection: "column",
		rowGap: "10px",
		alignItems: "center",
		width: "100%",
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
						id="outlined-basic"
						label="Correo"
						variant="outlined"
					/>
					<TextField
						className={classes.input}
						id="outlined-basic"
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
									paragraphText={<ModalText />}
									aria-labelledby="simple-modal-title"
									aria-describedby="simple-modal-description"
								/>
							) : counter == 2 ? (
								<ModalBase
									open={open}
									onOpen={handleOpen}
									onClose={handleClose}
									paragraphText={<ModalInput />}
									aria-labelledby="simple-modal-title"
									aria-describedby="simple-modal-description"
								/>
							) : counter == 3 ? (
								<ModalBase
									open={open}
									onOpen={handleOpen}
									onClose={handleClose}
									paragraphText={<ModalInput />}
									aria-labelledby="simple-modal-title"
									aria-describedby="simple-modal-description"
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
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
	handleClickOpen: PropTypes.func,
	paragraphText: PropTypes.node,
};
export default RegisterForm;
