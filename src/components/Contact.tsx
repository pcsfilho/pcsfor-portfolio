
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato! Responderei em breve.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'paulo.ecomp@gmail.com',
      href: 'mailto:paulo.ecomp@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(71) 99234-6773',
      href: 'tel:+5571992346773',
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Salvador, BA - Brasil',
      href: '#',
      color: 'text-primary'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pcsfilho',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/pcsfilho',
      color: 'text-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vamos <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Conversar</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato e vamos transformar ideias em realidade!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 border-0 bg-gradient-to-br from-gray-50 to-white shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center group hover:bg-white p-4 rounded-lg transition-all duration-200"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 mr-4 group-hover:scale-110 transition-transform duration-200`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {info.label}
                        </p>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 border border-gray-100"
                      >
                        <social.icon className={`w-5 h-5 ${social.color}`} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Disponibilidade</h4>
                  <p className="text-gray-700 text-sm">
                    Aberto a oportunidades remotas e presenciais em Salvador/BA. 
                    Respondo emails geralmente em até 24 horas.
                  </p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full"
                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
