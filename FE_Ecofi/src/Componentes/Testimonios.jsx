import React from "react";
import "../Styles/Testimonio.css";
import Mariscos from "../IMG/Mariscos.png";
import promainsa from "../IMG/promainsa.png";
import imperial from "../IMG/imperial.png";
import Coca from "../IMG/Coca.png"

const Testimonios = () => {
  const testimonios = [
    {
      id: 1,
      img: Mariscos,
      title: "Descuentos",
      text: "Nunca pensé que reciclar fuera tan beneficioso, para mi cumpleaños pude quitarme el antojo de comerme una mariscada, gracias a los descuentos ofrecidos por Ecofi.",
      name: "Chandler Bing",
    },
    {
      id: 2,
      img: imperial,
      title: "Productos",
      text: "Juntar latas y botellas para intercambiar por una tarjeta de Regalo fue el tiempo mejor invertido, Ahora puedo comprar cosas que me gustan",
      name: "Monica Geller",
    },
    {
      id: 3,
      img: promainsa,
      title: "Productos",
      text: "Simplemente clasifiqué mi basura por unas semanas, y me gané productos de Promainsa",
      name: "Joey Tribbiani",
    },
    {
        id: 4,
        img: Coca,
        title: "Productos",
        text: "En mi familia nos pusimos las pilas para recoger Bicolones, apra intercambiarlos por una Bola de Futbol de edición Limitada, gran forma de pasar el tiempo en familia",
        name: "Rachel Green",
      },
  ];

  return (
    <div className="container" id="Card-Testimonios">
      {testimonios.map((testimonio) => (
        <div className="card" id={`Card-Testimonio-${testimonio.id}`} key={testimonio.id}>
          <div className="Box" id={`Box-Testimonio-${testimonio.id}`}>
            <img
              src={testimonio.img}
              alt={`Imagen del testimonio ${testimonio.id}`}
              id={`Img-Testimonio-${testimonio.id}`}
            />
          </div>
          <div className="details" id={`Details-Testimonio-${testimonio.id}`}>
            <h2 id={`Title-Testimonio-${testimonio.id}`}>{testimonio.title}</h2>
            <p id={`Text-Testimonio-${testimonio.id}`}>{testimonio.text}</p>
            <p id={`Author-Testimonio-${testimonio.id}`}>- {testimonio.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonios;



























// import React from "react";
// import "../Styles/Testimonio.css";

// // Importa las imágenes
// import imperial from '../IMG/imperial.png';
// import mariscos from '../IMG/Mariscos.png';
// import promainsa from '../IMG/promainsa.png';

// const Testimonios = () => {
//   const testimonios = [
//     {
//       id: "cardTestimonio1",
//       imagen: promainsa,
//       texto:
//         "Nunca pensé que reciclar podría ser tan beneficioso. ¡Ahora tengo descuentos increíbles gracias a Ecofi!",
//       nombre: "María López",
//     },
//     {
//       id: "cardTestimonio2",
//       imagen: imperial,
//       texto:
//         "Con los puntos de Ecofi, cambié mis botellas por productos para mi hogar. ¡Esto es pura vida!",
//       nombre: "Carlos Jiménez",
//     },
//     {
//       id: "cardTestimonio3",
//       imagen: mariscos,
//       texto:
//         "¡Lo recomiendo 100%! Fácil, rápido, y ayuda al planeta. Reciclar con Ecofi es lo mejor.",
//       nombre: "Ana Rodríguez",
//     },
//   ];

//   return (
//     <div id="testimoniosContainer">
//       <h2 id="tituloTestimonios">Lo que dice nuestra comunidad</h2>
//       {testimonios.map((testimonio) => (
//         <div id={testimonio.id} className="card-testimonio" key={testimonio.id}>
//           <img
//             src={testimonio.imagen}
//             alt={`Foto de ${testimonio.nombre}`}
//             className="imagen-testimonio"
//           />
//           <div className="contenido-testimonio">
//             <p className="texto-testimonio">{testimonio.texto}</p>
//             <span className="nombre-testimonio">- {testimonio.nombre}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Testimonios;

