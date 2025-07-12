import { Code, Users, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const highlights = [
    {
      icon: Code,
      title: t("highlightTechnicalExpertise1"),
      description: t("highlightDescription1"),
    },
    {
      icon: Users,
      title: t("highlightTechnicalExpertise2"),
      description: t("highlightDescription2"),
    },
    {
      icon: Lightbulb,
      title: t("highlightTechnicalExpertise3"),
      description: t("highlightDescription3"),
    },
    {
      icon: Target,
      title: t("highlightTechnicalExpertise4"),
      description: t("highlightDescription4"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("about")}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t("me")}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("engineerFullStackDeveloper")}
              </h3>
              <div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {t("fullStackDeveloperDescription1")}
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {t("fullStackDeveloperDescription2")}
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {t("fullStackDeveloperDescription3")}
                </p>
              </div>
            </div>

            {/* Stats or additional info */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-gray-600 text-sm">
                    {t("yearsOfExperience")}:
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 text-sm">{t("companies")}:</div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    3
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 text-sm">{t("projects")}:</div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    50+
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 text-sm">
                    {t("technologies")}
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    10+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-200 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
