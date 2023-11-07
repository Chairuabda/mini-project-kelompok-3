const {
	registerService,
	loginService,
	keepLoginService,
	updateService,
} = require("../services/authService");

const registerController = async (req, res) => {
	try {
		const { username, email, password, confirmPassword, fullname } =
			req.body;
		const result = await registerService(
			username,
			email,
			password,
			confirmPassword,
			fullname
		);

		return res.status(200).json({
			message: "Register Success",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

const loginController = async (req, res) => {
	try {
		const { email, password } = req.body;
		const result = await loginService(email, password);
		res.status(200).json({
			message: "Login Success",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

const keepLoginController = async (req, res) => {
	try {
		const { id } = req.user;

		const result = await keepLoginService(id);

		return res.status(200).json({
			message: "Keep Login",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

const updateController = async (req, res) => {
	try {
		const { id } = req.params;
		const { username, email, fullname } = req.body;
		const result = updateService(
			username,
			email,
			fullname,
			req.file?.filename,
			id
		);
		console.log(req.file?.filename);
		res.status(200).json({
			message: "Update User Info",
			data: result
		});
	} catch (err) {
		console.log(err);
		res.status(500).send(err.message);
	}
};

module.exports = {
	registerController,
	loginController,
	keepLoginController,
	updateController,
};
