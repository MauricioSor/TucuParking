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
  
  const AdminSesionStorage = JSON.parse(sessionStorage.getItem("SesionIniciadaAdmin")) || '';
  const PlayeroSesionStorage = JSON.parse(sessionStorage.getItem('SesionIniciadaPlayero')) || '';
  const [administradorLogueado, setAdministrador] = useState(AdminSesionStorage);
  const [playeroLogueado,setPlayeroLogueado]=useState(PlayeroSesionStorage);
  return (
    <>
      <BrowserRouter>
      <Menu administradorLogueado={administradorLogueado}PlayeroSesionStorage={PlayeroSesionStorage}AdminSesionStorage={AdminSesionStorage} setAdministrador={setAdministrador} playeroLogueado={playeroLogueado} setPlayeroLogueado={setPlayeroLogueado}/>
      <Routes>
        <Route exact path='/' element={<Principal/>}/>
        <Route exact path='/login' element={<Login administradorLogueado={administradorLogueado}PlayeroSesionStorage={PlayeroSesionStorage}AdminSesionStorage={AdminSesionStorage} setAdministrador={setAdministrador} playeroLogueado={playeroLogueado} setPlayeroLogueado={setPlayeroLogueado}/>} />
        <Route path="/administrador/*" element={<RutasProtegidas><RutasAdministrador></RutasAdministrador></RutasProtegidas>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
