import React from "react";
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	MenuIcon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const PrincipalNavbar = () => {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					News
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};
export default PrincipalNavbar;
