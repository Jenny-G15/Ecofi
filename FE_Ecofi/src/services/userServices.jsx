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


export async function PostUsers
      (Nombre_Usuario,
        Apellido_Usuario,
        Cedula,Email_Usuario,
        Contraseña_Usuario,
        Telefono_Usuario,
        Bicolones) {
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



export async function updateUser(id, Nombre_Usuario, Apellido_Usuario, Cedula, Email_Usuario, Contraseña_Usuario, Telefono_Usuario, Bicolones) {
  try {
      const userData = {
          Nombre_Usuario,
          Apellido_Usuario,
          Cedula,
          Email_Usuario,
          Contraseña_Usuario,
          Telefono_Usuario,
          Bicolones
      };

      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
      });

      if (!response.ok) {
          throw new Error('Error al actualizar el Usuario');
      }

      return await response.json();
  } catch (error) {
      console.error("Error al actualizar el Usuario", error);
      throw error;
  }
}


export async function deleteUser(id) {
  try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          }
      });

      if (!response.ok) {
          throw new Error('Error al eliminar el Usuario');
      }

      return response.status;  // 204 No Content, indicates successful deletion
  } catch (error) {
      console.error("Error al eliminar el Usuario:", error);
      throw error;
  }
}





// export async function buscarPorCedula(Cedula) {
//   try {
//     const response = await fetch(`http://localhost:3000/usuarios?Cedula=${Cedula}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.status === 404) {
//       return null; // Usuario no encontrado
//     }

//     if (!response.ok) {
//       throw new Error("Error al buscar el usuario.");
//     }

//     return await response.json(); // Devuelve un objeto o null
//   } catch (error) {
//     console.error("Error buscando usuario:", error);
//     throw error;
//   }
// }




// Ejemplo de implementación de buscarPorCedula en userServices.js

export const buscarPorCedula = async (cedula) => {
  try {
    const response = await fetch(`http://localhost:3000/usuarios/${cedula}`);
    const data = await response.json();
    
    // Verificar que la API esté devolviendo el usuario correctamente
    console.log('Datos obtenidos de la API:', data); // Esto te ayudará a ver qué devuelve la API

    if (data && data.length > 0) {
      return data[0]; // Retorna el primer usuario encontrado
    } else {
      return null; // No se encontró ningún usuario con esa cédula
    }
  } catch (error) {
    console.error('Error en la búsqueda de usuario:', error);
    throw error; // Lanzamos el error para capturarlo en el componente
  }
};
