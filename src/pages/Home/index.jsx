import { Box } from "@chakra-ui/react"
import { Navbar } from "../Components/Navbar"

export const Home = () => {
    return (
        <Box bgColor="home.primary" w={"100vw"}overflowX={"hidden"}>
            <Navbar/>
        </Box>
    )
}