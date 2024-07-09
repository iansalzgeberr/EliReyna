import React from 'react';
import './Estilos.css';

const Popup = ({ title, content, imageSrc, onClose }) => {
    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <button className="close-button" onClick={onClose}>X</button>
            <h2>{title}</h2>
            <div className="popup-body">
            <div className="popup-text">
                <p>{content}</p>
                <button className="popup-button">Adquiere tu plan</button>
            </div>
            <div className="popup-image">
                <img src={imageSrc} alt={title} />
            </div>
            </div>
        </div>
        </div>
    );
};

export default Popup;
