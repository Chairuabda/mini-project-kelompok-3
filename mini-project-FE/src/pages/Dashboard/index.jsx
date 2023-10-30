import { Box } from "@chakra-ui/react";
import { SideBar } from "../Components/Sidebar";
import { Profile } from "./Components/Profile"

export const Dashboard = () => {
	return (
		<Box display={"flex"} w={"100vw"}>
			<Box>
				<SideBar />
			</Box>
			<Box w={"100%"}>
				<Profile />
			</Box>
		</Box>
	);
};
