import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<Box
			h={"100vh"}
			w={isOpen ? "215px" : "60px"}
			bg={"grey"}
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"space-between"}
			transition={"0.2s"}
		>
			<Box>
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					bgColor={"blackAlpha.200"}
					h={"70px"}
				>
					<Box>Logo</Box>
				</Box>
				<Box>
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
							justifyContent={"start"}
							_hover={{ bgColor: "red" }}
							_focus={{
								bgColor: "black",
								color: "white",
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
							border={"none"}
							outline={"none"}
							display={"flex"}
							justifyContent={"start"}
							_hover={{ bgColor: "red" }}
							_focus={{
								bgColor: "black",
								color: "white",
								outline: "none",
							}}
						>
							{isOpen ? "My Event" : "icn"}
						</Button>
					</Link>

					<Box p={"5px 20px 5px 20px"}>
						<hr />
					</Box>
					<Button
						p={"5px 20px 5px 20px"}
						w={"full"}
						borderRadius={"0"}
						cursor={"pointer"}
						bgColor={"transparent"}
						border={"none"}
						outline={"none"}
						display={"flex"}
						justifyContent={"start"}
						_hover={{ bgColor: "red" }}
						_focus={{
							bgColor: "black",
							color: "white",
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
						border={"none"}
						outline={"none"}
						display={"flex"}
						justifyContent={"start"}
						_hover={{ bgColor: "red" }}
						_focus={{
							bgColor: "black",
							color: "white",
							outline: "none",
						}}
					>
						{isOpen ? "My Ticket" : "Icn"}
					</Button>
					<Button
						p={"5px 20px 5px 20px"}
						w={"full"}
						borderRadius={"0"}
						cursor={"pointer"}
						bgColor={"transparent"}
						border={"none"}
						outline={"none"}
						display={"flex"}
						justifyContent={"start"}
						_hover={{ bgColor: "red" }}
						_focus={{
							bgColor: "black",
							color: "white",
							outline: "none",
						}}
					></Button>
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
