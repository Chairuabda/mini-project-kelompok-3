import { Box,
        Text,
} from '@chakra-ui/react'


import LokasiDropBar from './DropBar/locationdrop'
import KategoriDropBar from './DropBar/kategorieventdrop'
import WaktuDropBar from './DropBar/waktudropbar'
import TiketDropBar from './DropBar/tiketkategoridrop'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Home/Components/Footer'

export const Discovery = () => {
return (
    <Box 
    backgroundColor='#F4F4F4' 
    width='400' 
    height='1700'
    flexShrink='0'
    >
        <Navbar/>
    
        <Box 
        width='272px' 
        height='232px' 
        border='1px solid #FFF' 
        borderRadius='9px' 
        background='#FFF' 
        boxShadow='0px 8px 17px 0px rgba(0, 0, 0, 0.05)'
        position='absolute'
        marginTop='7rem'
        marginLeft='80px'
        >
            <Text color='black' fontSize='17px' fontStyle='normal' fontWeight='500' lineHeight='normal' marginTop='5' marginLeft='5'>Lokasi</Text>
            <LokasiDropBar/>
        </Box>

        <Box 
        width='272px' 
        height='232px' 
        border='1px solid #FFF' 
        borderRadius='9px' 
        background='#FFF' 
        boxShadow='0px 8px 17px 0px rgba(0, 0, 0, 0.05)'
        position='absolute'
        marginTop='23rem'
        marginLeft='80px'
        >
            <Text color='black' fontSize='17px' fontStyle='normal' fontWeight='500' lineHeight='normal' marginTop='5' marginLeft='5'>Kategori</Text>
            <KategoriDropBar/>
        </Box>

        <Box 
        width='272px' 
        height='232px' 
        border='1px solid #FFF' 
        borderRadius='9px' 
        background='#FFF' 
        boxShadow='0px 8px 17px 0px rgba(0, 0, 0, 0.05)'
        position='absolute'
        marginTop='39rem'
        marginLeft='80px'
        >
            <Text color='black' fontSize='17px' fontStyle='normal' fontWeight='500' lineHeight='normal' marginTop='5' marginLeft='5'>Waktu</Text>
            <WaktuDropBar/>
        </Box>

        <Box 
        width='272px' 
        height='232px' 
        border='1px solid #FFF' 
        borderRadius='9px' 
        background='#FFF' 
        boxShadow='0px 8px 17px 0px rgba(0, 0, 0, 0.05)'
        position='absolute'
        marginTop='55rem'
        marginLeft='80px'
        >
            <Text color='black' fontSize='17px' fontStyle='normal' fontWeight='500' lineHeight='normal' marginTop='5' marginLeft='5'>Jenis Tiket</Text>
            <TiketDropBar/>

            <Box
            width='118.49rem' 
            height='24rem' 
            flexShrink='0'
            background='#EBEBEB' 
            position='absolute'
            marginTop='20rem'
            marginLeft='-4.78rem'
            >
            <Footer/>
            </Box>
        </Box>

    </Box>
)
}