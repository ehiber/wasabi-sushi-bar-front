import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	Box,
	Typography,
	Link,
	Avatar,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../../../dist/screenshot-without-bg.png";

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
	title: {
		flexGrow: 1,
	},
	drawer: {
		[`& .MuiDrawer-paperAnchorLeft`]: {
			width: "70%",
			maxWidth: 250,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
		},
	},
	navigationCtn: {
		display: "flex",
		flexDirection: "column",
		padding: "10px 30px",
		rowGap: 10,
	},
	navigationItem: {
		textDecoration: "none",
		color: "black",
	},
	accountCtn: {
		rowGap: 5,
	},
	avatar: {
		margin: "0px auto",
		width: theme.spacing(9),
		height: theme.spacing(9),
	},
	logoCtn: {
		width: "50%",
		margin: "auto",
	},
	logoImg: {
		width: "100%",
		margin: "auto",
	},
}));

export default function SideBar() {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleDrawer = () => {
		setOpen(true);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						onClick={handleDrawer}
						color="inherit"
						edge="start"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<IconButton color="inherit" edge="start" aria-label="cart">
						<ShoppingCartIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer
				open={open}
				onClose={() => setOpen(false)}
				className={classes.drawer}
			>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					align="center"
					height="100%"
					bgcolor="primary.main"
					className={classes.accountCtn}
				>
					<Avatar alt="profilePicture" className={classes.avatar}>
						<CameraAltIcon />
					</Avatar>
					<Typography variant="h2" color="textSecondary">
						NOMBRE
					</Typography>
					<Link href="#">
						<Typography variant="h4" color="textPrimary">
							Mi Cuenta
						</Typography>
					</Link>
				</Box>

				<Box className={classes.navigationCtn}>
					<NavLink to="/" className={classes.navigationItem}>
						Inicio
					</NavLink>
					<NavLink
						to="/menu-principal"
						className={classes.navigationItem}
					>
						Menú Principal
					</NavLink>
					<NavLink to="/" className={classes.navigationItem}>
						Mi Carrito
					</NavLink>
					<NavLink to="/" className={classes.navigationItem}>
						Historial de Compras
					</NavLink>
					<NavLink to="/" className={classes.navigationItem}>
						Invitá a tus amigos
					</NavLink>
					<NavLink to="/ayuda" className={classes.navigationItem}>
						Ayuda
					</NavLink>
					<NavLink to="/nosotros" className={classes.navigationItem}>
						Nosotros
					</NavLink>
					<NavLink to="/login" className={classes.navigationItem}>
						Registrate
					</NavLink>
					<NavLink to="/" className={classes.navigationItem}>
						Cerrar Sesión
					</NavLink>
				</Box>

				<Box className={classes.logoCtn}>
					<img src={Logo} className={classes.logoImg}></img>
				</Box>
			</Drawer>
		</div>
	);
}
