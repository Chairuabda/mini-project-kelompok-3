/* eslint-disable react/prop-types */
import {
	Box,
	Image,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Text,
	Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import {
	HiOutlineCalendarDays,
	HiOutlineMapPin,
} from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";
import { Avatar } from "@chakra-ui/react";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Tiket } from "./components/Tiket";

export const DetailEvent = () => {
	const [event, setEvent] = useState();
	const { id } = useParams();

	const dataEvent = async (id) => {
		try {
			const response = await axios.get(
				`http://localhost:8080/event/detail-event/${id}`
			);
			setEvent(response?.data?.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		dataEvent(id);
	}, [id]);

	return (
		<Box w={"100vw"} minH={"100vh"} bgColor={"#F3F3F3"}>
			<Navbar />
			<Box py={"90px"} px={{base: "10px",md: "80px"}}>
				<Breadcrumb
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="/discovery">
							Discovery
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="#">{event?.title}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<Flex
					h={{md: "409px"}}
					bgColor={"white"}
					borderRadius={"10px"}
					overflow={"hidden"}
					mt={"20px"}
					direction={{base: "column", md: "row"}}
				>
					<Image
						src={`http://localhost:8080/uploads/banner/${event?.banner}`}
						h={"full"}
					/>

					<Box
						p={{base: "30px 30px 30px 30px",md: "50px 50px 50px 80px"}}
						display={"flex"}
						gap={5}
						flexDirection={"column"}
					>
						<Text
							fontSize={"36px"}
							lineHeight={"38px"}
							fontWeight={700}
							h={"80px"}
							overflow={"hidden"}
              display={"flex"}
              // alignItems={"center"}

						>
							{event?.title}
						</Text>
						<Box>
							<Flex
								align={"center"}
								gap={2}
								color={"grey"}
								fontSize={"14px"}
							>
								<HiOutlineCalendarDays />
								{new Date(event?.start_date).toDateString()} -{" "}
								{new Date(event?.end_date).toDateString()}
							</Flex>
						</Box>
						<Box>
							<Flex
								align={"center"}
								gap={2}
								color={"grey"}
								fontSize={"14px"}
							>
								<IoTimeOutline />
								{event?.start_time} - {event?.end_time}
							</Flex>
						</Box>
						<Box>
							<Flex
								align={"center"}
								gap={2}
								color={"grey"}
								fontSize={"14px"}
							>
								<HiOutlineMapPin />
								{event?.address}
							</Flex>
						</Box>
						<Box>
							<Flex
								gap={2}
								color={"grey"}
								fontSize={"12px"}
								direction={"column"}
								mt={"15px"}
							>
								<Text>Diselenggarakan Oleh</Text>
								<Flex
									align={"center"}
									gap={3}
									color={"home.primary"}
									fontSize={"16px"}
									fontWeight={600}
								>
									{event?.user?.avatar ? (
										<Image
											src={`http://localhost:8080/uploads/avatar/${event?.user?.avatar}`}
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
									{event?.user?.fullname}
								</Flex>
							</Flex>
						</Box>
					</Box>
				</Flex>
				<Flex justify={"space-between"} mt={"50px"} direction={{base: "column", md: "row"}} gap={10}>
					<Box
						w={{base: "full", md: "63%"}}
						bgColor={"white"}
						borderRadius={"10px"}
						p={"30px"}
            h={"fit-content"}
					>
						<Text fontWeight={700} fontSize={"20px"}>
							Deskripsi
						</Text>
						<Text mt={"20px"}>{event?.description}</Text>
					</Box>

          <Tiket/>
				</Flex>
			</Box>

			<Footer />
		</Box>
	);
};
