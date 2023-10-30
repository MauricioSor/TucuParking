import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AdminInformes = () => {
    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Administrador</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            <Container className='d-flex justify-content-center align-items-center flex-column'>
                <Row>
                    <NavLink id='botonAzul' to="InformeReservas" className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Informe de Reservas</NavLink>
                    <NavLink id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Informe de Gastos</NavLink>
                    <NavLink id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Informe de Accidentes</NavLink>
                </Row>
            </Container>
        </>
    );
};

export default AdminInformes;