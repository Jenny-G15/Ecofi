
import Inicio from '../pages/Principal';
import QuienesSomos from '../pages/QuienesSomos';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../Pages/Register";
import Principal from "../pages/Principal";
import BodyBackground from "../Componentes/BodyBackground";
import Administracion from "../pages/Administracion";
import PerfilUsuario from "../pages/Perfil_Usuario";



const Routing = () => {
  // Definir el fondo para la página Principal
  const backgroundImage = "../src/img/fondo3.jpeg"; // Ajusta la ruta de la imagen según lo necesario

  return (
    <Router>
     
      <BodyBackground background={backgroundImage} />
      
      <Routes>
       {<Route path="/Principal" element={<Inicio/>} /> }
       {<Route path='/Register' element= {<Register/>} /> }
       {<Route path="/Login" element={<Login/>} /> }
       {<Route path="/Administracion" element={<Administracion/>} /> }
       {<Route path="/PerfilUsuario" element={<PerfilUsuario/>} /> }
       {<Route path="/QuienesSomos" element={<QuienesSomos/>} /> }


     </Routes>
    </Router>    
   );
};
export default Routing
