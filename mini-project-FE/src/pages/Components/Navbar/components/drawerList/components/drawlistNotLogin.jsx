import {
	Button,
	Text,
	Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const DrawlistNotLogin = () => {
	return (
		<Box
			display={"flex"}
			gap={"5"}
			flexDirection={"column"}
			alignItems={"center"}
			w={"full"}
		>
			<Box fontSize={"20px"} fontWeight={700} w={"full"}>
				Log in to your account
				<Text fontSize={"14px"} fontWeight={400}>
					To use all the features in Loket
				</Text>
			</Box>
			<Box
				display={"flex"}
				gap={5}
				alignItems={"center"}
				justifyContent={"space-between"}
				w={"full"}
			>
				<Link to="/login" style={{ width: "100%" }}>
					<Button
						variant={"ghost"}
						border={"1px solid"}
						borderColor={"home.primary"}
						h={"40px"}
						w={"full"}
						color={"home.primary"}
						textAlign={"center"}
					>
						Log in
					</Button>
				</Link>
				<Link to="/register" style={{ width: "100%" }}>
					<Button
						h={"40px"}
						w={"full"}
						bgColor={"home.primary"}
						color={"white"}
						textAlign={"center"}
					>
						Sign Up
					</Button>
				</Link>
			</Box>
		</Box>
	);
};
