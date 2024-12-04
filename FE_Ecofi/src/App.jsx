import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'leaflet/dist/leaflet.css';


import Routing from "./routes/Routing"; // Asegúrate de que la ruta esté bien

function App() {
  return (
      <div>
        <Routing />
        <ToastContainer />
      </div>
  );
}

export default App;
