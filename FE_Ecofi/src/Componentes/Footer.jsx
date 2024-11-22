// src/components/Footer.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  // State to handle form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // Track status of the form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email.js configuration
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';

    // Sending email with Email.js
    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form after success
        },
        (error) => {
          console.error(error.text);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputContainerStyle}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              style={{ ...inputStyle, height: '100px' }}
            />
          </div>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </footer>
  );
};


export default Footer;
