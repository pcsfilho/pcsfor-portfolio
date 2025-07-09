
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: 'Vollare',
      position: 'Líder Técnico',
      period: '2020 - Presente',
      location: 'Salvador, BA',
      description: 'Lidero uma equipe de desenvolvimento focada em soluções inovadoras para o setor de tecnologia. Responsável pela arquitetura de sistemas, mentoring da equipe e definição de estratégias técnicas.',
      achievements: [
        'Liderança de equipe de 8+ desenvolvedores',
        'Implementação de arquiteturas escaláveis com AWS',
        'Redução de 40% no tempo de deploy através de CI/CD',
        'Mentoring e desenvolvimento técnico da equipe'
      ],
      technologies: ['Node.js', 'Vue.js', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
      type: 'current'
    },
    {
      company: 'ClickZap',
      position: 'Desenvolvedor Full Stack',
      period: '2019 - 2023',
      location: 'Salvador, BA',
      description: 'Desenvolvimento de plataforma de automação de marketing digital com foco em WhatsApp Business. Participei desde a concepção até a entrega de features críticas do produto.',
      achievements: [
        'Desenvolvimento de APIs REST robustas',
        'Criação de dashboard reativo com Vue.js',
        'Integração com APIs do WhatsApp Business',
        'Otimização de performance em aplicações de alto volume'
      ],
      technologies: ['Node.js', 'Vue.js', 'MySQL', 'Redis', 'WhatsApp API', 'Jest'],
      type: 'past'
    },
    {
      company: 'Gerenciagram',
      position: 'Desenvolvedor Full Stack',
      period: '2018 - 2019',
      location: 'Salvador, BA',
      description: 'Primeiro emprego profissional, onde desenvolvi fundamentos sólidos em desenvolvimento web. Trabalhei em projetos de gestão empresarial e automação de processos.',
      achievements: [
        'Desenvolvimento de sistema de gestão completo',
        'Criação de relatórios automatizados',
        'Implementação de autenticação e autorização',
        'Colaboração em equipe ágil'
      ],
      technologies: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'past'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiência <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Profissional</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${
                  exp.type === 'current' ? 'bg-primary' : 'bg-secondary'
                } shadow-lg z-10`}></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                      </div>
                      {exp.type === 'current' && (
                        <Badge className="bg-primary text-white">Atual</Badge>
                      )}
                    </div>

                    <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Principais conquistas:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-700 text-sm flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Tecnologias:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
