
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Clock } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. 
    
Empresa: ${formData.company}
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`;
    
    const whatsappURL = `https://wa.me/5598987301780?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };
  
  return (
    <section id="contato" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-gold-100 text-gold-800 font-medium px-4 py-2 rounded-full text-sm mb-6">
            Entre em Contato
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6">
            Vamos Conversar sobre 
            <span className="text-gold-600"> Seu Negócio</span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos prontos para ser a parceira moderna que o seu negócio necessita. 
            Entre em contato conosco e descubra como podemos ajudar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-6">
                Solicite sua Proposta
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="(98) 99999-9999"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-vertical"
                    placeholder="Conte-nos sobre suas necessidades contábeis..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary group"
                >
                  <span>Enviar via WhatsApp</span>
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-slide-in-right space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Phone */}
              <div className="bg-navy-900 text-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gold-500 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Telefone</h4>
                    <p className="text-gray-300 text-sm">Ligue para nós agora</p>
                  </div>
                </div>
                <a 
                  href="tel:+5598987301780"
                  className="text-gold-400 hover:text-gold-300 text-xl font-semibold transition-colors"
                >
                  (98) 98730-1780
                </a>
              </div>
              
              {/* Email */}
              <div className="bg-white border-2 border-gold-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gold-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-900">E-mail</h4>
                    <p className="text-gray-600 text-sm">Envie sua mensagem</p>
                  </div>
                </div>
                <a 
                  href="mailto:contato@mccontabilidadema.com.br"
                  className="text-navy-700 hover:text-gold-600 font-medium transition-colors break-all"
                >
                  contato@mccontabilidadema.com.br
                </a>
              </div>
              
              {/* Address */}
              <div className="bg-gold-500 text-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Endereço</h4>
                    <p className="text-white/80 text-sm">Venha nos visitar</p>
                  </div>
                </div>
                <p className="text-white leading-relaxed">
                  Rua da Independência, 29<br />
                  Residencial São Paulo - Cidade Operária<br />
                  São Luís - MA, 65058-421
                </p>
              </div>
            </div>
            
            {/* Business Hours & Social */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-gold-600 mr-3" />
                <h4 className="text-lg font-semibold text-navy-900">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda - Sexta:</span>
                  <span className="font-medium text-navy-900">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado:</span>
                  <span className="font-medium text-navy-900">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo:</span>
                  <span className="font-medium text-navy-900">Fechado</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="border-t pt-4">
                <h5 className="font-semibold text-navy-900 mb-3">Siga-nos</h5>
                <a 
                  href="https://www.instagram.com/mccontabilidadema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <Instagram size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                  @mccontabilidadema
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
