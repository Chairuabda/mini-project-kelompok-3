/* eslint-disable react/prop-types */
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCompass } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsTicketPerforatedFill } from "react-icons/bs";
import {
	HiMiniArrowLeftCircle,
	HiMiniArrowRightCircle,
} from "react-icons/hi2";
// import  FaviconLogo  from "../../../../public/Favicon-red-bg.png"
// import { useBreakpointValue } from "@chakra-ui/react";

export const SideBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Box
			h={"100vh"}
			w={isOpen ? "215px" : "60px"}
			bg={"home.primary"}
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"space-between"}
			transition={"0.2s"}
			color={"white"}
		>
			<Box>
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					bgColor={"blackAlpha.200"}
					h={"70px"}
				>
					{isOpen ? (
						<Link to="/">
							<Box fontSize={"34px"} _hover={{ color: "white" }}>
								<Text fontWeight={400}>
									ada
									<span style={{ fontWeight: "200" }}>event.</span>
								</Text>
							</Box>
						</Link>
					) : (
						<Link to="/">
							<Box fontSize={"34px"} _hover={{ color: "white" }}>
								<Text fontWeight={400}>
									a<span style={{ fontWeight: "200" }}>e.</span>
								</Text>
							</Box>
						</Link>
					)}
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					gap={2}
					mt={"10px"}
				>
					<Link to="/discovery">
						<Button
							p={"5px 20px 5px 20px"}
							w={"full"}
							borderRadius={"0"}
							cursor={"pointer"}
							bgColor={"transparent"}
							color={"white"}
							border={"none"}
							outline={"none"}
							display={"flex"}
							justifyContent={"start"}
							_hover={{ bgColor: "blackAlpha.200" }}
							_focus={{
								bgColor: "blackAlpha.200",
								outline: "none",
							}}
						>
							{isOpen ? (
								<Flex align={"center"} gap={2}>
									<AiFillCompass fontSize={"25px"} />
									Jelajah Event
								</Flex>
							) : (
								<AiFillCompass fontSize={"20px"} />
							)}
						</Button>
					</Link>

					<Link to="/dashboard">
						<Button
							p={"5px 20px 5px 20px"}
							w={"full"}
							borderRadius={"0"}
							cursor={"pointer"}
							bgColor={"transparent"}
							border={"none"}
							outline={"none"}
							display={"flex"}
							color={"white"}
							justifyContent={"start"}
							_hover={{ bgColor: "blackAlpha.200" }}
							_focus={{
								bgColor: "blackAlpha.200",
								outline: "none",
							}}
						>
							{isOpen ? (
								<Flex align={"center"} gap={2}>
									<IoPerson fontSize={"25px"} />
									Profile
								</Flex>
							) : (
								<IoPerson />
							)}
						</Button>
					</Link>

					<Box p={"5px 20px 5px 20px"}>
						<hr />
					</Box>

					<Link to="/myticket">
						<Button
							p={"5px 20px 5px 20px"}
							w={"full"}
							borderRadius={"0"}
							cursor={"pointer"}
							bgColor={"transparent"}
							color={"white"}
							border={"none"}
							outline={"none"}
							display={"flex"}
							alignItems={"center"}
							justifyContent={"start"}
							_hover={{ bgColor: "blackAlpha.200" }}
							_focus={{
								bgColor: "blackAlpha.200",
								outline: "none",
							}}
						>
							{isOpen ? (
								<Flex align={"center"} gap={2}>
									<BsTicketPerforatedFill fontSize={"25px"} /> My
									Ticket
								</Flex>
							) : (
								<BsTicketPerforatedFill fontSize={"20px"} />
							)}
						</Button>
					</Link>

					<Link to="./myevent">
						<Button
							p={"5px 20px 5px 20px"}
							w={"full"}
							borderRadius={"0"}
							cursor={"pointer"}
							bgColor={"transparent"}
							color={"white"}
							border={"none"}
							outline={"none"}
							display={"flex"}
							justifyContent={"start"}
							_hover={{ bgColor: "blackAlpha.200" }}
							_focus={{
								bgColor: "blackAlpha.200",
								outline: "none",
							}}
						>
							{isOpen ? (
								<Flex align={"center"} gap={2}>
									<MdOutlineEventNote fontSize={"25px"} />
									My Event
								</Flex>
							) : (
								<MdOutlineEventNote fontSize={"20px"} />
							)}
						</Button>
					</Link>
				</Box>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"end"}
				alignItems={"center"}
			>
				<Button
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					variant={"ghost"}
					color={"white"}
					fontSize={"30px"}
					border={"none"}
					_hover={{ bgColor: "none", border: "none" }}
					_focus={{ bgColor: "transparant", outline: "none" }}
					_active={{ bgColor: "transparant" }}
				>
					{isOpen ? (
						<HiMiniArrowLeftCircle />
					) : (
						<HiMiniArrowRightCircle />
					)}
				</Button>
			</Box>
		</Box>
	);
};
