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
	},
	prevNavbar: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.background.default,
	},
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		marginBottom: 50,
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
		position: "fixed",
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
		color: theme.palette.error.main,
		fontSize: "1.6rem",
		marginBottom: 15,
	},
	nextButton: {
		backgroundColor: theme.palette.error.main,
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
}));

const PlateView = () => {
	const classes = useStyles();

	let totalPrice = 500;

	let notAvailable = true;

	const [state, setState] = React.useState({
		checkedA: false,
		checkedB: true,
	});

	const [open, setOpen] = React.useState(false);

	const [total, setTotal] = React.useState({
		counter: 1,
		amount: 10,
		price: 500,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const handleSum = () => {
		setTotal((prevTotal) => {
			return {
				counter: prevTotal.counter + 1,
				amount: prevTotal.amount + 10,
				price: 500 * (prevTotal.counter + 1),
			};
		});
	};

	const handleSubstraction = () => {
		if (total.counter > 1) {
			setTotal((prevTotal) => {
				return {
					counter: prevTotal.counter - 1,
					amount: prevTotal.amount - 10,
					price: 500 * (prevTotal.counter - 1),
				};
			});
		}
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
							<Typography>{total.counter}</Typography>
							<Button
								className={classes.counterButton}
								color="secondary"
								onClick={handleSum}
							>
								+
							</Button>
							<Typography>{total.amount} piezas</Typography>
						</Box>

						<Typography>{total.price}</Typography>
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
						<Box className={classes.extrasOptions}>
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
										checkedIcon={
											notAvailable ? ( //notAvailable es una variable temporal, sustituir por lo que traiga el back
												<ClearRoundedIcon />
											) : (
												<CheckBoxOutlinedIcon />
											)
										}
										color="primary"
										name="checkedB"
									/>
								}
								label="Jengibre"
							/>
							{notAvailable ? ( //notAvailable es una variable temporal, sustituir por lo que traiga el back}
								<Typography color="secondary">
									No disponible
								</Typography>
							) : (
								" "
							)}
						</Box>
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
				{document.body.scrollHeight > document.body.offsetHeight && (
					<ExpandMore position={classes.expandSection} />
				)}

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
						<Typography className={classes.bold}>
							{totalPrice}
						</Typography>
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
	Logo: PropTypes.node,
	modalTitle: PropTypes.string,
	open: PropTypes.bool,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
	titleStyle: PropTypes.object,
	paragraphText: PropTypes.node,
	nextButtonText: PropTypes.string,
	prevButtonText: PropTypes.string,
	buttonStyle: PropTypes.object,
};

export default PlateView;
