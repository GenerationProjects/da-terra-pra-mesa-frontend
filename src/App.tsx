import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Sobre from './pages/Sobre'
import './App.css'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/sobre' element={<Sobre />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
