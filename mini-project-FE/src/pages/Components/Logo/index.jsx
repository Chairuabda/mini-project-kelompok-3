import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <Box position={"absolute"} top={"5"}>
				<Link to="/">
					<Text
						fontWeight={400}
						fontSize={"42px"}
						color={"home.primary"}
					>
						ada<span style={{ fontWeight: "200" }}>event.</span>
					</Text>
				</Link>
			</Box>
  )
}