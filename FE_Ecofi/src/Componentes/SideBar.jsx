import React from "react";
import { Link } from "react-router-dom";
import '../styles/SideBar.css'




function AdminSideBar() {
  return (
    <div className="sidebarContainer">
      <nav className="sidebarNav">
        <Link className="sidebarLink" to="/Administracion">
          Agregar Productos
        </Link>
        <Link className="sidebarLink" to="/AgregarRecofi">
          Agregar Recofis
        </Link>
        <Link className="sidebarLink" to="/AgregarEmpren">
          Agregar Emprendedor
        </Link>
      </nav>
    </div>
  );
}

export default AdminSideBar;





// import Nav from 'react-bootstrap/Nav';
// import "../Styles/Sidebar.css";
// import { Link } from "react-router-dom"; 

// function SideBar() {
//   return (
//     <Nav defaultActiveKey="/home" className="sidebar flex-column">
//       <Nav.Item>
//         <Link id='linkAdminUnique' to="/Productos">Agregar Productos</Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Link id='linkImagesUnique' to="/AgregarRecofi">Agregar Recofis</Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default SideBar;