import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
	const [isOpen, setIsOpen] = useState(true);

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
					<Link to="/">
					<Box fontSize={"34px"} _hover={{ color: "white" }}>
						<Text fontWeight={400}>
							ada<span style={{ fontWeight: "200" }}>event.</span>
						</Text>
					</Box>
				</Link>
				</Box>
				<Box display={"flex"} flexDirection={"column"} gap={2} mt={"10px"}>
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
						{isOpen ? "Jelajah Event" : "icn"}
					</Button>
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
						{isOpen ? "My Ticket" : "Icn"}
					</Button>

					<Box p={"5px 20px 5px 20px"}>
						<hr />
					</Box>

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
							{isOpen ? "Dashboard" : "Icn"}
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
							{isOpen ? "My Event" : "icn"}
						</Button>
					</Link>
				</Box>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Button
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					+
				</Button>
			</Box>
		</Box>
	);
};
