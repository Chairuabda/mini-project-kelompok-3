/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import {
	Image,
	Flex,
	Card,
	Box,
	Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const ThisCardEvent = (props) => {
	const [event, setEvent] = useState([]);
	const navigate = useNavigate();

	const dataEvent = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8080/event?categoryId=${props.categoryId}&cityId=${props.cityId}`
			);
			setEvent(response.data.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		dataEvent();
	}, [props.categoryId, props.cityId]);

	return (
		<Grid
			templateColumns={{
				sm: "repeat(2, 1fr)",
				md: "repeat(2, 1fr)",
				xl: "repeat(4, 1fr)",
			}}
			h={"fit-content"}
			gap={{base: 3, lg: 6}}
			w={{ base: "55%", sm: "67%", md: "80%", lg: "75%" }}
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
							onClick={() => navigate(`/event/${data.id}`)}
						>
							<Box
								backgroundPosition={"center"}
								backgroundSize={"cover"}
								backgroundRepeat={"no-repeat"}
								h={"214px"}
							>
								<Image
									src={`http://localhost:8080/uploads/banner/${data?.banner}`}
								/>
							</Box>
							<Flex
								direction={"column"}
								h={"full"}
								p={"0px 15px 10px 15px"}
								justify={"space-between"}
							>
								<Box
									display={"flex"}
									flexDirection={"column"}
									gap={3}
								>
									<Box h={"40px"} overflow={"hidden"}>
										{data.title}
									</Box>
									<Box color={"gray"} fontSize={"13px"}>
										{data.start_date} - {data.end_date}
									</Box>
									<Box fontWeight={700} color={"home.primary"}>
										{/* {data.price} */}
										Rp. 500.000
									</Box>
								</Box>

								<hr />
								<Box
									display={"flex"}
									alignItems={"center"}
									gap={3}
								>
									{data?.user?.avatar ? (
										<Image
											src={`http://localhost:8080/uploads/avatar/${data.user?.avatar}`}
											w={"40px"}
											h={"40px"}
											borderRadius={"50%"}
										/>
									) : (
										<Avatar
											src="https://bit.ly/broken-link"
											size={"sm"}
										/>
									)}

									<Box>{data.user.fullname}</Box>
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
