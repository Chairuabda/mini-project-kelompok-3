import {
	Card,
	Flex,
	Center,
	Box,
	Text,
	Image,
	Stat,
	StatLabel,
	StatHelpText,
} from "@chakra-ui/react";

export const DetailPemesanan = () => {
	return (
		<>
			<Box py={"10px"} mb={"20px"}>
				<Text fontSize={"20px"} fontWeight={600}>
					Detail Pemesanan
				</Text>
			</Box>

			<Center mb={"30px"}>
				<Card p={"20px"}>
					<Flex mb={"20px"}>
						<Box w={"50%"}>
							<Image src="/img/event1.png" borderRadius={"10px"} />
						</Box>
						<Box w={"50%"} pl={"20px"}>
							<Stat h={"full"} display={"flex"}>
								<Box
									display={"flex"}
									flexDirection={"column"}
									justifyContent={"space-evenly"}
									height={"full"}
								>
									<StatLabel mb={"5px"} fontSize={"16px"}>
										Collected Fees
									</StatLabel>
									<StatHelpText my={"2px"}>
										Feb 12 - Feb 28
									</StatHelpText>
									<StatHelpText my={"2px"}>
										20.00 - 23.00 wib
									</StatHelpText>
									<StatHelpText mt={"2px"}>Yogyakarta</StatHelpText>
								</Box>
							</Stat>
						</Box>
					</Flex>
					<Flex
						justify={"space-between"}
						py={"10px"}
						borderY={"1px solid"}
						borderColor={"whitesmoke"}
					>
						<Text>Jenis Tiket</Text>
						<Flex gap={10}>
							<Text>Harga</Text>
							<Text>Jumlah</Text>
						</Flex>
					</Flex>
					<Flex justify={"space-between"} py={"20px"}>
						<Flex>
							<Text>img</Text>
							<Text>Spooky Experience</Text>
						</Flex>
						<Flex gap={20}>
							<Text>Rp 0</Text>
							<Text>x1</Text>
						</Flex>
					</Flex>
				</Card>
			</Center>
		</>
	);
};
