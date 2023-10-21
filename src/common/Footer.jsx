import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='d-flex flex-column bg-dark text-white'>
            <Container fluid className='py-5'>
                <p className='text-center'> &copy; Todos los derechos reservados</p>
            </Container>
        </footer>
    );
};

export default Footer;