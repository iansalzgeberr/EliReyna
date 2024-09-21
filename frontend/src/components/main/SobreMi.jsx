// src/components/main/SobreMi.jsx
import React from "react";
import "./Estilos.css";

// Importación de la imagen local
import Eli9 from '../../../images/Eli9.jpg';

const SobreMi = () => {
    return (
        <div className="sobre-mi-container">
            <div className="title-container">
                <h2 className="title">
                    Sobre <span className="highlighted-text">Mí</span>
                </h2>
            </div>
            <div className="content-container">
                <div className="image-container">
                    {/* Usar la imagen importada directamente */}
                    <img
                        src={Eli9}
                        alt="Entrenadora"
                        style={{ width: "100%", borderRadius: "10px" }}
                    />
                </div>
                <div className="text-container">
                    <p>
                        ¡Hola! Soy Eli Reyna, entrenadora de fitness certificada. Mi
                        pasión es ayudarte a alcanzar tus metas de salud y bienestar a
                        través de planes de entrenamiento personalizados.
                    </p>
                    <p>
                        Con años de experiencia, te guiaré hacia un estilo de vida activo y saludable,
                        no solo físicamente, sino también emocionalmente.
                    </p>
                    <p className="ultimo-parrafo">
                        ¡Espero ser tu compañera en este emocionante viaje hacia una vida más saludable!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SobreMi;