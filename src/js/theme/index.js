import { createMuiTheme } from "@material-ui/core/styles";
import colors from "./styles";

const theme = createMuiTheme({
	palette: {
		common: {
			white: colors.common.white,
			black: colors.common.black,
		},
		background: {
			default: colors.common.black,
			paper: colors.common.white,
		},
		primary: {
			main: colors.primary.main,
			dark: colors.primary.dark,
			light: colors.primary.light,
		},
		secondary: {
			main: colors.secondary.main,
			dark: colors.secondary.dark,
			light: colors.secondary.light,
		},
		text: {
			primary: colors.text.primary,
			secondary: colors.text.secondary,
		},
		buttons: {
			primary: colors.buttons.primary,
			secondary: colors.buttons.secondary,
			other: colors.buttons.other,
		},
		error: {
			main: colors.error.primary,
			dark: colors.error.primary,
			light: colors.error.primary,
		},
	},
	typography: {
		fontFamily: ["Roboto", "sans-serif"].join(","),
		h1: {
			fontSize: "1.383rem",
			fontWeight: 700,
			color: colors.primary.main,
			marginBottom: ".5em",
		},
		h2: {
			fontSize: "1.296rem",
			fontWeight: 700,
			color: colors.primary.main,
		},
		h3: {
			fontSize: "1.215rem",
			fontWeight: 700,
			color: colors.primary.main,
		},
		h4: {
			fontSize: "1.138rem",
			fontWeight: 700,
			color: colors.primary.main,
		},
		h5: {
			fontSize: "1.067rem",
			color: colors.primary.main,
		},
		h6: {
			fontSize: "1rem",
			color: colors.primary.main,
		},
		subtitle1: {
			color: colors.text.secondary,
			fontSize: "1rem",
		},
		subtitle2: {
			color: colors.text.secondary,
			fontSize: "0.937rem",
		},
		body1: {
			fontSize: "1rem",
		},
		body2: {
			fontSize: "0.875rem",
		},
		button: {
			fontSize: "1rem",
			fontWeight: 700,
		},
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					WebkitFontSmoothing: "auto",
				},
				body: {
					color: colors.common.black,
				},
			},
		},
		MuiButton: {
			root: {
				textTransform: "none",
				borderRadius: "0.625rem",
			},
		},
		MuiFormLabel: {
			root: {
				color: colors.text.primary,
				fontSize: "1rem",
			},
		},
		MuiCard: {
			root: {
				borderRadius: 0,
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

export default theme;
