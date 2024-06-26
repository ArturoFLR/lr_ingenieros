import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactoPage from "./pages/ContactoPage";
import ProyectosPage from "./pages/ProyectosPage";
import QuienesSomosPage from "./pages/QuienesSomosPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Home />} />

				<Route path="/" element={<Home />} />

				<Route path="/contacto" element={<ContactoPage />} />

				<Route path="/quienes_somos" element={<QuienesSomosPage />} />

				<Route path="/proyectos" element={<ProyectosPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
