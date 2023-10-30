import React, { useState } from 'react';
import { Breadcrumb, Button, Col, Container, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';


const Playero = () => {
    const [show, setShow] = useState(false);
    const navegar = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={() => { navegar("/") }}>Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item active>Playero Board</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            <div>
                <Container className='d-flex justify-content-center align-items-center flex-column'>
                    <Container>
                        <NavLink to="/Playero/AgregarCliente" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border' >Registrar nuevo cliente</NavLink>
                        <NavLink id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border' onClick={handleShow}>Registrar nuevo vehiculo</NavLink>
                        <NavLink id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Administrar Vehiculos</NavLink>
                        <NavLink to="/Playero/Gestion-de-estacionamiento"id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Gestion de Estacionamiento</NavLink>
                        <NavLink to="/Playero/Camaras"id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Vigilancia por camaras</NavLink>
                    </Container>
                </Container>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar Nuevo Vehiculo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Tipo de Vehiculo</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nombre"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Otto"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Patente</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="26456239"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a D.N.I.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className='me-2'>Seleccione dueño</Form.Label>
                                <select name="Dueño">
                                    <option value="value1">Steve Jobs</option>
                                    <option value="value2" >Lucas Hamilton</option>
                                    <option value="value3">Martin Dominguez</option>
                                    <option value="value3">Mark Otto</option>

                                    
                                </select>
                            </Form.Group>
                        </Row>
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

export default Playero;