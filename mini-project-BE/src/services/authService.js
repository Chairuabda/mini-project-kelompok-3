const { registerQuery, keepLoginQuery } = require("../queries/authQuery");
const { findUserQuery } = require("../queries/userQuery");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerService = async (
	username,
	email,
	password,
	fullname
) => {
	try {
		const check = await findUserQuery({ username, email });
		if (check) throw new Error("Email or username already exist");

        const salt = await bcrypt.genSalt(10);

        const hasPassword = await bcrypt.hash(password, salt)

		const res = await registerQuery(
			username,
			email,
			hasPassword,
			fullname
		);
		return res;
	} catch (err) {
		throw err;
	}
};

const loginService = async (email, password) => {
    try {
        const check = await findUserQuery({email});
        if (!check) throw new Error('Invalid Email');

        const isInvalid = await bcrypt.compare(password, check.password);
        if (!isInvalid) throw new Error("Password is incorrect");

				const payload = {
					id: check.id,
					username: check.username,
					email: check.email,
					password: check.password,
					fullname: check.fullname,
					coin: check.coin,
				}
				const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
					expiresIn: "1hr",
				})

				return {user: check, token}
    } catch (err) {
        throw err
    }
}

const keepLoginService = async (id) => {
	try {
		const res = await keepLoginQuery(id)

		if(!res) throw new Error("User doesnt exist");

		return res
	} catch (err) {
		throw err
	}
} 

module.exports = { registerService, loginService, keepLoginService };
