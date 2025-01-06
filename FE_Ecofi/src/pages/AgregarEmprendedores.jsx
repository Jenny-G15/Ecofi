import React from 'react'
import AdminSideBar from '../Componentes/SideBar'
import AgregarEmpren from '../Componentes/AgregarEmpren' 
import {Row,Col} from 'react-bootstrap'
import NavAdmin from '../Componentes/NavAdmin'

function Emprendedores() {
  return (
    <div id='principalConteiner'>
        <NavAdmin/>
        <AdminSideBar />
        <AgregarEmpren />
    </div>
  )
}

export default Emprendedores
