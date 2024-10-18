import React from 'react';
import './Estilos.css';

const Testimonios = () => {
  const testimoniosData = [
    { usuario: '@fquintana19', texto: '“Cuando llegue a Legion Fitness, me senti muy bien, fui motivada desde el dia uno. Eli es una gran profesional, muy dedicada a su trabajo y sobre todo siempre con muy buena onda, la verdad estoy agradecida ya que gracias a ella aprendi a entrenar y vi muy buenos resultados”' },
    { usuario: '@tini_veyrand', texto: '“Eli representa un reto, es la persona que te motiva y te guía a que puedas seguir mejorando y evolucionado en el entrenamiento para cumplir tus objetivos! Excelente persona y profesional, además de amiga.”' },
    { usuario: '@ignacio.dellgado', texto: '“Eli es una excelente entrenadora, me enseñó a corregir técnica para lograr mejores resultados además de ser una ayuda en cuestiones diariarias que hacen al logro de los objetivos es una persona con paciencia y dedicación  por su trabajo.”' },
    { usuario: '@yaninaa1259', texto: '“Una entrenadora excelente!!! A tu lado logré llevar mi físico y cabeza a una mejor versión... aprendí mucho y sobre todo admiro profundamente tu trabajo”' }
  ];

  return (
    <div className="testimonios-container">
      <h2>Nuestros <span className="highlight">Testimonios</span></h2>
      <div className="testimonios-grid">
        {testimoniosData.map((testimonio, index) => (
          <div key={index} className="testimonio">
            <p className="usuario">{testimonio.usuario}</p>
            <p>{testimonio.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;