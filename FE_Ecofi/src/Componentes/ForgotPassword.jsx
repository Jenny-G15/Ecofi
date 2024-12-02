import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ForgotPassword = ({ setCodigoGenerado }) => {
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const enviarCorreo = async (e) => {
        e.preventDefault();

        // Generar código de verificación
        const codigo = Math.floor(100000 + Math.random() * 900000).toString();
        setCodigoGenerado(codigo);

        // Parámetros para EmailJS
        const templateParams = {
            to_email: email,
            codigo: codigo,
        };

        try {
            await emailjs.send(
                'service_56xi5wh', 
                'template_73xxx39', 
                templateParams,
                ' rV7wVdf0tWzRA66hT' 
            );

            setMensaje('Código enviado a tu correo.');
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            setMensaje('Error al enviar el correo.');
        }
    };

    return (
        <div>
            <h2>Recuperar Contraseña</h2>
            <form onSubmit={enviarCorreo}>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Enviar código</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default ForgotPassword;
