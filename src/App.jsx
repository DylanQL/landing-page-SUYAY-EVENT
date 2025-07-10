import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
      delay: 100,
    });
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Hero />
      <AboutUs />
      <Features />
      <HowItWorks />
      <Events />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
