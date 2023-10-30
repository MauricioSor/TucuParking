import React from 'react';
import { Button,Container,Row, NavLink } from 'react-bootstrap';

const Administrador = () => {
    return (
        <div>
        <Container className='d-flex justify-content-center align-items-center flex-column'>
        <Row>
        <NavLink to="/" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Agregar Playero</NavLink>
        <NavLink to="/" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Generar Informe</NavLink>
        </Row>
        </Container>
        </div>
    );
};

export default Administrador;