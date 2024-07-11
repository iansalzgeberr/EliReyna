// src/components/main/Popup.jsx
import React from 'react';
import './Estilos.css';
import logo from '../../../images/logo.png'; // Asegúrate de usar la ruta correcta al logo

const Popup = ({ title, content, imageSrc, onClose, onAcquirePlan }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-header">
                    <img src={logo} alt="Logo" className="popup-logo" />
                    <h2><strong>{title}</strong></h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="popup-body">
                    <p><strong>{content}</strong></p>
                    <div className="popup-image">
                        <img src={imageSrc} alt={title} />
                    </div>
                </div>
                <button className="popup-button" onClick={onAcquirePlan}>Adquiere tu plan</button>
            </div>
        </div>
    );
};

export default Popup;
