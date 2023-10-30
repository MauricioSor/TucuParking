import React from 'react';
import { Breadcrumb,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import camara1 from"../assets/camara01.png"
import camara2 from"../assets/camara02.png"
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
            <Container className='d-flex justify-content-center my-5'>
                <img src={camara1} alt="" style={{ width: '200px' ,height:"200px" }} />
                <img src={camara2} alt="" style={{ width: '200px', height:"200px" }} />
            </Container>
        </>
    );
};

export default PlayeroCamaras;