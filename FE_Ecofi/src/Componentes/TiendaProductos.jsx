
// import React, { useState, useEffect, useCallback, useContext } from "react";
// import { Container, Button, Card } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { getProductos, stockActualizado } from "../services/productServices";
// import { actualizarBicolones, getUsers } from "../services/userServices";
// import ContextoEcofi from "../Componentes/Context/EcofiContex";
// import "../styles/ProductosT.css";
// import { jwtDecode } from "jwt-decode";
// import jsPDF from 'jspdf';
// import emailjs from 'emailjs-com';




// function TiendaProductos() {
//   const [productos, setProductos] = useState([]);
//   const [loadingProduct, setLoadingProduct] = useState(null);
//   const { userData } = useContext(ContextoEcofi);
//   const token = sessionStorage.getItem('token');
//   const decodedToken = jwtDecode(token);
//   const userId = decodedToken.id;

//   const loadProductos = useCallback(() => {
//     const fetchProductos = async () => {
//       try {
//         const response = await getProductos();
//         setProductos(response);
//       } catch (error) {
//         console.error("Error al cargar los productos:", error);
//       }
//     };
//     fetchProductos();
//   }, []);

//   useEffect(() => loadProductos(), [loadProductos]);

//   const generarPDF = (producto, usuario) => {
//     const doc = new jsPDF();
//     const margin = 20;

//     doc.setFontSize(32);
//     doc.setTextColor(0, 128, 0);
//     doc.text('Tienda', doc.internal.pageSize.width / 2, margin, { align: 'center' });

//     doc.setFontSize(18);
//     doc.setTextColor(0, 0, 0);
//     doc.text('Comprobante de Canje', doc.internal.pageSize.width / 2, margin + 20, { align: 'center' });

//     doc.setLineWidth(0.5);
//     doc.line(margin, margin + 30, doc.internal.pageSize.width - margin, margin + 30);

//     doc.setFontSize(12);
//     const infoStartY = margin + 40;
//     doc.text(`Nombre del Usuario: ${usuario.nombre}`, margin, infoStartY);
//     doc.text(`Producto: ${producto.Nombre_Producto}`, margin, infoStartY + 10);
//     doc.text(`Fecha: ${new Date().toLocaleDateString()}`, margin, infoStartY + 20);
//     doc.text(`Bicolones Gastados: ${producto.Bicolones_Producto}`, margin, infoStartY + 30);

//     doc.line(margin, infoStartY + 40, doc.internal.pageSize.width - margin, infoStartY + 40);
//     doc.setFontSize(10);
//     doc.text('Este es un comprobante de canje de producto.', margin, doc.internal.pageSize.height - 20);

//     doc.save('Comprobante.pdf');
//   };

//   const enviarCorreoComprobante = (producto, usuario) => {
//     const emailParams = {
//       to_name: `${usuario.Nombre_Usuario}`,
//       producto: producto.Nombre_Producto,
//       fecha: new Date().toLocaleDateString(),
//       bicolones: producto.Bicolones_Producto,
//       to_email: usuario.email,
//     };

//     emailjs.send('service_56xi5wh', 'template_hofgqw8', emailParams, 'rV7wVdf0tWzRA66hT')
//       .then(() => {
//         toast.success('Comprobante enviado con éxito.');
//       })
//       .catch((error) => {
//         console.error('Error al enviar el correo:', error);
//         toast.error('Hubo un problema al enviar el correo.');
//       });
//   };

//   const FuncionCanje = async (producto) => {
//     if (producto.Stock > 0) {
//       if (!userId) {
//         toast.error("No se ha encontrado el usuario para realizar el canje.");
//         return;
//       }
      
//       const usuarios = await getUsers();
//       const encontrarBicolonesxUsuario = usuarios.find((user) => user.id === userId);
//       const restarBicolones = encontrarBicolonesxUsuario.Bicolones - producto.Bicolones_Producto;

//       if (restarBicolones < 0) {
//         toast.error("No tienes suficientes bicolones para canjear este producto.");
//         return;
//       }

//       setLoadingProduct(producto.id);

//       try {
//         await actualizarBicolones(userId, restarBicolones);
//         const nuevoStock = producto.Stock - 1;
//         setProductos((prevProductos) =>
//           prevProductos.map((prod) =>
//             prod.id === producto.id ? { ...prod, Stock: nuevoStock } : prod
//           )
//         );
//         await stockActualizado(producto.id, nuevoStock);
//         toast.success(`Producto "${producto.Nombre_Producto}" canjeado exitosamente.`);

