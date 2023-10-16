import {
	Box,
	InputGroup,
	InputRightElement,
	Button,
	Input,
	FormLabel,
	Text,
	Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import googleImg from "../../assets/google.png";

export const Login = () => {
	const [show, setShow] = useState(false);

	return (
		<Box
			w={"100vw"}
			minH={"100vh"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Box
				w="60%"
				display={"flex"}
				alignItems={"center"}
				bgColor={"black"}
				borderRadius={"10px"}
				h={"450px"}
			>
				{/* <Box h={"400px"} w={"25%"}  bgColor={"black"} position={"absolute"} zIndex={"10"} opacity={"80%"} borderRadius={"10px"} left={"385px"}></Box> */}
				<form
					style={{
						width: "50%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box
						w={"100%"}
						h={"350px"}
						p={"10px 45px"}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<FormLabel color={"white"} fontSize={"24px"} mb={"30px"}>
							Login
						</FormLabel>
						<InputGroup mb={"20px"}>
							<Input
								type="text"
								placeholder="Email"
								bgColor={"white"}
							/>
						</InputGroup>

						<InputGroup mb={"20px"}>
							<Input
								type={show ? "text" : "password"}
								placeholder="Password"
								bgColor={"white"}
							/>
							<InputRightElement>
								<Box
									onClick={() => {
										setShow(!show);
									}}
									size={"xm"}
									display={"flex"}
									alignItems={"center"}
									cursor={"pointer"}
								>
									{show ? <ViewOffIcon /> : <ViewIcon />}
								</Box>
							</InputRightElement>
						</InputGroup>
						<Button w={"full"} bgColor={"#6656ff"} color={"white"}>
							Sign in
						</Button>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
							mt={"20px"}
						>
							<Text color={"white"} fontSize={"12px"} mb={"10px"}>
								Or Sign in with
							</Text>
							<Button size={"sm"}>
								<Image
									src={googleImg}
									w={"15px"}
									mr={"7px"}
									alt="Google Image"
								/>
								Google
							</Button>
						</Box>
					</Box>
					<Text color={"white"} display={"flex"} fontSize={"14px"}>
						Belum Punya Akun?
						<Link to="/register" style={{ marginLeft: "5px" }}>
							Register
						</Link>
					</Text>
				</form>
				<Box
					w={"50%"}
					h={"100%"}
					borderLeft={"1px solid white"}
					borderLeftRadius={"40%"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Text color={"white"}>Logo</Text>
				</Box>
			</Box>
		</Box>
	);
};
