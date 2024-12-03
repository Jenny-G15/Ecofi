import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../Pages/Register';
import Administracion from '../pages/Administracion';
import PerfilUsuario from '../pages/Perfil_Usuario';
import Inicio from '../pages/Bienvenida';
// import { route } from '../../../BE_Ecofi/Routes/authRoutes';


const Routing = () => {

  return (
    <Router>
      <Routes>
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