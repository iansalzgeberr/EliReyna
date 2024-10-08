import React from 'react';
import './Estilos.css'; // Asegúrate de crear este archivo para los estilos adicionales

const Inicio = () => {
  // Mensaje que quieres enviar por WhatsApp
  const mensaje = "¡Hola! Estoy interesado en tus clases personalizadas, me podrías dar más información?";

  return (
    <div className="inicio-container">
      <div className="content text-center p-5 rounded">
        <h1 className="title mb-4">Transforma tu cuerpo</h1>
        <p className="subtitle mb-4">Descubre tu mejor versión con nuestros recursos para tu cuerpo ideal</p>
        <div className="d-flex justify-content-center">
          <a href="#planes" className="btn btn-warning btn-lg btn-spacing">Ver Planes</a>
          {/* Cambia aquí el número de WhatsApp con el mensaje */}
          <a
            href={`https://wa.me/+5493517530081?text=${encodeURIComponent(mensaje)}`}
            className="btn btn-warning btn-lg btn-spacing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clases personalizadas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
