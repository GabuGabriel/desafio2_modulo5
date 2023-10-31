import React from "react";
import { ImagenesProvider } from "./components/Contexto/ImagenesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagina404 from './views/404';
import NavBar from './components/Navbar';
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

function App() {
	return (
		<ImagenesProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="Favoritos" element={<Favoritos />} />
					<Route path='*' element={<Pagina404 />} />
				</Routes>
			</BrowserRouter>
		</ImagenesProvider>
	);
}

export default App;


