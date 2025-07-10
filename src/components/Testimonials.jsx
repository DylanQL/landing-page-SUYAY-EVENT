import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

// Import CSS for react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'Asistente Frecuente',
      image: 'https://i.pravatar.cc/150?img=11',
      quote: 'Suyay Events ha transformado completamente mi vida social. He conocido amigos increíbles y vivido experiencias únicas que nunca olvidaré.',
      rating: 5,
    },
    {
      name: 'María Rodríguez',
      role: 'Organizadora de Eventos',
      image: 'https://i.pravatar.cc/150?img=5',
      quote: 'Como organizadora, la plataforma me ha facilitado enormemente la gestión y promoción de mis eventos. El alcance que he conseguido es impresionante.',
      rating: 5,
    },
    {
      name: 'Javier Campos',
      role: 'Artista Local',
      image: 'https://i.pravatar.cc/150?img=15',
      quote: 'Gracias a Suyay Events pude dar a conocer mi música a un público más amplio. La visibilidad que me ha dado ha sido clave en mi carrera.',
      rating: 4,
    },
    {
      name: 'Ana Gómez',
      role: 'Estudiante',
      image: 'https://i.pravatar.cc/150?img=23',
      quote: 'Los eventos culturales y educativos que he encontrado aquí han complementado perfectamente mi formación académica. ¡No puedo estar más agradecida!',
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="testimonials-section" id="testimonios">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-tag">Testimonios</span>
          <h2 className="testimonials-title">Lo que dicen nuestros usuarios</h2>
          <p className="testimonials-description">
            Miles de personas han tenido experiencias increíbles gracias a nuestra plataforma.
            Descubre lo que opinan sobre nosotros.
          </p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-image-container">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="testimonial-image"
                      />
                    </div>
                    <div className="testimonial-person">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                      <div className="testimonial-stars">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            xmlns="http://www.w3.org/2000/svg" 
                            className={i < testimonial.rating ? 'star' : 'star star-empty'} 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="quote-icon" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-10c0-2.2-1.8-4-4-4h-10zM4 12c0-3.3 2.7-6 6-6h10c3.3 0 6 2.7 6 6v10c0 3.3-2.7 6-6 6h-10c-3.3 0-6-2.7-6-6v-10z M16.3 17.1c1.5-0.3 2.6-1.4 2.6-3.1 0-2.1-1.6-3.7-3.7-3.7-2.1 0-3.7 1.6-3.7 3.7h-2c0-3.2 2.5-5.7 5.7-5.7 3.2 0 5.7 2.5 5.7 5.7 0 2.4-1.4 4.3-3.5 5.1l-0.2 0c-1 0.3-1.6 1.3-1.6 2.4v0.5h-2v-0.5c0-2.1 1-3.9 2.7-4.4z M16.4 24.1c0.9 0 1.6 0.7 1.6 1.6 0 0.9-0.7 1.6-1.6 1.6-0.9 0-1.6-0.7-1.6-1.6 0-0.9 0.7-1.6 1.6-1.6z"></path>
                    </svg>
                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
