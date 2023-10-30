import { Button, Image } from "@chakra-ui/react";
import googleImg from "../../../../assets/google.png";


export const GoogleButton = () => {
	return (
		<Button size={"sm"}>
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
