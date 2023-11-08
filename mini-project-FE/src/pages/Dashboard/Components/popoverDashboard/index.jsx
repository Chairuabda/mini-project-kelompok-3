import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	Button,
	// PopoverFooter,
  // Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
// import { RiLogoutBoxLine } from "react-icons/ri"

export const PopoverDashboard = () => {

  // const logOut = () => {
  //   localStorage.removeItem("token")
  // }

	return (
		<Popover placement="bottom-start">
			<Button
				alignItems={"center"}
				variant={"ghost"}
				size={"xm"}
				border={"none"}
				_hover={{ bgColor: "transparant", border: "none", fillOpacity:"50%" }}
				_active={{ bgColor: "transparant" }}
				display={"flex"}
				justifyContent={"center"}
				borderRadius={"50%"}
				p={"2.5px"}
				outline={"1px solid white"}
			>
				<PopoverTrigger>
					<Link>
						<Avatar src="https://bit.ly/broken-link" size={"sm"} />
					</Link>
				</PopoverTrigger>
			</Button>
			<PopoverContent color="black" w={"fit-content"}>
	
				<PopoverBody display={"flex"} flexDirection={"column"} gap={"3"} fontSize={"14px"} fontWeight={400}>
					<Link to={"/"}>Home</Link>
					<Link to={"/discovery"}>Jelajah Event</Link>
					<Link to={"/dashboard"}>Profile</Link>
					<Link to={"/myticket"}>My Ticket</Link>
					<Link to={"/myevent"}>My Event</Link>
				</PopoverBody>
				{/* <PopoverFooter>
					<Link to={"/login"} onClick={logOut}>
						<Text color={"red"}>Log Out</Text>
						<RiLogoutBoxLine />
					</Link>
				</PopoverFooter> */}
			</PopoverContent>
		</Popover>
	);
};
