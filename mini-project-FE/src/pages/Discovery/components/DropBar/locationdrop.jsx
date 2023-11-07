/* eslint-disable react/prop-types */
import {
	Box,
	// Button,
	Flex,
	Input,
	Link,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function LokasiDropBar({ setDataLocation }) {
	const [location, setLocation] = useState();
	const [city, setCity] = useState("");

	const dataLocation = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8080/event/location?city=${city}`
			);
			setLocation(response.data?.data);
			console.log(response.data?.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		dataLocation();
	}, [city]);

	const handelinput = (event) => {
		setCity(event.target.value);
	};

	return (
		<Box
			padding={{ base: "5px", lg: "21px" }}
			borderRadius="9px"
			background="#FFF"
			boxShadow="md"
			w={{ base: "120px", md: "272px" }}
			display={"flex"}
			justifyContent={"center"}
			flexDirection={"column"}
			gap={3}
		>
			<Accordion allowToggle border={"transparent"}>
				<AccordionItem>
					<Text>
						<AccordionButton
							_hover={{
								bgColor: "transparent",
								borderColor: "transparent",
							}}
							_focus={{
								borderColor: "transparent",
								outline: "transparent",
							}}
						>
							<Box
								as="span"
								flex="1"
								textAlign="left"
								fontSize={{ base: "12px", lg: "16px" }}
							>
								Lokasi
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</Text>
					<AccordionPanel pb={4}>
						<Input
							placeholder="Cari Lokasi"
							mb={"20px"}
							onChange={handelinput}
							value={city}
							fontSize={{ base: "12px", lg: "16px" }}
						/>
						<Flex direction={"column"} gap={3} fontSize={"14px"}>
							<Link
								fontWeight={400}
								onClick={() => setDataLocation("")}
							>
								Semua Kota
							</Link>
							{location?.slice(0, 5).map((data, index) => {
								return (
									<Box key={index}>
										<Link
											value={data.id}
											onClick={() => {
												setDataLocation(data.id);
											}}
										>
											<Text fontSize={{ base: "12px", lg: "16px" }}>
												{data.city}
											</Text>
										</Link>
									</Box>
								);
							})}
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
}
