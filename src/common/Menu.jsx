import React from 'react';
import "./Menu.css"
import { Navbar,Nav,Container } from 'react-bootstrap';
import logo from "../assets/logo.png"
const Menu = () => {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className='logoImagen' src={logo} alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </div>
    );
};

export default Menu;