import { Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import Carousel from "./Components/Carousel";

export const Home = () => {
	return (
		<Box bgColor="home.primary" w={"100vw"} overflowX={"hidden"}>
			<Navbar />
			<Carousel />
		</Box>
	);
};
