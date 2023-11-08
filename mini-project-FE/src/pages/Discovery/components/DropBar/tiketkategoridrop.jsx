import {
	Box,
	Flex,
	Link,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";

export default function TiketDropBar() {
	return (
		<Box
		padding={{base: "5px",lg: "21px"}}
			borderRadius="9px"
			background="#FFF"
			boxShadow="md"
			w={{base: "120px",md: "272px"}}
			display={"flex"}
			justifyContent={"center"}
			flexDirection={"column"}
			gap={3}
		>
			<Accordion allowToggle borderColor={"transparent"}>
				<AccordionItem>
					<Text>
						<AccordionButton
							_hover={{
								bgColor: "transparent",
								borderColor: "transparent",
							}}
							_focus={{
								borderColor: "transparent",
								outline: "transparent",
							}}
						>
							<Box as="span" flex="1" textAlign="left" fontSize={{base: "12px", lg: "16px"}}>
								Jenis Tiket
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</Text>
					<AccordionPanel>
						<Flex direction={"column"} gap={3} fontSize={{base: "12px", lg: "16px"}}>
							<Link fontWeight={400}>Semua</Link>
							<Link fontWeight={400}>Berbayar</Link>
							<Link fontWeight={400}>Gratis</Link>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
}
