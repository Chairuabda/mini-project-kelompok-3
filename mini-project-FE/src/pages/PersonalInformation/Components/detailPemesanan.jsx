/* eslint-disable react/prop-types */
import {
	Card,
	Flex,
	Center,
	Box,
	Text,
	Image,
	Stat,
	StatLabel,
	StatHelpText,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
	HiOutlineCalendarDays,
	HiOutlineMapPin,
} from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";
import { useLocation } from "react-router";
import toRupiah from "@develoka/angka-rupiah-js";

export const DetailPemesanan = (props) => {
	const [event, setEvent] = useState();

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
	console.log(props.id)
	useEffect(() => {
		dataEvent(props.id);
	}, [props.id]);

	const { state } = useLocation()
	const { price, total } = state

	return (
		<>
			<Box py={"10px"} mb={"20px"}>
				<Text fontSize={"20px"} fontWeight={600}>
					Detail Pemesanan
				</Text>
			</Box>

			<Center mb={"30px"}>
				<Card p={"20px"}>
					<Flex mb={"20px"}>
						<Box w={"50%"}>
							<Image src={`http://localhost:8080/uploads/banner/${event?.banner}`} borderRadius={"10px"} />
						</Box>
						<Box w={"50%"} pl={"20px"}>
							<Stat h={"full"} display={"flex"}>
								<Box
									display={"flex"}
									flexDirection={"column"}
									justifyContent={"space-evenly"}
									height={"full"}
								>
									<StatLabel mb={"5px"} fontSize={"16px"}>
										{event?.title}
									</StatLabel>
									<StatHelpText
										my={"2px"}
										display={"flex"}
										alignItems={"center"}
										gap={3}
									>
										<HiOutlineCalendarDays />
										{new Date(
											event?.start_date
										).toDateString()} -{" "}
										{new Date(event?.end_date).toDateString()}
									</StatHelpText>
									<StatHelpText
										my={"2px"}
										display={"flex"}
										alignItems={"center"}
										gap={3}
									>
										<IoTimeOutline />
										{event?.start_time} - {event?.end_time}
									</StatHelpText>
									<StatHelpText
										mt={"2px"}
										display={"flex"}
										alignItems={"center"}
										gap={3}
									>
										<HiOutlineMapPin />
										{event?.address}
									</StatHelpText>
								</Box>
							</Stat>
						</Box>
					</Flex>
					<Flex
						justify={"space-between"}
						py={"10px"}
						borderY={"1px solid"}
						borderColor={"whitesmoke"}
					>
						<Text>Jenis Tiket</Text>
						<Flex gap={10}>
							<Text>Harga</Text>
							<Text>Jumlah</Text>
						</Flex>
					</Flex>
					<Flex justify={"end"} py={"20px"}>
						{/* <Flex>
						</Flex> */}
						<Flex gap={20}>
							<Text>{toRupiah(price)}</Text>
							<Text>x{total}</Text>
						</Flex>
					</Flex>
				</Card>
			</Center>
		</>
	);
};
