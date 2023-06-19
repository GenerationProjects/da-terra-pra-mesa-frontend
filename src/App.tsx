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

=======
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Sobre from './pages/Sobre'

export default function App() {
>>>>>>> f80bc6b (Criação das Rotas e página home)
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
<<<<<<< HEAD
          <Route path='/cadastrar' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
<<<<<<< HEAD
          <Route path='/sobre' element={<Sobre />} />
=======
          <Route path='/sobre' element={<Sobre/>}/>
=======
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/sobre' element={<Sobre />}/>
>>>>>>> f80bc6b (Criação das Rotas e página home)
>>>>>>> 023b421 (Resolvendo conflitos)
        </Routes>
      </BrowserRouter>
    </>
  )
<<<<<<< HEAD
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
export default App
>>>>>>> b07a8e3 (subindo navbar)
=======
=======
}
>>>>>>> f80bc6b (Criação das Rotas e página home)
>>>>>>> 023b421 (Resolvendo conflitos)
