import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Modal, NavLink, Row } from 'react-bootstrap';


const Playero = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <Container className='d-flex justify-content-center align-items-center flex-column'>
                    <Row>
                        <NavLink to="/" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border' onClick={handleShow}>Registrar nuevo cliente</NavLink>
                        <NavLink to="/" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Registrar nuevo vehiculo</NavLink>
                        <NavLink to="/" id='botonAzul' className='py-5 px-5 text-white  fw-bold my-3 mx-1 nav-item nav-link btn border'>Vigilancia por camaras</NavLink>
                    </Row>
                </Container>
            </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registrar Cliente</Modal.Title>
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

export default Playero;