export async function getAdminRecofis() {
    try {
        const response = await fetch('http://localhost:3000/adminRecofi', {
            method: 'GET',
            credentials: "include", // Importante para manejar sesiones
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching AdminRecofis');
        }

        const admins = await response.json();
        return admins;
    } catch (error) {
        console.error('Error fetching AdminRecofis:', error);
        throw error;
    }
}



export async function postAdminRecofis(Nombre_AdminRecofis, Apellido_AdminRecofis, Correo_AdminRecofis, Contraseña_AdminRecofis, Telefono_AdminRecofis) {
    try {
      const adminData = {
        Nombre_AdminRecofis,
        Apellido_AdminRecofis,
        Correo_AdminRecofis,
        Contraseña_AdminRecofis,
        Telefono_AdminRecofis
      };
      const response = await fetch("http://localhost:3000/adminRecofi/register", {
        method: "POST",
        credentials: "include", // Importante para manejar sesiones
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });
      return await response.json();
    } catch (error) {
      console.error("Error en el servidor", error);
      throw error;
    }
}

export async function postLoginAdmin(Correo_AdminRecofis, Contraseña_AdminRecofis) {
    try {
      const adminData = {
        Correo_AdminRecofis,
        Contraseña_AdminRecofis
      };

      const response = await fetch("http://localhost:3000/adminRecofi/login", {
        method: "POST",
        credentials: "include", // Importante para manejar sesiones
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });
      return await response.json();
    } catch (error) {
      console.error("Error en el servidor", error);
      throw error;
    }
}

export async function updateAdminRecofis(id, Nombre_AdminRecofis, Apellido_AdminRecofis, Correo_AdminRecofis, Contraseña_AdminRecofis, Telefono_AdminRecofis) {
  try {
      const adminData = {
          Nombre_AdminRecofis,
          Apellido_AdminRecofis,
          Correo_AdminRecofis,
          Contraseña_AdminRecofis,
          Telefono_AdminRecofis
      };

      const response = await fetch(`http://localhost:3000/adminRecofi/${id}`, {
          method: "PUT",
          credentials: "include", // Importante para manejar sesiones
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(adminData),
      });

      if (!response.ok) {
          throw new Error('Error al actualizar el AdminRecofis');
      }

      return await response.json();
  } catch (error) {
      console.error("Error al actualizar el AdminRecofis", error);
      throw error;
  }
}

export async function deleteAdminRecofis(id) {
  try {
      const response = await fetch(`http://localhost:3000/adminRecofi/${id}`, {
          method: "DELETE",
          credentials: "include", // Importante para manejar sesiones
          headers: {
              "Content-Type": "application/json",
          }
      });

      if (!response.ok) {
          throw new Error('Error al eliminar el AdminRecofis');
      }

      return response.status;  // 204 No Content, indica eliminación exitosa
  } catch (error) {
      console.error("Error al eliminar el AdminRecofis:", error);
      throw error;
  }
}
