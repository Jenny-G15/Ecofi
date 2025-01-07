import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import "../styles/Footer.css";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <div id="footer-container" className="footer">
        <div id="footer-contact" className="footer-contact-section">
          <h2>Contacto</h2>
          <form id="footer-contact-form" className="footer-contact-form" onSubmit={handleSubmit}>
            <label htmlFor="footer-name">Nombre:</label>
            <input 
              id="footer-name"
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Tu nombre" 
              required 
            />

            <label htmlFor="footer-email">Email:</label>
            <input 
              id="footer-email"
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Tu correo" 
              required 
            />

            <label htmlFor="footer-message">Mensaje:</label>
            <textarea 
              id="footer-message"
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Escribe tu mensaje" 
              required
            ></textarea>

            <button id="footer-submit" type="submit">Enviar</button>
          </form>
        </div>

        <div id="footer-social" className="footer-social-section">
          <h2>Síguenos</h2>
          <p><a href="#"><FaFacebookSquare /> Facebook</a></p>
          <p><a href="#"><FaInstagramSquare /> Instagram</a></p>
          <p><a href="#"><FaWhatsapp /> WhatsApp</a></p>
        </div>

        <div id="footer-location" className="footer-location-section">
          <h2>Ubicación</h2>
          <p>Puntarenas, Puntarenas, Costa Rica</p>
        </div>
          
      </div>
      <div id="footer-bottom" className="footer-bottom"> 
      
        <p>&copy; {new Date().getFullYear()} Ecofi. Todos los derechos reservados.</p>
      </div>
    </>
  );
};

export default Footer;
