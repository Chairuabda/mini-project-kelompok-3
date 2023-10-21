import { Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { Carousel } from "./Components/Carousel";
import { CarouselKategori } from "./Components/CarouselKategori";

export const Home = () => {
	return (
		<Box bgColor="white" maxW={"100vw"}>
			<Navbar />
			<Carousel />
			<CarouselKategori />
			
		</Box>
	);
};
