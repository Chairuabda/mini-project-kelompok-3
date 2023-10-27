import { Box } from "@chakra-ui/react";
import { SideBar } from "../Components/Sidebar";

export const Dashboard = () => {
	return (
		<Box display={"flex"}>
			<Box>
				<SideBar />
			</Box>
			<Box>
				Dashboard
			</Box>
		</Box>
	);
};
