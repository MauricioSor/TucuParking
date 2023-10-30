import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
	const AdminLogueado = JSON.parse(sessionStorage.getItem('SesionIniciadaAdmin')) || null
	if (!AdminLogueado){
		return <Navigate to='/login'></Navigate>
	} else {
		return children
	}
};

export default RutasProtegidas;