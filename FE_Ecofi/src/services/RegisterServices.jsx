async function PostUsers(Nombre_Usuario,Apellido_Usuario,Cedula,Email_Usuario,Contraseña_Usuario,Telefono_Usuario) {
    try {
      const userData = {
        Nombre_Usuario,
        Apellido_Usuario,
        Cedula,
        Email_Usuario,
        Contraseña_Usuario,
        Telefono_Usuario
      };
      const response = await fetch("usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      console.error("usuario invalido:", error);
      throw error;
    }
}

export default PostUsers