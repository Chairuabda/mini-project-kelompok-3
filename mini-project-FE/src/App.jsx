import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/login-&-register/Login";
import { Register } from "./pages/login-&-register/Register";
import { CreateEvent } from "./pages/CreateEvent";
import { Dashboard } from "./pages/Dashboard";
import { MyEvent } from "./pages/Dashboard/Components/MyEvent";
import { PersonalInformation } from "./pages/PersonalInformation";
import { Auth } from "./components/auth";

function App() {
	return (
		<Box fontFamily={"Outfit"} overflow="hidden">
			<Auth>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/event" element={<CreateEvent />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/dashboard/myevent" element={<MyEvent />} />
					<Route path="/dashboard/myevent" element={<MyEvent />} />
					<Route
						path="/personal-information"
						element={<PersonalInformation />}
					/>
				</Routes>
			</Auth>
		</Box>
	);
}

export default App;
