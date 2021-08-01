import React, { useState } from "react";
import PropTypes from "prop-types";
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
	DialogContentText,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../../../dist/screenshot-without-bg.png";
import ModalBase from "../modules/Auth/ModalBase";

const ModalShareText = () => {
	return (
		<DialogContentText id="alert-dialog-description">
			Enviá una invitación a tus amigos para que disfruten de nuestra
			comida.
		</DialogContentText>
	);
};

const ModalLogOut = () => {
	return <DialogContentText>Tu sesión se ha cerrado</DialogContentText>;
};

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
	greenModalTitle: {
		color: theme.palette.primary.dark,
		fontSize: "1.6rem",
		marginBottom: 15,
	},
	yellowModalTitle: {
		color: "#ffb71b",
		fontSize: "1.6rem",
		marginBottom: 15,
	},
	greenNextButton: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.common.white,
		width: "100%",
		borderRadius: 20,
		padding: "6px 8px",
		fontSize: "1rem",
		fontWeight: "bold",
		lineHeight: 1.75,
		"&:hover": {
			textDecoration: "none",
		},
	},
	yellowNextButton: {
		backgroundColor: "#ffb71b",
		color: theme.palette.common.black,
		width: "100%",
		borderRadius: 20,
		padding: "6px 8px",
		fontSize: "1rem",
		fontWeight: "bold",
		lineHeight: 1.75,
		"&:hover": {
			textDecoration: "none",
		},
	},
}));

export default function SideBar() {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [openShareModal, setOpenShareModal] = React.useState(false);
	const [openLogOutModal, setOpenLogOutModal] = React.useState(false);

	const handleDrawer = () => {
		setOpen(true);
	};

	const shareLink = () => {
		setOpenShareModal(true);
		setOpen(false);
	};

	const logOutLink = () => {
		setOpenLogOutModal(true);
		setOpen(false);
	};

	const shareReturn = () => {
		setOpenShareModal(false);
		setOpen(true);
	};

	const logOutReturn = () => {
		setOpenLogOutModal(false);
		setOpen(true);
	};

	return (
		<Box className={classes.root}>
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
					<Link href="/mi-cuenta">
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
					<NavLink
						to="/mi-carrito"
						className={classes.navigationItem}
					>
						Mi Carrito
					</NavLink>
					<NavLink to="/historial" className={classes.navigationItem}>
						Historial de Compras
					</NavLink>
					<NavLink
						to="#"
						onClick={shareLink}
						className={classes.navigationItem}
					>
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
					<NavLink
						to="#"
						onClick={logOutLink}
						className={classes.navigationItem}
					>
						Cerrar Sesión
					</NavLink>
				</Box>

				<Box className={classes.logoCtn}>
					<img src={Logo} className={classes.logoImg}></img>
				</Box>
			</Drawer>
			{openShareModal ? (
				<ModalBase
					open={openShareModal}
					// onOpen={handleOpen}
					// onClose={handleClose}
					Logo={Logo}
					onClose={shareReturn}
					modalTitle="¡Invitá a tus amigos!"
					titleStyle={classes.greenModalTitle}
					paragraphText={<ModalShareText />}
					nextButtonText="COMPARTIR"
					prevButtonText="VOLVER AL MENÚ"
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					buttonStyle={classes.greenNextButton}
				/>
			) : openLogOutModal ? (
				<ModalBase
					open={openLogOutModal}
					// onOpen={handleOpen}
					// onClose={handleClose}
					Logo={Logo}
					onClose={logOutReturn}
					modalTitle="¡Nos vemos pronto!"
					titleStyle={classes.yellowModalTitle}
					paragraphText={<ModalLogOut />}
					nextButtonText="VOLVER A INICIAR SESIÓN"
					prevButtonText="IR AL MENÚ PRINCIPAL"
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					buttonStyle={classes.yellowNextButton}
				/>
			) : null}
		</Box>
	);
}

SideBar.propTypes = {
	Logo: PropTypes.node,
	modalTitle: PropTypes.string,
	open: PropTypes.bool,
	// onOpen: PropTypes.func,
	onClose: PropTypes.func,
	titleStyle: PropTypes.object,
	paragraphText: PropTypes.node,
	nextButtonText: PropTypes.string,
	prevButtonText: PropTypes.string,
	buttonStyle: PropTypes.object,
};
