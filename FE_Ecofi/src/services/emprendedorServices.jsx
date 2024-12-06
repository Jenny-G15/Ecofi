export async function getEmprendedores() {
    try {
        const response = await fetch('http://localhost:3000/emprendedores', {
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


// export async function PostUsers
//       (Nombre_Usuario,
//         Apellido_Usuario,
//         Cedula,Email_Usuario,
//         Contraseña_Usuario,
//         Telefono_Usuario,
//         Bicolones) {
//     try {
//       const userData = {
//         Nombre_Usuario,
//         Apellido_Usuario,
//         Cedula,
//         Email_Usuario,
//         Contraseña_Usuario,
//         Telefono_Usuario, 
//         Bicolones, 
//       };
//       const response = await fetch("http://localhost:3000/usuarios/register", {
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