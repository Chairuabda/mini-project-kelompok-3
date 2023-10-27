/* eslint-disable no-undef */
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
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { DetailPemesanan } from "./detailPemesanan";
import { useState } from "react";

export const InformationForm = () => {
	const [refferal, setRefferal] = useState();

	const personalInfo = async (
		name,
		email,
		phoneNumber,
		dateOfBirth,
		gender,
		refferalCode
	) => {
		try {
			await axios.post("http://localhost:3000/event_attendees", {
				name,
				email,
				phoneNumber,
				dateOfBirth,
				gender,
				refferalCode,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const makeReferalCode = () => {
		let result = "";
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < 5) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
			counter += 1;
		}
		setRefferal(result);
		console.log("generate code");
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phoneNumber: "",
			dateOfBirth: "",
			gender: "",
			refferalCode: refferal,
		},
		onSubmit: (values) => {
			personalInfo(
				values.name,
				values.email,
				values.phoneNumber,
				values.dateOfBirth,
				values.gender,
				refferal
			);
		},
	});

	return (
		<Center w={"100vw"} mt={"100px"} mb={"150px"}>
			<form onSubmit={formik.handleSubmit}>
				<Flex w={"80%"} justify={"space-evenly"}>
					<Flex
						direction={"column"}
						w={"full"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<Box w={"80%"}>
							<DetailPemesanan />

							<Card p={"30px"} gap={5}>
								<FormControl isRequired>
									<FormLabel>Full Name</FormLabel>
									<Input
										type="text"
										name="name"
										value={formik.values.name}
										onChange={formik.handleChange}
									/>
									<FormHelperText mt={"0"}>
										Use the name on your ID Card/Passport.
									</FormHelperText>
								</FormControl>

								<FormControl isRequired>
									<FormLabel>Email address</FormLabel>
									<Input
										type="email"
										name="email"
										value={formik.values.email}
										onChange={formik.handleChange}
									/>
									<FormHelperText mt={0}>
										E-ticket will be sent to your email.
									</FormHelperText>
								</FormControl>

								<FormControl isRequired>
									<InputGroup>
										<InputLeftAddon>+62</InputLeftAddon>
										<Input
											type="number"
											name="phoneNumber"
											placeholder="phone number"
											value={formik.values.phoneNumber}
											onChange={formik.handleChange}
										/>
									</InputGroup>
								</FormControl>

								<FormControl isRequired>
									<FormLabel>Date of Birth</FormLabel>
									<InputGroup>
										<Input
											placeholder="Select Date and Time"
											size="md"
											type="date"
											name="dateOfBirth"
											value={formik.values.dateOfBirth}
											onChange={formik.handleChange}
										/>
									</InputGroup>
								</FormControl>

								<FormControl isRequired>
									<FormLabel>Gender</FormLabel>
									<Select
										placeholder="Select your gender"
										cursor={"pointer"}
										value={formik.values.gender}
										onChange={formik.handleChange}
										name="gender"
									>
										<option value="Man">Man</option>
										<option value="Women">Women</option>
									</Select>
								</FormControl>
							</Card>
						</Box>
					</Flex>

					<Box>
						<Card
							p={"14px"}
							mb={"20px"}
							bgColor={"yellow.400"}
							color={"black"}
						>
							Segera selesaikan pembyaranmu
						</Card>
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
									type="submit"
									onClick={makeReferalCode}
								>
									Get your tickets
								</Button>
							</Center>
						</Card>
					</Box>
				</Flex>
			</form>
		</Center>
	);
};
