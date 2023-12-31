import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	useDisclosure,
	Input,
	Box,
	InputGroup,
	InputLeftElement,
	Flex,
	Text,
	Tooltip,
	Image
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const SearchEvent = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [title, setTitle] = useState("");
	const [events, setEvents] = useState();
	const navigate = useNavigate()

	const findEvent = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8080/event?title=${title}`
			);
			setEvents(response?.data?.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		findEvent();
	}, [title]);

	const handeSearchlinput = (event) => {
		setTitle(event.target.value);
	};

	return (
		<Box>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.300" h={"16"} />
				</InputLeftElement>
				<Input
					type="text"
					bgColor={"white"}
					color={"black"}
					w={{base: "250px",lg: "350px"}}
					borderRadius={"40px"}
					placeholder="Cari event..."
					onClick={onOpen}
				/>
			</InputGroup>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent borderTopRadius={"8px"} h={"550px"}>
					<ModalHeader borderTopRadius={"8px"} position={"sticky"}>
						<InputGroup>
							<InputLeftElement pointerEvents="none">
								<SearchIcon color="gray.300" h={"16"} />
							</InputLeftElement>
							<Input
								type="text"
								bgColor={"white"}
								color={"black"}
								borderRadius={"40px"}
								placeholder="Cari event..."
								name="title"
								onChange={handeSearchlinput}
								value={title}
							/>
						</InputGroup>
					</ModalHeader>
					<ModalBody
						display={"flex"}
						flexDirection={"column"}
						gap={3}
						overflow={"auto"}
						mb={"20px"}
					>
						{events?.slice(0, 5).map((data, index) => {
							return (
								<Flex
									key={index}
									h={"100px"}
									// bgColor={"grey"}
									border={"1px solid black"}
									borderRadius={"5px"}
									w={"full"}
									cursor={"pointer"}
									onClick={() => navigate(`/event/${data.id}`)}
								>
									<Box
										bgColor={"grey"}
										w={"35%"}
										borderLeftRadius={"5px"}
										h={"full"}
									>
										<Image src={`http://localhost:8080/uploads/banner/${data?.banner}`} w={"full"} h={"full"}/>
									</Box>
									<Box w={"65%"} p={"5px 8px"}>
										<Box
											fontSize={"14px"}
											h={"20px"}
											overflow={"hidden"}
										>
											<Tooltip
												hasArrow
												placement="top-end"
												label={data.title}
											>
												{data.title}
											</Tooltip>
										</Box>
										<Text fontSize={"12px"}>
											{data.start_date} - {data.end_date}
										</Text>
									</Box>
								</Flex>
							);
						})}
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};
