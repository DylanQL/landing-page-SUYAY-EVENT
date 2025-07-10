import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-background"></div>

      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            ¿Listo para vivir experiencias inolvidables?
          </h2>
          
          <p className="cta-description">
            Únete a nuestra comunidad y descubre los mejores eventos de tu ciudad.
            Ya sea que quieras asistir o crear tu propio evento, estamos aquí para ayudarte.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-primary-button pulse">
              Explorar eventos
            </button>
            
            <button className="cta-secondary-button">
              Crear evento
            </button>
          </div>
          
          <p className="cta-stats">
            Más de 10,000 eventos creados y 250,000 asistentes satisfechos
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
