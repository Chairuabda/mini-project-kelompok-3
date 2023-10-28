/* eslint-disable no-useless-catch */
import {
	Box,
	InputGroup,
	InputRightElement,
	Button,
	Input,
	FormLabel,
	Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { GoogleButton } from "../../components/google-button";
import axios from "axios";
import { useFormik } from "formik";

export const RegisterSection = () => {
	const [showP, setShowp] = useState(false);
	const [showCp, setShowCp] = useState(false);
	const navigate = useNavigate();

	const register = async (email, username, password, fullname, confirmPassword) => {
		try {
			if (password !== confirmPassword) throw new Error("Password tidak sama")
			await axios.post(
				"http://localhost:8080/auth/register",
				{
					email,
					username,
					password,
					fullname,
				}
			);
			navigate("/login")
		} catch (err) {
			throw err;
		}
	};
	const formik = useFormik({
		initialValues: {
			fullname: "",
			username: "",
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			register(
				values.email,
				values.username,
				values.password,
				values.fullname,
				values.confirmPassword,
			);
		},
	});

	return (
		<form
			style={{
				width: "50%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
			onSubmit={formik.handleSubmit}
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
				<FormLabel fontSize={"24px"} mb={"20px"}>
					Register
				</FormLabel>
				<InputGroup mb={"10px"}>
					<Input
						type="text"
						placeholder="Fullname"
						bgColor={"white"}
						name="fullname"
						value={formik.values.fullname}
						onChange={formik.handleChange}
					/>
				</InputGroup>
				<InputGroup mb={"10px"}>
					<Input
						type="text"
						placeholder="Username"
						bgColor={"white"}
						name="username"
						value={formik.values.username}
						onChange={formik.handleChange}
					/>
				</InputGroup>
				<InputGroup mb={"10px"}>
					<Input
						type="text"
						placeholder="Email"
						bgColor={"white"}
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
				</InputGroup>

				<Box display={"flex"}>
					<InputGroup mb={"10px"} mr={"10px"} w={"50%"}>
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
					<InputGroup mb={"10px"} w={"50%"}>
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
				</Box>

				<Button
					w={"full"}
					bgColor={"home.primary"}
					color={"white"}
					type="submit"
				>
					Sign up
				</Button>
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					flexDirection={"column"}
					mt={"10px"}
				>
					<Text fontSize={"12px"} mb={"10px"}>
						Or Sign up with
					</Text>
					<GoogleButton />
				</Box>
			</Box>

			<Text display={"flex"} fontSize={"14px"}>
				Sudah Punya Akun?
				<Link to="/login" style={{ marginLeft: "5px" }}>
					Login
				</Link>
			</Text>
		</form>
	);
};
