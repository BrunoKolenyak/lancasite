import React from 'react';
import { Zap, Smartphone, Search, Shield } from 'lucide-react';
import { mockData } from '../mock';

const Benefits = () => {
  const { benefits } = mockData;

  const iconMap = {
    Zap,
    Smartphone,
    Search,
    Shield
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a LançaSite?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos tecnologia de ponta com design profissional para criar sites que realmente convertem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <div 
                key={benefit.id}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Sites entregues (e contando)</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Clientes satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7 dias</div>
              <div className="text-blue-100">Entrega média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;