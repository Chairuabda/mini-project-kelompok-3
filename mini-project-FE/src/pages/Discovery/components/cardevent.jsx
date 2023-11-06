/* eslint-disable react/prop-types */
import {
	Image,
	Flex,
	Card,
	Spacer,
	Box,
	Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const ThisCardEvent = (props) => {
	const [event, setEvent] = useState();
	console.log(props.cityId);
	const dataEvent = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8080/event?categoryId=${props.categoryId}&cityId=${props.cityId}`
			);
			// const result = response.data.data.map((data) => data.events);
			// const hasil = result.map((data) => {
			// 	if (data.length > 0) return data;
			// });
			setEvent(response.data.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		dataEvent();
	}, [event]);

	return (
		<Grid
			templateColumns={{
				sm: "repeat(2, 1fr)",
				md: "repeat(3, 1fr)",
				xl: "repeat(4, 1fr)",
			}}
			h={"fit-content"}
			gap={6}
			w={{ base: "75%", sm: "87%", md: "80%", lg: "75%" }}
		>
			{event?.length > 0 ? (
				event.map((data, index) => {
					return (
						<Card
							key={index}
							p={"0px 0px 10px 0px"}
							gap={2}
							fontSize={"14px"}
							h={"350px"}
							overflow={"hidden"}
							cursor={"pointer"}
							outline={"1px solid rgba(0, 0, 0, 0.1)"}
							_hover={{
								boxShadow: "0px 0px 13px 10px rgba(0, 0, 0, 0.1)",
								transform: "scale(1.01)",
							}}
						>
							<Box
								// backgroundImage={event.banner}
								backgroundPosition={"center"}
								backgroundSize={"cover"}
								backgroundRepeat={"no-repeat"}
								h={"350px"}
							></Box>
							<Flex
								direction={"column"}
								h={"full"}
								p={"0px 15px 10px 15px"}
							>
								<Box
									display={"flex"}
									flexDirection={"column"}
									gap={3}
								>
									<Box>{data.title}</Box>
									<Box>
										{data.start_date} - {data.end_date}
									</Box>
									<Box fontWeight={700} color={"home.primary"}>
										{data.price}
									</Box>
								</Box>

								<Spacer />
								<hr />
								<Box
									display={"flex"}
									alignItems={"center"}
									gap={3}
									mt={"15px"}
								>
									<Image
										// src={event.image_eo}
										w={"40px"}
										h={"40px"}
										borderRadius={"50%"}
									/>
									<Box>{data.user.username}</Box>
								</Box>
							</Flex>
						</Card>
					);
				})
			) : (
				<></>
			)}
		</Grid>
	);
};