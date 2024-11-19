import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import "../styles/inicio.css";
import Mapa from './Mapa';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
      [name]: value  //investigar
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS
    //https://www.npmjs.com/package/emailjs
    //xcs4TCUIUkEEiDpMZ ID emailJs

    emailjs.send("service_456is9f", "template_okycsjp", formData, "xcs4TCUIUkEEiDpMZ")
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        resetForm();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
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
    <footer className="footer" id='contacto'>
      <div className="footer-content">
        
        <div className="footer-contact">
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Mensaje:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="footer-location">
          <h2>Ubicación</h2>
          <p>Puntarenas, Puntarenas, Costa Rica</p>
          <Mapa/>
        </div>
        <div className="footer-social">
          <h2>Síguenos</h2>
          {/* Social media links */}
          <a href="" target='_blank' rel='noopener noreferrer' className='icon-p' id='Facebook'>
              <FaFacebookSquare className='facebook-icon'/>
              <span className='fa-icon-text'>Facebook</span>
          </a>
          <a href="" target='_blank' rel='noopener noreferrer' className='icon-p' id='Instagram'>
              <FaInstagramSquare className='Instagram-icon'/>
              <span className='ins-icon-text'>Instagram</span>
          </a>
          <a href="https://wa.me/+50600000000" target='_blank' rel='noopener noreferrer' className='icon-p' id='Whatsapp'>
              <FaWhatsapp className='Whatsapp-icon'/>
              <span className='What-icon-text'>Whatsapp</span>
          </a>
          <p>Telefonos: +506 000-0000 <br />
             Correo: ecofi@gmail.com
          </p>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ecofi. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
