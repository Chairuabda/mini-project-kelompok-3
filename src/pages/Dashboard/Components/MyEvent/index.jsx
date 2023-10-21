import { Box } from "@chakra-ui/react";
import { SideBar } from "../../../Components/Sidebar";

export const MyEvent = () => {
	return (
		<Box display={"flex"}>
			<Box>
				<SideBar />
			</Box>
			<Box>My Event</Box>
		</Box>
	);
};
