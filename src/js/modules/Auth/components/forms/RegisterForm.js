import React from "react";
import PropTypes from "prop-types";
import {
	TextField,
	makeStyles,
	Button,
	Typography,
	Link,
	Box,
} from "@material-ui/core";

import ForgotPassword from "../modal/ForgotPassword";

const ModalText = () => {
	return (
		<Typography variant="body1">
			Te enviaremos un código de vertificación a tu teléfono por mensaje
			de texto
		</Typography>
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
		color: theme.palette.text.primary,
		maxWidth: "150px",
	},
	text: {
		color: theme.palette.text.primary,
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

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
								<Link color="inherit" onClick={handleClickOpen}>
									¿Olvidaste tu usuario?
								</Link>
							</Typography>
							<Typography>
								<Link color="inherit" onClick={handleClickOpen}>
									¿Olvidaste tu contraseña?
								</Link>
							</Typography>
							<ForgotPassword
								open={open}
								handleClose={handleClose}
								handleClickOpen={handleClickOpen}
								paragraphText={<ModalText />}
								inputText={<ModalInput />}
							/>
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
	handleClose: PropTypes.func,
	handleClickOpen: PropTypes.func,
	paragraphText: PropTypes.node,
	inputText: PropTypes.node,
};
export default RegisterForm;
