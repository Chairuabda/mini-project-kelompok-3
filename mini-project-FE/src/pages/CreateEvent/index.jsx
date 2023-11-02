import { Box, 
		Text,
} from '@chakra-ui/react'

import { Navbar } from '../Components/Navbar'
import { ThisCard } from './card'
import { InputNamaEvent } from './inputnamaevent'
import { InputKategoriEvent } from './inputkategorievent'
import { InputDateTime } from './inputdatetime'
import { InputDeskripsi } from './inputdeskripsi'
import UploadImage from './inputuploadgambar'
import { Footer } from '../Components/Footer'



export const CreateEvent  = () => {
  return (
	<Box
	minH='100vh'
	>
		<Navbar/>
		<Text textAlign='center' 
		position='absolute' 
		top='9rem' 
		left='50rem' 
		fontSize='48px' 
		fontWeight='600' 
		lineHeight='128.5%'
		>
		Buat Event
		</Text>
		<ThisCard/>
		<Text fontSize='20px' fontWeight='500' lineHeight='128.5%' position='absolute' top='22rem' left='26rem'>Nama Event</Text>
		<InputNamaEvent/>
		<Text fontSize='20px' fontWeight='500' lineHeight='128.5%' position='absolute' top='30rem' left='26rem'>Kategori</Text>
		<InputKategoriEvent/>
		<Text fontSize='20px' fontWeight='500' lineHeight='128.5%' position='absolute' top='38.50rem' left='26rem'>Tanggal dan Waktu Mulai</Text>
		<InputDateTime/>
		<Text fontSize='20px' fontWeight='500' lineHeight='128.5%' position='absolute' top='47rem' left='26rem'>Tanggal dan Waktu Berakhir</Text>
		<Text fontSize='20px' fontWeight='500' lineHeight='128.5%' position='absolute' top='55rem' left='26rem'>Deskripsi</Text>
		<InputDeskripsi/>
		<UploadImage/>
		<Footer/>
	</Box>
  )
}
