/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import {
	Box,
	Center,
	FormControl,
	FormLabel,
	FormHelperText,
	Button,
	useToast,
	Input,
} from "@chakra-ui/react";
import UploadImage from "../uploadAvatar/uploadAvatarImage";
import { useFormik } from "formik";
import axios from "axios";

import { useDispatch } from "react-redux";
import { keepLogin } from "../../../../../redux/reducer/authReducer";

export const Profile = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.AuthReducer.user);
	const toast = useToast();

	const updateProfile = async (username, email, fullname) => {
		try {
			await axios.patch(
				`http://localhost:8080/auth/update-profile/${user.id}`,
				{
					username,
					email,
					fullname,
				}
			);

			dispatch(keepLogin());
			toast({
				title: "Update data success",
				status: "success",
			});
		} catch (err) {
			toast({
				title: err.response?.data,
				status: "error",
			});
		}
	};

	const formik = useFormik({
		initialValues: {
			username: user.username || "",
			email: user.email || "",
			fullname: user.fullname || "",
		},
		onSubmit: (values) => {
			console.log("submit");
			updateProfile(values.username, values.email, values.fullname);
		},
	});

	return (
		<Box>
			<Center w={"full"} h={"full"}>
				<Box w={"100%"} h={"80%"} px={"70px"}>
					<Center mt={"35px"}>
						<Box w={"90%"}>
							<Box
								mb={"70px"}
								display={"flex"}
								justifyContent={{ base: "center", md: "start" }}
								alignItems={"start"}
							>
								<UploadImage />
							</Box>

							<form onSubmit={formik.handleSubmit}>
								<Box
									display={"flex"}
									flexDirection={"column"}
									gap={5}
								>
									<FormControl isRequired>
										<FormLabel>Full Name</FormLabel>
										<Input
											value={formik.values.fullname}
											onChange={formik.handleChange}
											name="fullname"
										/>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Username</FormLabel>
										<Input
											value={formik.values.username}
											onChange={formik.handleChange}
											name="username"
										/>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Email</FormLabel>
										<Input
											value={formik.values.email}
											onChange={formik.handleChange}
											name="email"
										/>

										<FormHelperText>
											We'll never share your email.
										</FormHelperText>
									</FormControl>
								</Box>
								<Button type="submit">Submit</Button>
							</form>
						</Box>
					</Center>
				</Box>
			</Center>
		</Box>
	);
};
