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
                    <Col className='text-start'>
                    <h6 className='display-6 text-center'>Donde estamos?</h6>
                    <Container className='text-center'>
                    <iframe width="500" height="300"  id="gmap_canvas" src="https://maps.google.com/maps?width=630&amp;height=370&amp;hl=en&amp;q=24%20de%20septiembre%20556%20tucuman%20tucuman+(Tucuparking)&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </Container>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;