import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const teamMembers = [
    {
      name: "Angelo Dylan QL",
      role: "Desarrollador",
      email: "angelo.quispe.l@tecsup.edu.pe",
      linkedin: "https://www.linkedin.com/in/angelo-dylan-ql/"
    },
    {
      name: "Jeremias George CR",
      role: "Desarrollador",
      email: "jeremias.coronel@tecsup.edu.pe",
      linkedin: "http://www.linkedin.com/in/jeremias-g-coronel"
    }
  ];

  return (
    <section id="contacto" className="contact-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Contáctanos</h2>
          <p>¿Tienes alguna pregunta? Nuestro equipo está listo para ayudarte</p>
        </motion.div>

        <div className="team-members">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="member-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(142, 36, 170, 0.2)" }}
            >
              <div className="member-avatar">
                {member.name.split(' ').slice(0, 2).map(name => name[0]).join('')}
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              
              <div className="member-contact">
                <div className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
                <div className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">Perfil de LinkedIn</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="contact-info">
            <h3>¿Cómo podemos ayudarte?</h3>
            <p>Envíanos un mensaje y nos pondremos en contacto contigo pronto.</p>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Mensaje" rows="4" required></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="submit-button"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 29, 142, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
