/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  Input,
  Card,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Stack,
  Button
} from "@chakra-ui/react";

import { Navbar } from "../Components/Navbar";

import { Footer } from "../Components/Footer";
import UploadImage from "./inputuploadgambar";
import { PaidTicket } from "./Components/paidticket";
import { FreeTicket } from "./Components/freeticket";

export const CreateEvent = () => {

  return (
    <Box minH="100vh" w="100vW">
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Card mt="150px" w="50%" padding="50px" mb="50px">
          <Text
            textAlign="center"
            fontSize="48px"
            fontWeight="600"
            lineHeight="128.5%"
          >
            Buat Event
          </Text>
          <UploadImage/>
          <Box mt="90px" display="flex " gap="10" flexDirection="column">
            <FormControl>
              <FormLabel>Nama Event</FormLabel>
              <Input type="text" placeholder="Tulis nama event..." />
            </FormControl>
            <FormControl>
              <FormLabel>Kategori</FormLabel>
              <Select placeholder="Select category">
				<option value='option1'>Live Musik</option>
                <option value='option2'>Olahraga</option>
                <option value='option3'>Pendidikan</option>
                <option value='option4'>Atraksi</option>
                <option value='option5'>Trater dan Drama</option>
              </Select>
            </FormControl>

            <Box display="flex" gap="10">
              <FormControl>
                <FormLabel>Start Date</FormLabel>
                <Input type="date" placeholder="Select start date" />
              </FormControl>
              <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input type="date" placeholder="Select end date" />
              </FormControl>
            </Box>

            <Box display="flex" gap="10">
              <FormControl>
                <FormLabel>Start Time</FormLabel>
                <Input type="time" placeholder="Select start time" />
              </FormControl>
              <FormControl>
                <FormLabel>End Time</FormLabel>
                <Input type="time" placeholder="Select end time" />
              </FormControl>
            </Box>

            <FormControl>
              <FormLabel>Deskripsi</FormLabel>
              <Textarea
                borderRadius="9px"
                boxShadow="sm"
                placeholder="Tulis deskripsi"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input type="text" placeholder="Address" />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Select placeholder="Select City">
				<option value='option1'>Yogyakarta</option>
                <option value='option2'>Jakarta</option>
                <option value='option3'>Bali</option>
                <option value='option4'>Surabaya</option>
                <option value='option5'>Semarang</option>
              </Select>
            </FormControl>
          </Box>
        </Card>
      </Box>
      <Box  mt="20px" mb="200px" display="flex" justifyContent="center">
        <Box w="45%" display="flex" justifyContent="space-between">
		<PaidTicket />
		<FreeTicket/>
        </Box>
      </Box>
      <Footer />
	<Stack spacing={4} direction='row' align='center'>
	<Button marginTop='-49rem' marginLeft='45rem' width='500px' bgColor='home.primary' color='white' size='lg'>
    Buat Event
  </Button>
	</Stack>
    </Box>
  );
};
