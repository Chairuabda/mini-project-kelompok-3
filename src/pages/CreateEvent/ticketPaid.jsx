// import React from "react";
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
	Textarea,
	Box,
	useDisclosure,
} from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/react-use-disclosure";

function BasicUsage() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box>
			<Button
				className="ticketButton"
				onClick={onOpen}
				colorScheme="yellow"
				size="lg"
			>
				Create Your Paid Ticket Now
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create Paid Ticket</ModalHeader>
					<ModalCloseButton />
					{/* NAMA TICKET */}
					<ModalBody>
						<FormControl>
							<FormLabel>Ticket Name</FormLabel>
							<Input placeholder="Enter your ticket name" />
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
						<Box className="ticketPrice">
							<FormLabel>Enter The Ticket Price </FormLabel>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									color="black"
									fontSize="1.2em"
								>
									Rp.
								</InputLeftElement>
								<Input placeholder="0" type="number" />
							</InputGroup>
						</Box>

						{/* DESKRIPSI TIKET */}
						<Box className="descriptForm">
							<FormLabel>Descriptions</FormLabel>
							<Textarea placeholder="Enter a description of your ticket" />
						</Box>
					</ModalBody>

					{/* BUTTON SAVE DAN CANCEL */}
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button variant="ghost">Save</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}

export default BasicUsage;
