import React, { useState } from 'react';
import { Button, Container, Row, Modal, Col, Form, Breadcrumb } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Administrador = () => {
    const [show, setShow] = useState(false);
    const navegar=useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={()=>{navegar("/")}}>Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item  active>Administrador</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            <Container className='d-flex justify-content-center align-items-center flex-column'>
                <Row>
                    <NavLink id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border' onClick={handleShow}>Registrar Playero</NavLink>
                    <NavLink id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border' >Administrar Playeros</NavLink>
                    <NavLink to="/Administrador/GenerarInformes" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Generar Informe</NavLink>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar Playero</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nombre"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Otto"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>D.N.I</Form.Label>
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
                                <Form.Label>Feha de nacimiento</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Fecha de nacimiento"
                                    max="2007-01-01"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="3814555034"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Correo electronico</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="mark@gmail.com"
                                    required
                                />
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

export default Administrador;