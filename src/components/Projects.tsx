
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Automação ClickZap',
      description: 'Plataforma completa de automação de marketing via WhatsApp Business, com dashboard em tempo real, chatbots inteligentes e integração com CRM.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Vue.js', 'WhatsApp API', 'MySQL', 'Redis'],
      category: 'Profissional',
      status: 'Concluído',
      highlights: ['5000+ usuários ativos', 'Alta disponibilidade', 'Tempo real']
    },
    {
      title: 'Arquitetura Cloud AWS',
      description: 'Design e implementação de arquitetura serverless na AWS para aplicação de alto volume, com auto-scaling, monitoramento e CI/CD automatizado.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'CloudWatch', 'Terraform'],
      category: 'Arquitetura',
      status: 'Em produção',
      highlights: ['99.9% uptime', 'Auto-scaling', 'Serverless']
    },
    {
      title: 'Dashboard de Gestão - Vollare',
      description: 'Interface administrativa moderna para gestão de equipes e projetos, com relatórios em tempo real, notificações push e sistema de permissões granular.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Vue.js 3', 'Composition API', 'Chart.js', 'WebSockets', 'PostgreSQL'],
      category: 'Frontend',
      status: 'Ativo',
      highlights: ['Interface moderna', 'Tempo real', 'Responsivo']
    },
    {
      title: 'API de Microserviços',
      description: 'Arquitetura de microserviços com Node.js, implementando padrões de design como CQRS, Event Sourcing e Circuit Breaker para alta disponibilidade.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'RabbitMQ'],
      category: 'Backend',
      status: 'Em desenvolvimento',
      highlights: ['Microserviços', 'Alta performance', 'Escalável']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meus <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi ao longo da minha carreira, demonstrando expertise em diferentes tecnologias e domínios.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="outline" 
                      className={`bg-white ${
                        project.status === 'Em produção' || project.status === 'Ativo' 
                          ? 'text-green-600 border-green-600' 
                          : project.status === 'Em desenvolvimento'
                          ? 'text-blue-600 border-blue-600'
                          : 'text-gray-600 border-gray-600'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-secondary">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      Projeto {project.category}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white hover:border-primary">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Ver mais
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Quer ver mais projetos ou discutir uma oportunidade?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              asChild
            >
              <a href="#contact">
                Vamos conversar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
