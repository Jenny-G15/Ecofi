import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import "../styles/Principal.css";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send("service_456is9f", "template_okycsjp", formData, "xcs4TCUIUkEEiDpMZ")
      .then((response) => {
        console.log('Email enviado con éxito!', response.status, response.text);
        resetForm();
      })
      .catch((error) => {
        console.error('Error al enviar el email:', error);
      });
  };

  // Reiniciar formulario
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <div className="footer">
        <div className="contact-section">
          <h2>Contacto</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Tu nombre" 
              required 
            />

            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Tu correo" 
              required 
            />

            <label>Mensaje:</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Escribe tu mensaje" 
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className="social-section">
          <h2>Síguenos</h2>
          <p><a href="#"><FaFacebookSquare /> Facebook</a></p>
          <p><a href="#"><FaInstagramSquare /> Instagram</a></p>
          <p><a href="#"><FaWhatsapp /> WhatsApp</a></p>
        </div>

        <div className="location-section">
          <h2>Ubicación</h2>
          <p>Puntarenas, Puntarenas, Costa Rica</p>
        </div>
      </div>
      
      <div className="footer-bottom"> 
        <hr />
        <p>&copy; {new Date().getFullYear()} Ecofi. Todos los derechos reservados.</p>
      </div>
    </>
  );
};

export default Footer;
