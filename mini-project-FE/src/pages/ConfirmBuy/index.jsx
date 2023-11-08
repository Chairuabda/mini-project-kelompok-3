import { Box, Flex, VStack } from "@chakra-ui/react"
import { Navbar } from "../Components/Navbar"
import { Footer } from "../Components/Footer"
import { RingkasanPesanan } from "./Components/RingkasanPesanan"
import { MetodePembayaran } from "./Components/MetodePembayaran"
import { JenisTiket } from "./Components/JenisTiket"
import { Diskon } from "./Components/Diskon"
import { DetailPembayaran } from "./Components/DetailPembayaran"
import { ButtonBayar } from "./Components/ButtonBayar"


export const ConfirmBuy = () => {
    return (
       <Box>
            <Navbar />
            <Flex bg="F4F4F4" m="0px 20px 0px 20px" justify="center" gap="5px">
                <Flex direction="column" w="50vw" align="center">
                    <RingkasanPesanan />
                    <MetodePembayaran />
                </Flex>
                <Flex direction="column"  w="50vw" align="center">
                    <JenisTiket />
                    <Diskon />
                    <DetailPembayaran />
                    <ButtonBayar />
                </Flex>
            </Flex>
       </Box>
    )
}