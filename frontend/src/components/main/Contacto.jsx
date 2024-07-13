// src/components/RedesSociales.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Estilos.css';

const Contacto = () => {
  return (
    <div className="redes-sociales-container">
      <a href="https://google.com" className="icono" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://facebook.com" className="icono" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/elireyna_/" className="icono" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};

export default Contacto;
