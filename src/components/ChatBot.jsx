import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../components/ChatBot.css';

// Chat bot personality prompt
const CHATBOT_PERSONALITY = `
Eres **Suyay Assistant**, el asistente virtual oficial de **Suyay Events**, la plataforma peruana que profesionaliza la gestión y promoción de eventos culturales, deportivos y musicales.

🎯 **Tu misión principal**  
- Brindar una experiencia integral: verificación automatizada de identidad, pago cifrado y generación de tickets electrónicos con QR.  
- Asegurar transparencia, inmediatez y cero tolerancia al fraude.  

📖 **Quiénes somos (extraído del PDF)**  
“Suyay Events es una iniciativa tecnológica enfocada en profesionalizar la industria de gestión y promoción de eventos en el Perú. Ofrecemos un espacio seguro y confiable para la publicación, promoción y venta de entradas a actividades culturales, deportivas y musicales.”  

💡 **Nuestros pilares**  
- **Verificación de organizadores con IA:** autenticación automática del 100 % de registros y detección de patrones de riesgo.  
- **Pago seguro cifrado:** transacciones protegidas de extremo a extremo.  
- **Tickets electrónicos con QR:** acceso ágil y digital.  
- **Panel de estadísticas en tiempo real:** métricas de venta y asistencia.

🏅 **Ventajas para asistentes**  
- Búsqueda y reserva de eventos confiable y geolocalizada.  
- Pago rápido y seguro, sin compartir datos sensibles.  
- Recepción automática de ticket QR en el correo.  
- Soporte 24/7 y políticas de reembolso claras.  
- Recomendaciones personalizadas basadas en tu perfil y preferencias.

🚀 **Ventajas para organizadores**  
- Publicación veloz de eventos con geolocalización.  
- Verificación de identidad automatizada por IA para evitar fraudes.  
- Panel administrativo con estadísticas y reportes en tiempo real.  
- Herramientas de promoción integradas (descuentos, códigos y cupones).  
- Gestión centralizada de pagos y emisión de tickets QR.

🎯 **Objetivos clave**  
1. Reducir en 50 % los casos de fraude en venta de entradas.  
2. Automatizar el 80 % de las transacciones de compra online.  
3. Digitalizar el 90 % de las gestiones administrativas de organizadores.  
4. Usar IA para anticipar riesgos y personalizar recomendaciones.

🔧 **Qué puedes hacer**  
- Explicar nuestra misión, visión y objetivos.  
- Describir las ventajas y beneficios según el rol (asistente u organizador).  
- Guiar paso a paso el flujo: registro y validación → publicación de eventos → compra y pago → escaneo QR en puerta.  
- Ayudar a organizadores a crear y gestionar eventos.  
- Recomendar eventos según intereses y perfil del usuario.  
- Responder dudas sobre precios, métodos de pago, políticas de reembolso y soporte.

🤝 **Tono y estilo**  
- Cercano, entusiasta y profesional.  
- Claro y empático.  
- Siempre orientado a soluciones y seguridad.

❗ **Si no sabes la respuesta**  
Reconócelo amablemente y ofrece canalizar la consulta a soporte humano (soporte@suyayevents.pe).

—  
A continuación recibirás el historial de usuario. Responde de forma natural, manteniendo el enfoque en los servicios y valores de Suyay Events.
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      content: '¡Hola! Soy Suyi, tu asistente virtual de Suyay Events. ¿En qué puedo ayudarte hoy?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = { type: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);
    
    try {
      // Create a content array for the chat history
      // Start with the personality prompt
      const contents = [{
        role: "user",
        parts: [{ text: CHATBOT_PERSONALITY }]
      }];
      
      // Add all previous messages to maintain conversation context
      messages.forEach((msg) => {
        contents.push({
          role: msg.type === 'user' ? "user" : "model",
          parts: [{ text: msg.content }]
        });
      });
      
      // Add current user message
      contents.push({
        role: "user",
        parts: [{ text: input }]
      });
      
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': 'AIzaSyAYOKE3rrszIOjBMd8AsrD3FGMi2I3f5j4'
          },
          body: JSON.stringify({
            contents
          })
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }
      
      const data = await response.json();
      let botResponse = "Lo siento, parece que hay un problema con mi conexión. ¿Podrías intentarlo de nuevo?";
      
      if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
        botResponse = data.candidates[0].content.parts[0].text;
      }
      
      setMessages(prevMessages => [...prevMessages, { type: 'bot', content: botResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prevMessages => [...prevMessages, { 
        type: 'bot', 
        content: 'Lo siento, estoy teniendo problemas para responder. Por favor, intenta de nuevo más tarde.' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Floating chat button */}
      <motion.button
        className="chat-button"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </motion.button>

      {/* Chat modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-modal"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chat-header">
              <div className="chat-title">
                <img 
                  src="/Logo_sin_fondo-suyay.png" 
                  alt="Suyay Logo" 
                  className="chat-logo"
                />
                <h3>Asistente Suyay</h3>
              </div>
              <button className="close-button" onClick={toggleChat}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="messages-container">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  {message.type === 'bot' && (
                    <div className="avatar">
                      <img 
                        src="/Logo_sin_fondo-suyay.png" 
                        alt="Bot Avatar" 
                        className="bot-avatar"
                      />
                    </div>
                  )}
                  <div className="message-content">
                    {message.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message bot typing">
                  <div className="avatar">
                    <img 
                      src="/Logo_sin_fondo-suyay.png" 
                      alt="Bot Avatar" 
                      className="bot-avatar"
                    />
                  </div>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <form className="input-area" onSubmit={sendMessage}>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Escribe tu mensaje..."
                disabled={isTyping}
              />
              <button type="submit" disabled={isTyping || !input.trim()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
