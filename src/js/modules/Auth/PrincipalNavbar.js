import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		[`& .MuiToolbar-root`]: {
			justifyContent: "space-between",
		},
		[`& .MuiIconButton-root`]: {
			fontSize: "1.3em",
		},
		[`& .MuiToolbar-regular`]: {
			minHeight: 60,
		},
		[`& .MuiSvgIcon-root`]: {
			fontSize: "2em",
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
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
					<img></img>
					<Button color="inherit">
						<ShoppingCartIcon />
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
