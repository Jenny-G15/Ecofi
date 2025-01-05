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
                <Card.Title>Productos Disponibles para Canje</Card.Title>
                <Card.Text>
                  ¡Conocé lo que podés llevarte con tus puntos! No te quedes sin tus productos Favoritos
                </Card.Text>
                <Link to="/Testimonios"> {/* Usa Link para redirigir */}
                  <Button variant="primary">Ver Productos</Button>
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
// import "../styles/Principal.css"; // Importa estilos personalizados
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Descuentos from '../IMG/Descuentos.jpeg'
// import Clasificar from '../IMG/Clasificar.jpeg'
// import Porque from '../IMG/Porque.jpeg'

// function CardsPrincipal() {
//   return (
//     <div id="CardsPrincConteiner">
//         <div  className="container mt-5">
//         <div className="row d-flex align-items-stretch">
//             {/* Card 1 */}
//             <div className="col-md-4 mb-4">
//             <Card className="custom-card h-100">
//                 <Card.Img
//                 variant="top"
//                 src={Descuentos}
//                 alt="Productos locales"
//                 />
//                 <Card.Body>
//                 <Card.Title>Productos Disponibles para Canje</Card.Title>
//                 <Card.Text>
//                     ¡Conocé lo que podés llevarte con tus puntos! No te quedes sin tus productos Favoritos
//                 </Card.Text>
//                 <Button variant="primary">Ver Productos</Button>
//                 </Card.Body>
//             </Card>
//             </div>
//             {/* Card 2 */}
//             <div className="col-md-4 mb-4">
//             <Card className="custom-card h-100">
//                 <Card.Img
//                 variant="top"
//                 src={Clasificar}

//                 alt="Bolsa de reciclaje"
//                 />
//                 <Card.Body>
//                 <Card.Title>Aprendé a Reciclar Correctamente</Card.Title>
//                 <Card.Text>
//                     Descubrí cómo clasificar tus residuos para ganar más puntos.
//                 </Card.Text>
//                 <Button variant="success">Ver guía de reciclaje</Button>
//                 </Card.Body>
//             </Card>
//             </div>
//             {/* Card 3 */}
//             <div className="col-md-4 mb-4">
//             <Card className="custom-card h-100">
//                 <Card.Img
//                 variant="top"
//                 src={Porque}

//                 alt="Comunidad reciclando"
//                 />
//                 <Card.Body>
//                 <Card.Title>Beneficios de Reciclar con Ecofi</Card.Title>
//                 <Card.Text>
//                     Al reciclar, ayudás a tu comunidad y al planeta. ¡Sumate al
//                     cambio!
//                 </Card.Text>
//                 <Button variant="warning">Conocé más</Button>
//                 </Card.Body>
//             </Card>
//             </div>
//         </div>
//         </div>
//     </div>
//     );
// }

// export default CardsPrincipal;








