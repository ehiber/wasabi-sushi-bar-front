import React, { useContext, useEffect } from "react";
import {
	Container,
	Paper,
	Box,
	Typography,
	Grid,
	FormControl,
	InputLabel,
	Button,
	Link,
	FormHelperText,
	Avatar,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../../components/Input";
import { ErrorMessage } from "@hookform/error-message";
// import { formRules } from "../../../../utils/formRules";
import { CircularProgress } from "@material-ui/core";
//import useLocalStorage from '../../../../hooks/useLocalStorage';
import { useHistory } from "react-router";
// import { useSnackbar } from "notistack";
// import useLogin from "../../../../hooks/auth/useLogin";
import { useState } from "react";
import PrevNavbar from "../PrevNavbar";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(3),
	},
	prevNavbar: {
		"& > *": {
			color: "black",
		},
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
		<Container maxWidth="sm">
			<Paper>
				<PrevNavbar
					color="text.primary"
					className={classes.prevNavbar}
					navbarText={"DATOS PERSONALES"}
					previewButton={true}
				/>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={3}>
						<Avatar
							alt="User"
							src="https://picsum.photos/200/300"
						/>
						<Grid item xs={12}>
							<FormControl
								fullWidth={true}
								// error={errors.email ? true : false}
							>
								<InputLabel shrink htmlFor={"email"}>
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
								<InputLabel shrink htmlFor={"password"}>
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
							{/* <Button
								variant="contained"
								color="primary"
								fullWidth={true}
								type="submit"
								disabled={loading}
							>
								{loading ? (
									<CircularProgress
										color="secondary"
										style={{
											width: "30px",
											height: "30px",
										}}
									/>
								) : (
									"Sign in"
								)}
							</Button> */}
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};
export default PersonalData;
