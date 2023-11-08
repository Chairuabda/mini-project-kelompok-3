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
import { Discovery } from "./pages/Discovery";
import ScrollToTop from "./components/scrollToTop";
import { ConfirmBuy } from "./pages/ConfirmBuy";

function App() {
  return (
    <Box fontFamily={"Outfit"} overflow="hidden">
      <Auth>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/event" element={<CreateEvent />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/myevent" element={<MyEvent />} />
            </Route>
            <Route path="/discovery" element={<Discovery />} />
            <Route
              path="/personal-information"
              element={<PersonalInformation />}
            />
            <Route path="/confirm-buy" element={<ConfirmBuy />} />
          </Routes>
        </ScrollToTop>
      </Auth>
    </Box>
  );
}

export default App;
