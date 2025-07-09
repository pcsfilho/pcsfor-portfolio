
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    home: 'Início',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    skills: 'Habilidades',
    contact: 'Contato',
    fullStackDeveloper: 'Full Stack Developer & Líder Técnico',
    knowMyWork: 'Conheça meu trabalho',
    getInTouch: 'Entrar em contato',
    professionalExperience: 'Experiência Profissional',
    current: 'Atual',
    mainAchievements: 'Principais conquistas:',
    technologies: 'Tecnologias:',
    letsChat: 'Vamos Conversar',
    contactInfo: 'Informações de Contato',
    email: 'Email',
    phone: 'Telefone',
    location: 'Localização',
    socialNetworks: 'Redes Sociais',
    availability: 'Disponibilidade',
    availabilityText: 'Aberto a oportunidades remotas e presenciais em Salvador/BA e Feira de Santana/BA. Respondo emails geralmente em até 24 horas.',
    sendMessage: 'Envie uma Mensagem',
    name: 'Nome',
    subject: 'Assunto',
    message: 'Mensagem',
    yourFullName: 'Seu nome completo',
    yourEmail: 'seu@email.com',
    messageSubject: 'Assunto da mensagem',
    tellMeAbout: 'Conte-me sobre seu projeto ou oportunidade...',
    sendMessageBtn: 'Enviar Mensagem',
    languageLabel: 'Idioma'
  },
  en: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    fullStackDeveloper: 'Full Stack Developer & Technical Leader',
    knowMyWork: 'Know my work',
    getInTouch: 'Get in touch',
    professionalExperience: 'Professional Experience',
    current: 'Current',
    mainAchievements: 'Main achievements:',
    technologies: 'Technologies:',
    letsChat: 'Let\'s Chat',
    contactInfo: 'Contact Information',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    socialNetworks: 'Social Networks',
    availability: 'Availability',
    availabilityText: 'Open to remote and on-site opportunities in Salvador/BA and Feira de Santana/BA. I usually respond to emails within 24 hours.',
    sendMessage: 'Send a Message',
    name: 'Name',
    subject: 'Subject',
    message: 'Message',
    yourFullName: 'Your full name',
    yourEmail: 'your@email.com',
    messageSubject: 'Message subject',
    tellMeAbout: 'Tell me about your project or opportunity...',
    sendMessageBtn: 'Send Message',
    languageLabel: 'Language'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
