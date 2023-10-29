import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "../../Components/Logo";
import { ImgSection } from "../components/img-section";
import { RegisterSection } from "./register-section";

export const Register = () => {
	return (
		<Flex
			w={"100vw"}
			minH={"100vh"}
			justify={"center"}
			align={"center"}
			color={"black"}
			direction={"column"}
		>
			<Logo posisi="absolute"/>
			<Box
				w="60%"
				display={"flex"}
				alignItems={"center"}
				// bgColor={"home.primary"}
				boxShadow={"0px 0px 13px 10px rgba(255, 46, 99, 0.2)"}
				borderRadius={"10px"}
				h={"450px"}
			>
				<ImgSection />

				<RegisterSection />
			</Box>
		</Flex>
	);
};
