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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
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