import React from 'react';
import { Button } from './ui/button';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const { company } = mockData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Preços', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-2xl font-bold">{company.name}</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Criamos sites profissionais que ajudam empresas a crescerem online. 
              Preço fixo, entrega rápida e qualidade garantida.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>{company.email}</span>
              </div>
              {/* <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>{company.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} />
                <span>{company.address}</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Suporte</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para ter seu site profissional?
            </h3>
            <p className="text-blue-100 mb-6">
              Transforme sua ideia em realidade por apenas R$ 799
            </p>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              Quero meu site agora
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} {company.name}. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="text-gray-400 text-sm">
                Desenvolvido com ❤️ para empresários brasileiros
              </div>
              
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Voltar ao topo"
              >
                <ArrowUp size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;