// async function PostUsers(Nombre_Usuario,Apellido_Usuario,Cedula,Email_Usuario,Contraseña_Usuario,Telefono_Usuario) {
//     try {
//       const userData = {
//         Nombre_Usuario,
//         Apellido_Usuario,
//         Cedula,
//         Email_Usuario,
//         Contraseña_Usuario,
//         Telefono_Usuario
//       };
//       const response = await fetch("http://localhost:3000/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });
//       return await response.json();
//     } catch (error) {
//       console.error("Error en el servidor", error);
//       throw error;
//     }
// }

// export default PostUsers