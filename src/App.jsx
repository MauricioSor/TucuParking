import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './common/Footer'
import Menu from './common/Menu'
import Principal from './views/Principal'

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact path='/' element={<Principal/>}/>
        
        <Route></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
