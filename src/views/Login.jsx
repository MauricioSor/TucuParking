import React from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = ({ playeroLoguado, setAdministrador, administradorLogueado, setPlayeroLogueado,AdminSesionStorage,PlayeroSesionStorage}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const navegar = useNavigate();

    const iniciarSesion =(usuario)=>{
        
        if(usuario.usuario==null){
            Swal.fire("Credenciales incorrectas","Ingrese un usuario y/o constraseña válidos e intente nuevamente","error");
        }
        if(usuario.usuario=="Playero"){
            Swal.fire("Bienvenido/a Playero","","success");
            sessionStorage.setItem('SesionIniciadaPlayero', JSON.stringify("SesionIniciadaPlayero"));
            setPlayeroLogueado(true);
            reset();
            navegar("/Playero");
        }
        if(usuario.usuario=="Administrador"){
            Swal.fire("Bienvenido/a Administrador","","success");
            sessionStorage.setItem('SesionIniciadaAdmin', JSON.stringify("SesionIniciadaAdmin"));
            setAdministrador(true);
            reset();
            navegar("/Administrador");
        }
    }
    
    return (
        <div className='d-flex flex-column justify-content-center'>
        <h1 className='text-center display-3'>Inicio de sesion</h1>
        <Container className='fondo my-5 border rounded'>
        <Form className="contenedor-formulario mx-auto p-5" onSubmit={handleSubmit(iniciarSesion)}>
				<Container>
                <Form.Group className="mb-3" controlId="formBasicUser">
					<Form.Label className='fw-bold'>Usuario:</Form.Label>
					<Form.Control type="text" min={5} maxLength={256} required 
					{...register('usuario',
						{
							required: 'Campo obligatorio',
							
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
							
						})
					} />
					<Form.Text className="text-dark">
						{errors.password?.message}
					</Form.Text>
				</Form.Group>
                </Container>
				<div className="d-flex">
					<Button type="submit" className="mx-auto btn fw-bold">Ingresar</Button>
				</div>
			</Form>
        </Container>
        </div>
    );
};

export default Login;