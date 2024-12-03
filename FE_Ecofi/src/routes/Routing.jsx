<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../Pages/Register";
import Principal from "../pages/Principal";
import BodyBackground from "../Componentes/BodyBackground"; // Importa el componente aquí
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../Pages/Register';
import Administracion from '../pages/Administracion';
import PerfilUsuario from '../pages/Perfil_Usuario';
import Inicio from '../pages/Bienvenida';
// import { route } from '../../../BE_Ecofi/Routes/authRoutes';

>>>>>>> 61aea061cef3bc5c6f0d95a8372c96dcfc57ff78

const Routing = () => {
  // Definir el fondo para la página Principal
  const backgroundImage = "../src/img/fondo3.jpeg"; // Ajusta la ruta de la imagen según lo necesario

  return (
    <Router>
      {/* Aplica el fondo solo en Principal */}
      <BodyBackground background={backgroundImage} />
      
      <Routes>
<<<<<<< HEAD
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        
      </Routes>
    </Router>
  );
};

export default Routing;
=======
       {<Route path="/" element={<Inicio/>} /> }
       {<Route path='/Register' element= {<Register/>} /> }
       {<Route path="/Login" element={<Login/>} /> }
       {<Route path="/Administracion" element={<Administracion/>} /> }
       {<Route path="/PerfilUsuario" element={<PerfilUsuario/>} /> }


     </Routes>
    </Router>    
   );
};
export default Routing
>>>>>>> 61aea061cef3bc5c6f0d95a8372c96dcfc57ff78
