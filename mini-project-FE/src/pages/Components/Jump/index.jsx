/* eslint-disable react/prop-types */
import { Center, Link } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export const JumpTo = ( props ) => {
    return (
        <Link href={`#${props.idname}`} display={"flex"} alignItems={"center"}>
				<Center
					bgColor={"home.primary"}
					w={"40px"}
					h={"40px"}
					borderRadius={"50%"}
					fontSize={"24px"}
					position={"fixed"}
					right={5}
					bottom={5}
					color={"white"}
				>
					<ArrowUpIcon />
				</Center>
			</Link>
    )
}