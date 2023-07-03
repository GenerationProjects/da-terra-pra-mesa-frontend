import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import store from './store/store'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Sobre from './pages/sobre/Sobre'
import 'react-toastify/dist/ReactToastify.css'
import Cadastro from './pages/cadastro/Cadastro'
import Carrinho from './pages/carrinho/Carrinho'
import Catalogo from './pages/catalogo/Catalogo'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import CadastroProduto from './components/produto/cadastroProduto/CadastroProduto'
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto'
import ListarCategoria from './components/categoria/listarCategoria/ListarCategoria'
import ListarProdutos from './components/produto/listarProdutos/ListarProdutos'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import CadastrarCategoria from './components/categoria/cadastrarCategoria/CadastrarCategoria'

export default function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <div className='div.corpo'>
          <Routes>
              {/*Rotas comuns */}
              <Route path='/' element={<Home />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/login' element={<Login />} />
              <Route path='/sobre' element={<Sobre />} />

              {/*Rota para catálogo */}
              <Route path='/catalogo' element={<Catalogo />} />

              {/*Rotas para produtos */}
              <Route path='/produtos' element={<ListarProdutos />} />
              <Route path="/cadastrarProduto" element={<CadastroProduto />} />
              <Route path="/cadastrarProduto/:id" element={<CadastroProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

              {/*Rotas para categorias */}
              <Route path='/categorias' element={<ListarCategoria />} />
              <Route path='/cadastrarCategoria' element={<CadastrarCategoria />} />
              <Route path='/cadastrarCategoria/:id' element={<CadastrarCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

              {/*Rota para carrinho de compra */}
              <Route path='/carrinho' element={<Carrinho />} />

              {/*Segurança de rotas */}
              <Route path={`*`} element={<Navigate to={`/`} />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}
