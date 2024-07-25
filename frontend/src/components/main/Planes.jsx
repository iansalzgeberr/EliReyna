import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import './Estilos.css'; // Importa el archivo de estilos

const Planes = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    {
      title: 'Aumento masa muscular',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Nuestro plan de aumento de masa muscular te ayudará a ganar fuerza y tamaño muscular con rutinas de entrenamiento intensas y una nutrición adecuada.',
      imageSrc: '../../../images/razones1.jpg' // Reemplaza con la ruta correcta a tu imagen
    },
    {
      title: 'Descenso de peso',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Este plan está diseñado para ayudarte a perder peso de manera saludable mediante una combinación de ejercicios cardiovasculares y una dieta balanceada.',
      imageSrc: '../../../images/razones2.jpeg'
    },
    {
      title: 'Tonificación',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Nuestro plan de tonificación se centra en definir y fortalecer tus músculos, dándote una apariencia más esculpida y tonificada.',
      imageSrc: '/path/to/image3.jpg'
    },
    {
      title: 'Entrenamiento en casa',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Este plan te permite entrenar desde la comodidad de tu hogar con rutinas efectivas que no requieren equipo especializado.',
      imageSrc: '/path/to/image4.jpg'
    },
    {
      title: 'Adulto mayores',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Nuestro plan para adultos mayores está diseñado para mejorar la movilidad, la fuerza y la salud en general, adaptado a las necesidades específicas de esta etapa de la vida.',
      imageSrc: '/path/to/image5.jpg'
    },
    {
      title: 'Plan adaptado a deportistas',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Este plan está diseñado para deportistas que buscan mejorar su rendimiento en su disciplina específica, con entrenamientos y nutrición adaptados a sus necesidades.',
      imageSrc: '/path/to/image6.jpg'
    },
    {
      title: 'R.P.G (reeducación postural global) + aumento de masa muscular',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Combina la reeducación postural global con un plan de aumento de masa muscular para corregir tu postura mientras ganas fuerza y tamaño muscular.',
      imageSrc: '/path/to/image7.jpg'
    },
    {
      title: 'R.P.G (reeducación postural global) + tonificación',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Este plan combina la reeducación postural global con ejercicios de tonificación para mejorar tu postura y definir tu musculatura.',
      imageSrc: '/path/to/image8.jpg'
    },
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
    <div className="planes-container">
      <h2 className="planes-title">Suscribite a nuestros <span className="highlight">Planes</span></h2>
      <div className="planes-row">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className="card-body">
              <h5 className="card-title">{plan.title}</h5>
              <h6 className="card-subtitle">${plan.price}</h6>
              <p className="card-text">{plan.description}</p>
              <button className="btn btn-outline-warning" onClick={() => handleSelectPlan(plan)}>Select Plan</button>
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
          onAcquirePlan={handleAcquirePlan}
        />
      )}
    </div>
  );
};

export default Planes;
