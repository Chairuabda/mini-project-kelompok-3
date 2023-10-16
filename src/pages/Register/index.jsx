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

export const Register = () => {
	const [showP, setShowp] = useState(false);
	const [showCp, setShowCp] = useState(false);

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
				// justifyContent={"center"}
				alignItems={"center"}
				bgColor={"black"}
				borderRadius={"10px"}
				h={"450px"}
			>
				<Box
					w={"50%"}
					h={"100%"}
					borderRight={"1px solid white"}
					borderRightRadius={"40%"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Text color={"white"}>Logo</Text>
				</Box>
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
						h={"100%"}
						p={"10px 45px"}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<FormLabel color={"white"} fontSize={"24px"} mb={"30px"}>
							Register
						</FormLabel>
						<InputGroup mb={"20px"}>
							<Input
								type="text"
								placeholder="Username"
								bgColor={"white"}
							/>
						</InputGroup>
						<InputGroup mb={"20px"}>
							<Input
								type="text"
								placeholder="Email"
								bgColor={"white"}
							/>
						</InputGroup>

						<Box display={"flex"}>
							<InputGroup mb={"20px"} mr={"10px"} w={"50%"}>
								<Input
									type={showP ? "text" : "password"}
									placeholder="Password"
									bgColor={"white"}
									fontSize={"12px"}
								/>
								<InputRightElement>
									<Box
										onClick={() => {
											setShowp(!showP);
										}}
										size={"xm"}
										display={"flex"}
										alignItems={"center"}
										cursor={"pointer"}
									>
										{showP ? <ViewOffIcon /> : <ViewIcon />}
									</Box>
								</InputRightElement>
							</InputGroup>
							<InputGroup mb={"20px"} w={"50%"}>
								<Input
									type={showCp ? "text" : "password"}
									placeholder="Confirm Password"
									bgColor={"white"}
									fontSize={"12px"}
								/>
								<InputRightElement>
									<Box
										onClick={() => {
											setShowCp(!showCp);
										}}
										size={"xm"}
										display={"flex"}
										alignItems={"center"}
										cursor={"pointer"}
									>
										{showCp ? <ViewOffIcon /> : <ViewIcon />}
									</Box>
								</InputRightElement>
							</InputGroup>
						</Box>

						<Button w={"full"} bgColor={"#6656ff"} color={"white"}>
							Sign up
						</Button>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
							mt={"20px"}
						>
							<Text color={"white"} fontSize={"12px"} mb={"10px"}>
								Or Sign up with
							</Text>
							<Button size={"sm"}>
								{" "}
								<Image
									src={googleImg}
									w={"15px"}
									mr={"7px"}
									alt="Google Image"
								/>{" "}
								Google
							</Button>
						</Box>
					</Box>

					<Text color={"white"} display={"flex"} fontSize={"14px"}>
						Sudah Punya Akun?
						<Link to="/login" style={{ marginLeft: "5px" }}>
							Login
						</Link>
					</Text>
				</form>
			</Box>
		</Box>
	);
};
