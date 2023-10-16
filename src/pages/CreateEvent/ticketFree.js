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
  Textarea
  } from '@chakra-ui/react'
  import { useDisclosure } from "@chakra-ui/react";

  function BasicUsages() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Button className="ticketButton2" onClick={onOpen} colorScheme='gray' size='lg'>Create Your Free Ticket Now</Button>

{/* JUDUL */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Free Ticket</ModalHeader>
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

{/* DESKRIPSI TICKET */}
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

export default BasicUsages;