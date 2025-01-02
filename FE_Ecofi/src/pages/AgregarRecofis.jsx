import React from 'react'
import NavAdmin from '../Componentes/NavAdmin'
import AdminSideBar from '../Componentes/SideBar'
import FormularioRecofi from '../Componentes/AgregarRecofis'
import AgregarAdminRecofis from '../Componentes/AgregarAdminRecofis'

function RecofisPage() {
  return (
    <div id='principalConteiner'>
      <NavAdmin/>
        <AdminSideBar />
        <FormularioRecofi/>
        <AgregarAdminRecofis/>
    </div>
  )
}

export default RecofisPage