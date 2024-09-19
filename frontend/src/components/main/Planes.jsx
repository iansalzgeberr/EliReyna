// src/components/main/Planes.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';

const Planes = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    {
      title: 'Aumento masa muscular',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Desarrollo y aplicacion de un programa de entrenamiento para mejorar y aumentar tu masa muscular. Viendo los progresdos dia a dia y ayudandote a tener mejores ganancias musculares.',
      imageSrc: '../../../images/razones1.jpg' // Reemplaza con la ruta correcta a tu imagen
    },
    {
      title: 'Descenso de peso',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Programa Descenso de Peso especialmente enfocado para que logres el maximo resultado posible de forma armonica y sostenible, sustentado por una larga trayectoria de exito en programas eficaces.',
      imageSrc: '../../../images/razones2.jpeg'
    },
    {
      title: 'Entrenamiento En Casa',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Plan de Entrenamiento planificado para que entrenes como en tu casa. En base a tus objetivos planificamos tu rutina diaria acorde a tu espacio y elementos.',
      imageSrc: '/path/to/image3.jpg'
    },
    {
      title: 'Adulto mayores',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Ejercicios para realizar desde casa, con elementos del hogar, que nos ayudaran a mantener la elasticidad y la salud de nuestros musculos.',
      imageSrc: '/path/to/image5.jpg'
    },
    {
      title: 'Plan adaptado a deportistas',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Haces Algun deporte en especifico? Planifico la rutina para mejorar tu rendimiento y llevarlo a un mejor nivel. Evaluaciones antes y durante la planificacion.',
      imageSrc: '/path/to/image6.jpg'
    },
    {
      title: 'R.P.G (reeducación postural global) + aumento de masa muscular',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Programa de entrenamiento basado en la posibilidad de adecuar el entrenamiento a cada persona y a su problematica especifica, RPG puede ser aplicada en un gran numero de casos siendo una herramienta eficaz en el tratamiento y corrección de alteraciones postulares, rigidez corporal y situaciones dolor. Agregando a este programa una planificacion de aumento de masa muscular completamente especifico para vos.',
      imageSrc: '/path/to/image7.jpg'
    }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleAcquirePlan = () => {
    navigate('/formulario');
  };

  const handleClosePopup = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="container text-left my-5" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
      <h2 className="mb-4">Suscribite a nuestros <span style={{ color: '#FFC605' }}>Planes</span></h2>
      <div className="row">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-white h-100" style={{ background: 'none', border: 'none' }}>
              <div className="card-body d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(90deg, #1c1c1c, #000000)', borderRadius: '10px' }}>
                <div className="text-left">
                  <h5 className="card-title mb-3" style={{ fontWeight: 'bold' }}>{plan.title}</h5>
                  <h6 className="card-subtitle mb-3" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>${plan.price}</h6>
                  <p className="card-text" style={{ color: '#888888' }}>{plan.description}</p>
                </div>
                <button className="btn btn-outline-warning mt-3" style={{ color: '#FFFFFF', borderColor: '#FFC605' }} onClick={() => 
                handleSelectPlan(plan)}>Select Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <Popup
          title={selectedPlan.title}
          content={selectedPlan.content}
          imageSrc={selectedPlan.imageSrc}
          onClose={handleClosePopup}
          onAcquirePlan={handleAcquirePlan} // Añadir esta prop para manejar la redirección
        />
      )}
    </div>
  );
};

export default Planes;