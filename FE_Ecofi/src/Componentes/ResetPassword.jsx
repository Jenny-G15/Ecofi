import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 



const ResetPassword = () => {

    const { token } = useParams(); 
    const [nuevaContraseña, setNuevaContraseña] = useState('');
    const [mensaje, setMensaje] = useState('');

    const restablecerContrasena = async (e) => {
        e.preventDefault();

        try {
            const respuesta = await fetch('http://localhost:3000/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, nuevaContraseña }),
            });

            const datos = await respuesta.json();

            if (respuesta.ok) {

                setMensaje('Contraseña restablecida con éxito. Ahora puedes iniciar sesión.');
            } else {
                setMensaje(datos.message || 'Ocurrió un error al restablecer la contraseña.');
            }
        } catch (error) {
            console.error('Error al restablecer la contraseña:', error);
            setMensaje('Error al procesar la solicitud.');
        }
    };

    return (
        <div>
            <h2>Restablecer Contraseña</h2>
            <form onSubmit={restablecerContrasena}>
                <label htmlFor="nuevaContraseña">Nueva Contraseña</label>
                <input
                    type="password"
                    id="nuevaContraseña"
                    value={nuevaContraseña}
                    onChange={(e) => setNuevaContraseña(e.target.value)}
                    placeholder="Ingresa tu nueva contraseña"
                    required
                />
                <button type="submit">Restablecer Contraseña</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default ResetPassword;
