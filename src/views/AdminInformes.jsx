import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminInformes = () => {
    const navegar=useNavigate();
    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={()=>{navegar("/")}}>Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{navegar("/Administrador")}}>Administrador</Breadcrumb.Item>
                    <Breadcrumb.Item active>Generar Informes</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            <Container className='d-flex justify-content-center align-items-center flex-column'>
                <Container>
                    <NavLink id='botonAzul' to="InformeReservas" className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Informe de Reservas</NavLink>
                    <NavLink id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Informe de Gastos</NavLink>
                    <NavLink id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Informe de Accidentes</NavLink>
                </Container>
            </Container>
        </>
    );
};

export default AdminInformes;