import { ExternalLink, Github, Star } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Projects = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  const projects = [
    {
      title: t("titleCliczap"),
      description: t("descriptionCliczap"),
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: [
        "Node.js",
        "Vue.js",
        "WhatsApp API",
        "MySQL",
        "Redis",
        "MongoDB",
        "NodeJs",
      ],
      category: t("professional"),
      status: t("done"),
      highlights: [
        t("highlightsCliczap1"),
        t("highlightsCliczap2"),
        t("highlightsCliczap3"),
      ],
    },
    {
      title: t("awsCloudArchitecture"),
      description: t("awsCloudArchitectureDescription"),
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      technologies: [
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "CloudWatch",
        "Terraform",
      ],
      category: t("architecture"),
      status: t("inProduction"),
      highlights: ["99.9% uptime", "Auto-scaling", "Serverless"],
    },
    {
      title: t("titleVollare"),
      description: t("descriptionVollare"),
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: [
        "Vue.js 3",
        "Composition API",
        "Chart.js",
        "WebSockets",
        "MongoDB",
        "GraphQL",
        "Redis",
        "NodeJs",
      ],
      category: "Frontend",
      status: t("active"),
      highlights: [
        t("highlightsVollare1"),
        t("highlightsVollare2"),
        t("highlightsVollare3"),
        t("highlightsVollare4"),
      ],
    },
    {
      title: t("titleMicroService"),
      description: t("descriptionMicroService"),
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "RabbitMQ"],
      category: "Backend",
      status: t("inDevelopment"),
      highlights: [
        t("highlightsMicroService1"),
        t("highlightsMicroService2"),
        t("highlightsMicroService3"),
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("my")}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t("projects")}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("projectsIntroduction")}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className={`bg-white ${
                        project.status === "Em produção" ||
                        project.status === "Ativo"
                          ? "text-green-600 border-green-600"
                          : project.status === "Em desenvolvimento"
                          ? "text-blue-600 border-blue-600"
                          : "text-gray-600 border-gray-600"
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
                      <div
                        key={highlightIndex}
                        className="flex items-center text-sm text-secondary"
                      >
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs text-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      {project.category}
                    </div>
                    {/* <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        {t("seeMoore")}
                      </Button>
                    </div> */}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">{t("mooreProjects")}</p>
            <a
              key="#contact"
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {t("letsTalk")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
