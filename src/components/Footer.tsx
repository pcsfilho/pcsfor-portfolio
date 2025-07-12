import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                Paulo Filho
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t("engineerFullStackTechLead")}
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4"> {t("quickLinks")}</h4>
              <div className="space-y-2">
                <a
                  key="#home"
                  onClick={() => scrollToSection("#home")}
                  className="block cursor-pointer text-gray-400 hover:text-primary transition-colors"
                >
                  {t("home")}
                </a>
                <a
                  key="#about"
                  onClick={() => scrollToSection("#about")}
                  className="block cursor-pointer text-gray-400 hover:text-primary transition-colors"
                >
                  {t("about")}
                </a>
                <a
                  key="#experience"
                  onClick={() => scrollToSection("#experience")}
                  className="block cursor-pointer text-gray-400 hover:text-primary transition-colors"
                >
                  {t("experience")}
                </a>
                <a
                  key="#projects"
                  onClick={() => scrollToSection("#projects")}
                  className="block cursor-pointer text-gray-400 hover:text-primary transition-colors"
                >
                  {t("projects")}
                </a>
                <a
                  key="#skills"
                  onClick={() => scrollToSection("#skills")}
                  className="block cursor-pointer text-gray-400 hover:text-primary transition-colors"
                >
                  {t("skills")}
                </a>
                <a
                  key="#contact"
                  onClick={() => scrollToSection("#contact")}
                  className="block cursor-pointer text-gray-400 hover:text-primary transition-colors"
                >
                  {t("contact")}
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>Feira de Santana - Salvador, BA - Brasil</p>
                <a
                  href="mailto:paulo.ecomp@gmail.com"
                  className="block hover:text-primary transition-colors"
                >
                  paulo.ecomp@gmail.com
                </a>
                <a
                  href="tel:+5571992346773"
                  className="block hover:text-primary transition-colors"
                >
                  (71) 99234-6773
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/pcsfilho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-primary transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/pcsfilho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:paulo.ecomp@gmail.com"
              className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-secondary transition-all duration-200 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Paulo Filho. {t("allRightsReserved")}
              </p>
              {/* <div className="flex items-center text-gray-400 text-sm">
                <span>Feito por</span>
                <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
                <span>e React.js</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
