export const GenerateRefferalCode = (length) => {
	// let refferalCode = (Math.random() + 1).toString(36).substring(7);
	// return refferalCode;
	let result = "";
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
		counter += 1;
	}
	console.log(result);
};
