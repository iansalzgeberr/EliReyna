import React, { useState } from 'react';
import Popup from './Popup';
import './Estilos.css';

const Planes = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: 'Aumento de masa muscular',
      price: '15.000',
      description: 'Superá tus límites',
      content: 'Nuestro plan para aumentar masa muscular está diseñado para ayudarte a ganar músculo de manera efectiva y segura. Este programa combina entrenamiento de resistencia progresivo con una nutrición adecuada para maximizar tus resultados.',
      imageSrc: '../../../images/razones1.jpg' // Reemplaza con la ruta correcta a tu imagen
    },
    {
      title: 'Descenso de peso',
      price: '20.000',
      description: 'Superá tus límites',
      content: 'Contenido del Plan de Descenso de peso...',
      imageSrc: '../../../images/razones2.jpeg'
    },
    {
      title: 'Personalizado',
      price: '25.000',
      description: 'Superá tus límites',
      content: 'Contenido del Plan Personalizado...',
      imageSrc: '/path/to/image3.jpg'
    },
    {
      title: 'Tonificación',
      price: '25.000',
      description: 'Superá tus límites',
      content: 'Contenido del Plan de Tonificación...',
      imageSrc: '/path/to/image4.jpg'
    },
    {
      title: 'Entrenamiento en casa',
      price: '10.000',
      description: 'Superá tus límites',
      content: 'Contenido del Plan de Entrenamiento en casa...',
      imageSrc: '/path/to/image5.jpg'
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
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
              <div className="card-body d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #1c1c1c, #000000)', borderRadius: '10px' }}>
                <div className="text-left">
                  <h5 className="card-title mb-3" style={{ fontWeight: 'bold' }}>{plan.title}</h5>
                  <h6 className="card-subtitle mb-3" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>${plan.price}</h6>
                  <p className="card-text" style={{ color: '#888888' }}>{plan.description}</p>
                </div>
                <button className="btn btn-outline-warning mt-3" style={{ color: '#FFFFFF', borderColor: '#FFC605' }} onClick={() => handleSelectPlan(plan)}>Select Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedPlan !== null && (
        <Popup
          title={selectedPlan.title}
          content={selectedPlan.content}
          imageSrc={selectedPlan.imageSrc}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Planes;
