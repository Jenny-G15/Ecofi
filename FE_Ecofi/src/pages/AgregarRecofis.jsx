import React from 'react';
import NavAdmin from '../Componentes/NavAdmin';
import AdminSideBar from '../Componentes/SideBar';
import FormularioRecofi from '../Componentes/AgregarRecofis';
import AgregarAdminRecofis from '../Componentes/AgregarAdminRecofis';
import "../Styles/RecofisPage.css"


function RecofisPage() {
  return (
    <div id="principalConteinerRecofis" style={{ display: 'flex', flexDirection: 'column' }}>
      <NavAdmin />
      <div style={{ display: 'flex', flex: 1 }}>
        <AdminSideBar />
        <main style={{ flex: 1, padding: '1rem' }}>
          <FormularioRecofi />
          <AgregarAdminRecofis />
        </main>
      </div>
    </div>
  );
}

export default RecofisPage;