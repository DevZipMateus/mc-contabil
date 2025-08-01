
import React from 'react';
import { Check, Award, Clock, Target, MessageCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gold-100 rounded-2xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Profissional de contabilidade trabalhando com tecnologia moderna" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-navy-900 text-white rounded-xl p-6 shadow-2xl animate-float">
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 text-gold-400 mr-2" />
                  <span className="font-semibold">Excelência Comprovada</span>
                </div>
                <div className="text-2xl font-bold text-gold-400">100+</div>
                <div className="text-sm text-gray-300">Empresas Atendidas</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="animate-slide-in-right">
            <div className="inline-block bg-gold-100 text-gold-800 font-medium px-4 py-2 rounded-full text-sm mb-6">
              Sobre a MC Contabilidade
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6 leading-tight">
              Sua Parceira Estratégica em 
              <span className="text-gold-600"> Soluções Contábeis</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A <strong>MC Contabilidade</strong> é uma empresa especializada em soluções contábeis que vão além do 
              cumprimento de obrigações legais — somos parceiros estratégicos na construção do sucesso dos nossos clientes.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Atuamos com <strong>excelência, agilidade e foco em resultados</strong>, oferecendo serviços personalizados 
              que atendem às necessidades específicas de cada negócio, proporcionando segurança, organização e 
              tranquilidade para o crescimento sustentável.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-gold-100 p-2 rounded-full mr-4 mt-1">
                  <Check className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy-900 mb-1">Excelência e Agilidade</h4>
                  <p className="text-gray-600">Compromisso com a qualidade e rapidez em todos os nossos serviços</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold-100 p-2 rounded-full mr-4 mt-1">
                  <Target className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy-900 mb-1">Foco em Resultados</h4>
                  <p className="text-gray-600">Estratégias personalizadas para o crescimento do seu negócio</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold-100 p-2 rounded-full mr-4 mt-1">
                  <Clock className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy-900 mb-1">Atendimento Dedicado</h4>
                  <p className="text-gray-600">Suporte contínuo com ética e responsabilidade</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contato" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <span>Fale Conosco</span>
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
