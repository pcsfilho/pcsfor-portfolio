import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    home: "Início",
    about: "Sobre",
    me: "Mim",
    aboutDescription: `Desenvolvedor apaixonado por tecnologia com experiência em liderar
              equipes e criar soluções inovadoras. Especialista em Node.js,
              Vue.js, React.js e arquiteturas modernas na nuvem.`,
    experience: "Experiência",
    projects: "Projetos",
    skills: "Habilidades",
    contact: "Contato",
    fullStackDeveloper: "Densevolvedor Full Stack e Líder Técnico",
    fullStack: "Densevolvedor Full Stack",
    knowMyWork: "Conheça meu trabalho",
    getInTouch: "Entrar em contato",
    professionalExperience: "Experiência Profissional",
    current: "Atual",
    mainAchievements: "Principais conquistas:",
    technologies: "Tecnologias:",
    letsChat: "Vamos Conversar",
    contactInfo: "Informações de Contato",
    email: "Email",
    phone: "Telefone",
    location: "Localização",
    socialNetworks: "Redes Sociais",
    availability: "Disponibilidade",
    availabilityText:
      "Aberto a oportunidades remotas e presenciais em Salvador/BA e Feira de Santana/BA. Respondo emails geralmente em até 24 horas.",
    sendMessage: "Envie uma Mensagem",
    name: "Nome",
    subject: "Assunto",
    message: "Mensagem",
    yourFullName: "Seu nome completo",
    yourEmail: "seu@email.com",
    messageSubject: "Assunto da mensagem",
    tellMeAbout: "Conte-me sobre seu projeto ou oportunidade...",
    sendMessageBtn: "Enviar Mensagem",
    languageLabel: "Idioma",
    experiencesVollarePosition: "Líder Técnico",
    experiencesVollarePeriod: "2020 - Presente",
    experiencesVollareLocation: "Salvador/BA e Feira de Santana/BA",
    experiencesVollareDescription:
      "Lidero uma equipe de desenvolvimento focada em soluções inovadoras para o setor de tecnologia. Responsável pela arquitetura de sistemas, mentoring da equipe e definição de estratégias técnicas.",
    experiencesAchievementsVollareLead:
      "Liderança de equipe de 8+ desenvolvedores",
    experiencesAchievementsVollareAws:
      "Implementação de arquiteturas escaláveis com AWS",
    experiencesAchievementsVollareDeploy:
      "Redução de 40% no tempo de deploy através de CI/CD",
    experiencesAchievementsVollareMentoring:
      "Mentoring e desenvolvimento técnico da equipe",
    experiencesAchievementsVollareScrum: "Scrum Master",
    experiencesClickZapPosition: "Desenvolvedor Full Stack",
    experiencesClickZapPeriod: "2020 - 2023",
    experiencesClickZapLocation: "Salvador/BA e Feira de Santana/BA",
    experiencesClickZapDescription:
      "Desenvolvimento de plataforma de automação de marketing digital com foco em WhatsApp Business. Participei desde a concepção até a entrega de features críticas do produto.",
    experiencesAchievementsClickZapSkils1:
      "Desenvolvimento de APIs REST robustas",
    experiencesAchievementsClickZapSkils2:
      "Criação de dashboard reativo com Vue.js",
    experiencesAchievementsClickZapSkils3:
      "Integração com APIs do WhatsApp Business",
    experiencesAchievementsClickZapSkils4:
      "Otimização de performance em aplicações de alto volume",
    fullStackDeveloperDescription1: `Com mais de 5 anos de experiência em desenvolvimento de
                  software, tenho uma paixão genuína por criar soluções que
                  realmente fazem a diferença. Minha jornada começou com a
                  curiosidade de entender como as coisas funcionam e evoluiu
                  para uma carreira dedicada a transformar ideias em produtos
                  digitais de alto impacto.`,
    fullStackDeveloperDescription2: `Atualmente, atuo como Líder Técnico na Empresa Vollare, onde alio conhecimento técnico aprofundado a habilidades de liderança para orientar equipes na entrega de soluções eficientes e de alta qualidade. Acredito que tecnologia é, acima de tudo, sobre pessoas — por isso, meu foco está em construir times colaborativos e produtos que gerem valor real.`,
    fullStackDeveloperDescription3: `Sou especializado em arquiteturas modernas e possuo sólida
                  experiência com Node.js, Vue.js, React.js, Python e AWS. Estou
                  em constante busca por evolução profissional, aprendendo
                  continuamente e contribuindo ativamente com a comunidade de
                  tecnologia.`,
    yearsOfExperience: "Anos de Experiência",
    companies: "Empresas",
    highlightTechnicalExpertise1: "Expertise Técnica",
    highlightDescription1:
      "Domínio completo do stack moderno de desenvolvimento, desde frontend até infraestrutura cloud.",
    highlightTechnicalExpertise2: "Liderança",
    highlightDescription2:
      "Experiência comprovada em liderar equipes técnicas e mentoring de desenvolvedores.",
    highlightTechnicalExpertise3: "Inovação",
    highlightDescription3:
      "Busca constante por soluções criativas e implementação de melhores práticas.",
    highlightTechnicalExpertise4: "Resultados",
    highlightDescription4:
      "Foco em entrega de valor e impacto positivo nos projetos e na organização.",
    // Gerenciagram
    experiencesGerenciagramPosition: "Full Stack Developer",
    experiencesGerenciagramPeriod: "2018 - 2019",
    experiencesGerenciagramLocation: "Feira de Santana/BA",
    experiencesGerenciagramDescription:
      "Primeiro emprego profissional, onde desenvolvi fundamentos sólidos em desenvolvimento web. Trabalhei em projetos de gestão empresarial e automação de processos.",
    experiencesAchievementsGerenciagramSkils1:
      "Desenvolvimento de sistema de gestão completo",
    experiencesAchievementsGerenciagramSkils2:
      "Criação de relatórios automatizados",
    experiencesAchievementsGerenciagramSkils3:
      "Implementação de autenticação e autorização",
    experiencesAchievementsGerenciagramSkils4: "Colaboração em equipe ágil",
    experiencesAchievementsGerenciagramSkils5:
      "Integração e automação com APIs do Instagram",
    my: "Meus",
    projectsIntroduction:
      "Alguns dos projetos que desenvolvi ao longo da minha carreira, demonstrando expertise em diferentes tecnologias e domínios.",
    seeMoore: "Ver mais",
  },
  en: {
    home: "Home",
    about: "About",
    me: "me",
    aboutDescription: `A passionate developer with experience leading teams and creating innovative solutions. Specializing in Node.js, Vue.js, React.js, and modern cloud architectures.`,
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    fullStack: "Full Stack Developer",
    fullStackDeveloper: "Full Stack Developer & Technical Leader",
    fullStackDeveloperDescription1: `With over 5 years of experience in software development, I have a genuine passion for creating solutions that truly make a difference. My journey began with a curiosity to understand how things work and evolved into a career dedicated to transforming ideas into high-impact digital products.`,
    knowMyWork: "Know my work",
    getInTouch: "Get in touch",
    professionalExperience: "Professional Experience",
    current: "Current",
    mainAchievements: "Main achievements:",
    technologies: "Technologies:",
    letsChat: "Let's Chat",
    contactInfo: "Contact Information",
    email: "Email",
    phone: "Phone",
    location: "Location",
    socialNetworks: "Social Networks",
    availability: "Availability",
    availabilityText:
      "Open to remote and on-site opportunities in Salvador/BA and Feira de Santana/BA. I usually respond to emails within 24 hours.",
    sendMessage: "Send a Message",
    name: "Name",
    subject: "Subject",
    message: "Message",
    yourFullName: "Your full name",
    yourEmail: "your@email.com",
    messageSubject: "Message subject",
    tellMeAbout: "Tell me about your project or opportunity...",
    sendMessageBtn: "Send Message",
    languageLabel: "Language",
    experiencesVollarePosition: "Tech Lead",
    experiencesVollarePeriod: "2020 - Current",
    experiencesVollareLocation: "Salvador/BA e Feira de Santana/BA",
    experiencesVollareDescription:
      "I lead a development team focused on innovative solutions for the technology sector. I'm responsible for systems architecture, team mentoring, and defining technical strategies.",
    experiencesAchievementsVollareLead: "Leading a team of 8+ developers",
    experiencesAchievementsVollareAws:
      "Implementing scalable architectures with AWS",
    experiencesAchievementsVollareDeploy:
      "40% reduction in deployment time through CI/CD",
    experiencesAchievementsVollareMentoring:
      "Mentoring and technical development of the team",
    experiencesAchievementsVollareScrum: "Scrum Master",
    fullStackDeveloperDescription2: `I currently work as a Technical Leader at Vollare, where I combine in-depth technical knowledge with leadership skills to guide teams in delivering efficient, high-quality solutions. I believe that technology is, above all, about people — that's why I focus on building collaborative teams and products that generate real value.`,
    fullStackDeveloperDescription3: `I specialize in modern architectures and have solid
experience with Node.js, Vue.js, React.js, Python, and AWS. I am
constantly seeking professional development, continually learning
and actively contributing to the technology community.`,
    yearsOfExperience: "Years of Experience",
    companies: "Companies",
    highlightTechnicalExpertise1: "Technical Expertise",
    highlightDescription1:
      "Complete mastery of the modern development stack, from frontend to cloud infrastructure.",
    highlightTechnicalExpertise2: "Leadership",
    highlightDescription2:
      "Proven experience leading technical teams and mentoring developers.",
    highlightTechnicalExpertise3: "Innovation",
    highlightDescription3:
      "Constant search for creative solutions and implementation of best practices.",
    highlightTechnicalExpertise4: "Results",
    highlightDescription4:
      "Focus on delivering value and positive impact on projects and the organization.",
    experiencesClickZapPosition: "Full Stack Developer",
    experiencesClickZapPeriod: "2019 - 2023",
    experiencesClickZapLocation: "Salvador/BA e Feira de Santana/BA",
    experiencesClickZapDescription:
      "Development of a digital marketing automation platform focused on WhatsApp Business. I participated from conception to delivery of critical product features.",
    experiencesAchievementsClickZapSkils1: "Development of robust REST APIs",
    experiencesAchievementsClickZapSkils2:
      "Creation of a reactive dashboard with Vue.js",
    experiencesAchievementsClickZapSkils3:
      "Integration with WhatsApp Business APIs",
    experiencesAchievementsClickZapSkils4:
      "Performance optimization in high-volume applications",
    // Gerenciagram
    experiencesGerenciagramPosition: "Full Stack Developer",
    experiencesGerenciagramPeriod: "2018 - 2019",
    experiencesGerenciagramLocation: "Feira de Santana/BA",
    experiencesGerenciagramDescription:
      "First professional job, where I developed a solid foundation in web development. I worked on business management and process automation projects.",
    experiencesAchievementsGerenciagramSkils1:
      "Development of a complete management system",
    experiencesAchievementsGerenciagramSkils2: "Creation of automated reports",
    experiencesAchievementsGerenciagramSkils3:
      "Implementation of authentication and authorization",
    experiencesAchievementsGerenciagramSkils4: "Agile team collaboration",
    experiencesAchievementsGerenciagramSkils5:
      "Integration and automation with Instagram APIs",
    my: "My",
    projectsIntroduction:
      "Some of the projects I've developed throughout my career, demonstrating expertise in different technologies and domains.",
    seeMoore: "See more",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["pt"]] || key
    );
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
