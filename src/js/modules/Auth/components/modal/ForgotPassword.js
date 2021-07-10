import React from "react";
import ModalBase from "../../ModalBase";
import { Button } from "@material-ui/core";

const ForgotPassword = ({
	handleClose,
	handleClickOpen,
	paragraphText,
	inputText,
}) => {
	const [show, setShow] = React.useState(false);

	const [open, setOpen] = React.useState(false);

	return (
		<div>
			{show ? (
				<div>
					<ModalBase
						open={open}
						handleClose={handleClose}
						handleClickOpen={handleClickOpen}
						paragraphText={<ModalText />}
						inputText={<ModalInput />}
					/>
					{/* Boton temporal para cambiar el estado y mostrar nuevo modal */}
					<Button></Button>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};

ForgotPassword.propTypes = {
	handleClose: PropTypes.func,
	handleClickOpen: PropTypes.func,
	paragraphText: PropTypes.node,
	inputText: PropTypes.node,
};

export default ForgotPassword;
