// src/components/main/Planes.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';

// Importación de las imágenes
import Eli2 from '../../../images/Eli2.jpg';
import Eli3 from '../../../images/Eli3.jpg';
import Eli4 from '../../../images/Eli4.jpg';
import Eli5 from '../../../images/Eli5.jpg';
import Eli6 from '../../../images/Eli6.jpg';
import Eli7 from '../../../images/Eli7.jpg';

const Planes = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    {
      title: 'Aumento masa muscular',
      description: 'Superá tus límites',
      content: 'Desarrollo y aplicación de un programa de entrenamiento para mejorar y aumentar tu masa muscular, viendo los progresos día a día y ayudándote a tener mejores ganancias musculares.',
      imageSrc: Eli2
    },
    {
      title: 'Descenso de peso',
      description: 'Superá tus límites',
      content: 'Programa Descenso de Peso especialmente enfocado para que logres el maximo resultado posible de forma armonica y sostenible, sustentado por una larga trayectoria de exito en programas eficaces.',
      imageSrc: Eli3
    },
    {
      title: 'Entrenamiento En Casa',
      description: 'Superá tus límites',
      content: 'Plan de Entrenamiento planificado para que entrenes como en tu casa. En base a tus objetivos planificamos tu rutina diaria acorde a tu espacio y elementos.',
      imageSrc: Eli4
    },
    {
      title: 'Adulto mayores',
      description: 'Superá tus límites',
      content: 'Ejercicios para realizar desde casa, con elementos del hogar, que nos ayudaran a mantener la elasticidad y la salud de nuestros musculos.',
      imageSrc: Eli5
    },
    {
      title: 'Plan adaptado a deportistas',
      description: 'Superá tus límites',
      content: 'Haces Algun deporte en especifico? Planifico la rutina para mejorar tu rendimiento y llevarlo a un mejor nivel. Evaluaciones antes y durante la planificacion.',
      imageSrc: Eli6
    },
    {
      title: 'R.P.G (reeducación postural global) + aumento de masa muscular',
      description: 'Superá tus límites',
      content: 'Programa de entrenamiento basado en la posibilidad de adecuar el entrenamiento a cada persona y a su problematica especifica, RPG puede ser aplicada en un gran numero de casos siendo una herramienta eficaz en el tratamiento y corrección de alteraciones postulares, rigidez corporal y situaciones dolor. Agregando a este programa una planificacion de aumento de masa muscular completamente especifico para vos.',
      imageSrc: Eli7
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
      <h2 className="mb-4">
        Suscribite a nuestros <span style={{ color: '#F6BDD0' }}>Planes
      </span></h2>
      <div className="row">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-white h-100" style={{ background: 'none', border: 'none' }}>
              <div className="card-body d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(90deg, #1c1c1c, #000000)', borderRadius: '10px' }}>
                <div className="text-left">
                  <h5 className="card-title mb-3" style={{ fontWeight: 'bold' }}>{plan.title}</h5>
                  <p className="card-text" style={{ color: '#888888' }}>{plan.description}</p>
                </div>
                <button className="btn mt-3" style={{ color: '#FFFFFF', borderColor: '#F6BDD0' }} onClick={() => handleSelectPlan(plan)}>Seleccionar Plan</button>
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
          onAcquirePlan={handleAcquirePlan} // Maneja la redirección
        />
      )}
    </div>
  );
};

export default Planes;