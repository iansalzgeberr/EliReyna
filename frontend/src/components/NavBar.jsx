import React from 'react';
import logo from '../../images/logo.png'; // Asegúrate de poner la ruta correcta a tu logo
import './Estilos.css'; // Importa el archivo CSS

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="#" style={{ paddingLeft: '20px' }}>
        <img alt="Logo" src={logo} width="100" height="60" className="d-inline-block align-top" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-dark nav-underline" href="#inicio"><strong>Inicio</strong></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark nav-underline" href="#planes"><strong>Planes</strong></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark nav-underline" href="#sobre-mi"><strong>Sobre Mi</strong></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark nav-underline" href="#testimonios"><strong>Testimonios</strong></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark nav-underline" href="#contacto"><strong>Contacto</strong></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
