import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
} from "@chakra-ui/react";

import LokasiDropBar from "./components/DropBar/locationdrop";
import KategoriDropBar from "./components/DropBar/kategorieventdrop";
import WaktuDropBar from "./components/DropBar/waktudropbar";
import TiketDropBar from "./components/DropBar/tiketkategoridrop";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ThisCardEvent } from "./components/cardevent";
import { ChevronRightIcon } from "@chakra-ui/icons";

// import axios from "axios";
// import { useFormik } from "formik";
import { useState } from "react";

export const Discovery = () => {
	const [dataLocation, setDataLocation] = useState("");
	const [dataCategory, setDataCategory] = useState("");

	return (
		<Box w={"100vw"} minH={"100vh"} bgColor={"#F3F3F3"}>
			<Navbar />

			<Box
				w={"full"}
				display={"flex"}
				pt={"90px"}
				flexDirection={"column"}
			>
				<Breadcrumb
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
					mb={"20px"}
					px={"40px"}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink>Discovery</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>

				<Flex
					w={"full"}
					mb={"100px"}
					gap={"10"}
					justifyContent={"center"}
				>
					<Box display={"flex"} flexDirection={"column"} gap={5}>
						<LokasiDropBar setDataLocation={setDataLocation} />

						<KategoriDropBar setDataCategory={setDataCategory} />

						<WaktuDropBar />

						<TiketDropBar />
					</Box>

					<ThisCardEvent
						cityId={dataLocation}
						categoryId={dataCategory}
					/>
				</Flex>
			</Box>

			<Footer />
		</Box>
	);
};
