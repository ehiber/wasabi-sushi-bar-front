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
	Avatar,
	FormGroup,
	Checkbox,
} from "@material-ui/core";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
// import CancelPresentationRoundedIcon from "@material-ui/icons/CancelPresentationRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import Sidebar from "../../common/SideBar";
import PrevNavbar from "../../common/PrevNavbar";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "../../../../dist/screenshot-without-bg.png";
import ModalBase from "../Auth/ModalBase";
import ExpandMore from "../../common/ExpandMore";

const ModalLogInText = () => {
	return (
		<DialogContentText id="alert-dialog-description">
			Debés iniciar sesión para realizar tu pedido.
		</DialogContentText>
	);
};

const useStyles = makeStyles((theme) => ({
	bold: {
		fontWeight: 600,
	},
	root: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: theme.palette.background.paper,
		position: "relative",
		height: "100%",
	},
	prevNavbar: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.background.default,
	},
	mainContainer: {
		display: "flex",
		flexDirection: "column",
	},
	headContainer: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.common.white,
		textAlign: "center",
		padding: "10px 16px",
	},
	avatar: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		margin: "auto",
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: theme.palette.common.white,
	},
	description: {
		marginTop: 10,
		marginBottom: 20,
	},
	amountItemContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	counterContainer: {
		display: "flex",
		alignItems: "center",
		columnGap: 20,
	},
	counterButton: {
		backgroundColor: theme.palette.background.paper,
		width: 25,
		height: 25,
		borderRadius: 5,
		padding: 0,
		minWidth: "unset",
	},
	formContainer: {
		padding: "10px 16px",
	},
	formLabel: {
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	extrasOptions: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	bottomContainer: {
		position: "sticky",
		bottom: 0,
		width: "100%",
	},
	expandSection: {
		bottom: "unset !important",
	},
	shoppingTotalCtn: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: theme.palette.primary.main,
	},
	shoppingButton: {
		padding: "12px 8px",
		"& .MuiButton-label": {
			backgroundColor: theme.palette.background.default,
			color: theme.palette.common.white,
			padding: "0px 15px",
			borderRadius: 5,
		},
	},
	modalTitle: {
		color: "#ff5c35",
		fontSize: "1.6rem",
		marginBottom: 15,
	},
	nextButton: {
		backgroundColor: "#ff5c35",
		color: theme.palette.common.white,
		width: "100%",
		borderRadius: 20,
	},
}));

const PlateView = () => {
	const classes = useStyles();

	const [state, setState] = React.useState({
		checkedA: false,
		checkedB: true,
	});

	const [open, setOpen] = React.useState(false);

	const [counter, setCounter] = React.useState(1);

	const [amount, setAmount] = React.useState(10);

	const [price, setPrice] = React.useState(500);

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const handleSum = () => {
		setCounter((prevCounter) => prevCounter + 1);
		setAmount((prevAmount) => prevAmount + 10);
		setPrice((prevPrice) => prevPrice * counter);
	};

	const handleSubstraction = () => {
		setCounter((prevCounter) => prevCounter - 1);
		setAmount((prevAmount) => prevAmount - 10);
		setPrice((prevPrice) => (counter - 1) * prevPrice);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box className={classes.root}>
			<Box>
				<Sidebar />
				<PrevNavbar
					navbarText={"ALASKA"}
					previewButton={true}
					linkStyle={classes.prevNavbar}
				/>
			</Box>

			<Box className={classes.mainContainer}>
				<Container className={classes.headContainer}>
					<Avatar
						alt="food"
						src="https://picsum.photos/200/300"
						className={classes.avatar}
					/>
					<Typography className={classes.description}>
						Tradicional roll con salmón, queso crema, palta,
						envuelto con arroz y topping de ajonjolí
					</Typography>

					<Box className={classes.amountItemContainer}>
						<Box className={classes.counterContainer}>
							<Button
								className={classes.counterButton}
								color="secondary"
								onClick={handleSubstraction}
							>
								-
							</Button>
							<Typography>{counter}</Typography>
							<Button
								className={classes.counterButton}
								color="secondary"
								onClick={handleSum}
							>
								+
							</Button>
							<Typography>{amount} piezas</Typography>
						</Box>

						<Typography>{price}</Typography>
					</Box>
				</Container>

				<FormControl
					component="fieldset"
					className={classes.formContainer}
				>
					<Typography variant="h5" className={classes.formLabel}>
						INCLUIR (sin costo adicional)
					</Typography>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									checked={state.checkedA}
									onChange={handleChange}
									checkedIcon={<CheckBoxOutlinedIcon />}
									name="checkedA"
									color="primary"
								/>
							}
							label="Wasabi"
						/>
						<FormControlLabel
							control={
								<Checkbox
									disabled
									inputProps={{
										"aria-label":
											"disabled checked checkbox",
									}}
									checked={state.checkedB}
									onChange={handleChange}
									checkedIcon={<ClearRoundedIcon />}
									// checkedIcon={
									// 	disabled ? (
									// 		<CancelPresentationRoundedIcon />
									// 	) : (
									// 		<CheckBoxOutlinedIcon />
									// 	)
									// } Activar cuando tengamos una variable que nos diga si esta disponible el producto
									color="primary"
									name="checkedB"
								/>
							}
							label="Jengibre"
						/>
					</FormGroup>
				</FormControl>

				<FormControl
					component="fieldset"
					className={classes.formContainer}
				>
					<Typography variant="h5" className={classes.formLabel}>
						EXTRAS
					</Typography>
					<FormGroup>
						<Box className={classes.extrasOptions}>
							<FormControlLabel
								control={
									<Checkbox
										checked={state.checkedC}
										onChange={handleChange}
										name="checkedC"
										checkedIcon={<CheckBoxOutlinedIcon />}
										color="primary"
									/>
								}
								label="Salsa Fuji"
							/>

							<Typography className={classes.bold}>10</Typography>
						</Box>

						<Box className={classes.extrasOptions}>
							<FormControlLabel
								control={
									<Checkbox
										checked={state.checkedD}
										onChange={handleChange}
										name="checkedD"
										checkedIcon={<CheckBoxOutlinedIcon />}
										color="primary"
									/>
								}
								label="Salsa Soya"
							/>

							<Typography className={classes.bold}>10</Typography>
						</Box>
					</FormGroup>
				</FormControl>
			</Box>

			<Box className={classes.bottomContainer}>
				<ExpandMore position={classes.expandSection} />

				<Container className={classes.shoppingTotalCtn}>
					<Button
						className={classes.shoppingButton}
						onClick={handleOpen}
					>
						AÑADIR
					</Button>
					<Box
						width="35%"
						display="flex"
						justifyContent="space-between"
					>
						<Typography>TOTAL</Typography>
						<Typography className={classes.bold}>500</Typography>
					</Box>
				</Container>
			</Box>

			<ModalBase
				open={open}
				onClose={handleClose}
				Logo={Logo}
				modalTitle="¡Esperá! No has iniciado sesión"
				titleStyle={classes.modalTitle}
				paragraphText={<ModalLogInText />}
				nextButtonText="INICIAR SESIÓN"
				prevButtonText="REGISTRATE"
				aria-labelledby="Confirmación"
				aria-describedby="Mensaje de confirmación de compra"
				buttonStyle={classes.nextButton}
			/>
		</Box>
	);
};

PlateView.propTypes = {
	position: PropTypes.object,
};

export default PlateView;
