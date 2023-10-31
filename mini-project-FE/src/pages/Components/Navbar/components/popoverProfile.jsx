import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	Button,
	PopoverFooter,
	Text,
	Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { RiLogoutBoxLine } from "react-icons/ri";

export const PopoverProfile = () => {
	const logOut = () => {
		localStorage.removeItem("token");
	};

	return (
		<Popover placement="bottom-start">
			<Button
				alignItems={"center"}
				variant={"ghost"}
				size={"xm"}
				border={"none"}
				_hover={{
					bgColor: "transparant",
					border: "none",
					fillOpacity: "50%",
				}}
				_active={{ bgColor: "transparant" }}
				bgColor={"red"}
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
			<PopoverContent color="black" w={"fit-content"} right={-6}>
				<PopoverBody>
					<Link to={"/dashboard"}>Dashboard</Link>
				</PopoverBody>
				<PopoverFooter>
					<Link to={"/login"} onClick={logOut}>
						<Flex align={"center"} gap={2}>
							<Text color={"red"}>Log Out</Text>
							<RiLogoutBoxLine />
						</Flex>
					</Link>
				</PopoverFooter>
			</PopoverContent>
		</Popover>
	);
};
