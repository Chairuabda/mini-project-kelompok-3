import {
	Box,
	Card,
	Flex,
	Grid,
	Image,
	Spacer,
	Text,
	Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";

export const FeaturedEventHome = () => {
	const [event, setEvent] = useState();

	const dataEvent = async () => {
		try {
			const response = await axios.get("http://localhost:8080/event");
			setEvent(response.data?.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		dataEvent();
	}, []);

	return (
		<Flex
			justify={"center"}
			align={"center"}
			direction={"column"}
			mb={"100px"}
		>
			<Flex
				justify={"start"}
				w={{ base: "75%", sm: "87%", md: "80%", lg: "75%" }}
			>
				<Text
					fontSize={{ base: "20px", md: "32px" }}
					fontWeight={600}
					m={"54px 0px 46px 0px"}
				>
					Featured Event
				</Text>
			</Flex>
			<Grid
				templateColumns={{
					sm: "repeat(2, 1fr)",
					md: "repeat(3, 1fr)",
					xl: "repeat(4, 1fr)",
				}}
				gap={6}
				w={{ base: "75%", sm: "87%", md: "80%", lg: "75%" }}
			>
				{event?.length > 0 ? (
					event.slice(0, 8).map((data, index) => {
						return (
							<Card
								key={index}
								bgColor={"whiteAlpha.600"}
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
									backgroundPosition={"center"}
									backgroundSize={"cover"}
									backgroundRepeat={"no-repeat"}
									h={"350px"}
								>
									<Image
									src={`http://localhost:8080/uploads/banner/${data?.banner}`}
								/>
								</Box>
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
										{data?.user?.avatar ? (
											<Image
												src={`http://localhost:8080/uploads/avatar/${data.user?.avatar}`}
												w={"40px"}
												h={"40px"}
												borderRadius={"50%"}
											/>

										) : (
											<Avatar src="https://bit.ly/broken-link" size={"sm"} />
										)}
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
			<Center mt={"30px"}>
				<Link to="/discovery">
					<Text
						fontSize={{ base: "14px", md: "20px" }}
						fontWeight={600}
						color={"home.primary"}
						textDecoration={"underline"}
					>
						See All Event
					</Text>
				</Link>
			</Center>
		</Flex>
	);
};
