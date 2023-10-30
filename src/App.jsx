import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home';
import Favoritos from './views/Favoritos';


function App() {


  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route  path='Favoritos' element={<Favoritos/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
