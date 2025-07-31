
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/4e449973-5521-4704-95f5-b5e82249b67a.png" 
                alt="MC Contabilidade Logo" 
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-bold">MC Contabilidade</div>
                <div className="text-sm text-gold-400">A parceira moderna que o seu negócio necessita</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Especializados em soluções contábeis que vão além do cumprimento de obrigações legais. 
              Somos seus parceiros estratégicos na construção do sucesso do seu negócio.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/mccontabilidadema"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold-500 p-3 rounded-full transition-all duration-300 group"
                aria-label="Instagram da MC Contabilidade"
              >
                <Instagram size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-gold-400" size={18} />
                <div>
                  <a 
                    href="tel:+5598987301780" 
                    className="hover:text-gold-400 transition-colors"
                  >
                    (98) 98730-1780
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0 text-gold-400" size={18} />
                <div>
                  <a 
                    href="mailto:contato@mccontabilidadema.com.br" 
                    className="hover:text-gold-400 transition-colors break-all"
                  >
                    contato@mccontabilidadema.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0 text-gold-400" size={18} />
                <div>
                  <span className="text-gray-300">
                    Rua da Independência, 29<br />
                    Residencial São Paulo<br />
                    Cidade Operária<br />
                    São Luís - MA, 65058-421
                  </span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Atendimento</h3>
            <div className="space-y-3">
              <div className="flex items-center mb-4">
                <Clock className="mr-3 text-gold-400" size={18} />
                <span className="font-medium">Horários</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Segunda - Sexta:</span>
                  <span className="text-white">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sábado:</span>
                  <span className="text-white">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Domingo:</span>
                  <span className="text-white">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5598987301780?text=Olá! Gostaria de solicitar um orçamento para os serviços contábeis."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              Solicitar Orçamento
            </a>
            <a href="#contato" className="btn-primary text-center">
              Fale Conosco
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} <strong>MC CONTABILIDADE E ASSESSORIA EMPRESARIAL LTDA.</strong> 
            Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            CNPJ: 53.943.217/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
