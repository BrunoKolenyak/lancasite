import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardHeader, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { mockData } from '../mock';

const API_URL = "https://68sg6b2dj6.execute-api.us-east-1.amazonaws.com/contact";

const Contact = () => {
  const { company } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success (mantido)
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-3xl p-12 border border-green-200">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Mensagem enviada com sucesso!
              </h2>
              <p className="text-lg text-gray-600">
                Recebemos sua solicitação e entraremos em contato em até 2 horas úteis.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para criar seu site profissional? Preencha o formulário e entraremos em contato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl border-0">
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Solicite seu orçamento gratuito
                </h3>
                <p className="text-gray-600">
                  Preencha os dados abaixo e receba uma proposta personalizada
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone/WhatsApp
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Conte-nos sobre seu projeto *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva seu negócio e que tipo de site você precisa..."
                      rows={5}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Enviar solicitação
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Resposta garantida em até 2 horas úteis
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Outras formas de contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">E-mail</div>
                      <div className="text-gray-600">{company.email}</div>
                    </div>
                  </div>

                  {/* <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Telefone</div>
                      <div className="text-gray-600">{company.phone}</div>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Processo rápido e simples
                </h3>
                <div className="space-y-3 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span>Resposta em até 2 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span>Orçamento gratuito</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span>Site pronto em 7 dias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span>Preço fixo: R$ 799</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;