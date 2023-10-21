import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CreateEvent } from "./pages/CreateEvent";
import {Dashboard} from "./pages/Dashboard";
import { MyEvent } from "./pages/Dashboard/Components/MyEvent";
import { Box } from "@chakra-ui/react";


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
			</Routes>
		</Box>
	);
}

export default App;
