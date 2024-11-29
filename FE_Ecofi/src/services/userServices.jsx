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

export async function PostLogin(Nombre_Usuario, Contraseña_Usuario) {
    try {
      const userData = {
        Nombre_Usuario,
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





// export const getProductos = async () => {
//     try {
//         const response = await fetch('http://localhost:3000/productos');
//         if (!response.ok) {
//             throw new Error("Error al obtener productos");
//         }
//         return await response.json();
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };




// export const getAdmins = async () => {
//     try {
//         const response = await fetch('http://localhost:3000/Admins');
//         if (!response.ok) {
//             throw new Error("Error al obtener la lista de Administradores");
//         }
//         return await response.json();
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };
