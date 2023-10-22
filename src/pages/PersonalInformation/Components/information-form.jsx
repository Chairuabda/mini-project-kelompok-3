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
} from "@chakra-ui/react";

export const InformationForm = () => {
	return (
		<Center w={"100vw"} mt={"50px"} mb={"150px"}>
			<Flex w={"60%"} justify={"space-evenly"}>
				<Flex
					direction={"column"}
					w={"full"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Box w={"80%"} >
						<Text>Detail Pemesanan</Text>

						<Center mb={"30px"}>
							<Card p={"20px"}>
								<Flex mb={"20px"}>
									<Box w={"50%"}>
										<Image src="/event1.png" borderRadius={"10px"}/>
									</Box>
									<Box w={"50%"} pl={"20px"}>
                                        <Text>Nama Event</Text>
                                        <Text>Tanggal Event</Text>
                                        <Text>Jam Event</Text>
                                        <Text>Lokasi Event</Text>
                                    </Box>
								</Flex>
                                <Flex justify={"space-between"} py={"10px"} borderY={"1px solid black"}>
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

						<Card p={"30px"}>
							<FormControl isRequired>
								<FormLabel>Full Name</FormLabel>
								<Input type="email" />
								<FormHelperText>
									Use the name on your ID Card/Passport.
								</FormHelperText>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>Email address</FormLabel>
								<Input type="email" />
								<FormHelperText>
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
								<Select placeholder="Select your gender">
									<option value="option1">Man</option>
									<option value="option2">Women</option>
								</Select>
							</FormControl>
						</Card>
					</Box>
				</Flex>

				<Card h={"fit-content"} w={"fit-content"} p={"40px 50px"}>
					<Center display={"flex"} flexDirection={"column"}>
						<Checkbox colorScheme="red" defaultChecked>
							Checkbox
						</Checkbox>
						<Button
							_focus={{ outline: "none" }}
							_hover={{ border: "none" }}
							border={"none"}
						>
							Get your tickets
						</Button>
					</Center>
				</Card>
			</Flex>
		</Center>
	);
};
