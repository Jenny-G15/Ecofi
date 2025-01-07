import React from 'react';
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import ClasificarEcofi from '../Componentes/ClasificarResiduos';

function ClasificarPage() {
  return (
    <div>
      <Nav/>
      <ClasificarEcofi/>
      <div id='footerConteiner'><Footer /> </div>
    </div>

  )
}

export default ClasificarPage;