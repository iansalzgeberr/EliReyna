// src/components/RedesSociales.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Estilos.css';

const Contacto = () => {
  return (
    <div className="redes-sociales-container">
      <a href="https://wa.me/+5493517530081" className="icono" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.instagram.com/elireyna_/" className="icono" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};

export default Contacto;
