import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	Button,
	AccordionDetails,
	AccordionSummary,
	Accordion,
	DialogContentText,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Sidebar from "../../common/SideBar";
import PrevNavbar from "../../common/PrevNavbar";
import ExpandMore from "../../common/ExpandMore";
import Logo from "../../../../dist/screenshot-without-bg.png";
import ModalBase from "../Auth/ModalBase";

const orders = [
	{
		id: "1",
		date: "01/01/2021",
		status: "EN PROCESO",
		state: "En Camino",
		number: "123456",
		price: 535,
	},
	{
		id: "2",
		date: "01/01/2021",
		status: "ENTREGADO",
		number: "123456",
		price: 535,
	},
	{
		id: "3",
		date: "01/01/2021",
		status: "CANCELADO",
		number: "123456",
		price: 535,
	},
	{
		id: "4",
		date: "01/01/2021",
		status: "ENTREGADO",
		number: "123456",
		price: 535,
	},
	{
		id: "5",
		date: "01/01/2021",
		status: "ENTREGADO",
		number: "123456",
		price: 535,
	},
	{
		id: "6",
		date: "01/01/2021",
		status: "ENTREGADO",
		number: "123456",
		price: 535,
	},
	{
		id: "7",
		date: "01/01/2021",
		status: "ENTREGADO",
		number: "123456",
		price: 535,
	},
	{
		id: "8",
		date: "01/01/2021",
		status: "ENTREGADO",
		number: "123456",
		price: 535,
	},
	{
		id: "9",
		date: "01/01/2021",
		status: "ENTREGADO",
		number: "123456",
		price: 535,
	},
	{
		id: "10",
		date: "01/01/2021",
		status: "ENTREGADO",
		number: "123456",
		price: 535,
	},
];

const ModalCancelVerification = () => {
	return (
		<DialogContentText id="alert-dialog-description">
			Tu orden será cancelada. ¿Deséas continuar?
		</DialogContentText>
	);
};

const ModalCancelText = () => {
	return (
		<DialogContentText id="alert-dialog-description">
			Lamentamos que hayas tenido que cancelar tu orden. ¿Tenés algún
			problema?
		</DialogContentText>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		backgroundColor: theme.palette.background.paper,
		"& .MuiAccordionSummary-content": {
			columnGap: 5,
		},
		"& .MuiAccordion-root.Mui-expanded": {
			margin: 0,
		},
	},
	accordionContainer: {
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.palette.text.secondary,
		"&:first-child": {
			borderRadius: 0,
		},
		"& .MuiAccordionSummary-content.Mui-expanded": {
			margin: "10px 0 0",
		},
		"& .MuiAccordionSummary-expandIcon": {
			transform: "rotate(-90deg)",
		},
		"& .MuiAccordionSummary-expandIcon.Mui-expanded": {
			transform: "rotate(0deg)",
		},
	},
	prevNavbar: {
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.background.paper,
	},
	inProcessSumary: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		"& .MuiAccordionSummary-content": {
			alignItems: "center",
		},
		"& .MuiAccordionSummary-content.Mui-expanded": {
			margin: "20px 0",
		},
	},
	accordionDetails: {
		flexDirection: "column",
		padding: 0,
	},
	listContainer: {
		width: "100%",
		padding: "8px 5px 16px 30px",
	},
	inProcessItem: {
		paddingTop: 0,
		paddingBottom: 0,
	},
	listItem: {
		paddingTop: 0,
		paddingBottom: 0,
		color: theme.palette.text.secondary,
	},
	regularSecondaryText: {
		textAlign: "right",
		"& span": {
			fontWeight: "bold",
		},
	},
	inProcessStatus: {
		textAlign: "right",
		color: theme.palette.primary.main,
		"& span": {
			fontWeight: "bold",
		},
	},
	cancelBtn: {
		backgroundColor: theme.palette.error.main,
		borderRadius: 0,
		padding: 10,
		color: theme.palette.common.white,
	},
	aprovedTitle: {
		color: theme.palette.primary.main,
	},
	deniedTitle: {
		color: theme.palette.error.main,
	},
	errorModalTitle: {
		color: theme.palette.error.main,
		fontSize: "1.6rem",
		marginBottom: 15,
	},
	errorNextButton: {
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
	expandSection: {
		position: "fixed",
		bottom: 0,
	},
}));

