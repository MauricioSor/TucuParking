import React from 'react';
import { Container, Table, Form, Row, InputGroup, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminInforme = () => {
    const navegar=useNavigate();
    return (
        <>
        <Container>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={()=>{navegar("/")}}>Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{navegar("/Administrador")}}>Administrador</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{navegar("/Administrador/GenerarInformes")}}>Generar Informes</Breadcrumb.Item>
                    <Breadcrumb.Item active>Informe de Reservas</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
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
                        <td>Mark Otto</td>
                        <td>Ford Ranger</td>
                        <td>AC8293BD</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Martin Dominguez</td>
                        <td>Chevrolet Spin</td>
                        <td>AB2938CX</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Matias Richov</td>
                        <td>Peugeot Kangoo</td>
                        <td>AD3909DE</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lucas Hamilton</td>
                        <td>Peugeot Kangoo</td>
                        <td>AE4009DX</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nicolas Lopes</td>
                        <td>Peugeot Kangoo</td>
                        <td>AA3976DE</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Cristian Lewin</td>
                        <td>Peugeot Kangoo</td>
                        <td>AE31045LP</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Steve Jobs</td>
                        <td>Ferrari Testa</td>
                        <td>AE3910OP</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        </>
    );
};

export default AdminInforme;