import {
	Box,
	Image,
	Stack,
	Heading,
	Text,
	Flex,
	Card,
	CardBody,
	Button,
} from "@chakra-ui/react";
import {
	HiOutlineCalendarDays,
	HiOutlineMapPin,
} from "react-icons/hi2";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsShare } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import EventIlustration from "../../../../../.../../../../assets/Event-Illustration.png";
import { useNavigate } from "react-router-dom";

export const EventAktif = () => {
	const [event, setEvent] = useState();
	const user = useSelector((state) => state.AuthReducer.user);
	const navigate = useNavigate()

	const dataEvent = async (idUser) => {
		try {
			const response = await axios.get(
				`http://localhost:8080/event/user/${idUser}`
			);
			setEvent(response?.data?.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		dataEvent(user.id);
	}, [user.id]);

	return (
		<Box
			height={"437px"}
			overflow={"auto"}
			pb={0}
			scrollPadding={"20px"}
			display={"flex"}
			flexDirection={"column"}
			gap={5}
		>
			{event?.length > 0 ? (
				event?.map((data, index) => {
					return (
						<Card
							direction={{ base: "column", sm: "row" }}
							overflow="hidden"
							variant="outline"
							key={index}
							h={"200px"}
						>
							<Image
								objectFit="cover"
								src={`http://localhost:8080/uploads/banner/${data?.banner}`}
								alt="Caffe Latte"
							/>

							<Stack w={"full"}>
								<CardBody
									display={"flex"}
									justifyContent={"space-between"}
									p={"30px"}
									w={"full"}
								>
									<Flex direction={"column"} gap={3}>
										<Heading size="md">{data.title}</Heading>

										<Text py="2" h={"50px"} overflow={"hidden"}>
											{data?.description}
										</Text>
										<Flex gap={10}>
											<Flex
												align={"center"}
												gap={2}
												color={"grey"}
												fontSize={"14px"}
											>
												<HiOutlineCalendarDays />
												{new Date(
													data?.start_date
												).toDateString()} -{" "}
												{new Date(data?.end_date).toDateString()}
											</Flex>
											<Flex>
												<Flex
													align={"center"}
													gap={2}
													color={"grey"}
													fontSize={"14px"}
												>
													<IoTimeOutline />
													{data?.start_time} - {data?.end_time}
												</Flex>
											</Flex>
										</Flex>
										<Flex
											align={"center"}
											gap={2}
											color={"grey"}
											fontSize={"14px"}
										>
											<HiOutlineMapPin />
											{data?.address}
										</Flex>
									</Flex>
									<Flex align={"center"} justify={"center"} gap={5}>
										<Box>
											<Button
												size={"xm"}
												display={"flex"}
												flexDirection={"column"}
												p={"15px 20px"}
												bgColor={"rgba(255, 46, 99,.08)"}
												border={"1px solid"}
												borderColor={"home.primary"}
												color={"home.primary"}
												gap={2}
												w={"80px"}
											>
												<BiEdit />
												<Text fontWeight={300}>Edit</Text>
											</Button>
										</Box>
										<Box>
											<Button
												size={"xm"}
												display={"flex"}
												flexDirection={"column"}
												p={"15px 20px"}
												bgColor={"rgba(255, 46, 99,.08)"}
												border={"1px solid"}
												borderColor={"home.primary"}
												color={"home.primary"}
												gap={2}
												w={"80px"}
											>
												<HiOutlineSpeakerphone />
												<Text fontWeight={300}>Promo</Text>
											</Button>
										</Box>
										<Box>
											<Button
												size={"xm"}
												display={"flex"}
												flexDirection={"column"}
												p={"15px 20px"}
												bgColor={"rgba(255, 46, 99,.08)"}
												border={"1px solid"}
												borderColor={"home.primary"}
												color={"home.primary"}
												gap={2}
												w={"80px"}
											>
												<BsShare />
												<Text fontWeight={300}>Share</Text>
											</Button>
										</Box>
									</Flex>
								</CardBody>
							</Stack>
						</Card>
					);
				})
			) : (
				<Flex
					w={"full"}
					h={"full"}
					justify={"center"}
					align={"center"}
				>
					<Flex direction={"column"} gap={10}>
						<Image src={EventIlustration} w={"250px"}></Image>
						<Flex direction={"column"} justify={"center"} align={"center"} gap={5}>
							<Text fontSize={"24px"}>Belum ada event</Text>
							<Button bgColor={"home.primary"} color={"white"} onClick={(() => navigate("/event"))}>Buat Event</Button>
						</Flex>
					</Flex>
				</Flex>
			)}
		</Box>
	);
};