//         console.log("userData:", userData);
//         const usuario = {
//           nombre: `${userData?.Nombre_Usuario} ${userData?.Apellido_Usuario}`,
//           email: userData?.Correo_Usuario,
//         };

//         generarPDF(producto, usuario);
//         enviarCorreoComprobante(producto, usuario);
//       } catch (error) {
//         toast.error("Hubo un error al canjear el producto.");
//         console.error(error);
//       } finally {
//         setLoadingProduct(null);
//       }
//     } else {
//       toast.error(`El producto "${producto.Nombre_Producto}" no tiene stock disponible.`);
//     }
//   };

//   return (
//     <Container className="ctn-productos py-5" id="productosContainer">
//       <div className="row">
//         {productos.map((producto) => (
//           <Card key={producto.id} className="productEco col-md-3 mb-4">
//             <Card.Img
//               src={producto.Imagen}
//               alt={producto.Nombre_Producto}
//               className="product-image"
//             />
//             <Card.Body>
//               <Card.Title>{producto.Nombre_Producto}</Card.Title>
//               <Card.Text>
//                 <strong>Bicolones:</strong> {producto.Bicolones_Producto}
//               </Card.Text>
//               <Card.Text>
//                 <strong>Stock:</strong> {producto.Stock}
//               </Card.Text>
//               <Button
//                 variant="primary"
//                 onClick={() => FuncionCanje(producto)}
//                 disabled={loadingProduct === producto.id || producto.Stock === 0}
//               >
//                 {loadingProduct === producto.id ? "Procesando..." : "Canjear"}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </Container>
//   );
// }

// export default TiendaProductos;


import React, { useState, useEffect, useCallback, useContext } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProductos, stockActualizado } from "../services/productServices";
import { actualizarBicolones, getUsers } from "../services/userServices";
import ContextoEcofi from "../Componentes/Context/EcofiContex";
import "../styles/ProductosT.css";
import { jwtDecode } from "jwt-decode";

