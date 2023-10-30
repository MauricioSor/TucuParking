import React from 'react';
import Playero from '../views/Playero';
import PlayeroAgregarCliente from '../views/PlayeroAgregarCliente';
import { Route, Routes } from 'react-router-dom';
import GestionLugares from '../views/GestionLugares';
import PlayeroCamaras from '../views/PlayeroCamaras';

const RutasPlayero = () => {
    return (
        <>
        <Routes>
        <Route exact path="/" element={<Playero></Playero>}></Route>
		<Route exact path="/AgregarCliente" element={<PlayeroAgregarCliente></PlayeroAgregarCliente>}></Route>
        <Route exact path="/Gestion-de-estacionamiento" element={<GestionLugares></GestionLugares>}></Route>
        <Route exact path="/Camaras" element={<PlayeroCamaras></PlayeroCamaras>}></Route>
        </Routes>
        </>
    );
};

export default RutasPlayero;