import React from 'react';
import { Button } from './ui/button';
import { Globe, Target, PenTool, ShoppingCart, ArrowRight, Check } from 'lucide-react';
import { mockData } from '../mock';

const Services = () => {
  const { services } = mockData;

  const iconMap = {
    Globe,
    Target,
    PenTool,
    ShoppingCart
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Criamos sites sob medida para diferentes necessidades do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={scrollToContact}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 group"
                    >
                      Criar meu site hoje
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Todos os sites incluem:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Check size={20} className="text-green-500" />
                <span>Design responsivo</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check size={20} className="text-green-500" />
                <span>Otimização SEO básica</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check size={20} className="text-green-500" />
                <span>Certificado SSL gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;