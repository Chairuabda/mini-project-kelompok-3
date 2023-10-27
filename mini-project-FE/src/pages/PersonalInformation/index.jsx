import { Box } from "@chakra-ui/react"
import { InformationForm } from "./Components/information-form"
import { Navbar } from "../Components/Navbar"
import { Footer } from "../Home/Components/Footer"

export const PersonalInformation = () => {
    return (
        <Box>
            <Navbar />
            <InformationForm />
            <Footer/>
        </Box>
    )
}