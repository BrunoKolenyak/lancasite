import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';

const Testimonials = () => {
  const { testimonials } = mockData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que empresários como você falam sobre nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Quote size={20} className="text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">
              Números que comprovam nossa qualidade
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-blue-100">Sites entregues</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">7 dias</div>
                <div className="text-blue-100">Entrega média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;