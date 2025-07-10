import React from 'react';
import './Events.css';

const Events = () => {
  // Example events data (based on image)
  const events = [
    {
      id: 1,
      title: "Anime Friends Festival",
      location: "Lima, Perú",
      date: "23 de Agosto, 2025",
      image: "/event1.jpg",
      category: "Anime",
      tags: ["live", "fans", "cosplay"],
    },
    {
      id: 2,
      title: "Día Mundial del Folklore",
      location: "Cusco, Perú",
      date: "22 de Agosto, 2025",
      image: "/event2.jpg",
      category: "Folklore",
    },
    {
      id: 3,
      title: "MISAKI - Cosplayer Invitada",
      location: "Lima, Perú",
      date: "30 de Agosto, 2025",
      image: "/event3.jpeg",
      category: "Cosplay",
    },
    {
      id: 4,
      title: "Corazon Cerrano",
      location: "Lima, Perú",
      date: "5 de Septiembre, 2025",
      image: "/event4.jpg",
      category: "Musica",
      tags: ["live", "fans", "music"],
    },
    {
      id: 5,
      title: "La Isla Bonita",
      location: "Arequipa, Perú",
      date: "12 de Septiembre, 2025",
      image: "/event5.jpg",
      category: "Comedia",
    },
    {
      id: 6,
      title: "Festival Cultural Andino",
      location: "Puno, Perú",
      date: "18 de Septiembre, 2025",
      image: "/event6.jpg",
      category: "Folklore",
    },
    {
      id: 7,
      title: "Grupo 5",
      location: "Trujillo, Perú",
      date: "25 de Septiembre, 2025",
      image: "/event7.jpg",
      category: "Musica",
    },
    {
      id: 8,
      title: "Chacalon regresa",
      location: "Chiclayo, Perú",
      date: "2 de Octubre, 2025",
      image: "/event8.jpeg",
      category: "Cumbia",
    },
  ];

  const categories = [
    { id: 'todos', label: 'TODOS' },
    { id: 'ciudad', label: 'CIUDAD' },
    { id: 'categoria', label: 'CATEGORÍA' },
    { id: 'precio', label: 'PRECIO' },
    { id: 'fecha', label: 'FECHA' },
  ];

  return (
    <section className="events-section" id="eventos">
      <div className="events-container">
        <div className="events-header">
          <span className="events-tag">Descubre</span>
          <h2 className="events-title">Eventos Populares</h2>
          <p className="events-description">
            Explora los eventos más populares y no te pierdas las mejores experiencias
            que tenemos preparadas para ti.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="filter-container">
          <div className="filter-wrapper">
            {categories.map((category) => (
              <div key={category.id} className="filter-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="filter-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <span className="filter-text">{category.label}</span>
              </div>
            ))}
            
            {/* Search icon at the end */}
            <div className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Event cards grid */}
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              {/* Image container */}
              <div className="event-image-container">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="event-image"
                />
                
                {/* Favorite button */}
                <button className="favorite-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="favorite-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                
                {/* Category badge */}
                <div className="category-badge">
                  {event.category}
                </div>
              </div>
              
              {/* Event info */}
              <div className="event-content">
                <h3 className="event-title">
                  {event.title}
                </h3>
                
                <div className="event-location">
                  <svg xmlns="http://www.w3.org/2000/svg" className="event-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="event-detail">{event.location}</span>
                </div>
                
                <div className="event-date">
                  <svg xmlns="http://www.w3.org/2000/svg" className="event-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="event-detail">{event.date}</span>
                </div>
                
                {/* Tags */}
                {event.tags && (
                  <div className="tags-container">
                    {event.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <button className="events-button">
            Ver todos los eventos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
