import React from 'react';
import { Navigate } from "react-router-dom";


const RutasProtegidasPlayero = ({children}) => {
    const PlayeroLogueado = JSON.parse(sessionStorage.getItem('SesionIniciadaPlayero')) || null
	if (!PlayeroLogueado){
		return <Navigate to='/login'></Navigate>
	} else {
		return children
	}
    
};

export default RutasProtegidasPlayero;