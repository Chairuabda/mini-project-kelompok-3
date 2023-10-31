import { Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { Carousel } from "./Components/Carousel";
import { CarouselKategori } from "./Components/CarouselKategori";
import { FeaturedEventHome } from "./Components/FeaturedEvent";
import { Footer } from "../Components/Footer";
import { JumpTo } from "../Components/Jump";
// import { useEffect } from "react";

// import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<Box bgColor="white" maxW={"100vw"} id="home">
			<Navbar />
			<Carousel />
			<CarouselKategori />
			<FeaturedEventHome />
			<Footer />
			<JumpTo idname="home" />
		</Box>
	);
};
