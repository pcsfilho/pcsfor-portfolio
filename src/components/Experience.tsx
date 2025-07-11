import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Vollare",
      position:
        `${t("experiencesVollarePosition")}` +
        `, ${t("fullStack")}` +
        ` & Scrum Master`,
      period: t("experiencesVollarePeriod"),
      location: t("experiencesVollareLocation"),
      description: t("experiencesVollareDescription"),
      achievements: [
        t("experiencesVollareDescription"),
        t("experiencesAchievementsVollareLead"),
        t("experiencesAchievementsVollareAws"),
        t("experiencesAchievementsVollareMentoring"),
        t("experiencesAchievementsVollareScrum"),
      ],
      technologies: [
        "Node.js",
        "Vue.js",
        "AWS",
        "Docker",
        "PostgreSQL",
        "Redis",
      ],
      type: "current",
    },
    {
      company: "ClickZap",
      position: t("experiencesClickZapPosition"),
      period: t("experiencesClickZapPeriod"),
      location: t("experiencesClickZapLocation"),
      description: t("experiencesClickZapDescription"),
      achievements: [
        t("experiencesAchievementsClickZapSkils1"),
        t("experiencesAchievementsClickZapSkils2"),
        t("experiencesAchievementsClickZapSkils3"),
        t("experiencesAchievementsClickZapSkils4"),
      ],
      technologies: [
        "Node.js",
        "Vue.js",
        "MySQL",
        "Redis",
        "WhatsApp API",
        "Jest",
      ],
      type: "past",
    },
    {
      company: "Gerenciagram",
      position: t("experiencesGerenciagramPosition"),
      period: t("experiencesGerenciagramPeriod"),
      location: t("experiencesGerenciagramLocation"),
      description: t("experiencesGerenciagramDescription"),
      achievements: [
        t("experiencesAchievementsGerenciagramSkils1"),
        t("experiencesAchievementsGerenciagramSkils2"),
        t("experiencesAchievementsGerenciagramSkils3"),
        t("experiencesAchievementsGerenciagramSkils4"),
        t("experiencesAchievementsGerenciagramSkils5"),
      ],
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
      type: "past",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("professionalExperience").split(" ")[0]}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t("professionalExperience").split(" ")[1]}
              </span>
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
                <div
                  className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${
                    exp.type === "current" ? "bg-primary" : "bg-secondary"
                  } shadow-lg z-10`}
                ></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-border bg-card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      {exp.type === "current" && (
                        <Badge className="bg-primary text-white">
                          {t("current")}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center text-foreground/60 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2">
                        {t("mainAchievements")}
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-foreground/70 text-sm flex items-start"
                          >
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">
                        {t("technologies")}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-border"
                          >
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
