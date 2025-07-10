import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#FF1D8E">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Busca eventos',
      description: 'Explora nuestra amplia variedad de eventos por categoría, ubicación o fecha'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#8E24AA">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Selecciona tu favorito',
      description: 'Revisa los detalles, fotos, ubicaciones y opiniones de otros asistentes'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#FF77B1">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Reserva y paga',
      description: 'Asegura tu lugar con nuestro sistema de pago seguro y rápido'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#FF1D8E">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '¡Disfruta!',
      description: 'Vive la experiencia y comparte tus momentos en nuestra comunidad'
    }
  ];

  return (
    <section className="how-section" id="como-funciona">
      <div className="how-container">
        <div className="how-header">
          <span className="how-tag">Proceso</span>
          <h2 className="how-title">Cómo funciona</h2>
          <p className="how-description">
            Encontrar y disfrutar de tus eventos favoritos nunca ha sido tan sencillo.
            Sigue estos simples pasos para comenzar tu próxima aventura.
          </p>
        </div>

        <div className="steps-container">
          {/* Timeline connector visible only on desktop */}
          <div className="timeline-connector"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon-container">
                {step.icon}
                <div className="step-number">{index + 1}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <button className="how-button">
            Comenzar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
