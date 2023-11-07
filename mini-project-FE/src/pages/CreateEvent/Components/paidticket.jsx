/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Text,
  useDisclosure,
  Center,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,

} from "@chakra-ui/react";

export const PaidTicket = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(props.isOpen);
  return (
    <Box display='flex' gap='20'>
      <Center
        onClick={onOpen}
        fontSize="20"
        fontWeight="600"
        width="400px"
        h="140px"
        bg="yellow.300"
        borderRadius='10px'
        _hover={{backgroundColor:'yellow.400'}}
      >
        <Box
          h="50px"
          w="50px"
          backgroundColor="white"
          borderRadius="50%"
          position="relative"
          left="-125px"
        ></Box>
        <Box
          h="20px"
          w="20px"
          backgroundColor="white"
          borderRadius="50%"
          position="relative"
          left="-80px"
          bottom="-70px"
        ></Box>
        <Box
          h="20px"
          w="20px"
          backgroundColor="white"
          borderRadius="50%"
          position="relative"
          left="-100px"
          top="-70px"
        ></Box>
        <Box
          h="120px"
          w="20px"
          backgroundColor="transparent"
          borderLeft="2px dashed gray"
          position="relative"
          left="-110px"
          top="0"
        ></Box>
        {/* <PaidTicket isOpen='isOpen'/> */}
        <Text>Paid Ticket</Text>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Paid Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Tentukan Jumlah Tiket</FormLabel>
              <NumberInput max={100} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
            <FormLabel>Tentukan Harga Tiket</FormLabel>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="black"
                  fontSize="1em"
                  // eslint-disable-next-line react/no-children-prop
                  children="Rp"
                  
                />
                <Input placeholder="0" />
              </InputGroup>
            </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bgColor='home.primary' color='white' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Oke</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
