import React from 'react';
import './Estilos.css';

const Testimonios = () => {
  const testimoniosData = [
    { usuario: '@nombre_usuario', texto: '“Cuando llegue a Legion Fitness, me senti muy bien, fui motivada desde el dia uno. Eli es una gran profesional, muy dedicada a su trabajo y sobre todo siempre con muy buena onda, la verdad estoy agradecida ya que gracias a ella aprendi a entrenar y vi muy buenos resultados”' },
    { usuario: '@nombre_usuario', texto: '“Recomiendo muchisimo su trabajo y aseguro mucho exito realizando sus rutinas.”' },
    { usuario: '@nombre_usuario', texto: '“Lucre No solo es una Excelente profesional sino que también es una gran persona, siempre mostrando amor, paciencia y dedicación por lo que hace. Desde que comencé a entrenar...”' },
    { usuario: '@nombre_usuario', texto: '“Una entrenadora excelente!!! A tu lado logré llevar mi físico y cabeza a una mejor versión... aprendí mucho y sobre todo admiro profundamente tu trabajo”' }
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