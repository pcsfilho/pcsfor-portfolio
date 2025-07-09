
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();
  const { t } = useLanguage();

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
      label: t('email'),
      value: 'paulo.ecomp@gmail.com',
      href: 'mailto:paulo.ecomp@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: t('phone'),
      value: '(71) 99234-6773',
      href: 'tel:+5571992346773',
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      label: t('location'),
      value: 'Salvador/BA e Feira de Santana/BA - Brasil',
      href: '#',
      color: 'text-primary'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pcsfilho',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/pcsfilho',
      color: 'text-foreground'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('letsChat').split(' ')[0]} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('letsChat').split(' ')[1]}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato e vamos transformar ideias em realidade!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 border-border bg-card shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('contactInfo')}</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center group hover:bg-muted/20 p-4 rounded-lg transition-all duration-200"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 mr-4 group-hover:scale-110 transition-transform duration-200`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.label}
                        </p>
                        <p className="text-foreground/60">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">{t('socialNetworks')}</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-muted/20 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 border border-border"
                      >
                        <social.icon className={`w-5 h-5 ${social.color}`} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">{t('availability')}</h4>
                  <p className="text-foreground/70 text-sm">
                    {t('availabilityText')}
                  </p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 border-border bg-card shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('sendMessage')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('name')} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border-border"
                      placeholder={t('yourFullName')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('email')} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border-border"
                      placeholder={t('yourEmail')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {t('subject')} *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-background border-border"
                    placeholder={t('messageSubject')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('message')} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-background border-border"
                    placeholder={t('tellMeAbout')}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('sendMessageBtn')}
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
