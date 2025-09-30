import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { mockData } from '../mock';

const Hero = () => {
  const { hero } = mockData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E40AF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-8">
            <CheckCircle size={16} className="mr-2" />
            Preço fixo • Entrega garantida
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          {/* Price Highlight */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-md mx-auto border border-gray-100">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Investimento único</p>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                R$ <span className="text-5xl">799</span>
              </div>
              <p className="text-gray-600">Site profissional completo</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {hero.ctaText}
              <ArrowRight size={20} className="ml-2" />
            </Button>
            
            <Button 
              onClick={scrollToPricing}
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              Ver detalhes do plano
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
              <span>Entrega em 7 dias</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
              <span>30 dias de suporte</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
              <span>100% responsivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;