import React from 'react';
import "./Menu.css"
import { Navbar,Nav,Container } from 'react-bootstrap';
import logo from "../assets/logo.png"
import { NavLink,Link, useNavigate } from 'react-router-dom';
const Menu = () => {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className='logoImagen' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <NavLink to="/" className='mx-1 nav-item nav-link btn border'>Inicio</NavLink>
                        <Nav.Link to="/">Features</Nav.Link>
                        <NavLink to="/login" className='mx-1 nav-item nav-link btn border'id='botonAzul'>Ingresar</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </div>
    );
};

export default Menu;