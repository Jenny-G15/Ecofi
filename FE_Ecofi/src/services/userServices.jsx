export async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


export async function PostUsers(Nombre_Usuario,Apellido_Usuario,Cedula,Email_Usuario,Contraseña_Usuario,Telefono_Usuario, Bicolones) {
    try {
      const userData = {
        Nombre_Usuario,
        Apellido_Usuario,
        Cedula,
        Email_Usuario,
        Contraseña_Usuario,
        Telefono_Usuario, 
        Bicolones, 
      };
      const response = await fetch("http://localhost:3000/usuarios/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      console.error("Error en el servidor", error);
      throw error;
    }
}

export async function PostLogin(Email_Usuario, Contraseña_Usuario) {
    try {
      const userData = {
        Email_Usuario,
        Contraseña_Usuario
      };

      const response = await fetch("http://localhost:3000/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      console.error("Error en el servidor", error);
      throw error;
    }
}


<<<<<<< HEAD
const PostProductos = async (formData) => {
  try {
    const response = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,  // Usamos FormData para enviar los datos
    });

    if (!response.ok) {
      throw new Error('Error al crear el producto');
    }

    const data = await response.json();
    console.log('Producto creado con éxito:', data);
    return data;
  } catch (error) {
    console.error('Error en PostProductos:', error);
    throw error;
  }
};

export default PostProductos;

=======
export async function PostProductos(Nombre_Producto, Descripcion_Producto, Precio_Producto, Stock_Producto, Categoria_Producto) {
    try {
        const productoData = {
            Nombre_Producto,
            Descripcion_Producto,
            Precio_Producto,
            Stock_Producto,
            Categoria_Producto,
        };
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productoData),
        });
        return await response.json();
    } catch (error) {
        console.error("Error en el servidor", error);
        throw error;
    }
}
>>>>>>> 61aea061cef3bc5c6f0d95a8372c96dcfc57ff78




