import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home';
import Favoritos from './views/Favoritos';
import Galeria from './components/Galeria';
import Pagina404 from './views/404';


function App() {

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='Favoritos' element={<Favoritos />} />
					<Route path='*' element={<Pagina404 />} />
				</Routes>
			</BrowserRouter>
			<Galeria />
		</>
	)
}

export default App
