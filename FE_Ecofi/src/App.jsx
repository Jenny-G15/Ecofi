import Routing from './Routes/Routing'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css'



function App() {


  return (
    <>
      <div>
        <Router>
        <Routing />
        <ToastContainer/>
        </Router>
      </div>

    </>
  )
}

export default App
