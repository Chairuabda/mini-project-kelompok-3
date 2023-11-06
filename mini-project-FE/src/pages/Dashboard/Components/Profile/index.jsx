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
	AspectRatio,
	Image,
} from "@chakra-ui/react";
// import UploadImage from "./components/uploadAvatar/uploadAvatarImage";
import AvatarProfile from "../../../../assets/avatar-profile.jpeg";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useFormik } from "formik";
import axios from "axios";

import { useDispatch } from "react-redux";
import { keepLogin } from "../../../../../redux/reducer/authReducer";

export const Profile = () => {
	const dispatch = useDispatch();
	const [selectedImage, setSelectedImage] = useState(null);

	const user = useSelector((state) => state.AuthReducer.user);
	const toast = useToast();

	const updateProfile = async (username, email, fullname) => {
		try {
			let formData = new FormData();
			formData.append("username", username);
			formData.append("email", email);
			formData.append("fullname", fullname);
			formData.append("avatar", selectedImage);
			const { data } = await axios.patch(
				`http://localhost:8080/auth/update-profile/${user.id}`,
				formData
			);

			dispatch(keepLogin());
			alert(data?.meesage);
			toast({
				title: "Update data success",
				status: "success",
			});
		} catch (err) {
			toast({
				title: err.response?.data,
				status: "error",
			});
			console.log(err);
		}
	};

	const formik = useFormik({
		initialValues: {
			username: user.username || "",
			email: user.email || "",
			fullname: user.fullname || "",
			avatar: user.avatar || "",
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
							<form onSubmit={formik.handleSubmit}>
								<Box
									mb={"70px"}
									display={"flex"}
									justifyContent={{ base: "center", md: "start" }}
									alignItems={"start"}
								>
									<Box>
										<AspectRatio width="40" ratio={1}>
											<Box
												borderColor="gray.300"
												borderStyle="dashed"
												borderWidth="2px"
												borderRadius={"50%"}
												shadow="sm"
												_hover={{
													shadow: "md",
												}}
												display={"flex"}
												alignItems={"center"}
												justifyContent={"center"}
											>
												<Box
													position="relative"
													height="100%"
													width="100%"
													display={"flex"}
													alignItems={"center"}
													justifyContent={"center"}
												>
													{selectedImage ? (
														<Box>
															<Image
																alt="not found"
																transform={"scale(2)"}
																src={URL.createObjectURL(
																	selectedImage
																)}
															/>
														</Box>
													) : (
														<Box
															height="100%"
															width="100%"
															display="flex"
															alignItems={"center"}
															justifyContent={"center"}
														>
															{user?.avatar ? (
																<Image
																	src={`http://localhost:8080/uploads/avatar/${user?.avatar}`}
																	alt="profile pict"
																	transform={"scale(2)"}
																/>
															) : (
																<Image src={AvatarProfile} />
															)}
														</Box>
													)}
													<Box
														height="100%"
														width="100%"
														position="absolute"
														display={"flex"}
														alignItems={"center"}
														justifyContent={"center"}
														opacity="0.2"
													>
														<AiOutlinePlus fontSize={"40px"} />
													</Box>
													<Input
														type="file"
														height="100%"
														width="100%"
														position="absolute"
														top="0"
														left="0"
														opacity="0"
														aria-hidden="true"
														accept="image/*"
														onChange={(event) => {
															setSelectedImage(event.currentTarget.files[0]);
														}}
													/>
												</Box>
											</Box>
										</AspectRatio>
										{selectedImage ? (
											<Box
												position={"absolute"}
												display={"flex"}
												gap={2}
												mt={"10px"}
											>
												<Button
													onClick={() => setSelectedImage(null)}
													size={"sm"}
													w={"70px"}
												>
													Remove
												</Button>
											</Box>
										) : (
											<></>
										)}
									</Box>
								</Box>

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
