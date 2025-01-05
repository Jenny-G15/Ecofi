import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../Pages/Register";
import Principal from "../Pages/Principal";
// import BodyBackground from "../Componentes/BodyBackground";
import Administracion from "../Pages/Administracion";
import Recofi from "../Pages/Recofi";
import Emprendedores from "../Pages/AgregarEmprendedores";
import RecofisPage from "../Pages/AgregarRecofis";
import QuienesSomos from "../Pages/QuienesSomos";
import EditarUsuarios from "../Pages/EditarUsuarios";
import FormRecofis from "../Pages/Formulario";
import Recolecciones from "../Pages/Hrecoleccion";
import Admin from "../Pages/AgregarAdministradores";
import Testimonios from "../Componentes/Testimonios";
import PrivateRoute from "./PrivateRoute";
import Beneficio from "../Pages/Beneficio";
import Perfil_Usuario from  "../Pages/Perfil_Usuario"

const Routing = () => {


  return (
    <Router>
      {/* Aplica el fondo solo en Principal */}

      
      
      <Routes>
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Testimonios" element={<Testimonios/>} />
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
        <Route path="/Perfil" element={ 
          <PrivateRoute>
            <Perfil_Usuario />
          </PrivateRoute>
        }>
          <Route path="/Perfil/Monedero"/>
        </Route>
        <Route path="/Administracion" element={ 
          <PrivateRoute>
            <Administracion />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
};

export default Routing;
















