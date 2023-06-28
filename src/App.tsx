import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Sobre from './pages/sobre/Sobre'
import './App.css'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Catalogo from './pages/catalogo/Catalogo'
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto'
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto'

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

            <Route path='/catalogo' element={<Catalogo />} />

            <Route path="/formularioProduto" element={<CadastroProduto />} />

            <Route path="/formularioProduto/:id" element={<CadastroProduto />} />

            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}