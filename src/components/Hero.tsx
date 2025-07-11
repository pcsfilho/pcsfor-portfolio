import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/80 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img
                src="/lovable-uploads/80edfbe2-1f2a-4fec-81ed-cef44f2d9375.png"
                alt="Paulo Filho"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div
            className="mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Paulo Filho
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              {t("fullStackDeveloper")}
            </p>
          </div>

          {/* Description */}
          <div
            className="mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {t("aboutDescription")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={scrollToAbout}
            >
              {t("knowMyWork")}
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
                {t("getInTouch")}
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-foreground/30 rounded-full animate-pulse mt-2"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
