import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');


    
    const CorreoRecuperacion = async (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        try {
            const respuesta = await fetch('http://localhost:3000/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Email_Usuario: email }), // Envia el correo al backend
            });

            const datos = await respuesta.json();

            if (respuesta.ok) {
                setMensaje('Correo de recuperación enviado con éxito. Revisa tu bandeja de entrada.');
            } else {
                setMensaje(datos.message || 'Ocurrió un error al enviar el correo.');
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            setMensaje('Error al procesar la solicitud.');
        }
    };

    return (
        <div>
            <h2>Recuperar Contraseña</h2>
            <form onSubmit={CorreoRecuperacion}>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu correo"
                    required
                />
                <button type="submit">Enviar correo</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default ForgotPassword;
