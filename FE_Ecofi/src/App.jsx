
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Routing from "./Routes/Routing";


function App() {


  return (
    <>
      <div>
        <Routing />
        <ToastContainer/>
      </div>

    </>
  )
}


export default App
