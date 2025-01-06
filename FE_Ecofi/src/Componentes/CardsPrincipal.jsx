import React from "react";
import { Link } from "react-router-dom"; // Importa Link de React Router
import "../styles/Principal.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Descuentos from '../IMG/Descuentos.jpeg';
import Clasificar from '../IMG/Clasificar.jpeg';
import Porque from '../IMG/Porque.jpeg';





function CardsPrincipal() {
  return (
    <div id="CardsPrincConteiner">
      <div className="container mt-5">
        <div className="row d-flex align-items-stretch">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <Card className="custom-card h-100">
              <Card.Img
                variant="top"
                src={Descuentos}
                alt="Productos locales"
              />
              <Card.Body>
                <Card.Title>Conoce las historias de nuestros Amigos</Card.Title>
                <Card.Text>
                  ¡Entra y conoce que se han ganado nuestros Particiantes!
                </Card.Text>
                <Link to="/Testimonios"> {/* Usa Link para redirigir */}
                  <Button variant="primary">Ver Historias</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <Card className="custom-card h-100">
              <Card.Img
                variant="top"
                src={Clasificar}
                alt="Bolsa de reciclaje"
              />
              <Card.Body>
                <Card.Title>Aprendé a Reciclar Correctamente</Card.Title>
                <Card.Text>
                  Descubrí cómo clasificar tus residuos para ganar más puntos.
                </Card.Text>
                <Link to="/Clasificar"> {/* Usa Link para redirigir */}
                  <Button variant="success">Ver guía de reciclaje</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <Card className="custom-card h-100">
              <Card.Img
                variant="top"
                src={Porque}
                alt="Comunidad reciclando"
              />
              <Card.Body>
                <Card.Title>Beneficios de Reciclar con Ecofi</Card.Title>
                <Card.Text>
                  Al reciclar, ayudás a tu comunidad y al planeta. ¡Sumate al cambio!
                </Card.Text>
                <Link to="/Beneficios"> {/* Usa Link para redirigir */}
                  <Button variant="warning">Conocé más</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsPrincipal;
































// import React from "react";
// import "../styles/CardsPrincipal.css"; // Importa los estilos
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";






// function CardsPrincipal() {
//   return (
//     <div className="container mt-5">
//       <div className="row">

//         {/* Card de Productos Disponibles */}
//         <div className="col-md-4">
//           <Card className="custom-card">
//             <Card.Img
//               variant="top"
//               src="https://via.placeholder.com/300x200?text=Frutas+%26+Artesanías"
//               alt="Productos locales"
//             />
//             <Card.Body>
//               <Card.Title>Productos Disponibles para Canje</Card.Title>
//               <Card.Text>
//                 ¡Conocé lo que podés llevarte con tus puntos!
//               </Card.Text>
//               <Button variant="primary">Ver catálogo de recompensas</Button>
//             </Card.Body>
//           </Card>
//         </div>

//         {/* Card  ¿Cómo REciclar? */}
//         <div className="col-md-4">
//           <Card className="custom-card">
//             <Card.Img
//               variant="top"
//               src="https://via.placeholder.com/300x200?text=Bolsa+Reciclaje"
//               alt="Bolsa de reciclaje"
//             />
//             <Card.Body>
//               <Card.Title>Aprendé a Reciclar Correctamente</Card.Title>
//               <Card.Text>
//                 Descubrí cómo clasificar tus residuos para ganar más puntos.
//               </Card.Text>
//               <Button variant="success">Ver guía de reciclaje</Button>
//             </Card.Body>
//           </Card>
//         </div>

//         {/* Card del Porque REcilar */}
//         <div className="col-md-4">
//           <Card className="custom-card">
//             <Card.Img
//               variant="top"
//               src="https://via.placeholder.com/300x200?text=Comunidad+Reciclando"
//               alt="Comunidad reciclando"
//             />
//             <Card.Body>
//               <Card.Title>Beneficios de Reciclar con Ecofi</Card.Title>
//               <Card.Text>
//                 Al reciclar, ayudás a tu comunidad y al planeta. ¡Sumate al
//                 cambio!
//               </Card.Text>
//               <Button variant="warning">Conocé más</Button>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardsPrincipal;
