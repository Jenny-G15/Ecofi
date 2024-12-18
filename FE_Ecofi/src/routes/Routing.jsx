import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../Pages/Register";
import Principal from "../Pages/Principal";
import BodyBackground from "../Componentes/BodyBackground";
import Administracion from "../pages/Administracion";
import PerfilUsuario from "../pages/Perfil_Usuario";
import Recofi from "../Pages/Recofi";
import Emprendedores from "../Pages/AgregarEmprendedores";
import RecofisPage from "../Pages/AgregarRecofis";
import QuienesSomos from "../pages/QuienesSomos";
import EditarUsuarios from "../Pages/EditarUsuarios";
import Pruebita from "../Pages/Prueba";
import FormRecofis from "../Pages/Formulario";
import Monedero from "../pages/Monedero";



const Routing = () => {
  // Definir el fondo para la página Principal
  const backgroundImage = "../src/img/fondo3.jpeg"; // Ajusta la ruta de la imagen según lo necesario

  return (
    <Router>
      {/* Aplica el fondo solo en Principal */}
      <BodyBackground background={backgroundImage} />
      
      <Routes>
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        {<Route path="/Administracion" element={<Administracion/>} /> }
        <Route path="/Recofi" element={<Recofi />} />
        <Route path="/AgregarEmpren" element={<Emprendedores />} />
        <Route path="/AgregarRecofi" element={<RecofisPage />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/EditarUsuarios" element={<EditarUsuarios />} />
        <Route path="/Prueba" element={<Pruebita />} />
        <Route path="/Formulario" element={<FormRecofis />} />

        <Route path="/Perfil" element={<PerfilUsuario />}>
          <Route path="/Perfil/Monedero" element={<Monedero />} />
        </Route>
        
      </Routes>
    </Router>
  );
};


export default Routing;