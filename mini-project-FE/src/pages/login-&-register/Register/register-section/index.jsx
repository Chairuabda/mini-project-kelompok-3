/* eslint-disable no-useless-catch */
import {
	Box,
	InputGroup,
	InputRightElement,
	Button,
	Input,
	FormLabel,
	Text,
	FormControl,
	FormErrorMessage,
	useToast
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { title } from "process";

const registerScheme = Yup.object().shape({
	email: Yup.string()
		.matches(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			"Email tidak valid"
		)
		.required("Email is required"),
	password: Yup.string()
		.matches(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
			"1 uppercass, 1 lowercase, 1 number and 8 characters."
		)
		.required("Password is required"),
});

export const RegisterSection = () => {
	const [showP, setShowp] = useState(false);
	const [showCp, setShowCp] = useState(false);
	const navigate = useNavigate();
	const toast = useToast()

	const register = async (
		email,
		username,
		password,
		fullname,
		confirmPassword
	) => {
		try {
			await axios.post("http://localhost:8080/auth/register", {
				email,
				username,
				password,
				confirmPassword,
				fullname,
			});
			toast({
				title: "Login Success",
				status: "success",
			});
			navigate("/login");
		} catch (err) {
			toast({
				title: err.response?.data,
				status: "error",
			});
		}
	};
	const formik = useFormik({
		initialValues: {
			fullname: "",
			username: "",
			email: "",
			password: "",
		},
		validationSchema: registerScheme,
		onSubmit: (values) => {
			register(
				values.email,
				values.username,
				values.password,
				values.fullname,
				values.confirmPassword
			);
		},
	});

	return (
		<Box w={{ base: "100%", sm: "70%", md: "50%" }}>
			<form
				onSubmit={formik.handleSubmit}
				style={{
					display: "flex",
					width: "100%",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box
					w={"100%"}
					h={"100%"}
					p={"5px 45px"}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}
					gap={3}
				>
					<FormLabel
						fontSize={"24px"}
						my={"-10px"}
						mb={{ base: "30px", md: "0" }}
					>
						Register
					</FormLabel>
					<InputGroup>
						<Input
							type="text"
							placeholder="Fullname"
							bgColor={"white"}
							name="fullname"
							value={formik.values.fullname}
							onChange={formik.handleChange}
						/>
					</InputGroup>

					<InputGroup>
						<Input
							type="text"
							placeholder="Username"
							bgColor={"white"}
							name="username"
							value={formik.values.username}
							onChange={formik.handleChange}
						/>
					</InputGroup>

					<FormControl
						isInvalid={formik.touched.email && formik.errors.email}
					>
						<InputGroup>
							<Input
								type="text"
								placeholder="Email"
								bgColor={"white"}
								name="email"
								value={formik.values.email}
								onChange={formik.handleChange}
							/>
						</InputGroup>
						{formik.touched.email && formik.errors.email && (
							<FormErrorMessage position={"absolute"} mt={0}>
								{formik.errors.email}
							</FormErrorMessage>
						)}
					</FormControl>

					<FormControl
						isInvalid={
							formik.touched.password && formik.errors.password
						}
						w={"full"}
						display={"flex"}
						gap={5}
					>
						<InputGroup w={"50%"}>
							<Input
								type={showP ? "text" : "password"}
								placeholder="Password"
								bgColor={"white"}
								fontSize={"12px"}
								name="password"
								value={formik.values.password}
								onChange={formik.handleChange}
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
						<InputGroup w={"50%"}>
							<Input
								type={showCp ? "text" : "password"}
								placeholder="Confirm Password"
								bgColor={"white"}
								fontSize={"12px"}
								name="confirmPassword"
								value={formik.values.confirmPassword}
								onChange={formik.handleChange}
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
						{formik.touched.password && formik.errors.password && (
							<FormErrorMessage position={"absolute"} mt={10}>
								{formik.errors.password}
							</FormErrorMessage>
						)}
					</FormControl>

					<FormControl w={"50%"}></FormControl>

					<Button
						w={"full"}
						bgColor={"home.primary"}
						color={"white"}
						type="submit"
					>
						Sign up
					</Button>
				</Box>

				<Text display={"flex"} fontSize={"14px"} mt={'5px'}>
					Sudah Punya Akun?
					<Link to="/login" style={{ marginLeft: "5px" }}>
						Login
					</Link>
				</Text>
			</form>
		</Box>
	);
};
