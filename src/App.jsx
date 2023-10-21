import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './common/Footer'
import Menu from './common/Menu'
import Principal from './views/Principal'
import Login from './views/Login'
import RutasProtegidas from './routes/RutasProtegidas'
import RutasAdministrador from './routes/RutasAdministrador'

function App() {
  const usuarioSesionStorage = JSON.parse(sessionStorage.getItem('usuario')) || '';
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSesionStorage);
  return (
    <>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact path='/' element={<Principal/>}/>
        <Route exact path='/login' element={<Login/>} />
        <Route path="/administrador/*" element={<RutasProtegidas><RutasAdministrador></RutasAdministrador></RutasProtegidas>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
