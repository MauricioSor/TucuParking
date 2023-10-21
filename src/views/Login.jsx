import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const iniciarSesion =(usuario)=>{

    }
    
    return (
        <div className='d-flex flex-column justify-content-center'>
        <h1 className='text-center display-3'>Inicio de sesion</h1>
        <Container className='bg-white my-5 border rounded'>
        <Form className="contenedor-formulario mx-auto p-5" onSubmit={handleSubmit(iniciarSesion)}>
				<Container>
                <Form.Group className="mb-3" controlId="formBasicUser">
					<Form.Label className='fw-bold'>Usuario:</Form.Label>
					<Form.Control type="text" min={5} maxLength={256} required 
					{...register('usuario',
						{
							required: 'Campo obligatorio',
							pattern: {
								value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
								message: 'El correo debe tener el siguiente patron: usuario123'
							}
						})
						} />
					<Form.Text className="text-danger">
						{errors.usuario?.message}
					</Form.Text>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label className='fw-bold'>Contraseña:</Form.Label>
					<Form.Control type="password" min={8} maxLength={16} required {
						...register('password', {
							required: 'La contraseña es obligatoria',
							pattern: {
								value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
								message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos una mayuscula, al menos un numero y al menos un caracter especial'
							}
						})
					} />
					<Form.Text className="text-dark">
						{errors.password?.message}
					</Form.Text>
				</Form.Group>
                </Container>
				{/* <div className="d-flex">
					<button type="submit" disabled={loading} className="mx-auto boton fw-bold">
						{loading ? <SpinnerLoader color='#ffeee3' height='2' width='2'/> : "Ingresar" }
					</button>
				</div> */}
			</Form>
        </Container>
        </div>
    );
};

export default Login;