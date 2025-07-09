
import { Code, Users, Lightbulb, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Expertise Técnica',
      description: 'Domínio completo do stack moderno de desenvolvimento, desde frontend até infraestrutura cloud'
    },
    {
      icon: Users,
      title: 'Liderança',
      description: 'Experiência comprovada em liderar equipes técnicas e mentoring de desenvolvedores'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Busca constante por soluções criativas e implementação de melhores práticas'
    },
    {
      icon: Target,
      title: 'Resultados',
      description: 'Foco em entrega de valor e impacto positivo nos projetos e na organização'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Desenvolvedor Full Stack & Líder Técnico
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Com mais de 5 anos de experiência no desenvolvimento de software, tenho uma paixão genuína por criar soluções que fazem a diferença. Minha jornada começou com curiosidade sobre como as coisas funcionam e evoluiu para uma carreira focada em transformar ideias em realidade digital.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Atualmente, atuo como Líder Técnico na Vollare, onde combino conhecimento técnico profundo com habilidades de liderança para guiar equipes na entrega de produtos de alta qualidade. Acredito que tecnologia é sobre pessoas, e meu foco está em construir equipes colaborativas e soluções que realmente importam.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Especializado em arquiteturas modernas, tenho experiência sólida com Node.js, Vue.js, React.js, Python e AWS. Sempre em busca de aprendizado contínuo e compartilhamento de conhecimento com a comunidade.
              </p>
            </div>

            {/* Stats or additional info */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-600 text-sm">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">3</div>
                  <div className="text-gray-600 text-sm">Empresas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                  <div className="text-gray-600 text-sm">Tecnologias</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-200 border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
