import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Pokemones } from './pages/Pokemones'
import { NotFound } from './pages/NotFound'
import { Pokemon } from './pages/Pokemon'
import { Navbar } from './components/Navbar'

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemones' element={<Pokemones/>} />
        <Route path='/pokemon/:name' element={<Pokemon/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
