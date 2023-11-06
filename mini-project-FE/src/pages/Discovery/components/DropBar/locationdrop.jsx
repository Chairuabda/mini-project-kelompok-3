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

	const dataLocation = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8080/event/location`
			);
			setLocation(response.data?.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		dataLocation();
	}, []);

	return (
		<Box
			padding={"21px"}
			borderRadius="9px"
			background="#FFF"
			boxShadow="md"
			w={"272px"}
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
							<Box as="span" flex="1" textAlign="left">
								Lokasi
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</Text>
					<AccordionPanel pb={4}>
						<Input placeholder="Cari Lokasi" mb={"20px"} />
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
											{data.city}
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
