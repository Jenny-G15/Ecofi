import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../Pages/Register';


const Routing = () => {

  return (
    
     <Routes>
      <Route path='/Register' element= {<Register/>} /> 
       <Route path="/Login" element={<Login/>} /> 
     </Routes>
    
   );
};
export default Routing

