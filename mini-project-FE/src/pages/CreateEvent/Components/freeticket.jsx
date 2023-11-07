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
} from "@chakra-ui/react";

export const FreeTicket = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Center
        onClick={onOpen}
        fontSize="20"
        fontWeight="600"
        width="400px"
        h="140px"
        bg="gray.200"
        borderRadius="10px"
        _hover={{backgroundColor:'gray.300'}}
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

        <Text>Free Ticket</Text>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Free Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
              <FormLabel>Tentukan Jumlah Tiket</FormLabel>
              <NumberInput max={50} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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
