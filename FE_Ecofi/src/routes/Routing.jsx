import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../Pages/Register";
import Principal from "../Pages/Principal";
import Administracion from "../Pages/Administracion";
import Recofi from "../Pages/Recofi";
import Emprendedores from "../Pages/AgregarEmprendedores";
import RecofisPage from "../Pages/AgregarRecofis";
import QuienesSomos from "../Pages/QuienesSomos";
import EditarUsuarios from "../Pages/EditarUsuarios";
import FormRecofis from "../Pages/Formulario";
import Recolecciones from "../Pages/Hrecoleccion";
import Admin from "../Pages/AgregarAdministradores";
import PrivateRoute from "./PrivateRoute";
import Beneficio from "../Pages/Beneficio";
<<<<<<< HEAD
import Perfil_Usuario from "../pages/Perfil_Usuario";
// import Inicio from "../pages/inicio";

const Routing = () => {
  // Definir el fondo para la página Principal
  // const backgroundImage = "../src/img/fondo3.jpeg"; // Ajusta la ruta de la imagen según lo necesario

  return (
    <Router>
=======
import Perfil_Usuario from  "../Pages/Perfil_Usuario"
import TestimonioPage from "../Pages/Testimonios";
import ClasificarPage from "../pages/ClasificarResiduos";


const Routing = () => {


  return (
    <Router>
      {/* Aplica el fondo solo en Principal */}

      
      
>>>>>>> 91172f3b3b055c8d399df5a11ef4b9aa2d211a4e
      <Routes>
      {/* <Route path="/" element={<Inicio />} /> */}
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Testimonios" element={<TestimonioPage/>} />
        <Route path="/Clasificar" element={<ClasificarPage/>} />
        <Route path="/Beneficios" element={<Beneficio/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Recofi" element={<Recofi />} />
        <Route path="/AgregarEmpren" element={<Emprendedores />} />
        <Route path="/AgregarRecofi" element={<RecofisPage />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/EditarUsuarios" element={<EditarUsuarios />} />
        <Route path="/Formulario" element={<FormRecofis />} />
        
        <Route path="/HRecoleccion" element={<Recolecciones />} />
        <Route path="/AgregarAdmin" element={<Admin />} />
        <Route path="/Perfil" element={ <PrivateRoute><Perfil_Usuario /></PrivateRoute>
        }>
          <Route path="/Perfil/Monedero"/>
        </Route>
        <Route path="/Administracion" element={ 
          
            <Administracion />
         
        } />
      </Routes>
    </Router>
  );
};

export default Routing;












