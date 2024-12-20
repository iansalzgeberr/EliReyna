// src/components/main/Nutri.jsx
import React from "react";
import "./Estilos.css";

// Importación de la imagen local
import Nutricionista from '../../../images/Nutricionista.jpg';

const Nutri = () => {
    return (
        <div className="nutri-container">
            <div className="nutri-text">
                <h2 className="nutri-text-sub2">
                    Trabajando en <span className="highlight">Conjunto</span> Con La Licenciada En Nutricion:
                    <br />
                    Josela Bottarelli
                </h2>
                <div className="social-media">
                    <ul className="social-list">
                        <li>
                            <a className="instagram" href="https://www.instagram.com/joselabottarelli/channel/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                                <span className="josela"><strong>@joselabottarelli</strong></span>
                            </a>
                        </li>
                        <li>
                            <a className="phone" href="tel:+5491121854915">
                                <i className="fas fa-phone-alt"></i>
                                <span><strong>+54 9 11 2185-4915</strong></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nutri-image">
                {/* Usar la imagen importada directamente */}
            </div>
        </div>
    );
};

export default Nutri;
