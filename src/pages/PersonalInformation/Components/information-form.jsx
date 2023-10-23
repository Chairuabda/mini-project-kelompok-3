/* eslint-disable react/no-unescaped-entities */
import {
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	InputGroup,
	InputLeftAddon,
	Select,
	Card,
	Checkbox,
	Flex,
	Center,
	Box,
	Button,
	Text,
	Image,
	Stat,
	StatLabel,
	StatHelpText,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const InformationForm = () => {
	return (
		<Center w={"100vw"} mt={"50px"} mb={"150px"}>
			<Flex w={"80%"} justify={"space-evenly"}>
				<Flex
					direction={"column"}
					w={"full"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Box w={"80%"}>
						<Box py={"10px"} mb={"20px"}>
							<Text fontSize={"20px"} fontWeight={600}>
								Detail Pemesanan
							</Text>
						</Box>

						<Center mb={"30px"}>
							<Card p={"20px"}>
								<Flex mb={"20px"}>
									<Box w={"50%"}>
										<Image src="img/event1.png" borderRadius={"10px"} />
									</Box>
									<Box w={"50%"} pl={"20px"}>
										<Stat h={"full"} display={"flex"}>
											<Box
												display={"flex"}
												flexDirection={"column"}
												justifyContent={"space-evenly"}
												height={"full"}
											>
												<StatLabel mb={"5px"} fontSize={"16px"}>
													Collected Fees
												</StatLabel>
												<StatHelpText my={"2px"}>
													Feb 12 - Feb 28
												</StatHelpText>
												<StatHelpText my={"2px"}>
													20.00 - 23.00 wib
												</StatHelpText>
												<StatHelpText mt={"2px"}>
													Yogyakarta
												</StatHelpText>
											</Box>
										</Stat>
									</Box>
								</Flex>
								<Flex
									justify={"space-between"}
									py={"10px"}
									borderY={"1px solid"}
									borderColor={"whitesmoke"}
								>
									<Text>Jenis Tiket</Text>
									<Flex gap={10}>
										<Text>Harga</Text>
										<Text>Jumlah</Text>
									</Flex>
								</Flex>
								<Flex justify={"space-between"} py={"20px"}>
									<Flex>
										<Text>img</Text>
										<Text>Spooky Experience</Text>
									</Flex>
									<Flex gap={20}>
										<Text>Rp 0</Text>
										<Text>x1</Text>
									</Flex>
								</Flex>
							</Card>
						</Center>

						<Card p={"30px"} gap={5}>
							<FormControl isRequired>
								<FormLabel>Full Name</FormLabel>
								<Input type="email" />
								<FormHelperText mt={"0"}>
									Use the name on your ID Card/Passport.
								</FormHelperText>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>Email address</FormLabel>
								<Input type="email" />
								<FormHelperText mt={0}>
									E-ticket will be sent to your email.
								</FormHelperText>
							</FormControl>

							<FormControl isRequired>
								<InputGroup>
									<InputLeftAddon>+62</InputLeftAddon>
									<Input type="tel" placeholder="phone number" />
								</InputGroup>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>Date of Birth</FormLabel>
								<InputGroup>
									<Input
										placeholder="Select Date and Time"
										size="md"
										type="date"
									/>
								</InputGroup>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>Gender</FormLabel>
								<Select
									placeholder="Select your gender"
									cursor={"pointer"}
								>
									<option value="option1">Man</option>
									<option value="option2">Women</option>
								</Select>
							</FormControl>
						</Card>
					</Box>
				</Flex>

				<Box>
					<Card p={"10px"} mb={"20px"} bgColor={"yellow.400"} color={"black"}>Segera selesaikan pembyaranmu</Card>
					<Card h={"fit-content"} w={"fit-content"} p={"40px 50px"}>
						<Center display={"flex"} flexDirection={"column"}>
							<Checkbox
								colorScheme="blue"
								defaultChecked
								alignItems={"center"}
							>
								<Text fontSize={"13px"}>
									Saya setuju dengan{" "}
									<Link>
										<span style={{ color: "blue" }}>
											Syarat & Ketentuan
										</span>
									</Link>{" "}
									yang berlaku di Loket.com.
								</Text>
							</Checkbox>
							<Button
								_focus={{ outline: "none" }}
								_hover={{ border: "none" }}
								border={"none"}
								mt={"15px"}
								bgColor={"home.primary"}
								color={"white"}
							>
								Get your tickets
							</Button>
						</Center>
					</Card>
				</Box>
			</Flex>
		</Center>
	);
};
