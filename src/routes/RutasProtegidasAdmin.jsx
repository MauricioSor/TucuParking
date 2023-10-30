import { Navigate } from "react-router-dom";

const RutasProtegidasAdmin = ({children}) => {
	const AdminLogueado = JSON.parse(sessionStorage.getItem('SesionIniciadaAdmin')) || null
	if (!AdminLogueado){
		return <Navigate to='/login'></Navigate>
	} else {
		return children
	}
};

export default RutasProtegidasAdmin;