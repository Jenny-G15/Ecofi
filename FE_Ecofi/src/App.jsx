import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'leaflet/dist/leaflet.css';
import './Componentes/Context/EcofiProvider';
import Routing from "./routes/Routing"; // Asegúrate de que la ruta esté bien
import EcofiProvider from "./Componentes/Context/EcofiProvider";





function App() {
  return (
      <div>
          <EcofiProvider>
          <Routing />
          <ToastContainer/>
          </EcofiProvider>
      </div>
  );
}

export default App;
