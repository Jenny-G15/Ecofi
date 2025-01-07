import React from 'react';
import Nav from '../Componentes/Nav';
import Footer from '../Componentes/Footer';
import Testimonios from "../Componentes/Testimonios"


function TestimonioPage() {
  return (
    <div id='principalConteiner'>
      <Nav />
      <Testimonios/>
      <div id='footerConteiner'><Footer /> </div>
    </div>

  )
}

export default TestimonioPage;