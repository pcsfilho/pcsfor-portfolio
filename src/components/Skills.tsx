
import { Code, Database, Cloud, Wrench, Users, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Vue.js', level: 95, experience: '4+ anos' },
        { name: 'React.js', level: 90, experience: '3+ anos' },
        { name: 'JavaScript/TypeScript', level: 95, experience: '5+ anos' },
        { name: 'HTML/CSS', level: 90, experience: '5+ anos' },
        { name: 'Tailwind CSS', level: 85, experience: '2+ anos' }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Node.js', level: 95, experience: '5+ anos' },
        { name: 'Python', level: 85, experience: '3+ anos' },
        { name: 'Express.js', level: 90, experience: '4+ anos' },
        { name: 'API REST', level: 95, experience: '5+ anos' },
        { name: 'GraphQL', level: 80, experience: '2+ anos' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'AWS', level: 90, experience: '3+ anos' },
        { name: 'Docker', level: 85, experience: '3+ anos' },
        { name: 'CI/CD', level: 85, experience: '3+ anos' },
        { name: 'Kubernetes', level: 75, experience: '2+ anos' },
        { name: 'Terraform', level: 80, experience: '2+ anos' }
      ]
    },
    {
      title: 'Banco de Dados',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'PostgreSQL', level: 90, experience: '4+ anos' },
        { name: 'MySQL', level: 85, experience: '5+ anos' },
        { name: 'Redis', level: 85, experience: '3+ anos' },
        { name: 'MongoDB', level: 80, experience: '2+ anos' },
        { name: 'DynamoDB', level: 75, experience: '2+ anos' }
      ]
    },
    {
      title: 'Ferramentas',
      icon: Wrench,
      color: 'from-indigo-500 to-blue-600',
      skills: [
        { name: 'Git/GitHub', level: 95, experience: '5+ anos' },
        { name: 'Jest/Cypress', level: 85, experience: '3+ anos' },
        { name: 'Webpack/Vite', level: 80, experience: '3+ anos' },
        { name: 'ESLint/Prettier', level: 90, experience: '4+ anos' },
        { name: 'Figma', level: 75, experience: '2+ anos' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-teal-500 to-green-600',
      skills: [
        { name: 'Liderança', level: 90, experience: '3+ anos' },
        { name: 'Mentoring', level: 85, experience: '3+ anos' },
        { name: 'Comunicação', level: 95, experience: 'Sempre' },
        { name: 'Trabalho em Equipe', level: 95, experience: 'Sempre' },
        { name: 'Resolução de Problemas', level: 90, experience: 'Sempre' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Minhas <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Habilidades</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tecnologias e competências que domino, desenvolvidas ao longo de anos de experiência prática em projetos reais.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white group">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-200`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {skill.experience}
                          </Badge>
                          <span className="text-sm font-semibold text-gray-600">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
              <div className="flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary mr-3" />
                <h4 className="text-xl font-bold text-gray-900">Sempre Aprendendo</h4>
              </div>
              <p className="text-gray-700 max-w-2xl">
                A tecnologia evolui rapidamente, e eu mantenho-me atualizado através de cursos, 
                certificações e projetos pessoais. Atualmente estudando arquiteturas serverless avançadas e Machine Learning.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
