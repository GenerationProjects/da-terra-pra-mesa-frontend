import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Sobre from './pages/sobre/Sobre'
import './App.css'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}
