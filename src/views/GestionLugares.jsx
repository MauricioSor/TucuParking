import React, { useState } from 'react';
import { Col, Container, Row, Breadcrumb, Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GestionLugares = () => {
    const navegar = useNavigate();
    const [show, setShow] = useState();
    const[estadoLugar,setEstadoLugar]=useState();

    const handleOpen=()=>{setShow(true);}
    const handleClose=()=>{setShow(false);}
    const estado=(estado)=>{
        switch (estado){
        case "libre":
        setEstadoLugar()
        }
    }
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item onClick={() => { navegar("/") }}>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => { navegar("/Playero") }}>PlayeroBoard</Breadcrumb.Item>
                <Breadcrumb.Item active>Gestion de Estacionamiento</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className='display-3 text-center'>Gestion de Estacionamiento</h3>
            <Container className='bg-white border py-1 d-flex justify-content-center'>
            <div className='d-flex'>
            <p className='mx-3 align-self-center'>Libre</p>
            <div style={{ width: "30px", height: "30px", backgroundColor: "green" }}></div>
            </div>
            <div className='d-flex'>
            <p className='mx-3 align-self-center'>Reservado</p>
            <div style={{ width: "30px", height: "30px", backgroundColor: "yellow" }}></div>
            </div>
            <div className='d-flex'>
            <p className='mx-3 align-self-center'>Ocupado</p>
            <div style={{ width: "30px", height: "30px", backgroundColor: "red" }}></div>
            </div>
            </Container>
            <Container fluid>
                <Row>
                    <Col className='col-4'>
                        <div className='d-flex flex-column'>
                            <button className='bg-success py-4' onClick={handleOpen}>Lugar01</button>
                            <button className='bg-warning py-4' onClick={handleOpen}>Lugar02</button>
                            <button className='bg-danger py-4' onClick={handleOpen}>Lugar03</button>
                            <button className='bg-danger py-4' onClick={handleOpen}>Lugar04</button>
                            <button className='bg-danger py-4' onClick={handleOpen}>Lugar05</button>
                            <button className='bg-success py-4' onClick={handleOpen}>Lugar06</button>
                        </div>
                    </Col>
                    <Col className='col-4'>
                        {/* Contenido de la tercera columna */}
                    </Col>
                    <Col className='col-4'>
                        <div className='d-flex flex-column'>
                            <button className='bg-warning py-4' onClick={handleOpen}>Lugar07</button>
                            <button className='bg-warning py-4' onClick={handleOpen}>Lugar08</button>
                            <button className='bg-warning py-4' onClick={handleOpen}>Lugar09</button>
                            <button className='bg-warning py-4' onClick={handleOpen}>Lugar10</button>
                            <button className='bg-danger py-4' onClick={handleOpen}>Lugar11</button>
                            <button className='bg-success py-4' onClick={handleOpen}>Lugar12</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={show}>
            <Modal.Header closeButton>Cambiar estado de Lugar</Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className='d-flex'>
                    <Form.Label className='me-4 align-self-center'>Estado</Form.Label>
                    <select name="" id="">
                        <option value="">Libre</option>
                        <option value="">Reservado</option>
                        <option value="">Ocupado</option>
                    </select>
                </Form.Group>
                <Form.Group>
                <Form.Label className='me-4 align-self-center'>Seleccione una patente</Form.Label>
                    <select name="" id="">
                        <option value="">Libre</option>
                        <option value="">Reservado</option>
                        <option value="">Ocupado</option>
                    </select>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar
                    </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
};

export default GestionLugares;