function TiendaProductos() {
  const [productos, setProductos] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(null);
  const { userData } = useContext(ContextoEcofi); // Este es tu contexto

  console.log('ESTO TRAE USERDATA DESDE EL CONTEXTO', userData);

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

  const FuncionCanje = async (producto) => {
    if (producto.Stock > 0) {
      if (!userId) {
        toast.error("No se ha encontrado el usuario para realizar el canje.");
        return;
      }

      const usuarios = await getUsers();
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






// import React, { useState, useEffect, useCallback, useContext } from "react";
// import { Container, Button, Card } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { getProductos, stockActualizado } from "../services/productServices";
// import { actualizarBicolones, getUsers } from "../services/userServices";
// import ContextoEcofi from "../Componentes/Context/EcofiContex";
// import "../styles/ProductosT.css";
// import jsPDF from 'jspdf';
// import emailjs from 'emailjs-com';
// import { jwtDecode } from "jwt-decode";

// function TiendaProductos() {
//   const [productos, setProductos] = useState([]);
//   const [loadingProduct, setLoadingProduct] = useState(null);
//   const { userData, updateUserData } = useContext(ContextoEcofi);
//   const token = sessionStorage.getItem('token');
//   const decodedToken = token ? jwtDecode(token) : null;
//   const userId = decodedToken?.id;

//   const loadProductos = useCallback(() => {
//     const fetchProductos = async () => {
//       try {
//         const response = await getProductos();
//         setProductos(response);
//       } catch (error) {
//         console.error("Error al cargar los productos:", error);
//       }
//     };
//     fetchProductos();
//   }, []);

//   useEffect(() => loadProductos(), [loadProductos]);

//   const generarPDF = (producto, usuario) => {
//     const doc = new jsPDF();
//     const margin = 20;

//     doc.setFontSize(32);
//     doc.setTextColor(0, 128, 0);
//     doc.text('Tienda', doc.internal.pageSize.width / 2, margin, { align: 'center' });

//     doc.setFontSize(18);
//     doc.setTextColor(0, 0, 0);
//     doc.text('Comprobante de Canje', doc.internal.pageSize.width / 2, margin + 20, { align: 'center' });

//     doc.setLineWidth(0.5);
//     doc.line(margin, margin + 30, doc.internal.pageSize.width - margin, margin + 30);

//     doc.setFontSize(12);
//     const infoStartY = margin + 40;
//     doc.text(`Nombre del Usuario: ${usuario.nombre}`, margin, infoStartY);
//     doc.text(`Producto: ${producto.Nombre_Producto}`, margin, infoStartY + 10);
//     doc.text(`Fecha: ${new Date().toLocaleDateString()}`, margin, infoStartY + 20);
//     doc.text(`Bicolones Gastados: ${producto.Bicolones_Producto}`, margin, infoStartY + 30);

//     doc.line(margin, infoStartY + 40, doc.internal.pageSize.width - margin, infoStartY + 40);
//     doc.setFontSize(10);
//     doc.text('Este es un comprobante de canje de producto.', margin, doc.internal.pageSize.height - 20);

//     doc.save('Comprobante.pdf');
//   };

//   const enviarCorreoComprobante = (producto, usuario) => {
//     const emailParams = {
//       to_name: usuario.nombre,
//       producto: producto.Nombre_Producto,
//       fecha: new Date().toLocaleDateString(),
//       bicolones: producto.Bicolones_Producto,
//       to_email: usuario.email,
//     };

//     emailjs.send('service_56xi5wh', 'template_99rzmgs', emailParams, 'rV7wVdf0tWzRA66hT')
//       .then(() => {
//         toast.success('Comprobante enviado con éxito.');
//       })
//       .catch((error) => {
//         console.error('Error al enviar el correo:', error);
//         toast.error('Hubo un problema al enviar el correo.');
//       });
//   };

//   const FuncionCanje = async (producto) => {
//     if (!userData) {
//       toast.error("No se ha encontrado el usuario para realizar el canje.");
//       return;
//     }

//     if (producto.Stock > 0) {
//       const usuarios = await getUsers();
//       const encontrarBicolonesxUsuario = usuarios.find((user) => user.id === userId);
//       const restarBicolones = encontrarBicolonesxUsuario.Bicolones - producto.Bicolones_Producto;

//       if (restarBicolones < 0) {
//         toast.error("No tienes suficientes bicolones para canjear este producto.");
//         return;
//       }

//       setLoadingProduct(producto.id);

//       try {
//         await actualizarBicolones(userId, restarBicolones);
//         const nuevoStock = producto.Stock - 1;
//         setProductos((prevProductos) =>
//           prevProductos.map((prod) =>
//             prod.id === producto.id ? { ...prod, Stock: nuevoStock } : prod
//           )
//         );
//         await stockActualizado(producto.id, nuevoStock);
//         toast.success(`Producto "${producto.Nombre_Producto}" canjeado exitosamente.`);

//         const usuario = {
//           nombre: `${userData?.Nombre_Usuario ?? ''} ${userData?.Apellido_Usuario ?? ''}`.trim(),
//           email: userData?.Correo_Usuario ?? 'No email',
//         };

//         generarPDF(producto, usuario);
//         enviarCorreoComprobante(producto, usuario);

//         await updateUserData(); // Actualizar userData después de un canje exitoso
//       } catch (error) {
//         toast.error("Hubo un error al canjear el producto.");
//         console.error(error);
//       } finally {
//         setLoadingProduct(null);
//       }
//     } else {
//       toast.error(`El producto "${producto.Nombre_Producto}" no tiene stock disponible.`);
//     }
//   };

//   return (
//     <Container className="ctn-productos py-5" id="productosContainer">
//       <div className="row">
//         {productos.map((producto) => (
//           <Card key={producto.id} className="productEco col-md-3 mb-4">
//             <Card.Img
//               src={producto.Imagen}
//               alt={producto.Nombre_Producto}
//               className="product-image"
//             />
//             <Card.Body>
//               <Card.Title>{producto.Nombre_Producto}</Card.Title>
//               <Card.Text>
//                 <strong>Bicolones:</strong> {producto.Bicolones_Producto}
//               </Card.Text>
//               <Card.Text>
//                 <strong>Stock:</strong> {producto.Stock}
//               </Card.Text>
//               <Button
//                 variant="primary"
//                 onClick={() => FuncionCanje(producto)}
//                 disabled={loadingProduct === producto.id || producto.Stock === 0}
//               >
//                 {loadingProduct === producto.id ? "Procesando..." : "Canjear"}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </Container>
//   );
// }

// export default TiendaProductos;




































