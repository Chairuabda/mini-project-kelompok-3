import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CreateEvent } from "./pages/CreateEvent";
import {Dashboard} from "./pages/Dashboard";
import { MyEvent } from "./pages/Dashboard/Components/MyEvent";
import { PersonalInformation } from "./pages/PersonalInformation";
import { Discovery } from "./pages/Discovery"


function App() {
	return (
		<Box fontFamily={"Outfit"} 
		overflow= "hidden"
		>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/event" element={<CreateEvent />} />
				<Route path="/dashboard/myevent" element={<MyEvent />} />
				<Route path="/personal-information" element={<PersonalInformation />} />
				<Route path="/discovery" element={<Discovery/>} />
			</Routes>
		</Box>
	);
}

export default App;
