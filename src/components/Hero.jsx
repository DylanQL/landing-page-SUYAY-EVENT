import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import TypeWriter from 'react-typewriter-effect';

// Import CSS for react-slick and custom Hero styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const Hero = () => {
  // Configuración simplificada del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  // Imágenes de muestra con URLs directas para garantizar que se muestren
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Descubre los mejores eventos',
    },
    {
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Vive experiencias inolvidables',
    },
    {
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Conecta con personas extraordinarias',
    },
  ];

  // Search categories removed

  return (
    <section className="hero-section">
      {/* Slider de fondo */}
      <div className="hero-slider-container" style={{position: 'absolute', width: '100%', height: '100%', zIndex: 0}}>
        <Slider {...settings} className="hero-slider">
          {slides.map((slide, index) => (
            <div key={index} style={{position: 'relative', height: '100%'}}>
              {/* Overlay oscuro */}
              <div className="hero-overlay"></div>
              
              {/* Imagen de fondo */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Contenido central */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="primary">SUYAY </span>
          <span>EVENTS</span>
        </motion.h1>
        
        <div className="hero-subtitle">
          <TypeWriter
            textStyle={{ fontFamily: 'Montserrat', fontWeight: 600 }}
            startDelay={1000}
            cursorColor="#FF1D8E"
            multiText={[
              'Descubre experiencias inolvidables',
              'Encuentra los mejores eventos',
              'Vive momentos mágicos',
              'Conecta con la comunidad',
            ]}
            multiTextDelay={1500}
            typeSpeed={50}
          />
        </div>

        {/* Search box has been removed */}
      </div>
      
      {/* Indicador de scroll - sin depender de Framer Motion */}
      <div className="scroll-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span style={{fontSize: '0.875rem', fontFamily: 'Montserrat, sans-serif'}}>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
