import {
	Box,
	Card,
	Flex,
	Grid,
	Image,
	Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export const FeaturedEventHome = () => {
	const [event, setEvent] = useState();

	const dataEvent = async () => {
		try {
			const response = await axios.get("http://localhost:3000/event");
			// for (let i in response.data) {
			// 	setEvent(response.data[i]);
			// }
			setEvent(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		dataEvent();
	}, []);

	return (
		<Box display={"flex"} justifyContent={"center"} mb={"50px"}>
			<Grid templateColumns="repeat(4, 1fr)" gap={6} w={"75%"}>
				{event?.length > 0 ? (
					event.map((data, index) => {
						return (
							<Card
								key={index}
								bgColor={"whiteAlpha.600"}
								p={"0px 0px 20px 0px"}
								gap={2}
								fontSize={"14px"}
								h={"350px"}
								overflow={"hidden"}
								cursor={"pointer"}
								outline={"1px solid rgba(0, 0, 0, 0.1)"}
								_hover={{boxShadow: '0px 0px 13px 10px rgba(0, 0, 0, 0.1)', transform: "scale(1.01)"}}
							>
								<Box backgroundImage={data.image} backgroundPosition={"center"} backgroundSize={"contain"} h={"250px"}></Box>
								<Flex direction={"column"} h={"full"} p={"0px 15px 10px 15px"}>
									<Box
										display={"flex"}
										flexDirection={"column"}
										gap={3}
									>
										<Box>{data.title}</Box>
										<Box>
											{data.start_date} - {data.end_date}
										</Box>
										<Box fontWeight={700}>{data.price}</Box>
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
											src={data.image_eo}
											w={"40px"}
											h={"40px"}
											borderRadius={"50%"}
										/>
										<Box>{data.eo}</Box>
									</Box>
								</Flex>
							</Card>
						);
					})
				) : (
					<></>
				)}
			</Grid>
		</Box>
	);
};
