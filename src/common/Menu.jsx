import React, { useState } from 'react';
import "./Menu.css"
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from "../assets/logo.png"
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Menu = ({ playeroLogueado, setAdministrador, administradorLogueado, setPlayeroLogueado, AdminSesionStorage, PlayeroSesionStorage }) => {
    const navegar=useNavigate();
    const cerrarSesion = () => {
        console.log(AdminSesionStorage);
        console.log(PlayeroSesionStorage);

        if (AdminSesionStorage !== "") {
            setAdministrador(false);
            sessionStorage.removeItem("SesionIniciadaAdmin")
        }
        if (PlayeroSesionStorage !== "") {
            setPlayeroLogueado(false);
            sessionStorage.removeItem("SesionIniciadaPlayero")
        }
        navegar("/")
    }
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className='logoImagen' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <NavLink to="/" className='mx-1 nav-item nav-link btn border align-self-center'>Inicio</NavLink>
                            {administradorLogueado ?
                                (<>
                                    <NavLink className='mx-1 fw-semibold nav-item nav-link btn-navbar align-self-center' to='/administrador'>
                                        Administrador
                                    </NavLink>
                                    <Button onClick={cerrarSesion} variant='mx-2 fw-semibold nav-item nav-link border border-danger border-3 align-self-center' id='botonRojo' >Cerrar Sesion</Button>
                                </>
                                ) :
                                (
                                    <>
                                        {playeroLogueado ?
                                            (<>
                                                <NavLink className='mx-2 fw-semibold nav-item nav-link btn-navbar align-self-center' to='/Playero'>
                                                    Playero
                                                </NavLink>
                                                <Button onClick={cerrarSesion} variant='mx-2 fw-semibold nav-item nav-link border border-danger border-3 align-self-center' id='botonRojo' >Cerrar Sesion</Button>
                                            </>
                                            ) :
                                            (
                                                <>
                                                    <NavLink to="/login" className='mx-1 nav-item nav-link btn border align-self-center' id='botonAzul' onClick={cerrarSesion}>Iniciar Sesion</NavLink>
                                                </>
                                            )
                                        }
                                    </>
                                )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </div>
    );
};

export default Menu;