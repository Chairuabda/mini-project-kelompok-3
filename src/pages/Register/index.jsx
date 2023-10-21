import {
	Box,
	InputGroup,
	InputRightElement,
	Button,
	Input,
	FormLabel,
	Text,
	Image,
	Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import googleImg from "../../assets/google.png";
import ImgVector from "../../../public/3902762.jpg";

export const Register = () => {
	const [showP, setShowp] = useState(false);
	const [showCp, setShowCp] = useState(false);

	return (
		<Flex
			w={"100vw"}
			minH={"100vh"}
			justify={"center"}
			align={"center"}
			color={"black"}
			direction={"column"}
		>
			<Box position={"absolute"} top={"5"}>
				<Text
					fontWeight={400}
					fontSize={"42px"}
					color={"home.primary"}
				>
					ada<span style={{ fontWeight: "200" }}>event</span>
				</Text>
			</Box>
			<Box
				w="60%"
				display={"flex"}
				alignItems={"center"}
				// bgColor={"home.primary"}
				boxShadow={"0px 0px 13px 10px rgba(255, 46, 99, 0.2)"}
				borderRadius={"10px"}
				h={"450px"}
			>
				<Flex
					w={"50%"}
					h={"100%"}
					// borderLeft={"1px solid black"}
					display={"flex"}
					align={"center"}
					justify={"center"}
					flexDirection={"column"}
				>
					<Flex
						borderRadius={"10px"}
						w={"80%"}
						h={"50%"}
						direction={"column"}
						justify={"center"}
						align={"center"}
					>
						<Image src={ImgVector} h={"full"} />
					</Flex>
					<Flex direction={"column"} textAlign={"center"} w={"80%"}>
						<Text fontWeight={600}>Tidak lagi ketinggalan event favoritmu</Text>
						<Text fontWeight={400}>
							Gabung dan rasakan kemudahan bertransaksi dan mengelola
							event di adatiket.
						</Text>
					</Flex>
				</Flex>
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
						<FormLabel fontSize={"24px"} mb={"30px"}>
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

						<Button w={"full"} bgColor={"home.primary"}>
							Sign up
						</Button>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
							mt={"20px"}
						>
							<Text fontSize={"12px"} mb={"10px"}>
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

					<Text display={"flex"} fontSize={"14px"}>
						Sudah Punya Akun?
						<Link to="/login" style={{ marginLeft: "5px" }}>
							Login
						</Link>
					</Text>
				</form>
			</Box>
		</Flex>
	);
};
