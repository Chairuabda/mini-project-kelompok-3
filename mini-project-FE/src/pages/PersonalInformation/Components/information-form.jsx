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
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { DetailPemesanan } from "./detailPemesanan";
import { useState } from "react";
import { Timers } from "./timer";
import { useParams } from "react-router-dom";

export const InformationForm = () => {
	const [refferal, setRefferal] = useState();
	const toast = useToast();
	const { id } = useParams();


	const personalInfo = async (
		name,
		email,
		phone_number,
		date_of_birth,
		gender,
		referral_code
	) => {
		try {
			await axios.post("http://localhost:8080/event/attendees", {
				name,
				email,
				phone_number,
				date_of_birth,
				gender,
				referral_code,
			});

			toast({
				title: `Success, this is your refferal code ${refferal}`,
				status: "success",
			});
		} catch (err) {
			toast({
				title: "Failed",
				status: "error",
			});
			throw err;
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
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone_number: "",
			date_of_birth: "",
			gender: "",
			referral_code: refferal,
		},
		onSubmit: (values) => {
			personalInfo(
				values.name,
				values.email,
				values.phone_number,
				values.date_of_birth,
				values.gender,
				refferal
			);
		},
	});

	return (
		<Center w={"100vw"} mt={"100px"} mb={"150px"}>
			<form onSubmit={formik.handleSubmit}>
				<Flex w={"90%"} justify={"space-evenly"}>
					<Flex
						direction={"column"}
						w={"full"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<Box w={"80%"}>
							<DetailPemesanan id={id} />

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
											name="phone_number"
											placeholder="phone number"
											value={formik.values.phone_number}
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
											name="date_of_birth"
											value={formik.values.date_of_birth}
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
							display={"flex"}
						>
							<Text>Segera selesaikan pembyaranmu</Text>
							<Timers />
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
