import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './common/Footer'
import Menu from './common/Menu'
import Principal from './views/Principal'
import Login from './views/Login'
import RutasProtegidasAdmin from './routes/RutasProtegidasAdmin'
import RutasAdministrador from './routes/RutasAdministrador'
import RutasProtegidasPlayero from './routes/RutasProtegidasPlayero'
import RutasPlayero from './routes/RutasPlayero'

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
        <Route exact path="/Administrador/*" element={<RutasProtegidasAdmin><RutasAdministrador></RutasAdministrador></RutasProtegidasAdmin>}></Route>
        <Route exact path="/Playero/*" element={<RutasProtegidasPlayero><RutasPlayero></RutasPlayero></RutasProtegidasPlayero>} />        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
