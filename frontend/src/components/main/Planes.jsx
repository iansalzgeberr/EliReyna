// src/components/main/Planes.jsx
import React from 'react';

const Planes = () => {
  return (
    <div className="container text-center my-5" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
      <h2 className="mb-4">Suscribite a nuestros <span style={{ color: '#FFC605' }}>Planes</span></h2>
      <div className="row">
        {[
          { title: 'Aumento de masa muscular', price: '15.000', description: 'Superá tus límites' },
          { title: 'Descenso de peso', price: '20.000', description: 'Superá tus límites' },
          { title: 'Personalizado', price: '25.000', description: 'Superá tus límites' },
          { title: 'Tonificación', price: '25.000', description: 'Superá tus límites' },
          { title: 'Entrenamiento en casa', price: '10.000', description: 'Superá tus límites' },
        ].map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card bg-dark text-white">
              <div className="card-body" style={{ background: 'linear-gradient(#393939, #000000)' }}>
                <h5 className="card-title text-left mb-0">{plan.title}</h5>
                <h6 className="card-subtitle mb-2">{`$${plan.price}`}</h6>
                <p className="card-text">{plan.description}</p>
                <button className="btn btn-outline-warning" style={{ backgroundColor: '#393939', borderColor: '#FFC605' }}>Select Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planes;
