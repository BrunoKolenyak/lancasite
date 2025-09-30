import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const FAQ = () => {
  const { faq } = mockData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processo de criação de sites
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id.toString()}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco e tire todas as suas dúvidas sobre a criação do seu site
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 group"
              >
                Falar com especialista
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              💡 Dica importante
            </h3>
            <p className="text-gray-600">
              Quanto mais informações você nos fornecer sobre seu negócio, melhor será o resultado final do seu site.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ⚡ Processo rápido
            </h3>
            <p className="text-gray-600">
              Nosso processo é otimizado para entregar seu site em 7 dias sem comprometer a qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;