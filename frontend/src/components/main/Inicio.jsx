import React from 'react';
import './Estilos.css'; // Asegúrate de crear este archivo para los estilos adicionales

const Inicio = () => {
  // Mensaje que quieres enviar por WhatsApp
  const mensaje = "¡Hola! Estoy interesado en tus clases personalizadas, me podrías dar más información?";

  return (
    <div className="inicio-container">
      <div className="content text-center p-5 rounded">
        <h1 className="title mb-4">Transforma tu fuerza femenina</h1>
        <p className="subtitle mb-4">Descubre la mejor versión de ti con nuestros recursos diseñados para mujeres</p>
        <div className="d-flex justify-content-center">
          <a href="#planes" className="custom-btn btn-lg btn-spacing">Ver Planes</a>
          <a
            href={`https://wa.me/+5493517530081?text=${encodeURIComponent(mensaje)}`}
            className="custom-btn btn-lg btn-spacing"
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
