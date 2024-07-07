import React from 'react';
// import logo from './path/to/logo.png'; // Asegúrate de poner la ruta correcta a tu logo

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img alt="Logo" width="30" height="30" className="d-inline-block align-top" />
        Empresa
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#inicio">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#planes">Planes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sobre-mi">Sobre Mi</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testimonios">Testimonios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
