// import React, { useState } from 'react';

// const ResetPassword = ({ codigoGenerado }) => {
//     const [codigoIngresado, setCodigoIngresado] = useState('');
//     const [nuevaContraseña, setNuevaContraseña] = useState('');
//     const [mensaje, setMensaje] = useState('');

//     const resetearContraseña = (e) => {
//         e.preventDefault();

//         if (codigoIngresado !== codigoGenerado) {
//             setMensaje('Código incorrecto.');
//             return;
//         }

//         setMensaje('Contraseña actualizada con éxito.');
//         // Aquí puedes enviar la nueva contraseña al backend si es necesario
//     };

//     return (
//         <div>
//             <h2>Restablecer Contraseña</h2>
//             <form onSubmit={resetearContraseña}>
//                 <label htmlFor="codigo">Código de Verificación</label>
//                 <input
//                     type="text"
//                     id="codigo"
//                     value={codigoIngresado}
//                     onChange={(e) => setCodigoIngresado(e.target.value)}
//                     required
//                 />
//                 <label htmlFor="nuevaContraseña">Nueva Contraseña</label>
//                 <input
//                     type="password"
//                     id="nuevaContraseña"
//                     value={nuevaContraseña}
//                     onChange={(e) => setNuevaContraseña(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Restablecer</button>
//             </form>
//             {mensaje && <p>{mensaje}</p>}
//         </div>
//     );
// };

// export default ResetPassword;
