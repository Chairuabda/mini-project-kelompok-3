import {
	Box,
	Text,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Select,
	Flex,
	Button,
} from "@chakra-ui/react";
import { EventAktif } from "./components/eventAktiv";
import { AiOutlinePlus } from "react-icons/ai"

export const HaveEvent = () => {
	return (
		<Box w={"full"} h={"full"} p={"50px 50px 0px 50px"}>
			<Box w={"full"} h={"full"}>
				<Box>
					<Tabs
						isFitted
						variant="enclosed"
						border={"none"}
						_hover={{ border: "none", outline: "none" }}
					>
						<TabList mb="1em">
							<Tab
								borderRadius={"10px 10px 3px 3px"}
								_hover={{ outline: "none" }}
								_focus={{ outline: "none" }}
							>
								Event Aktif
							</Tab>
							<Tab
								borderRadius={"10px 10px 3px 3px"}
								_hover={{ outline: "none" }}
								_focus={{ outline: "none" }}
							>
								Event lalu
							</Tab>
						</TabList>

						<Flex
							w={"full"}
							justify={"space-between"}
							alignItems={"center"}
						>
							<Text>Menampilkan 1 - 10 event</Text>
							<Select placeholder="Urutkan" w={"150px"}>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</Select>
						</Flex>
						<TabPanels>
							<TabPanel pb={0}>
								<EventAktif />
							</TabPanel>
							<TabPanel>
								<p>two!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
				<Box
					justifyContent={"end"}
					alignItems={"end"}
					display={"flex"}
					position={"fixed"}
					right={5}
					bottom={5}
				>
					<Button bgColor={"home.primary"} color={"white"} size={"xm"} p={"8px"} fontSize={"16px"} gap={1}>
						<AiOutlinePlus fontSize={"20px"}/> 
					</Button>
				</Box>
			</Box>
		</Box>
	);
};
