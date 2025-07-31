
import React from 'react';
import { FileText, Users, Calculator, Building, TrendingUp, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Contábil',
    description: 'Escrituração contábil completa, balanços, demonstrações financeiras e análises gerenciais para tomada de decisões estratégicas.',
    icon: Calculator,
    features: ['Escrituração Contábil', 'Balanços e DRE', 'Análises Gerenciais', 'Relatórios Financeiros']
  },
  {
    id: 2,
    title: 'Fiscal',
    description: 'Cumprimento de todas as obrigações fiscais, apuração de impostos e acompanhamento das mudanças na legislação tributária.',
    icon: FileText,
    features: ['Apuração de Impostos', 'Declarações Fiscais', 'Planejamento Tributário', 'Conformidade Legal']
  },
  {
    id: 3,
    title: 'Departamento Pessoal',
    description: 'Gestão completa de RH, folha de pagamento, benefícios e cumprimento das obrigações trabalhistas.',
    icon: Users,
    features: ['Folha de Pagamento', 'Admissões e Demissões', 'Benefícios', 'eSocial']
  },
  {
    id: 4,
    title: 'Societário',
    description: 'Assessoria em questões societárias, alterações contratuais, atas de reuniões e demais documentos legais.',
    icon: Building,
    features: ['Alterações Contratuais', 'Atas de Reuniões', 'Documentos Legais', 'Consultoria Societária']
  },
  {
    id: 5,
    title: 'Gestão Financeira',
    description: 'Consultoria financeira, fluxo de caixa, controles financeiros e orientações para crescimento sustentável.',
    icon: TrendingUp,
    features: ['Fluxo de Caixa', 'Controles Financeiros', 'Indicadores de Performance', 'Consultoria Estratégica']
  },
  {
    id: 6,
    title: 'Consultoria Empresarial',
    description: 'Assessoria estratégica para otimização de processos, redução de custos e maximização de resultados.',
    icon: Shield,
    features: ['Análise de Processos', 'Redução de Custos', 'Estratégias de Crescimento', 'Assessoria Executiva']
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-gold-100 text-gold-800 font-medium px-4 py-2 rounded-full text-sm mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6">
            Soluções Contábeis 
            <span className="text-gold-600"> Completas</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Oferecemos serviços e soluções contábeis de excelência nas áreas fiscal, 
            departamento pessoal, contábil e societário e gestão financeira, com foco em resultados 
            e na plena satisfação de nossos clientes.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gold-100 p-4 rounded-2xl inline-block mb-6">
                <service.icon className="w-8 h-8 text-gold-600" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-heading font-bold text-white mb-4">
            Pronto para Transformar sua Contabilidade?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ser a parceira moderna 
            que o seu negócio necessita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5598987301780?text=Olá! Gostaria de saber mais sobre os serviços contábeis." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Fale via WhatsApp
            </a>
            <a href="#contato" className="btn-primary">
              Solicitar Proposta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
