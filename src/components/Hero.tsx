
import React from 'react';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gold-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl lg:text-6xl'} font-heading font-bold text-white leading-tight mb-6 animate-fade-in`}>
            Soluções Contábeis
            <span className="block text-gold-400">Modernas e Eficazes</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <strong className="text-gold-400">A parceira moderna que o seu negócio necessita.</strong>
          </p>
          
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Especializados em soluções contábeis que vão além do cumprimento de obrigações legais. 
            Somos seus parceiros estratégicos na construção do sucesso do seu negócio.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://wa.me/5598987301780?text=Olá! Gostaria de solicitar um orçamento para os serviços contábeis." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicos" className="btn-primary group">
              <span>Conheça Nossos Serviços</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gold-500/20 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Segurança Total</h3>
              <p className="text-gray-300 text-sm">Cumprimento de todas as obrigações legais com máxima segurança</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-gold-500/20 p-4 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Foco em Resultados</h3>
              <p className="text-gray-300 text-sm">Estratégias personalizadas para o crescimento do seu negócio</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-gold-500/20 p-4 rounded-full mb-4">
                <Users className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Parceria Estratégica</h3>
              <p className="text-gray-300 text-sm">Suporte completo para tomada de decisões</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,60L80,65C160,70,320,80,480,75C640,70,800,50,960,45C1120,40,1280,50,1360,55L1440,60L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
