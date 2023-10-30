import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import QRCode from "react-qr-code";
import ReactDOM from "react-dom";


const Footer = () => {

    return (
        <footer className='d-flex flex-column bg-dark text-white'>
            <Container fluid className='py-5'>
                <p className='text-center'> &copy; Todos los derechos reservados</p>
                <Row>
                    <Col className='text-center'>
                    <h6 className='display-6'>Escanea nuestro QR!</h6>
                        <QRCode
                            size={256}
                            style={{ maxWidth: "10rem", maxHeight: "10rem" }} 
                            value={window.location.origin}
                        />
                    </Col>
                    <Col className=''>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;