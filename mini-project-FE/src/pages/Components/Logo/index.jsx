/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Logo = (props) => {
  return (
    <Box position={`${props.posisi}`} top={"5"}>
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