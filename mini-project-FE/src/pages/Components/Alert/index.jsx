import { Alert, AlertIcon } from "@chakra-ui/react";

export const AllAlert = () => {
	return (
		<Alert status="success">
			<AlertIcon />
			Data uploaded to the server. Fire on!
		</Alert>
	);
};
