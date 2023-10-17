import { Box, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<Box
			w={"full"}
			h={"10vh"}
			bgColor={"red"}
			display={"flex"}
			alignItems={"center"}
			top={"0"}
		>
			<Box
				w={"55%"}
				display={"flex"}
				justifyContent={"space-between"}
				px={"50px"}
				alignItems={"center"}
			>
				<Box>Logo</Box>
				<Box>
					<Input type="text" bgColor={"white"} w={"350px"} />
				</Box>
			</Box>

			<Box
				w={"45%"}
				display={"flex"}
				justifyContent={"end"}
				alignItems={"center"}
				px={"30px"}
			>
				<Box display={"flex"} mr={"80px"} gap={"50"}>
					<Link to="/event">
						<Text>Create Event</Text>
					</Link>
					<Link to="/#">
						<Text>Discovery</Text>
					</Link>
				</Box>
				<Box display={"flex"} gap={"5"}>
					<Link to="/login">
						<Text>Login</Text>
					</Link>
					<Link to="/register">
						<Text>Register</Text>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};
