/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import {
	Box,
	Center,
	Text,
	Editable,
	EditableInput,
	// EditableTextarea,
	EditablePreview,
	FormControl,
	FormLabel,
	FormHelperText,
	Image,
} from "@chakra-ui/react";

export const Profile = () => {
	const user = useSelector((state) => state.AuthReducer.user);
	console.log(user);

	return (
		<Box>
			<Box
				fontSize={"20px"}
				py={"20px"}
				borderBottom={"2px solid"}
        borderBottomColor={"gray.300"}
        px={"30px"}
        justifyContent={"space-between"}
        display={"flex"}
			>
				<Text>Profile</Text>

        <Box border={"1px solid black"} px={"10px"} borderRadius={"20px"} fontSize={"16px"} display={"flex"} alignItems={"center"} cursor={"pointer"}>
          {user.email}
        </Box>

			</Box>
			<Center w={"full"} h={"full"}>
				<Box w={"100%"} h={"80%"} px={"70px"}>
					<Center mt={"35px"}>
						<Box w={"90%"}>
							<Box mb={"30px"}>
								<Image
									borderRadius="full"
									boxSize="150px"
									src="https://bit.ly/dan-abramov"
									alt="Dan Abramov"
								/>
							</Box>

							<form action="">
								<Box
									display={"flex"}
									flexDirection={"column"}
									gap={5}
								>
									<FormControl isRequired>
										<FormLabel>Full Name</FormLabel>
										<Editable
											defaultValue={user.fullname}
											borderBottom={"1px solid black"}
										>
											<EditablePreview />
											<EditableInput />
										</Editable>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Username</FormLabel>
										<Editable
											defaultValue={user.username}
											borderBottom={"1px solid black"}
										>
											<EditablePreview />
											<EditableInput />
										</Editable>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Email</FormLabel>
										<Editable
											defaultValue={user.email}
											borderBottom={"1px solid black"}
										>
											<EditablePreview />
											<EditableInput />
										</Editable>
										<FormHelperText>
											We'll never share your email.
										</FormHelperText>
									</FormControl>
								</Box>
							</form>
						</Box>
					</Center>
				</Box>
			</Center>
		</Box>
	);
};