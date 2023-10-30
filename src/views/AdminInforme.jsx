import React from 'react';
import { Container, Table, Form, Row, InputGroup } from 'react-bootstrap';

const AdminInforme = () => {
    return (
        <Container className='d-flex flex-column'>
            <Container className='text-center'>
                <Form>
                    <Form.Group>
                        <Form.Label className='me-2'>Seleccione Fecha de Informe</Form.Label>
                        <select name="Fechas">
                            <option value="value1">26/10/2023</option>
                            <option value="value2" selected>27/10/2023</option>
                            <option value="value3">28/10/2023</option>
                        </select>
                    </Form.Group>
                </Form>
            </Container>
            <h5 className='display-5'>Informe del dia de hoy</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Playero</th>
                        <th>Cliente</th>
                        <th>Vehiculo</th>
                        <th>Patente</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default AdminInforme;