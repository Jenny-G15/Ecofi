import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio'
import Register from '../pages/Register';
import Login from '../pages/Login';


const Routing = () => {

  return (
    <Router>
     <Routes>

       <Route path="/" element={<Inicio />} />
       <Route path="/Register" element={<Register/>} /> 
       <Route path="/Login" element={<Login/>} /> 
  
     </Routes>
    </Router>
   );
};
export default Routing

