/* eslint-disable react/prop-types */
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCompass } from "react-icons/ai";
import {
	HiOutlineRectangleStack,
	HiOutlineTicket,
} from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";
// import { BsTicketPerforatedFill } from "react-icons/bs";
import {
	HiMiniArrowLeftCircle,
	HiMiniArrowRightCircle,
} from "react-icons/hi2";
// import  FaviconLogo  from "../../../../public/Favicon-red-bg.png"
// import { useBreakpointValue } from "@chakra-ui/react";
// import { RectangleStackIcon } from "@heroicons/24/outline"

export const SideBar = ({ setActive }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Box
			h={"100vh"}
			w={isOpen ? "215px" : "70px"}
			bg={"home.secondary"}
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
					bgColor={"home.primary"}
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
					<Link to="/myticket">
						<Button
							pl={"20px"}
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
							_hover={{ bgColor: "home.tertiary" }}
							_focus={{
								bgColor: "home.tertiary",
								outline: "none",
							}}
						>
							{isOpen ? (
								<Flex align={"center"} gap={5}>
									<HiOutlineTicket fontSize={"25px"} /> My Ticket
								</Flex>
							) : (
								<HiOutlineTicket fontSize={"25px"} />
							)}
						</Button>
					</Link>

					{/* <Link to="/dashboard/myevent"> */}
					<Button
						pl={"20px"}
						w={"full"}
						borderRadius={"0"}
						cursor={"pointer"}
						bgColor={"transparent"}
						color={"white"}
						border={"none"}
						outline={"none"}
						display={"flex"}
						justifyContent={"start"}
						_hover={{ bgColor: "home.tertiary" }}
						_focus={{
							bgColor: "home.tertiary",
							outline: "none",
						}}
						onClick={() => setActive("My Event")}
					>
						{isOpen ? (
							<Flex align={"center"} gap={5}>
								<HiOutlineRectangleStack fontSize={"25px"} />
								My Event
							</Flex>
						) : (
							<HiOutlineRectangleStack fontSize={"25px"} />
						)}
					</Button>
					{/* </Link> */}

					<Box p={"5px 20px 5px 20px"}>
						<hr />
					</Box>

					<Button
						pl={"20px"}
						w={"full"}
						borderRadius={"0"}
						cursor={"pointer"}
						bgColor={"transparent"}
						border={"none"}
						outline={"none"}
						display={"flex"}
						color={"white"}
						justifyContent={"start"}
						_hover={{ bgColor: "home.tertiary" }}
						onClick={() => setActive("Profile")}
						_focus={{
							bgColor: "home.tertiary",
							outline: "none",
						}}
					>
						{isOpen ? (
							<Flex align={"center"} gap={5}>
								<HiOutlineUserCircle fontSize={"25px"} />
								Profile
							</Flex>
						) : (
							<HiOutlineUserCircle fontSize={"25px"} />
						)}
					</Button>

					<Link to="/discovery">
						<Button
							pl={"20px"}
							w={"full"}
							borderRadius={"0"}
							cursor={"pointer"}
							bgColor={"transparent"}
							color={"white"}
							border={"none"}
							outline={"none"}
							display={"flex"}
							justifyContent={"start"}
							_hover={{ bgColor: "home.tertiary" }}
							_focus={{
								bgColor: "home.tertiary",
								outline: "none",
							}}
						>
							{isOpen ? (
								<Flex align={"center"} gap={5}>
									<AiFillCompass fontSize={"25px"} />
									Jelajah Event
								</Flex>
							) : (
								<AiFillCompass fontSize={"25px"} />
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
