import Navbar from './components/estaticos/navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
    </>

  )
}

export default App