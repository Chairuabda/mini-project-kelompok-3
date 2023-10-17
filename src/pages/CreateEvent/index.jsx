import { Box } from "@chakra-ui/react";
import EventData from "./eventdata";
import FreeTicket from "./ticketFree";
import PaidTIcket from "./ticketPaid";

export const CreateEvent = () => {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			w={"100vw"}
			minH={"100vh"}
		>
			<Box mt={"30px"}>
				<EventData />
			</Box>
			<Box display={"flex"} mt={"50px"} gap={"20"}>
				<FreeTicket />
				<PaidTIcket />
			</Box>
		</Box>
	);
};