export default function ShoppingHistory() {
	const classes = useStyles();

	const [counter, setCounter] = React.useState(0);
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		if (counter == 3) {
			handleClose();
		}
	}, [counter]);

	const handleOpen = () => {
		if (counter == 2) {
			setCounter(3);
		} else {
			setCounter((prevCounter) => prevCounter + 1);
			setOpen(true);
		}
	};

	const handleClose = () => {
		if (counter == 0) {
			setOpen(false);
		} else if (counter == 3) {
			setCounter(0);
		} else {
			setCounter((prevCounter) => prevCounter - 1);
		}
	};

	return (
		<Box className={classes.root}>
			<Sidebar />
			<PrevNavbar
				navbarText={"HISTORIAL DE COMPRAS"}
				previewButton={true}
				linkStyle={classes.prevNavbar}
			/>
			<Box>
				{orders.map((order) => {
					return order.status == "EN PROCESO" ? (
						<Accordion
							key={order.id}
							className={classes.accordionContainer}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon fontSize="large" />}
								aria-controls="panel1a-content"
								id="panel1a-header"
								className={classes.inProcessSumary}
							>
								<AccessTimeIcon />
								<Typography
									variant="h4"
									fontWeight="bold"
									color="inherit"
								>
									{order.status}
								</Typography>
							</AccordionSummary>
							<AccordionDetails
								className={classes.accordionDetails}
							>
								<List className={classes.listContainer}>
									<ListItem className={classes.inProcessItem}>
										<ListItemText primary="Fecha" />
										<ListItemText
											primary={order.date}
											className={
												classes.regularSecondaryText
											}
										/>
									</ListItem>
									<ListItem className={classes.inProcessItem}>
										<ListItemText primary="Estado" />
										<ListItemText
											primary={order.state}
											className={classes.inProcessStatus}
										/>
									</ListItem>
									<ListItem className={classes.inProcessItem}>
										<ListItemText primary="Orden Nº" />
										<ListItemText
											primary={order.number}
											className={
												classes.regularSecondaryText
											}
										/>
									</ListItem>
									<ListItem className={classes.inProcessItem}>
										<ListItemText primary="TOTAL" />
										<ListItemText
											primary={order.price}
											className={
												classes.regularSecondaryText
											}
										/>
									</ListItem>
								</List>
								<Button
									className={classes.cancelBtn}
									onClick={handleOpen}
								>
									CANCELAR ORDEN
								</Button>
							</AccordionDetails>
						</Accordion>
					) : (
						<Accordion
							key={order.id}
							className={classes.accordionContainer}
						>
							<AccordionSummary
								expandIcon={
									<ExpandMoreIcon
										fontSize="large"
										color="inherit"
										className={classes.expandMoreIcon}
									/>
								}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								{order.status == "ENTREGADO" ? (
									<CheckCircleOutlineIcon color="primary" />
								) : (
									<HighlightOffIcon color="error" />
								)}
								<Box>
									<Typography
										className={
											order.status == "ENTREGADO"
												? classes.aprovedTitle
												: classes.deniedTitle
										}
									>
										{order.status}
									</Typography>
									<Typography color="secondary">
										{order.date}
									</Typography>
								</Box>
							</AccordionSummary>

							<AccordionDetails
								className={classes.accordionDetails}
							>
								<List className={classes.listContainer}>
									<ListItem className={classes.listItem}>
										<ListItemText primary="Orden Nº" />
										<ListItemText
											primary={order.number}
											className={
												classes.regularSecondaryText
											}
										/>
									</ListItem>
									<ListItem className={classes.listItem}>
										<ListItemText primary="TOTAL" />
										<ListItemText
											primary={order.price}
											className={
												classes.regularSecondaryText
											}
										/>
									</ListItem>
								</List>
							</AccordionDetails>
						</Accordion>
					);
				})}
			</Box>

			{document.body.scrollHeight > document.body.offsetHeight && (
				<ExpandMore position={classes.expandSection} />
			)}

			{counter == 1 ? (
				<ModalBase
					open={open}
					onOpen={handleOpen}
					onClose={handleClose}
					Logo={Logo}
					modalTitle="¡Paren todo!"
					titleStyle={classes.errorModalTitle}
					paragraphText={<ModalCancelVerification />}
					nextButtonText="SI, CANCELAR ORDEN"
					prevButtonText="NO, VOLVER"
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					buttonStyle={classes.errorNextButton}
				/>
			) : counter == 2 ? (
				<ModalBase
					open={open}
					onOpen={handleOpen}
					onClose={handleClose}
					Logo={Logo}
					modalTitle="Tu orden ha sido cancelada"
					titleStyle={classes.errorModalTitle}
					paragraphText={<ModalCancelText />}
					nextButtonText="SI, NECESITO AYUDA"
					prevButtonText="NO, VOLVER AL MENÚ"
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					buttonStyle={classes.errorNextButton}
				/>
			) : null}
		</Box>
	);
}

ShoppingHistory.propTypes = {
	position: PropTypes.object,
	Logo: PropTypes.node,
	modalTitle: PropTypes.string,
	open: PropTypes.bool,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
	titleStyle: PropTypes.object,
	paragraphText: PropTypes.node,
	inputText: PropTypes.node,
	nextButtonText: PropTypes.string,
	prevButtonText: PropTypes.string,
	buttonStyle: PropTypes.object,
};
