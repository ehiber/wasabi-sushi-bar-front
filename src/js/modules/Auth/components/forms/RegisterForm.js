import React from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	form: {
		display: "flex",
		flexDirection: "column",
		rowGap: "10px",
		alignItems: "center",
	},
	input: {
		width: "100%",
		maxWidth: "400px",
		[`& .MuiInputLabel-formControl`]: {
			left: "50%",
			transform: "translate(-50%, 100%)",
		},
		[`& .MuiFormLabel-root.Mui-focused`]: {
			visibility: "hidden",
		},
		[`& .MuiOutlinedInput-root`]: {
			backgroundColor: "#f2f2f2",
			borderRadius: "30px",
			[`& .MuiOutlinedInput-input`]: {
				padding: "15px 14px",
			},
		},
	},
	button: {
		backgroundColor: "rgba(0,100,0,0.5)",
		borderRadius: "30px",
		padding: "7px 30px 5px",
		color: "white",
		maxWidth: "150px",
		marginTop: "50px",
	},
}));

const RegisterForm = (props) => {
	const classes = useStyles();

	return (
		<div>
			<form className={classes.form} noValidate autoComplete="off">
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
				<Button variant="contained" className={classes.button}>
					ACEPTAR
				</Button>
			</form>
		</div>
	);
};

export default RegisterForm;
