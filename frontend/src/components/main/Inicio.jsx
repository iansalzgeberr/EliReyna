// src/components/main/Inicio.jsx
import React from 'react';
import './Estilos.css'; // Asegúrate de crear este archivo para los estilos adicionales
import backgroundImage from '../../../images/background.jpg'; // Asegúrate de poner la ruta correcta a tu imagen

const Inicio = () => {
  return (
    <div className="inicio-container d-flex justify-content-center align-items-center">
      <div className="content text-center p-5 rounded">
        <h1 className="title mb-4">Transforma tu cuerpo</h1>
        <p className="subtitle mb-4">Descubre tu mejor versión con nuestros recursos para tu cuerpo ideal</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#comenzar" className="btn btn-warning btn-lg">Comenzar</a>
          <a href="#planes" className="btn btn-outline-warning btn-lg">Ver planes</a>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
