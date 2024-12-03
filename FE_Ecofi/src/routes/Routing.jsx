import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Administracion from '../Pages/Administracion';
import PerfilUsuario from '../Pages/Perfil_Usuario';
import Inicio from '../Pages/Bienvenida';
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