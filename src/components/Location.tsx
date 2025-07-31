
import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-gold-100 text-gold-800 font-medium px-4 py-2 rounded-full text-sm mb-6">
            Nossa Localização
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6">
            Venha nos 
            <span className="text-gold-600"> Visitar</span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos estrategicamente localizados em São Luís - MA, prontos para atender 
            presencialmente ou remotamente suas necessidades contábeis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.2165547892546!2d-44.2646!3d-2.5307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f690e97e5cbc5f%3A0x6c3f7b1234567890!2sRua%20da%20Independencia%2C%2029%20-%20Cidade%20Operária%2C%20São%20Luís%20-%20MA%2C%2065058-421!5e0!3m2!1spt-BR!2sbr!4v1634567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da MC Contabilidade"
                className="w-full h-96 rounded-2xl"
              ></iframe>
              
              {/* Overlay with company info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-gold-600 mr-2" />
                  <span className="font-semibold text-navy-900">MC Contabilidade</span>
                </div>
                <p className="text-sm text-gray-600">
                  Rua da Independência, 29<br />
                  Residencial São Paulo - Cidade Operária<br />
                  São Luís - MA, 65058-421
                </p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {/* Address Card */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">Endereço</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Rua da Independência, 29</strong><br />
                      Residencial São Paulo - Cidade Operária<br />
                      São Luís - MA, CEP: 65058-421
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-navy-900 rounded-2xl p-6 text-white">
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 text-gold-400 mr-3" />
                    <span className="font-semibold">Telefone</span>
                  </div>
                  <a 
                    href="tel:+5598987301780" 
                    className="text-gold-400 hover:text-gold-300 transition-colors font-medium"
                  >
                    (98) 98730-1780
                  </a>
                </div>

                <div className="bg-gold-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 text-white mr-3" />
                    <span className="font-semibold">E-mail</span>
                  </div>
                  <a 
                    href="mailto:contato@mccontabilidadema.com.br" 
                    className="text-white hover:text-gray-100 transition-colors text-sm break-all"
                  >
                    contato@mccontabilidadema.com.br
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Horário de Atendimento</h3>
                    <div className="space-y-2">
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
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+da+Independencia,+29+Residencial+Sao+Paulo+Cidade+Operária+São+Luís+MA+65058421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Navigation size={20} />
                  Como Chegar
                </a>
                <a 
                  href="https://wa.me/5598987301780?text=Olá! Gostaria de agendar uma visita ao escritório."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-secondary"
                >
                  Agendar Visita
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
