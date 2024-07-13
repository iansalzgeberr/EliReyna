import React from "react";
import "./Estilos.css";

const Razones = () => {

    return (
        <div className="razones-container">
        <h2 className="razones-title">
            ¿Por qué unirte a planes de <span className="highlight">Eli Reyna</span>?
        </h2>
        <div className="razones-content">
            <div className="razones-card">
            <div className="razones-text">
                <ul>
                <li><strong>Mejores planes de entrenamiento</strong></li>
                <li><strong>Experiencia de más de 10 años</strong></li>
                <li><strong>Videos para técnica de ejercicios</strong></li>
                <li><strong>Asistencia diaria</strong></li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Razones;
