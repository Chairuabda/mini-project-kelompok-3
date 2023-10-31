import { Box, Text, Button, Center, Flex } from "@chakra-ui/react";
import {
	InstagramLogo,
	YoutubeLogo,
	TwitterLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";

export const Footer = () => {
	return (
		<Box
			display={"flex"}
			h={"300px"}
			bgColor={"#EBEBEB"}
			color="black"
			px={"80px"}
		>
			<Box w={"50%"} pt={"30px"}>
				<Box>
					<Logo posisi="static" />

					<Box w={"200px"} fontSize={"14px"}>
						<Text>Pacific Building</Text> 
						Jl. Laksda Adisucipto
						No.157, Demangan Baru, Caturtunggal, Kec. Depok, Kabupaten
						Sleman, DIY 55281
					</Box>
					<Flex mt={"20px"} gap={5}>
						<Button
							variant={"ghost"}
							color={"home.primary"}
							_hover={{
								bgColor: "none",
								borderColor: "transparent",
							}}
							_focus={{ outline: "none", borderColor: "transparent" }}
							_active={{ bgColor: "transparant" }}
							size={"xm"}
							w={"fit-content"}
						>
							<InstagramLogo size={24} />
						</Button>
						<Button
							variant={"ghost"}
							color={"home.primary"}
							_hover={{
								bgColor: "none",
								borderColor: "transparent",
							}}
							_focus={{ outline: "none", border: "transparent" }}
							_active={{ bgColor: "transparant" }}
							size={"xm"}
						>
							<YoutubeLogo size={24} />
						</Button>
						<Button
							variant={"ghost"}
							color={"home.primary"}
							_hover={{
								bgColor: "none",
								borderColor: "transparent",
							}}
							_focus={{ outline: "none", border: "transparent" }}
							_active={{ bgColor: "transparant" }}
							size={"xm"}
						>
							<TwitterLogo size={24} />
						</Button>
					</Flex>
				</Box>
			</Box>

			<Box w={"50%"}>
				<Center h={"full"}>
					<Flex
						w={"full"}
						h={"full"}
						justifyContent={"space-around"}
						p={"40px 50px"}
						alignItems={"center"}
					>
						<Flex
							h={"100%"}
							justify={"start"}
							direction={"column"}
							fontSize={"14px"}
							gap={3}
						>
							<Text fontWeight={500} fontSize={"16px"}>
								Tengtang AdaEvent
							</Text>
							<Link>
								<Text fontWeight={400}>Login</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Sign Up</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Discovvery</Text>
							</Link>
						</Flex>
						<Flex
							h={"100%"}
							justify={"start"}
							direction={"column"}
							fontSize={"14px"}
							gap={3}
						>
							<Text fontWeight={500} fontSize={"16px"}>
								Lokasi
							</Text>
							<Link>
								<Text fontWeight={400}>DKI Jakarta</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>DI Yogyakarta</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Bali</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Medan</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Suarabaya</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Semua Kota</Text>
							</Link>
						</Flex>
						<Flex
							h={"100%"}
							justify={"start"}
							direction={"column"}
							fontSize={"14px"}
							gap={3}
						>
							<Text fontWeight={500} fontSize={"16px"}>
								Kategori
							</Text>
							<Link>
								<Text fontWeight={400}>Live Music</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Pendidikan</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Olahraga</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Teater dan Drama</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Atraksi</Text>
							</Link>
							<Link>
								<Text fontWeight={400}>Semua Kategori</Text>
							</Link>
						</Flex>
					</Flex>
				</Center>
			</Box>
		</Box>
	);
};
