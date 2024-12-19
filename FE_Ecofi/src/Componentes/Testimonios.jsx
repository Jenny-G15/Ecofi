import React from "react";
import "../Styles/Testimonio.css";

// Importa las imágenes
import imperial from '../IMG/imperial.png';
import mariscos from '../IMG/Mariscos.png';
import promainsa from '../IMG/promainsa.png';

const Testimonios = () => {
  const testimonios = [
    {
      id: "cardTestimonio1",
      imagen: promainsa,
      texto:
        "Nunca pensé que reciclar podría ser tan beneficioso. ¡Ahora tengo descuentos increíbles gracias a Ecofi!",
      nombre: "María López",
    },
    {
      id: "cardTestimonio2",
      imagen: imperial,
      texto:
        "Con los puntos de Ecofi, cambié mis botellas por productos para mi hogar. ¡Esto es pura vida!",
      nombre: "Carlos Jiménez",
    },
    {
      id: "cardTestimonio3",
      imagen: mariscos,
      texto:
        "¡Lo recomiendo 100%! Fácil, rápido, y ayuda al planeta. Reciclar con Ecofi es lo mejor.",
      nombre: "Ana Rodríguez",
    },
  ];

  return (
    <div id="testimoniosContainer">
      <h2 id="tituloTestimonios">Lo que dice nuestra comunidad</h2>
      {testimonios.map((testimonio) => (
        <div id={testimonio.id} className="card-testimonio" key={testimonio.id}>
          <img
            src={testimonio.imagen}
            alt={`Foto de ${testimonio.nombre}`}
            className="imagen-testimonio"
          />
          <div className="contenido-testimonio">
            <p className="texto-testimonio">{testimonio.texto}</p>
            <span className="nombre-testimonio">- {testimonio.nombre}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonios;

