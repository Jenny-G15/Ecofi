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

