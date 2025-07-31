
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Pulse effect every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 2000);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isOpen]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false);
  };
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'} z-50`}>
      {/* Contact Options */}
      <div className={`flex flex-col-reverse items-end mb-4 space-y-reverse space-y-3 transition-all duration-500 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        {/* WhatsApp */}
        <a 
          href="https://wa.me/5598987301780?text=Olá! Gostaria de falar sobre os serviços contábeis da MC Contabilidade." 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 gap-3 font-medium group"
          aria-label="Conversar pelo WhatsApp"
        >
          <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        
        {/* Phone */}
        <a 
          href="tel:+5598987301780" 
          className="flex items-center bg-navy-900 hover:bg-navy-800 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 gap-3 font-medium group"
          aria-label="Ligar para MC Contabilidade"
        >
          <Phone size={20} className="group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Ligar</span>
        </a>
        
        {/* Email */}
        <a 
          href="mailto:contato@mccontabilidadema.com.br" 
          className="flex items-center bg-gold-600 hover:bg-gold-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 gap-3 font-medium group"
          aria-label="Enviar e-mail para MC Contabilidade"
        >
          <Mail size={20} className="group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">E-mail</span>
        </a>
      </div>
      
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`${isMobile ? 'p-4' : 'p-5'} rounded-full flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600 rotate-180' : 'bg-green-500 hover:bg-green-600'} 
          text-white shadow-2xl
          ${isPulsing && !isOpen ? 'animate-pulse-slow' : ''}
          transform hover:scale-110 active:scale-95`}
        aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"}
        style={{
          boxShadow: isOpen 
            ? '0 8px 32px rgba(239, 68, 68, 0.4)' 
            : '0 8px 32px rgba(34, 197, 94, 0.4)'
        }}
      >
        {isOpen ? (
          <X size={isMobile ? 20 : 24} />
        ) : (
          <MessageCircle size={isMobile ? 20 : 24} />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
