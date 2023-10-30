import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import AdminInforme from "../views/AdminInforme";

const RutasAdministrador = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Administrador></Administrador>}></Route>
				<Route exact path="/Informe" element={<AdminInforme></AdminInforme>}></Route>
			</Routes>
		</>
	);
};

export default RutasAdministrador;