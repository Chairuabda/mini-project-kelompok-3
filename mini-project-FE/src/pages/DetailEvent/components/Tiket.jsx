/* eslint-disable react/prop-types */
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { HiOutlineTicket } from "react-icons/hi2";
import { BiPlus, BiMinus } from "react-icons/bi";
import { Divider } from "@chakra-ui/react";

import { useState } from "react";
import toRupiah from "@develoka/angka-rupiah-js";
import { useNavigate } from "react-router";

export const Tiket = (props) => {
	const [countVip, setCountVip] = useState(0);
	const [countFree, setCountFree] = useState(0);
	const navigate = useNavigate();

	return (
		<Box
			w={{ base: "full", md: "33%" }}
			bgColor={"white"}
			borderRadius={"10px"}
			p={"30px 50px"}
		>
			<Text fontWeight={700} fontSize={"20px"} mb={"20px"}>
				Tiket
			</Text>
			<Flex direction={"column"} gap={5}>
				<Flex
					direction={"column"}
					bgColor={"rgba(255, 46, 99,.08)"}
					border={"1px solid"}
					borderColor={"home.primary"}
					p={"10px"}
					borderRadius={"10px"}
					gap={3}
				>
					<Flex gap={3} align={"center"} color={"home.primary"}>
						<HiOutlineTicket />
						<Text>Tiket VIP</Text>
					</Flex>
					<Text fontSize={"12px"}>
						Tiket terbatas, harga sudah termasukpajak
					</Text>
					<Divider />

					<Flex justify={"space-between"}>
						<Text fontWeight={700}>RP. 500.000</Text>
						<Flex gap={3}>
							<Button
								display={"flex"}
								borderRadius={"50%"}
								size={"xm"}
								h={"20px"}
								justifyContent={"center"}
								alignItems={"center"}
								border={"1px solid black"}
								w={"20px"}
								bgColor={"transparent"}
								onClick={() => setCountVip(countVip - 1)}
							>
								<BiMinus />
							</Button>
							{countVip}
							<Button
								display={"flex"}
								borderRadius={"50%"}
								size={"xm"}
								h={"20px"}
								justifyContent={"center"}
								alignItems={"center"}
								border={"1px solid black"}
								w={"20px"}
								bgColor={"transparent"}
								onClick={() => setCountVip(countVip + 1)}
							>
								<BiPlus />
							</Button>
						</Flex>
					</Flex>
				</Flex>

				<Flex
					direction={"column"}
					bgColor={"rgba(255, 46, 99,.08)"}
					border={"1px solid"}
					borderColor={"home.primary"}
					p={"10px"}
					borderRadius={"10px"}
					gap={3}
				>
					<Flex gap={3} align={"center"} color={"home.primary"}>
						<HiOutlineTicket />
						<Text>Tiket Gratis</Text>
					</Flex>
					<Text fontSize={"12px"}>
						Tiket terbatas, harga sudah termasukpajak
					</Text>
					<Divider />

					<Flex justify={"space-between"}>
						<Text fontWeight={700}>RP. 500.000</Text>
						<Flex gap={3}>
							<Button
								display={"flex"}
								borderRadius={"50%"}
								size={"xm"}
								h={"20px"}
								justifyContent={"center"}
								alignItems={"center"}
								border={"1px solid black"}
								w={"20px"}
								bgColor={"transparent"}
								onClick={() => setCountFree(countFree - 1)}
							>
								<BiMinus />
							</Button>
							{countFree}
							<Button
								display={"flex"}
								borderRadius={"50%"}
								size={"xm"}
								h={"20px"}
								justifyContent={"center"}
								alignItems={"center"}
								border={"1px solid black"}
								w={"20px"}
								bgColor={"transparent"}
								onClick={() => setCountFree(countFree + 1)}
							>
								<BiPlus />
							</Button>
						</Flex>
					</Flex>
				</Flex>

				<Divider />
				<Flex direction={"column"} gap={3}>
					<Text>Total</Text>
					<Flex justify={"space-between"}>
						<Text>{countFree + countVip} Tiket</Text>
						<Text>{toRupiah(countVip * 500000)}</Text>
					</Flex>
				</Flex>

				<Flex justify={"end"}>
					<Button
						bgColor={"home.primary"}
						color={"white"}
						w={"150px"}
						onClick={() =>
							navigate(`/personal-information/${props.eventId}`, {
								state: {
									price: countVip * 500000,
									total: countVip + countFree,
								},
							})
						}
					>
						Beli Tiket
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};
