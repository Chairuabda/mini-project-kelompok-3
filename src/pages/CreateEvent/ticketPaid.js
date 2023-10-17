import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    InputGroup,
    InputLeftElement,
    Textarea
  } from '@chakra-ui/react'
  import { useDisclosure } from "@chakra-ui/react";

  function BasicUsage() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Button className="ticketButton" onClick={onOpen} colorScheme='yellow' size='lg'>Create Your Paid Ticket Now</Button>

{/* JUDUL */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Paid Ticket</ModalHeader>
            <ModalCloseButton />

{/* NAMA TICKET */}
            <ModalBody>
                  <FormControl>
                  <FormLabel>Ticket Name</FormLabel>
                  <Input placeholder='Enter your ticket name' />
                  </FormControl>

{/* JUMLAH TIKET */}
                        <FormControl className="numbTicket">
                        <FormLabel>Number Of Ticket</FormLabel>
                        <NumberInput max={100} min={1}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                        </NumberInput>
                        </FormControl>

{/* HARGA TIKET */}
                        <div className="ticketPrice">
                            <FormLabel>Enter The Ticket Price </FormLabel>
                            <InputGroup>
                            <InputLeftElement
                              pointerEvents='none'
                              color='black'
                              fontSize='1.2em'
                              children='Rp'
                            />
                            <Input placeholder='0' type="number"/>
                            </InputGroup>
                        </div>

{/* DESKRIPSI TIKET */}
                            <div className="descriptForm">
                                <FormLabel>Descriptions</FormLabel>
                                <Textarea placeholder='Enter a description of your ticket' />
                            </div>
            </ModalBody>

{/* BUTTON SAVE DAN CANCEL */}
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button variant='ghost'>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      
    )
  }

export default BasicUsage;