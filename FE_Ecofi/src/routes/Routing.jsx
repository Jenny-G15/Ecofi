import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../Pages/Register';
import ResetPassword from '../Componentes/ResetPassword';
// import { route } from '../../../BE_Ecofi/Routes/authRoutes';


const Routing = () => {

  return (
    <Router>
      <Routes>
      <Route path='/Register' element= {<Register/>} /> 
       {<Route path="/Login" element={<Login/>} /> }
       {<Route path="/resetPassword" element={<ResetPassword/>} /> }

     </Routes>
    </Router>    
   );
};
export default Routing