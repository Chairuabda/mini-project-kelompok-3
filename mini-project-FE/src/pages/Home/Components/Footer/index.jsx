import {
	Box,
	Text,
	Button,
	Center,
	Flex,
} from "@chakra-ui/react";
import {
	InstagramLogo,
	YoutubeLogo,
	TwitterLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<Box
			display={"flex"}
			h={"300px"}
			bgColor={"home.primary"}
			color="white"
			px={"250px"}
		>
			<Center w={"30%"}>
				<Box>
					<Link to="/">
						<Box fontSize={"34px"} _hover={{ color: "white" }} mb={"10px"}>
							<Text fontWeight={400}>
								ada<span style={{ fontWeight: "200" }}>event.</span>
							</Text>
						</Box>
					</Link>

					<Box>Copyright © 2023 Kelompok 3</Box>
					<Flex mt={"10px"} gap={5}>
						<Button
							variant={"ghost"}
							color={"white"}
							_hover={{
								bgColor: "none",
								borderColor: "home.primary",
							}}
							_focus={{ outline: "none", border: "home.primary" }}
                            _active={{ bgColor: "transparant" }}
                            size={"xm"}
							w={"fit-content"}
						>
							<InstagramLogo size={24} />
						</Button>
						<Button
							variant={"ghost"}
							color={"white"}
							_hover={{
								bgColor: "none",
								borderColor: "home.primary",
							}}
							_focus={{ outline: "none", border: "home.primary" }}
                            _active={{ bgColor: "transparant" }}
                            size={"xm"}
						>
							<YoutubeLogo size={24} />
						</Button>
						<Button
							variant={"ghost"}
							color={"white"}
							_hover={{
								bgColor: "none",
								borderColor: "home.primary",
							}}
							_focus={{ outline: "none", border: "home.primary" }}
                            _active={{ bgColor: "transparant" }}
                            size={"xm"}
						>
							<TwitterLogo size={24} />
						</Button>
					</Flex>
				</Box>
			</Center>

			<Box w={"70%"}>
				<Center h={"full"}>
					<Flex
						w={"full"}
						h={"full"}
						justifyContent={"space-around"}
						p={"50px"}
						alignItems={"center"}
					>
						<Flex
							h={"100%"}
							justify={"space-between"}
							direction={"column"}
						>
							<Text mb={2} fontWeight={500} fontSize={"20px"}>
								Product
							</Text>
							<Link>
								<Text>Overview</Text>
							</Link>
							<Link>
								<Text>Features</Text>
							</Link>
							<Link>
								<Text>Tutorial</Text>
							</Link>
							<Link>
								<Text>Pricing</Text>
							</Link>
							<Link>
								<Text>Releases</Text>
							</Link>
						</Flex>
						<Flex
							h={"100%"}
							justify={"space-between"}
							direction={"column"}
						>
							<Text mb={2} fontWeight={500} fontSize={"20px"}>
								Company
							</Text>
							<Link>
								<Text>Overview</Text>
							</Link>
							<Link>
								<Text>Features</Text>
							</Link>
							<Link>
								<Text>Tutorial</Text>
							</Link>
							<Link>
								<Text>Pricing</Text>
							</Link>
							<Link>
								<Text>Releases</Text>
							</Link>
						</Flex>
						<Flex
							h={"100%"}
							justify={"space-between"}
							direction={"column"}
						>
							<Text mb={2} fontWeight={500} fontSize={"20px"}>
								Support
							</Text>
							<Link>
								<Text>Overview</Text>
							</Link>
							<Link>
								<Text>Features</Text>
							</Link>
							<Link>
								<Text>Tutorial</Text>
							</Link>
							<Link>
								<Text>Pricing</Text>
							</Link>
							<Link>
								<Text>Releases</Text>
							</Link>
						</Flex>
					</Flex>
				</Center>
			</Box>
		</Box>
	);
};
