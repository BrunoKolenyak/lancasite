import React from 'react';
import { Button } from './ui/button';
import { Check, Star, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const Pricing = () => {
  const { pricing } = mockData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preço Justo e Transparente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Investimento único de R$ 799 para ter seu site profissional pronto em 7 dias
          </p>
        </div>

        {/* Main Plan */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border-2 border-blue-200 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-8 bg-blue-600 text-white px-6 py-2 rounded-b-xl font-semibold flex items-center">
              <Star size={16} className="mr-2" />
              Mais Popular
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {pricing.mainPlan.name}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {pricing.mainPlan.description}
                </p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold text-blue-600">
                    R$ {pricing.mainPlan.price}
                  </span>
                  <span className="text-gray-500 ml-2">pagamento único</span>
                </div>

                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group w-full lg:w-auto"
                >
                  Quero meu site agora
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  O que está incluso:
                </h4>
                <div className="space-y-4">
                  {pricing.mainPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Serviços Adicionais (Opcionais)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.addons.map((addon, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {addon.name}
                </h4>
                <p className="text-gray-600 mb-4">
                  {addon.description}
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    R$ {addon.price}
                  </div>
                  {addon.yearlyPrice && (
                    <div className="text-sm text-gray-500">
                      ou {addon.yearlyPrice} à vista
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Garantia de Satisfação
            </h3>
            <p className="text-gray-600">
              Se você não ficar satisfeito com o resultado, trabalhamos até você aprovar ou devolvemos seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;