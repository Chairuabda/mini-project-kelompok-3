import {
	AspectRatio,
	Box,
	Input,
	Image,
	Button,
	useToast,
} from "@chakra-ui/react";
import AvatarProfile from "../../assets/avatar-profile.jpeg";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function UploadImage() {
	const [selectedImage, setSelectedImage] = useState(null);
	const user = useSelector((state) => state.AuthReducer.user);
	const [fieldImage, setFieldImage] = useState(null);
	const toast = useToast();

	const updateAvatar = async () => {
		try {
			let formData = new FormData();
			formData.append("avatar", fieldImage);
			console.log(formData);

			const { data } = await axios.patch(
				`http://localhost:8080/auth/update-profile/${user.id}`,
				{
					formData,
				}
			);
			toast({
				title: data.message,
				type: "success",
			});
		} catch (err) {
			console.log(err);
		}
	};

	const formik = useFormik({
		initialValues: {
			Image: null,
		},
		onSubmit: () => {
			updateAvatar();
			alert("submit");
		},
	});

	return (
		<Box>
			<form onSubmit={formik.handleSubmit}>
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
										src={URL.createObjectURL(selectedImage)}
										onChange={(event) => {
											setFieldImage(event.currentTarget.files[0]);
										}}
									/>
								</Box>
							) : (
								<Box
									height="100%"
									width="100%"
									display="flex"
									alignItems={"center"}
									justifyContent={"center"}
									bgColor={"red"}
								>
									<Image src={AvatarProfile} />
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
									console.log(event.target.files[0]);
									setSelectedImage(event.target.files[0]);
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
						<Button type="submit" size={"sm"} w={"70px"}>
							Save
						</Button>
					</Box>
				) : (
					// <Button onClick={() => setSelectedImage(null)}>Remove</Button>
					<></>
				)}
			</form>
		</Box>
	);
}
