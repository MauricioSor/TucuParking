import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import AdminInforme from "../views/AdminInforme";
import AdminInformes from "../views/AdminInformes";

const RutasAdministrador = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Administrador></Administrador>}></Route>
				<Route exact path="/GenerarInformes" element={<AdminInformes></AdminInformes>}></Route>
				<Route exact path="/GenerarInformes/InformeReservas" element={<AdminInforme></AdminInforme>}></Route>
			</Routes>
		</>
	);
};

export default RutasAdministrador;