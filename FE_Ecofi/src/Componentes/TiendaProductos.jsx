import React, { useState, useEffect, useCallback, useContext } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProductos } from "../services/productServices";
import { actualizarBicolones } from "../services/userServices";
import ContextoEcofi from "../Componentes/Context/EcofiContex";
import "../styles/ProductosT.css";

function TiendaProductos() {
  const [productos, setProductos] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(null);
  const { userData, setUserData } = useContext(ContextoEcofi);
  const userId = userData?.token;

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

      const bicolonesRestantes = userData.Bicolones - producto.Bicolones_Producto;

      if (bicolonesRestantes < 0) {
        toast.error("No tienes suficientes bicolones para canjear este producto.");
        return;
      }

      setLoadingProduct(producto.id);

      try {
        await actualizarBicolones(userId, bicolonesRestantes);
        setUserData((prevData) => ({ ...prevData, Bicolones: bicolonesRestantes }));
        setProductos((prevProductos) =>
          prevProductos.map((p) =>
            p.id === producto.id ? { ...p, Stock: p.Stock - 1 } : p
          )
        );

        toast.success(`Producto "${producto.Nombre_Producto}" canjeado exitosamente.`);
      } catch (error) {
        toast.error("Hubo un error al canjear el producto.");
        console.error(error);
      } finally {
        setLoadingProduct(null);
      }
    } else {
      toast.error(`El producto "${producto.Nombre_Producto}" no tiene stock disponible.`);
    }
  };

  return (
    <Container className="ctn-productos py-5" id="productosContainer">
      <div className="row">
        {productos.map((producto) => (
          <Card key={producto.id} className="productEco col-md-3 mb-4">
            <Card.Img
              src={producto.Imagen}
              alt={producto.Nombre_Producto}
              className="product-image"
            />
            <Card.Body>
              <Card.Title>{producto.Nombre_Producto}</Card.Title>
              <Card.Text>
                <strong>Bicolones:</strong> {producto.Bicolones_Producto}
              </Card.Text>
              <Card.Text>
                <strong>Stock:</strong> {producto.Stock}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => FuncionCanje(producto)}
                disabled={loadingProduct === producto.id || producto.Stock === 0}
              >
                {loadingProduct === producto.id ? "Procesando..." : "Canjear"}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default TiendaProductos;
