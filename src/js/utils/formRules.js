export const formRules = {
	email: {
		required: "Email is required.",
		pattern: {
			message: "Invalid email format.",
			value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		},
	},
	price: {
		required: "Price is required.",
		pattern: {
			message: "Invalid price format.",
			value: /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/,
		},
	},
	ranchId: {
		required: "Ranch is required.",
	},
	password: {
		required: "Password is required.",
		pattern: {
			message:
				"Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
			value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
		},
	},
	first_name: {
		required: "First name is required.",
	},
	last_name: {
		required: "Last name is required.",
	},
	phone_number: {
		required: "Phone number is required.",
		pattern: {
			message: "Invalid phone number format.",
			value: /^\+[1-9]{1}[0-9]{3,14}$/,
		},
	},
	ranchName: {
		required: "Name of ranch or breading operation is required.",
	},
	description: {
		required: "Ranch description is required.",
	},
	animalCategory: {
		required: "Category is required.",
	},
	breed: {
		required: "Breed is required.",
	},
	uploadImage: {
		required: "Please upload at least one image.",
	},
	animalName: {
		required: "Animal name is required",
	},
	dob: {
		required: "DOB is required",
	},
	registry: {
		required: "Registry number is required",
	},
	association: {
		required: "Association is required",
	},
	animalDescription: {
		required: "Animal is required",
	},
	sire: {
		required: "Sire is required",
	},
	grandSire: {
		required: "Grandsire is required",
	},
	granDam: {
		required: "Grandam is required",
	},
	dam: {
		required: "Dam is required",
	},
};
