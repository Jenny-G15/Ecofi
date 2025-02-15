const token = sessionStorage.getItem('token');

export async function getUsers() {
    try {
        const response = await fetch('http://192.168.8.108:3000/usuarios', {
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



export async function PostUsers(userData) {
  try {
      const response = await fetch("http://192.168.8.108:3000/usuarios/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
      });
      if (!response.ok) {
          throw new Error('Error al registrar el usuario');
      }
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

      const response = await fetch("http://192.168.8.108:3000/usuarios/login", {
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

export const updateUser = async (id, usuario) => {
  try {
    const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario), // Serializa el objeto usuario
    });

    if (!response.ok) {
      throw new Error("Error al actualizar el Usuario");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al actualizar el Usuario", error);
    throw error;
  }
};


export async function deleteUser(id) {
  try {
      const response = await fetch(`http://192.168.8.108:3000/usuarios/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer" + token

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


export const buscarPorCedula = async (cedula) => {
  try {
    const response = await fetch(`http://192.168.8.108:3000/usuarios/${cedula}`);
    const data = await response.json();
    
    // Verificar que la API esté devolviendo el usuario correctamente
    console.log('Datos obtenidos de la API:', data); // Esto te ayudará a ver qué devuelve la API

    if (data && data.id) { // Verifica si el objeto tiene un campo "id" válido (o usa otro campo único que tenga sentido)
      return data; // Devuelve el objeto completo del usuario
    } else {
      return null; // Si no se encuentra el usuario, devuelve null
    }
  } catch (error) {
    console.error('Error en la búsqueda de usuario:', error);
    throw error; // Lanzamos el error para capturarlo en el componente
  }
};



export const actualizarBicolones = async (id, restarBicolones) => {

  try {
  
    const response = await fetch(`http://192.168.8.108:3000/usuarios/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Bicolones: restarBicolones }),
  
    });
  
    if (!response.ok) throw new Error('Error al actualizar los bicolones');
    return await response.json();
  
  } catch (error) {
    console.error('Error al actualizar los bicolones:', error);
    throw error;
  }
};





