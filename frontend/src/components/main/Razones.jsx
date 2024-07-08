import React from "react";
import "./Estilos.css";

const Razones = () => {
    //const image1Url = "https://i.blogs.es/119852/1366_2000/1366_2000.jpeg";
    //const image2Url = "https://i.blogs.es/119852/1366_2000/1366_2000.jpeg";

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
            <div className="razones-images">
            {/* 
                <img src={image1Url} alt="Entrenamiento 1" className="razones-image" />
                <img src={image2Url} alt="Entrenamiento 2" className="razones-image" />
            */}
            </div>
        </div>
        </div>
    );
};

export default Razones;
