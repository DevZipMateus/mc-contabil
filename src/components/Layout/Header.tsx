
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Menu, X, MapPin } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile when scrolled */}
      <div className={`bg-navy-900 text-white py-2 text-sm transition-all duration-300 ${
        isMobile && isScrolled ? 'h-0 py-0 overflow-hidden' : ''
      }`}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-col md:flex-row md:space-x-6 items-center space-y-1 md:space-y-0">
              <a href="mailto:contato@mccontabilidadema.com.br" className="flex items-center hover:text-gold-400 transition-colors">
                <Mail size={14} className="mr-2" />
                contato@mccontabilidadema.com.br
              </a>
              <a href="tel:+5598987301780" className="flex items-center hover:text-gold-400 transition-colors">
                <Phone size={14} className="mr-2" />
                (98) 98730-1780
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin size={14} className="mr-2" />
                São Luís - MA
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/mccontabilidadema"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold-400 transition-colors"
                aria-label="Instagram da MC Contabilidade"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Always fixed */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-4'
      }`} style={{ 
        top: isMobile && isScrolled ? '0px' : isMobile ? '36px' : '36px'
      }}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/4e449973-5521-4704-95f5-b5e82249b67a.png" 
                alt="MC Contabilidade Logo" 
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-bold text-navy-900">MC Contabilidade</div>
                <div className="text-sm text-gold-600 font-medium">A parceira moderna que o seu negócio necessita</div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              <Link to="/" className="nav-link">Início</Link>
              <a href="#sobre" className="nav-link">Sobre</a>
              <a href="#servicos" className="nav-link">Serviços</a>
              <a href="#localizacao" className="nav-link">Localização</a>
              <a href="#contato" className="nav-link">Fale Conosco</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-navy-700 hover:text-gold-600 focus:outline-none p-2"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} 
          overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100`}>
          <div className="container-custom py-4 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-3 text-navy-700 hover:text-gold-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={handleNavClick}
            >
              Início
            </Link>
            <a 
              href="#sobre" 
              className="block px-4 py-3 text-navy-700 hover:text-gold-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={handleNavClick}
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className="block px-4 py-3 text-navy-700 hover:text-gold-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={handleNavClick}
            >
              Serviços
            </a>
            <a 
              href="#localizacao" 
              className="block px-4 py-3 text-navy-700 hover:text-gold-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={handleNavClick}
            >
              Localização
            </a>
            <a 
              href="#contato" 
              className="block px-4 py-3 text-navy-700 hover:text-gold-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={handleNavClick}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className={`transition-all duration-300 ${
        isMobile && isScrolled ? 'h-20' : 'h-24'
      }`}></div>
    </>
  );
};

export default Header;
