import React, { useState, useEffect, useCallback, useContext } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProductos, stockActualizado } from "../services/productServices";
import { actualizarBicolones, getUsers } from "../services/userServices";
// import ContextoEcofi from "../Componentes/Context/EcofiContex";
import "../styles/Perfil_Usuario.css";
import { jwtDecode } from "jwt-decode";

function TiendaProductos() {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(null);
  // const { userData } = useContext(ContextoEcofi); // Este es tu contexto

  // console.log('ESTO TRAE USERDATA DESDE EL CONTEXTO', userData);

  // Verificar si el token existe en sessionStorage
  const token = sessionStorage.getItem('token');

  if (!token) {
    console.error('Token no encontrado en sessionStorage');
  }

  let userId = null;

  try {
    if (token) {
      // Decodificar el token solo si es válido
      const decodedToken = jwtDecode(token);
      console.log('ESTE TOKEN HA SIDO DECODIFICADO', decodedToken);
      userId = decodedToken.id;
      console.log(userId);
    }
  } catch (error) {
    console.error('Error al decodificar el token:', error);
  }

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


  const cargarUsuarios = async () => {
    try {
      const response = await getUsers();
      console.log('Respuesta de getUsers:', response); 
      setUsuarios(response);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };
  
  useEffect(()=> {
    cargarUsuarios();
    console.log('devuelve', usuarios);
  }, [])

  const FuncionCanje = async (producto) => {
    if (producto.Stock > 0) {
      if (!userId) {
        toast.error("No se ha encontrado el usuario para realizar el canje.");
        return;
      }
      
      // const usuarios = await getUsers();
      const encontrarBicolonesxUsuario = usuarios.find((user) => user.id === userId);

      const restarBicolones = encontrarBicolonesxUsuario.Bicolones - producto.Bicolones_Producto;

      if (restarBicolones < 0) {
        toast.error("No tienes suficientes bicolones para canjear este producto.");
        return;
      }

      setLoadingProduct(producto.id);

      try {
        // Actualizar bicolones del usuario
        await actualizarBicolones(userId, restarBicolones);
        cargarUsuarios();

        // Restar stock localmente antes de actualizar el backend
        const nuevoStock = producto.Stock - 1;
        setProductos((prevProductos) =>
          prevProductos.map((prod) =>
            prod.id === producto.id ? { ...prod, Stock: nuevoStock } : prod
          )
        );

        // Actualizar stock en el backend
        await stockActualizado(producto.id, nuevoStock);

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
