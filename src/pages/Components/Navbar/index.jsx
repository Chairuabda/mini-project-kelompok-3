import {
	Box,
	Input,
	Text,
	InputGroup,
	InputLeftElement,
	Button,
} from "@chakra-ui/react";
// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Navbar = () => {
	// eslint-disable-next-line no-unused-vars
	const [isLogin, setIsLogin] = useState(false);

	return (
		<Box
			maxW={"100vw"}
			h={"70px"}
			bgColor={"home.primary"}
			display={"flex"}
			alignItems={"center"}
			top={"0"}
			color={"white"}
		>
			<Box
				w={"55%"}
				display={"flex"}
				// justifyContent={"space-between"}
				px={"80px"}
				alignItems={"center"}
			>
				<Link to="/">
					<Box fontSize={"34px"} _hover={{ color: "white" }}>
						<Text fontWeight={400}>
							ada<span style={{ fontWeight: "200" }}>event.</span>
						</Text>
					</Box>
				</Link>
				<Box ml={"44px"}>
					<InputGroup>
						<InputLeftElement pointerEvents="none">
							<SearchIcon color="gray.300" h={"16"} />
						</InputLeftElement>
						<Input
							type="text"
							bgColor={"white"}
							color={"black"}
							w={"350px"}
							borderRadius={"40px"}
							placeholder="Cari event..."
						/>
					</InputGroup>
				</Box>
			</Box>

			<Box
				w={"45%"}
				display={"flex"}
				justifyContent={"end"}
				alignItems={"center"}
				px={"30px"}
			>
				<Box
					display={"flex"}
					mr={"104px"}
					gap={"50"}
					alignItems={"center"}
				>
					<Link to="/event">
						<Text>Create Event</Text>
					</Link>
					<Link to="/#">
						<Text>Discovery</Text>
					</Link>
					{isLogin ? (
						<Box alignItems={"center"}>
							<Link>
								<Avatar
									src="https://bit.ly/broken-link"
									size={"md"}
								/>
							</Link>
						</Box>
					) : (
						<Box display={"flex"} gap={"5"} alignItems={"center"}>
							<Link to="/login">
								<Text>Log in</Text>
							</Link>
							<Link to="/register">
								<Button h={"40px"} w={"108px"}>
									Sign Up
								</Button>
							</Link>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
};
