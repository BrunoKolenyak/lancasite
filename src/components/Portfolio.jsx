import React, { useState } from 'react';
import { Button } from './ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const Portfolio = () => {
  const { portfolio } = mockData;
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(portfolio.map(item => item.category))];

  const filteredPortfolio = selectedCategory === 'Todos' 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos sites profissionais que já criamos para nossos clientes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredPortfolio.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Button 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-blue-600 hover:bg-gray-100"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver site
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para ter um site como esses?
            </h3>
            <p className="text-gray-600 mb-6">
              Criamos seu site profissional em apenas 7 dias por R$ 799
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Criar meu site hoje
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;