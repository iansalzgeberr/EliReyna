import React from "react";
import "./Estilos.css";

const Nutri = () => {
    return (
        <div className="nutri-container">
            <div className="nutri-text">
                <h2>
                    Trabajando en <span className="highlight">Conjunto</span> Con:
                    <br />
                    Nombre Nutricionista
                </h2>
                <div className="social-media">
                    <div className="instagram">
                        <i className="fab fa-instagram"></i>
                        <span><strong>@juan_hernandez</strong></span>
                    </div>
                    <div className="phone">
                        <i className="fas fa-phone-alt"></i>
                        <span><strong>351665492</strong></span>
                    </div>
                </div>
            </div>
            <div className="nutri-image">
                <img src="../../../images/NUTRICIONISTA.png" alt="Nutricionista" />
            </div>
        </div>
    );
};

export default Nutri;
