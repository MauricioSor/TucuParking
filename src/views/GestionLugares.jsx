import React, { useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';

const GestionLugares = () => {
    return (

        <>
            <h3 className='display-3 text-center'>Gestion de Estacionamiento</h3>
            <Container fluid>
                <Row>
                    <Col className='col-4'>
                        <div className='d-flex flex-column'>
                            <button className='bg-transparent py-4'>Lugar01</button>
                            <button className='bg-transparent py-4'>Lugar02</button>
                            <button className='bg-transparent py-4'>Lugar03</button>
                            <button className='bg-transparent py-4'>Lugar04</button>
                            <button className='bg-transparent py-4'>Lugar05</button>
                            <button className='bg-transparent py-4'>Lugar06</button>
                        </div>
                    </Col>
                    <Col className='col-4'>
                        {/* Contenido de la tercera columna */}
                    </Col>
                    <Col className='col-4'>
                        <div className='d-flex flex-column'>
                            <button className='bg-transparent py-4'>Lugar07</button>
                            <button className='bg-transparent py-4'>Lugar08</button>
                            <button className='bg-transparent py-4'>Lugar09</button>
                            <button className='bg-transparent py-4'>Lugar10</button>
                            <button className='bg-transparent py-4'>Lugar11</button>
                            <button className='bg-transparent py-4'>Lugar12</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal>

            </Modal>
        </>
    );
};

export default GestionLugares;