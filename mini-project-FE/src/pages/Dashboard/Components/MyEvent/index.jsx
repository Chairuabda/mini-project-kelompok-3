/* eslint-disable no-unused-vars */
import { Box, Center, Flex, Image, Button } from "@chakra-ui/react";
// import { SideBar } from "../../../Components/Sidebar";
import EventIllustarion from "../../../../assets/Event-Illustration.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HaveEvent } from "./components/haveEvent";

export const MyEvent = () => {
	const [ haveEvent, setHaveEvent ] = useState(true);

	return (
		<Box>
			{haveEvent ? (
				<HaveEvent/>
			) : (
				<Center>
					<Flex
						direction={"column"}
						justify={"center"}
						gap={5}
						align={"center"}
					>
						<Box>
							<Image
								src={EventIllustarion}
								alt="Event Illustration"
								ml={"-30px"}
							/>
						</Box>
						<Center
							fontSize={"36px"}
							fontWeight={300}
							color={"gray.400"}
						>
							Belum Ada Event
						</Center>
						<Link
							to={"/event"}
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button
								w={"50%"}
								bgColor={"home.primary"}
								color={"white"}
							>
								Buat Event
							</Button>
						</Link>
					</Flex>
				</Center>
			)}
		</Box>
	);
};
