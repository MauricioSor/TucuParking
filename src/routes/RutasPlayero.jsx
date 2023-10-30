import React from 'react';
import Playero from '../views/Playero';
import PlayeroAgregarCliente from '../views/PlayeroAgregarCliente';
import { Route, Routes } from 'react-router-dom';

const RutasPlayero = () => {
    return (
        <>
        <Routes>
        <Route exact path="/" element={<Playero></Playero>}></Route>
		<Route exact path="/AgregarCliente" element={<PlayeroAgregarCliente></PlayeroAgregarCliente>}></Route>
        </Routes>
        </>
    );
};

export default RutasPlayero;