import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
	Box,
	Container,
	Typography,
	List,
	ListItem,
	ListItemText,
	Link,
	FormControl,
	RadioGroup,
	Radio,
	FormControlLabel,
	TextField,
	Button,
	DialogContentText,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Sidebar from "../../common/SideBar";
import PrevNavbar from "../../common/PrevNavbar";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "../../../../dist/screenshot-without-bg.png";
import ModalBase from "../../modules/Auth/ModalBase";

const data = {
	products: [
		{
			id: "1",
			name: "ALASKA",
			price: 500,
		},
		{
			id: "2",
			name: "TÉ VERDE",
			price: 10,
		},
		{
			id: "3",
			name: "WASABI",
			price: 5,
		},
	],
	delivery: 20,
};

const ModalConfirmationText = () => {
	return (
		<DialogContentText id="alert-dialog-description">
			Tu pedido ha sido recibido. Podés revisar la orden en tu Historial
			de Compras.
		</DialogContentText>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: theme.palette.background.paper,
		position: "relative",
		height: "100%",
	},
	prevNavbar: {
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.background.paper,
	},
	mainContainer: {
		height: "100%",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
	},
	listContainer: {
		borderBottomWidth: "1px",
		borderBottomStyle: "solid",
		borderBottomColor: theme.palette.text.secondary,
		paddingTop: "2px",
		paddingBottom: "2px",
	},
	plateAmout: {
		flex: "0 0 40px",
		"& span": {
			fontWeight: "bold",
		},
	},
	platePrice: {
		textAlign: "right",
		paddingRight: 10,
		"& span": {
			fontWeight: "bold",
		},
	},
	deletePlate: {
		display: "flex",
		alignItems: "center",
		color: theme.palette.text.secondary,
	},
	deliveryText: {
		padding: "0px 40px",
	},
	deliveryPrice: {
		textAlign: "right",
		paddingRight: "34px",
		"& span": {
			fontWeight: "bold",
		},
	},
	totalContainer: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		paddingTop: 2,
		paddingBottom: 2,
		"& span": {
			fontSize: "1.2rem",
			fontWeight: 900,
		},
	},
	totalPriceText: {
		fontWeight: "bold",
		padding: "0px 40px",
	},
	totalPrice: {
		textAlign: "right",
		paddingRight: "34px",
	},
	formContainer: {
		width: "100%",
		marginTop: 10,
	},
	FormLabel: {
		color: theme.palette.text.primary,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 5,
	},
	radioGroup: {
		"& svg": {
			color: theme.palette.primary.main,
		},
	},
	textField: {
		"& .MuiOutlinedInput-root": {
			borderRadius: 0,
		},
		"& .MuiOutlinedInput-input": {
			padding: "10px 14px",
		},
	},
	principalBtn: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.primary,
		width: "100%",
		borderRadius: 20,
		margin: "10px 0px 5px",
	},
	secondaryBtn: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.common.white,
		width: "100%",
		borderRadius: 20,
		margin: "5px 0px 10px",
	},
	modalTitle: {
		color: theme.palette.primary.main,
		fontSize: "1.6rem",
		marginBottom: 15,
	},
	nextButton: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.black,
		width: "100%",
		borderRadius: 20,
	},
}));

const Cart = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState("transfer");
	const [open, setOpen] = React.useState(false);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box className={classes.root}>
			<Sidebar />
			<PrevNavbar
				navbarText={"MI CARRITO"}
				previewButton={true}
				linkStyle={classes.prevNavbar}
			/>

			<Container className={classes.mainContainer}>
				<Box>
					<List component="nav" aria-label="primary">
						{data.products.map((item) => {
							return (
								<ListItem
									key={item.id}
									className={classes.listContainer}
								>
									<ListItemText
										primary="1"
										className={classes.plateAmout}
									/>
									<ListItemText
										primary={item.name}
										className={classes.plateTitle}
									/>
									<ListItemText
										primary={item.price}
										className={classes.platePrice}
									/>
									<Link
										href="#"
										className={classes.deletePlate}
									>
										<CloseIcon />
									</Link>
								</ListItem>
							);
						})}

						<ListItem>
							<ListItemText
								primary="DELIVERY"
								className={classes.deliveryText}
							/>
							<ListItemText
								primary={data.delivery}
								className={classes.deliveryPrice}
							/>
						</ListItem>

						<ListItem className={classes.totalContainer}>
							<ListItemText
								primary="TOTAL"
								className={classes.totalPriceText}
							/>
							<ListItemText
								primary={data.delivery}
								className={classes.totalPrice}
							/>
						</ListItem>
					</List>

					<FormControl
						component="fieldset"
						className={classes.formContainer}
					>
						<Typography variant="h5" className={classes.FormLabel}>
							MÉTODO DE PAGO
						</Typography>
						<RadioGroup
							aria-label="payment"
							name="payment1"
							value={value}
							onChange={handleChange}
							className={classes.radioGroup}
						>
							<FormControlLabel
								value="transfer"
								control={
									<Radio
										color="primary"
										checkedIcon={<CheckCircleOutlineIcon />}
									/>
								}
								label="TRANSFERENCIA"
							/>
							<FormControlLabel
								value="mercado-pago"
								control={
									<Radio
										color="primary"
										checkedIcon={<CheckCircleOutlineIcon />}
									/>
								}
								label="MERCADO PAGO"
							/>
							<FormControlLabel
								value="cash"
								control={
									<Radio
										color="primary"
										checkedIcon={<CheckCircleOutlineIcon />}
									/>
								}
								label="EFECTIVO"
							/>
						</RadioGroup>
						{value == "cash" ? (
							<TextField
								className={classes.textField}
								margin="none"
								placeholder="¿CON CUÁNTO VAS A PAGAR?*"
								variant="outlined"
								inputProps={{ "aria-label": "bare" }}
							/>
						) : null}
					</FormControl>
				</Box>

				<Box>
					<Button
						className={classes.principalBtn}
						onClick={handleOpen}
					>
						CONFIRMAR
					</Button>
					<Button className={classes.secondaryBtn}>
						SEGUIR COMPRANDO
					</Button>
				</Box>
			</Container>

			<ModalBase
				open={open}
				onClose={handleClose}
				Logo={Logo}
				modalTitle="¡Gracias por tu compra!"
				titleStyle={classes.modalTitle}
				paragraphText={<ModalConfirmationText />}
				nextButtonText="VER HISTORIAL"
				prevButtonText="VOLVER AL MENÚ"
				aria-labelledby="Confirmación"
				aria-describedby="Mensaje de confirmación de compra"
				buttonStyle={classes.nextButton}
			/>
		</Box>
	);
};

Cart.propTypes = {
	navbarText: PropTypes.string,
	previewButton: PropTypes.bool,
	linkStyle: PropTypes.object,
};

export default Cart;
