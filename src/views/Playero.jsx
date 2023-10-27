import React from 'react';
import { Container, NavLink, Row } from 'react-bootstrap';

const Playero = () => {
    return (
        <div>
        <Container className='d-flex justify-content-center align-items-center flex-column'>
        <Row>
        <NavLink to="/" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Registrar nuevo cliente</NavLink>
        <NavLink to="/" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Registrar nuevo vehiculo</NavLink>
        <NavLink to="/" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Vigilancia por camaras</NavLink>
        </Row>
        </Container>
        </div>
    );
};

export default Playero;