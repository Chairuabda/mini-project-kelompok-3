import { Box, Input, Text } from "@chakra-ui/react";

export default function WaktuDropBar() {
	return (
		<Box
			padding={"29px 37px"}
			borderRadius="9px"
			background="#FFF"
			boxShadow="md"
			w={"272px"}
			display={"flex"}
			justifyContent={"center"}
			flexDirection={"column"}
			gap={3}

		>
			<Text fontWeight={500}>Waktu</Text>
			<Input size="md" type="date" />

			<Input size="md" type="date" />
		</Box>
	);
}
