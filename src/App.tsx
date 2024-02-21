import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactoPage from "./pages/ContactoPage";



function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contacto" element={<ContactoPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;