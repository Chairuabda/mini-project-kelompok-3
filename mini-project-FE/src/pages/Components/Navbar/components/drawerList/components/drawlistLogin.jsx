import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";

export const DrawlistLogin = () => {
	const logOut = () => {
		localStorage.removeItem("token");
	};

	return (
		<Flex
			h={"full"}
			direction={"column"}
			justifyContent={"space-between"}
		>
			<Box display={"flex"} flexDirection={"column"} gap={5}>
				<Link to="/event">
					<Text>Create Event</Text>
				</Link>
				<Link to="/#">
					<Text>Discovery</Text>
				</Link>
				<Link to="/dashboard">
					<Text>Dashboard</Text>
				</Link>
			</Box>
			<Link to={"/login"} onClick={logOut}>
				<Flex alignItems={"center"} gap={2} color={"red"}>
					<RiLogoutBoxLine />
					<Text>Log Out</Text>
				</Flex>
			</Link>
		</Flex>
	);
};
