import { Box, Input, Text } from "@chakra-ui/react";

export default function WaktuDropBar() {
	return (
		<Box
			padding={{base: "15px 10px",lg: "29px 37px"}}
			borderRadius="9px"
			background="#FFF"
			boxShadow="md"
			w={{ base: "120px", md: "272px" }}
			display={"flex"}
			justifyContent={"center"}
			flexDirection={"column"}
			gap={3}

		>
			<Text fontWeight={500} fontSize={{base: "12px", lg: "16px"}}>Waktu</Text>
			<Input size={{base:"xs",md: "md"}} type="date" />

			<Input size={{base:"xs",md: "md"}} type="date" />
		</Box>
	);
}
