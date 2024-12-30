import React, { useState, useEffect, useCallback } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProductos } from "../services/productServices";
import { actualizarBicolones } from "../services/userServices";
import { useContext } from "react";  
import ContextoEcofi from "../Componentes/Context/EcofiContex";  
import "../styles/ProductosT.css";

function TiendaProductos() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useContext(ContextoEcofi);  // Acceder a userData desde el contexto

  // Comprobar si el usuario tiene un token (o ID_Usuario) en userData
  const userId = userData.token; // Asumimos que el token es el ID del usuario

  const loadProductos = useCallback(() => {
    const fetchProductos = async () => {
      try {
        const response = await getProductos();
        setProductos(response);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };
    fetchProductos();
  }, []);

  useEffect(() => loadProductos(), [loadProductos]);

  const FuncionCanje = async (producto) => {
    if (producto.Stock > 0) {
      if (!userId) {
        toast.error("No se ha encontrado el usuario para realizar el canje.");
        return;
      }

      setIsLoading(true);
      try {
        // Actualizar los bicolones después de canje
        const bicolonesRestantes = producto.Bicolones - producto.Costo_Bicolones;

        // Actualizamos los bicolones en el perfil del usuario usando el ID de usuario
        await actualizarBicolones(userId, bicolonesRestantes);

        toast.success(`Producto "${producto.Nombre_Producto}" canjeado exitosamente.`);
        onCanjear(bicolonesRestantes);

      } catch (error) {
        toast.error("Hubo un error al canjear el producto.");
        console.error(error);
      }
      setIsLoading(false);
    } else {
      toast.error(`El producto "${producto.Nombre_Producto}" no tiene stock disponible.`);
    }
  };

  return (
    <Container className="ctn-productos py-5" id="productosContainer">
      {productos.map((producto) => (
        <Card key={producto.id} className="productEco col-md-3" id={`producto-${producto.id}`}>
          <Card.Img
            src={producto.Imagen}
            alt={producto.Nombre_Producto}
            variant="top"
            className="product-image"
            id={`imagen-${producto.id}`}
          />
          <Card.Body>
            <Card.Title id={`titulo-${producto.id}`}>{producto.Nombre_Producto}</Card.Title>
            <Card.Text className="price" id={`precio-${producto.id}`}>
              <strong>Bicolones:</strong> {producto.Bicolones}
            </Card.Text>
            <Card.Text className="description" id={`descripcion-${producto.id}`}>
              {producto.Descripcion_Producto}
            </Card.Text>
            <Card.Text id={`stock-${producto.id}`}>
              <strong>Stock:</strong> {producto.Stock}
            </Card.Text>
            <Button
              variant="primary"
              className="w-100 d-block"
              onClick={() => FuncionCanje(producto)}
              disabled={isLoading || producto.Stock === 0}
              id={`boton-canje-${producto.id}`}
            >
              {isLoading ? "Procesando..." : "Canjear"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default TiendaProductos;
