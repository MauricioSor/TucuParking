import React from 'react';
import Playero from '../views/Playero';
import PlayeroAgregarCliente from '../views/PlayeroAgregarCliente';
import { Route, Routes } from 'react-router-dom';
import GestionLugares from '../views/GestionLugares';

const RutasPlayero = () => {
    return (
        <>
        <Routes>
        <Route exact path="/" element={<Playero></Playero>}></Route>
		<Route exact path="/AgregarCliente" element={<PlayeroAgregarCliente></PlayeroAgregarCliente>}></Route>
        <Route exact path="/Gestion-de-estacionamiento" element={<GestionLugares></GestionLugares>}></Route>
        </Routes>
        </>
    );
};

export default RutasPlayero;