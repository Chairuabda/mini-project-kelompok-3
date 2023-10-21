import { Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { Carousel } from "./Components/Carousel";
import { CarouselKategori } from "./Components/CarouselKategori";
import { FeaturedEventHome } from "./Components/FeaturedEvent";

export const Home = () => {
	return (
		<Box bgColor="white" maxW={"100vw"}>
			<Navbar />
			<Carousel />
			<CarouselKategori />
			<FeaturedEventHome />
		</Box>
	);
};
