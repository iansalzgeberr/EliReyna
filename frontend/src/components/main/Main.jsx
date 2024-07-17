import React, { useState } from 'react';
import Planes from './Planes';
import SobreMi from './SobreMi';
import Testimonios from './Testimonios';
import Razones from './Razones';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Inicio from './Inicio';
import Contacto from './Contacto';
import Nutri from './Nutri';


const Main = () => {
  return (
    <div>
      <NavBar />
      <section id="inicio">
        <Inicio />
      </section>
      <section id="planes">
        <Planes />
      </section>
      <section id="sobre-mi">
        <SobreMi/>
      </section>
      <section id="razones">
        <Razones />
      </section>
      <section id="nutri">
        <Nutri />
      </section>
      <section id="testimonios">
        <Testimonios />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
      <Footer />
    </div>
  );
};

export default Main;
