import React from "react";
import "./Estilos.css";


const SobreMi = () => {
    const imageUrl = 'https://img.freepik.com/foto-gratis/hombre-tiro-completo-haciendo-burpees-entrenador_23-2149445904.jpg';

    return (
        <div className="sobre-mi-container">
            <div className="title-container">
                <h2 className="title">
                    Sobre <span className="highlighted-text">Mí</span>
                </h2>
            </div>
            <div className="content-container">
                <div className="image-container">
                    <img
                        src={imageUrl}
                        alt="Entrenadora"
                        style={{ width: "100%", borderRadius: "10px" }}
                    />
                </div>
                <div style={{ backgroundColor: "#000", flex: 1 }}>
                    <div className="text-container">
                        <p>
                            ¡Hola! Soy Eli Reyna, entrenadora de fitness certificada. Mi
                            pasión es ayudarte a alcanzar tus metas de salud y bienestar a
                            través de planes de entrenamiento personalizados. Con años de
                            experiencia, te guiaré hacia un estilo de vida activo y saludable,
                            no solo físicamente, sino también emocionalmente. ¡Espero ser tu
                            compañera en este emocionante viaje hacia una vida más saludable!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SobreMi;