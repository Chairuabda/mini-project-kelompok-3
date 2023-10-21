import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./theme/index.js"

ReactDOM.createRoot(document.getElementById("root")).render(
		<ChakraProvider theme={Theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
);
