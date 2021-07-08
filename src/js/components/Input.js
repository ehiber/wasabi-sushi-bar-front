import React from "react";
import { InputBase } from "@material-ui/core";
import { createStyles, withStyles, fade } from "@material-ui/core/styles";
import { useController } from "react-hook-form";

const CustomInput = withStyles((theme) =>
	createStyles({
		root: {
			"label + &": {
				marginTop: theme.spacing(3),
			},
		},
		input: {
			borderRadius: 4,
			border: `1px solid ${theme.palette.secondary.dark}`,
			padding: "0.625rem 0.75rem",
			transition: theme.transitions.create([
				"border-color",
				"box-shadow",
			]),
			"&:focus": {
				boxShadow: `${fade(
					theme.palette.primary.main,
					0.25
				)} 0 0 0 0.2rem`,
				borderColor: theme.palette.primary.main,
			},
			".Mui-error &": {
				borderColor: theme.palette.error.main,
				"&:focus": {
					boxShadow: `${fade(
						theme.palette.error.main,
						0.25
					)} 0 0 0 0.2rem`,
				},
			},
		},
		multiline: {
			padding: 0,
		},
	})
)(InputBase);

const Input = (props) => {
	const { field } = useController(props);
	return <CustomInput {...props} {...field} />;
};
export default Input;
