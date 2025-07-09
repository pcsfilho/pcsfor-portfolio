
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/lovable-uploads/80edfbe2-1f2a-4fec-81ed-cef44f2d9375.png" 
                alt="Paulo Cezar dos Santos Filho"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Paulo Cezar
              <span className="block text-3xl md:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                dos Santos Filho
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Full Stack Developer & Líder Técnico
            </p>
          </div>

          {/* Description */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor apaixonado por tecnologia com experiência em liderar equipes e criar soluções inovadoras. 
              Especialista em Node.js, Vue.js, React.js e arquiteturas modernas na nuvem.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={scrollToAbout}
            >
              Conheça meu trabalho
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              asChild
            >
              <a href="mailto:paulo.ecomp@gmail.com">
                <Mail className="mr-2 w-5 h-5" />
                Entrar em contato
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://www.linkedin.com/in/pcsfilho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 text-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/pcsfilho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 text-gray-800"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:paulo.ecomp@gmail.com"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 text-secondary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse mt-2"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
