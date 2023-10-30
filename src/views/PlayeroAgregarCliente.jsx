import React from 'react';
import { Button,Container, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const PlayeroAgregarCliente = () => {
    return (
        <Container>
            <h5 className='display-5'> <b>Registrar nuevo Cliente</b></h5>
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
            <Container className='text-center'>
            <NavLink to="/Playero" className="btn btn-secondary mx-3 p-2 my-2">Cancelar</NavLink>
            <NavLink  className="btn btn-primary mx-3 p-2 my-2">Agregar</NavLink>
            </Container>
        </Container>
    );
};

export default PlayeroAgregarCliente;