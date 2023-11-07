/* eslint-disable react/prop-types */
import { Button, Image } from "@chakra-ui/react";
import googleImg from "../../../../assets/google.png";


export const GoogleButton = (props) => {
	return (
		<Button size={"sm"} onClick={props.onLoginWithGoogle}>
			<Image
				src={googleImg}
				w={"15px"}
				mr={"7px"}
				alt="Google Image"
			/>
			Google
		</Button>
	);
};
