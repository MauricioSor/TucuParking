import React from 'react';
import { Breadcrumb,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PlayeroCamaras = () => {
    const navegar=useNavigate();

    return (
        <>
        <Breadcrumb>
                    <Breadcrumb.Item onClick={() => { navegar("/") }}>Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => { navegar("/Playero") }}>PlayeroBoard</Breadcrumb.Item>
                    <Breadcrumb.Item active>Camaras</Breadcrumb.Item>
                </Breadcrumb>
            <h5 className='display-6'>Camaras</h5>
            <Container></Container>
        </>
    );
};

export default PlayeroCamaras;