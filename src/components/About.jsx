import React from 'react';
import { Button } from './ui/button';
import { Users, Award, Clock, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Cada projeto é único e desenvolvido pensando nas necessidades específicas do seu negócio."
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Utilizamos as melhores práticas de desenvolvimento para entregar sites profissionais."
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Processo otimizado para entregar seu site em 7 dias sem comprometer a qualidade."
    },
    {
      icon: Heart,
      title: "Paixão pelo que fazemos",
      description: "Amamos criar sites que ajudam empresários a alcançarem seus objetivos online."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a LançaSite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em criar sites profissionais que ajudam empresas a crescerem online
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Democratizar o acesso a sites profissionais, oferecendo soluções de qualidade 
              com preços justos e processos transparentes. Acreditamos que todo negócio, 
              independente do tamanho, merece uma presença online impactante.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Por que escolher a LançaSite?
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Mais de 30 sites entregues com sucesso</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>98% de clientes satisfeitos</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Suporte dedicado e especializado</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                LançaSite
              </h3>
              <p className="text-gray-600 mb-6">
                "Transformando ideias em sites profissionais desde 2019"
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">30+</div>
                    <div className="text-sm text-gray-500">Sites criados</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-500">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos criar o site perfeito para o seu negócio
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Começar meu projeto
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;