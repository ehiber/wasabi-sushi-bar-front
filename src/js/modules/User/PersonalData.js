import React from "react";
import {
	Container,
	Grid,
	FormControl,
	InputLabel,
	Avatar,
	Button,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../../common/Input";
import { ErrorMessage } from "@hookform/error-message";
// import { formRules } from "../../../../utils/formRules";
import { CircularProgress } from "@material-ui/core";
//import useLocalStorage from '../../../../hooks/useLocalStorage';
import { useHistory } from "react-router";
// import { useSnackbar } from "notistack";
// import useLogin from "../../../../hooks/auth/useLogin";
import { useState } from "react";
import PrevNavbar from "../../common/PrevNavbar";

const useStyles = makeStyles((theme) => ({
	paper: {
		color: theme.palette.text.secondary,
	},
	container: {
		background: theme.palette.text.primary,
		marginTop: theme.spacing(2),
	},
	prevNavbar: {
		color: theme.palette.text.secondary,
	},
	avatarFather: {
		background: theme.palette.primary.main,
	},
	avatar: {
		margin: "auto",
		width: theme.spacing(20),
		height: theme.spacing(20),
	},
}));

const INITIAL_LOGIN_VALUES = {
	variable: { email: "", password: "" },
	dispatchLogin: false,
};
const errorMessage = "Bad credentials. Please login again.!";

const PersonalData = () => {
	const [loginVariables, setLoginVariable] = useState(INITIAL_LOGIN_VALUES);
	const { variable, dispatchLogin } = loginVariables;
	const classes = useStyles();
	const { push } = useHistory();

	const { handleSubmit, control, errors } = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (fields) => {
		setLoginVariable({
			variable: fields,
			dispatchLogin: true,
		});
	};

	return (
		<>
			<PrevNavbar
				color="text.primary"
				linkStyle={classes.prevNavbar}
				navbarText={"DATOS PERSONALES"}
				previewButton={true}
			/>
			<Container className={classes.container} maxWidth="sm">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={3}>
						<Grid item xs={12} className={classes.avatarFather}>
							<Avatar
								className={classes.avatar}
								alt="User"
								src="https://picsum.photos/200/300"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								fullWidth={true}
								// error={errors.email ? true : false}
							>
								<InputLabel
									className={classes.paper}
									shrink
									htmlFor={"email"}
								>
									NOMBRE COMPLETO
								</InputLabel>
								<Input
									control={control}
									name="email"
									// rules={{
									// 	required: formRules.email.required,
									// 	pattern: formRules.email.pattern,
									// }}
								/>
								{/* <ErrorMessage
										// errors={errors}
										name="email"
										as={FormHelperText}
									/> */}
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								fullWidth={true}
								// error={errors.password ? true : false}
							>
								<InputLabel
									shrink
									htmlFor={"password"}
									className={classes.paper}
								>
									TELÉFONO
								</InputLabel>
								<Input
									control={control}
									name="password"
									// rules={{
									// 	required: formRules.password.required,
									// 	pattern: formRules.password.pattern,
									// }}
									type="password"
								/>
								{/* <ErrorMessage
										// errors={errors}
										name="password"
										as={FormHelperText}
									/> */}
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								fullWidth={true}
								// error={errors.password ? true : false}
							>
								<InputLabel
									shrink
									htmlFor={"password"}
									className={classes.paper}
								>
									TELÉFONO DE CASA
								</InputLabel>
								<Input
									control={control}
									name="password"
									// rules={{
									// 	required: formRules.password.required,
									// 	pattern: formRules.password.pattern,
									// }}
									type="password"
								/>
								{/* <ErrorMessage
										// errors={errors}
										name="password"
										as={FormHelperText}
									/> */}
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								fullWidth={true}
								// error={errors.password ? true : false}
							>
								<InputLabel
									shrink
									htmlFor={"password"}
									className={classes.paper}
								>
									DIRECCIÓN
								</InputLabel>
								<Input
									control={control}
									name="password"
									// rules={{
									// 	required: formRules.password.required,
									// 	pattern: formRules.password.pattern,
									// }}
									type="password"
								/>
								{/* <ErrorMessage
										// errors={errors}
										name="password"
										as={FormHelperText}
									/> */}
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								fullWidth={true}
								// error={errors.password ? true : false}
							>
								<InputLabel
									shrink
									htmlFor={"password"}
									className={classes.paper}
								>
									NÚMERO DE CASA O DEPARTAMENTO
								</InputLabel>
								<Input
									control={control}
									name="password"
									// rules={{
									// 	required: formRules.password.required,
									// 	pattern: formRules.password.pattern,
									// }}
									type="password"
								/>
								{/* <ErrorMessage
										// errors={errors}
										name="password"
										as={FormHelperText}
									/> */}
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								fullWidth={true}
								// error={errors.password ? true : false}
							>
								<InputLabel
									shrink
									htmlFor={"password"}
									className={classes.paper}
								>
									REFERENCIA
								</InputLabel>
								<Input
									control={control}
									name="password"
									// rules={{
									// 	required: formRules.password.required,
									// 	pattern: formRules.password.pattern,
									// }}
									type="password"
								/>
								{/* <ErrorMessage
										// errors={errors}
										name="password"
										as={FormHelperText}
									/> */}
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								fullWidth={true}
								// error={errors.password ? true : false}
							>
								<InputLabel
									shrink
									htmlFor={"password"}
									className={classes.paper}
								>
									FECHA DE NACIMIENTO
								</InputLabel>
								<Input
									control={control}
									name="password"
									// rules={{
									// 	required: formRules.password.required,
									// 	pattern: formRules.password.pattern,
									// }}
									type="password"
								/>
								{/* <ErrorMessage
										// errors={errors}
										name="password"
										as={FormHelperText}
									/> */}
							</FormControl>
						</Grid>

						<Grid item xs={12}>
							<Button
								variant="contained"
								color="primary"
								fullWidth={true}
								type="submit"
							>
								ACEPTAR
							</Button>
						</Grid>
					</Grid>
				</form>
			</Container>
		</>
	);
};

export default PersonalData;
