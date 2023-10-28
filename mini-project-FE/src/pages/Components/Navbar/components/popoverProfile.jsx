import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	Button,
	PopoverFooter,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";

export const PopoverProfile = () => {

  const logOut = () => {
    localStorage.removeItem("token")
  }

	return (
		<Popover placement="bottom-start">
			<Button
				alignItems={"center"}
				variant={"ghost"}
				size={"xm"}
				border={"none"}
				_hover={{ bgColor: "transparant", border: "none" }}
				_active={{ bgColor: "transparant" }}
			>
				<PopoverTrigger>
					<Link>
						<Avatar src="https://bit.ly/broken-link" size={"md"} />
					</Link>
				</PopoverTrigger>
			</Button>
			<PopoverContent color="black" w={"180px"}>
	
				<PopoverBody>
					<Link to={"/dashboard"}>Dashboard</Link>
				</PopoverBody>
				<PopoverFooter>
					<Link to={"/login"} onClick={logOut}>
						<Text color={"red"}>Log Out</Text>
					</Link>
				</PopoverFooter>
			</PopoverContent>
		</Popover>
	);
};
