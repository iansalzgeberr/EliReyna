// src/components/main/Planes.jsx
import React from 'react';

const Planes = () => {
  return (
    <div className="container text-left my-5" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
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
            <div className="card text-white h-100" style={{ background: 'none', border: 'none' }}>
              <div className="card-body d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #1c1c1c, #000000)', borderRadius: '10px' }}>
                <div className="text-left">
                  <h5 className="card-title mb-3" style={{ fontWeight: 'bold' }}>{plan.title}</h5>
                  <h6 className="card-subtitle mb-3" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>${plan.price}</h6>
                  <p className="card-text" style={{ color: '#888888' }}>{plan.description}</p>
                </div>
                <button className="btn btn-outline-warning mt-3" style={{ color: '#FFFFFF', borderColor: '#FFC605' }}>Select Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planes;
