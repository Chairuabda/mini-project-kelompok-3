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
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { login } from "../../../../../redux/reducer/authReducer";

export const LoginSection = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: async (values) => {
			dispatch(login(values.email, values.password));
			navigate("/")
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
				<InputGroup mb={"20px"}>
					<Input
						type="text"
						placeholder="Email"
						bgColor={"white"}
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
				</InputGroup>

				<InputGroup mb={"20px"}>
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
