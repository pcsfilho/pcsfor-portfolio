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
    project: "Projeto",
    skills: "Habilidades",
    skillsSentence:
      "Tecnologias e competências que domino, desenvolvidas ao longo de anos de experiência prática em projetos reais.",
    contact: "Contato",
    fullStackDeveloper: "Densevolvedor Full Stack e Líder Técnico",
    engineerFullStackDeveloper:
      "Engenheiro de Computação, Densevolvedor Full Stack e Líder Técnico",
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
    fullStackDeveloperDescription1: `Sou Engenheiro de Computação formado pela Universidade Estadual de Feira de Santana (UEFS), curso que valoriza o Aprendizado Baseado em Problemas (Problem-Based Learning – PBL) em sua grade, metodologia que moldou minha capacidade de resolver desafios complexos de forma criativa e colaborativa. Durante a graduação, integrei o PET (Programa de Educação Tutorial), onde desenvolvi projetos multidisciplinares e fortalecei minhas habilidades em liderança, pesquisa e extensão.

Tenho mais de 5 anos de experiência no desenvolvimento de software, atuando em projetos que vão desde sistemas corporativos até produtos digitais com foco em usabilidade e performance. Minha trajetória profissional é movida pela curiosidade e pela vontade de transformar ideias em soluções reais e escaláveis.

Atualmente, atuo como Líder Técnico na Vollare, onde combino uma base técnica sólida com competências de gestão para orientar equipes no desenvolvimento de soluções eficientes, seguras e de alto valor para o cliente. Acredito que tecnologia é sobre pessoas — por isso, priorizo a construção de times colaborativos e ambientes onde o aprendizado contínuo é parte da cultura.

Sou especializado em arquiteturas modernas de software e tenho experiência prática com Node.js, Vue.js, React, Python e serviços da AWS. Estou constantemente aprendendo, experimentando novas tecnologias e compartilhando conhecimento com a comunidade tech.

Busco oportunidades onde possa unir minha paixão por engenharia, inovação e liderança para criar produtos que façam a diferença.`,
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
    professional: "Profissional",
    done: "Concluído",
    architecture: "Arquitetura",
    inProduction: "Em produção",
    titleCliczap: "Sistema de Automação com Whatsapp na Empresa ClickZap",
    descriptionCliczap:
      "Plataforma completa de automação de marketing via WhatsApp Business, com dashboard em tempo real, chatbots inteligentes e integração com CRM.",
    highlightsCliczap1: "5000+ usuários ativos",
    highlightsCliczap2: "Alta disponibilidade",
    highlightsCliczap3: "Tempo real",
    awsCloudArchitecture: "Arquitetura Cloud AWS",
    awsCloudArchitectureDescription:
      "Design e implementação de arquitetura serverless na AWS para aplicação de alto volume, com auto-scaling, monitoramento e CI/CD automatizado.",
    titleVollare: "Sistema de Gestão de Registro de Imóveis - Vollare",
    descriptionVollare:
      "Interface administrativa moderna para gestão voltados para cartórios sistemas de registro de imóveis, com integraçõ com tribunais de Justiça e orgãos nacionais. Desenvolvimento de projetos  de atendimento ao cliente, relatórios de gestão em tempo real, notificações push e sistema de permissões granular.",
    highlightsVollare1: "Interface moderna",
    highlightsVollare2: "Tempo real",
    highlightsVollare3: "Responsivo",
    highlightsVollare4: "Integrações com ferramentas externas",
    active: "Ativo",
    titleMicroService: "API de Microserviços",
    descriptionMicroService:
      "Arquitetura de microserviços com Node.js, implementando padrões de design como CQRS, Event Sourcing e Circuit Breaker para alta disponibilidade.",
    highlightsMicroService1: "Microserviços",
    highlightsMicroService2: "Alta performance",
    highlightsMicroService3: "Escalável",
    inDevelopment: "Em desenvolvimento",
    mooreProjects: "Quer ver mais projetos ou discutir uma oportunidade?",
    letsTalk: "Vamos conversar",
    dataBase: "Banco de Dados",
    tools: "Ferramentas",
    leadership: "Liderança",
    communication: "Comunicação",
    teamwork: "Trabalho em Equipe",
    problemSolving: "Resolução de Problemas",
    alwaysLearning: "Sempre Aprendendo",
    alwaysLearningDescription:
      "A tecnologia evolui rapidamente, e eu mantenho-me atualizado através de cursos, certificações e projetos pessoais. Atualmente estudando arquiteturas serverless avançadas e Machine Learning.",
    letsChatDescription: `Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato e vamos transformar ideias em realidade!`,
    engineerFullStackTechLead:
      "Engenheiro de Computação, Desenvolvedor Full Stack & Líder Técnico apaixonado por criar soluções que fazem a diferença.",
    quickLinks: "Links Rápidos",
    allRightsReserved: "Todos os direitos reservados.",
  },
  en: {
    home: "Home",
    about: "About",
    me: "me",
    aboutDescription: `A passionate developer with experience leading teams and creating innovative solutions. Specializing in Node.js, Vue.js, React.js, and modern cloud architectures.`,
    experience: "Experience",
    projects: "Projects",
    project: "Project",
    skills: "Skills",
    skillsSentence:
      "Technologies and skills I master, developed over years of practical experience in real projects.",
    contact: "Contact",
    fullStack: "Full Stack Developer",
    fullStackDeveloper: "Full Stack Developer & Technical Leader",
    engineerFullStackDeveloper:
      "Computer Engineer, Full Stack Developer and Technical Lead",
    fullStackDeveloperDescription1: `I graduated in Computer Engineering from the State University of Feira de Santana (UEFS), an institution that values Problem-Based Learning (PBL), a methodology that shaped my ability to solve complex challenges creatively and collaboratively. During my undergraduate studies, I participated in the PET (Tutorial Education Program), where I developed multidisciplinary projects and strengthened my leadership, research, and outreach skills.

I have over 5 years of experience in software development, working on projects ranging from enterprise systems to digital products with a focus on usability and performance. My professional trajectory is driven by curiosity and the desire to transform ideas into real, scalable solutions.

Currently, I work as a Technical Leader at Vollare, where I combine a solid technical foundation with management skills to guide teams in developing efficient, secure, and high-value solutions for the client. I believe that technology is about people—that's why I prioritize building collaborative teams and environments where continuous learning is part of the culture.

I specialize in modern software architectures and have hands-on experience with Node.js, Vue.js, React, Python, and AWS services. I'm constantly learning, experimenting with new technologies, and sharing knowledge with the tech community.

I seek opportunities where I can combine my passion for engineering, innovation, and leadership to create products that make a difference.`,
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
    professional: "Professional",
    done: "Done",
    architecture: "Architecture",
    inProduction: "In Production",
    titleCliczap: "Automation System with WhatsApp at ClickZap Company",
    descriptionCliczap:
      "Complete marketing automation platform via WhatsApp Business, with real-time dashboard, intelligent chatbots, and CRM integration.",
    highlightsCliczap1: "5,000+ active users.",
    highlightsCliczap2: "High availability.",
    highlightsCliczap3: "Real-time.",
    awsCloudArchitecture: "AWS Cloud Architecture",
    awsCloudArchitectureDescription:
      "Design and implementation of serverless architecture on AWS for high-volume applications, with auto-scaling, monitoring and automated CI/CD.",
    titleVollare: "Real Estate Registry Management System - Vollare",
    descriptionVollare:
      "A modern administrative interface for managing notary offices and real estate registration systems, with integration with courts of justice and national agencies. Development of customer service projects, real-time management reports, push notifications, and a granular permission system.",
    highlightsVollare1: "Modern interface",
    highlightsVollare2: "Real-time",
    highlightsVollare3: "Responsive",
    highlightsVollare4: "Integrations with external tools",
    active: "Active",
    titleMicroService: "Microservices API",
    descriptionMicroService:
      "Microservices architecture with Node.js, implementing design patterns such as CQRS, Event Sourcing, and Circuit Breaker for high availability.",
    highlightsMicroService1: "Microservices",
    highlightsMicroService2: "High performance",
    highlightsMicroService3: "Scalable",
    inDevelopment: "In development",
    mooreProjects: "Want to see more projects or discuss an opportunity?",
    letsTalk: "Let's talk",
    dataBase: "Data Base",
    tools: "Tools",
    leadership: "Leadership",
    communication: "Communication",
    teamwork: "Team Work",
    problemSolving: "Problem Solving",
    alwaysLearning: "Always Learning",
    alwaysLearningDescription:
      "Technology evolves rapidly, and I stay up-to-date through courses, certifications, and personal projects. I'm currently studying advanced serverless architectures and machine learning.",
    letsChatDescription: `I'm always open to new opportunities and interesting projects.
Get in touch and let's turn your ideas into reality!`,
    engineerFullStackTechLead:
      "Computer Engineer, Full Stack Developer, and Technical Lead passionate about creating solutions that make a difference.",
    quickLinks: "Quick Links",
    allRightsReserved: "All rights reserved.",
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
