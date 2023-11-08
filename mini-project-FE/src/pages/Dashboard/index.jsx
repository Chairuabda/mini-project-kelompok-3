import { useState } from "react";
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	Text,
} from "@chakra-ui/react";
import { SideBar } from "../Components/Sidebar";
import { Profile } from "./Components/Profile";
import { MyEvent } from "./Components/MyEvent";
import { ChevronRightIcon } from "@chakra-ui/icons";
// import { BsOctagon } from "react-icons/bs";
import { useSelector } from "react-redux";

export const Dashboard = () => {
	const [activePage, setIsActivePage] = useState("Profile");
	const user = useSelector((state) => state.AuthReducer.user);

	return (
		<Box display={"flex"} w={"100vw"}>
			<Box>
				<Box>
					<SideBar setActive={setIsActivePage} />
				</Box>
			</Box>
			<Flex direction={"column"} w={"full"}>
				<Box position={"relative"}>
					<Box
						fontSize={"20px"}
						py={"20px"}
						borderBottom={"2px solid"}
						borderBottomColor={"gray.300"}
						px={"30px"}
						justifyContent={"space-between"}
						display={"flex"}
						position={"relative"}
					>
						<Text>{activePage}</Text>

						<Box
							border={"1px solid black"}
							px={"10px"}
							borderRadius={"20px"}
							fontSize={"16px"}
							display={"flex"}
							alignItems={"center"}
							cursor={"pointer"}
						>
							{user?.email}
						</Box>
					</Box>

					<Breadcrumb
						spacing="8px"
						separator={<ChevronRightIcon color="gray.500" />}
						ml={"30px"}
						mt={"10px"}
					>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink href="#" fontWeight={500}>
								{activePage}
							</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
				</Box>

				<Box w={"full"} h={"full"}>
					{activePage == "Profile" && <Profile />}
					{activePage == "My Event" && <MyEvent />}
				</Box>
			</Flex>
		</Box>
	);
};
