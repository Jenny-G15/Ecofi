import React from 'react';
import '../styles/QuienesSomos.css';

function About() {
  return (
    <div className="quienes-somos-container">
      <header className="quienes-somos-header">
        <h1 className="quienes-somos-title">Bienvenidos a Ecofi</h1>
      </header>

      <section className="quienes-somos-section">
        <h2 className="quienes-somos-subtitle">Nuestra Misión</h2>
        <p>
          En <strong>Ecofi</strong>, creemos en el poder del reciclaje para construir un futuro más sostenible. Nuestro objetivo principal es promover el reciclaje mediante un sistema innovador de canjeo de <strong>bicolones</strong>, una moneda ecológica que recompensa el reciclaje con productos locales.
        </p>
      </section>

      <section className="quienes-somos-section">
        <h2 className="quienes-somos-subtitle">¿Quiénes somos?</h2>
        <p>
          Somos un equipo comprometido con el medio ambiente. Fundado por <strong>Jennifer Guadamuz Gómez</strong> y <strong>María Laura Morales</strong>, en colaboración con la <strong>Municipalidad de Puntarenas</strong> y <strong>FWD</strong>, hemos creado Ecofi como una plataforma para incentivar el reciclaje y apoyar a los productores locales.
        </p>
      </section>

      <section className="quienes-somos-section">
        <h2 className="quienes-somos-subtitle">Nuestro Sistema</h2>
        <p>
          Participar es simple: trae tus materiales reciclables a nuestros centros de acopio, acumula bicolones y canjéalos por productos únicos de nuestra comunidad local. Cada acción cuenta para construir un mundo mejor.
        </p>
      </section>

      <footer className="quienes-somos-footer">
        <p>© 2024 Ecofi. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default About;
