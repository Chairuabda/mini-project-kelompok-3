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
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { GoogleButton } from "../../components/google-button";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { login } from "../../../../../redux/reducer/authReducer";
import * as Yup from "yup";

const registerScheme = Yup.object().shape({
	email: Yup.string().required("Email is required"),
	password: Yup.string().required("Password is required"),
});

export const LoginSection = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: registerScheme,
		onSubmit: async (values) => {
			const isLoginn = await dispatch(login(values.email, values.password));
			if(!isLoginn) navigate("/");
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
				h={"350px"}
				p={"10px 45px"}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<FormLabel fontSize={"24px"} mb={"30px"}>
					Login
				</FormLabel>
				<FormControl
					isInvalid={formik.touched.email && formik.errors.email}
					mb={"20px"}
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
						<FormErrorMessage position={"absolute"} mt={0}>{formik.errors.email}</FormErrorMessage>
					)}
				</FormControl>

				<FormControl
					isInvalid={
						formik.touched.password && formik.errors.password
					}
					mb={"20px"}
					>
					<InputGroup>
						<Input
							type={show ? "text" : "password"}
							placeholder="Password"
							bgColor={"white"}
							name="password"
							value={formik.values.password}
							onChange={formik.handleChange}
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
					{formik.touched.password && formik.errors.password && (
						<FormErrorMessage position={"absolute"} mt={0}>
							{formik.errors.password}
						</FormErrorMessage>
					)}
				</FormControl>

				<Button
					w={"full"}
					bgColor={"home.primary"}
					color={"white"}
					type="submit"
				>
					Sign in
				</Button>
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					flexDirection={"column"}
					mt={"20px"}
				>
					<Text fontSize={"12px"} mb={"10px"}>
						Or Sign in with
					</Text>
					<GoogleButton />
				</Box>
			</Box>
			<Text display={"flex"} fontSize={"14px"}>
				Belum Punya Akun?
				<Link to="/register" style={{ marginLeft: "5px" }}>
					Register
				</Link>
			</Text>
		</form>
	);
};
