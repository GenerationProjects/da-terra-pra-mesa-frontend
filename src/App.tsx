<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Sobre from './pages/Sobre'
=======
import Navbar from './components/estaticos/navbar/Navbar'
>>>>>>> b07a8e3 (subindo navbar)
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
    </>

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastrar' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

<<<<<<< HEAD
=======
export default App
>>>>>>> b07a8e3 (subindo navbar)
