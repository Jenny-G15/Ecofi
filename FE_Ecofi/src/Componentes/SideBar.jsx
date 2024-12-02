import Nav from 'react-bootstrap/Nav';
import "../Styles/Sidebar.css";
import { Link } from "react-router-dom"; 

function SideBar() {
  return (
    <Nav defaultActiveKey="/home" className="sidebar flex-column">
      <Nav.Item>
        <Link id='linkAdminUnique' to="/Productos">Agregar Productos</Link>
      </Nav.Item>
      <Nav.Item>
        <Link id='linkImagesUnique' to="/AgregarRecofi">Agregar Recofis</Link>
      </Nav.Item>
    </Nav>
  );
}

export default SideBar;