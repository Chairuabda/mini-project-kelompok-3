import {
	Box,
	Input,
	Text,
	InputGroup,
	InputLeftElement,
	Button,
} from "@chakra-ui/react";
// import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { PopoverProfile } from "./components/popoverProfile";
import DrawerList from "./components/drawerList";

export const Navbar = () => {
	const token = localStorage.getItem("token");

	return (
		<Box
			w={"100vw"}
			h={"70px"}
			bgColor={"home.primary"}
			display={"flex"}
			alignItems={"center"}
			top={"0"}
			color={"white"}
			position={"fixed"}
			zIndex={10}
		>
			<Box
				w={"55%"}
				display={"flex"}
				// justifyContent={"space-between"}
				px={{ base: "10px", md: "80px" }}
				alignItems={"center"}
			>
				<Link to="/">
					<Box
						fontSize={{ base: "20px", md: "34px" }}
						_hover={{ color: "white" }}
					>
						<Text fontWeight={400}>
							ada<span style={{ fontWeight: "200" }}>event.</span>
						</Text>
					</Box>
				</Link>
				<Box ml={"44px"} display={{ base: "none", sm: "block" }}>
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
				display={{ base: "none", md: "flex" }}
				justifyContent={"end"}
				alignItems={"center"}
				px={"30px"}
			>
				<Box
					display={"flex"}
					mr={"14px"}
					gap={"50"}
					alignItems={"center"}
				>
					<Link to="/event">
						<Text>Create Event</Text>
					</Link>
					<Link to="/Discovery">
						<Text>Discovery</Text>
					</Link>
					{token ? (
						<PopoverProfile />
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

			<Box
				w={"45%"}
				display={{ base: "flex", md: "none" }}
				justifyContent={"end"}
				alignItems={"center"}
				px={"15px"}
			>
				<DrawerList/>
			</Box>
		</Box>
	);
};
