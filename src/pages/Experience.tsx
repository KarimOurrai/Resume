import { Briefcase } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("resume.experience.positions.techLeadIntelcia.title"),
      company: t("resume.experience.positions.techLeadIntelcia.company"),
      period: t("resume.experience.positions.techLeadIntelcia.period"),
      description: t("resume.experience.positions.techLeadIntelcia.description"),
      responsibilities: t("resume.experience.positions.techLeadIntelcia.responsibilities", {
        returnObjects: true,
      }) as string[],
      skills: [
        "Angular",
        "Spring Boot",
        "Kafka",
        "ELK",
        "Git",
        "JIRA",
        "REST",
        "SOAP",
        "Oracle",
        "Spring Batch",
        "Docker",
        "GitLab CI/CD",
        "JWT",
        "OAuth",
      ],
    },
    {
      title: t("resume.experience.positions.techLeadAtos.title"),
      company: t("resume.experience.positions.techLeadAtos.company"),
      period: t("resume.experience.positions.techLeadAtos.period"),
      description: t("resume.experience.positions.techLeadAtos.description"),
      responsibilities: t("resume.experience.positions.techLeadAtos.responsibilities", {
        returnObjects: true,
      }) as string[],
      skills: [
        "Angular",
        "Spring Boot",
        "Kafka",
        "ELK",
        "Git",
        "JIRA",
        "REST",
        "SOAP",
        "Oracle",
        "Spring Batch",
        "Docker",
        "GitLab CI/CD",
        "JWT",
        "OAuth",
      ],
    },
    {
      title: t("resume.experience.positions.techLeadDocaposte.title"),
      company: t("resume.experience.positions.techLeadDocaposte.company"),
      period: t("resume.experience.positions.techLeadDocaposte.period"),
      description: t("resume.experience.positions.techLeadDocaposte.description"),
      responsibilities: t("resume.experience.positions.techLeadDocaposte.responsibilities", {
        returnObjects: true,
      }) as string[],
      skills: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "Hibernate",
        "Aspose",
        "Mapstruct",
        "JasperReport",
        "Solr",
        "QueryDSL",
        "JPA",
        "CDI",
        "Batch JSR 352",
        "JUnit",
        "Mockito",
        "Confluence",
        "JIRA",
        "Jenkins",
        "SVN",
      ],
    },
    {
      title: t("resume.experience.positions.softwareEngineerOritech.title"),
      company: t("resume.experience.positions.softwareEngineerOritech.company"),
      period: t("resume.experience.positions.softwareEngineerOritech.period"),
      description: t("resume.experience.positions.softwareEngineerOritech.description"),
      responsibilities: t("resume.experience.positions.softwareEngineerOritech.responsibilities", {
        returnObjects: true,
      }) as string[],
      skills: [
        "Angular",
        "JSF/PrimeFaces",
        "Spring MVC",
        "Spring",
        "Spring REST",
        "MySQL",
        "Hibernate",
        "Quartz",
        "Spring Batch",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen pt-24 px-8 ${theme === "light" ? "bg-gray-100" : "bg-[#1a1e23]"}`}
    >
      <div className='max-w-6xl mx-auto'>
        <h1
          className={`text-6xl font-light mb-16 text-center ${theme === "light" ? "text-gray-900" : "text-white"}`}
        >
          {t("experience.title")}
        </h1>
        <div className='space-y-12'>
          {experiences.map((exp, index) => (
            <div key={index} className='relative pl-8 border-l-2 border-pink-500'>
              <div className='absolute -left-[11px] top-0'>
                <div className='w-5 h-5 rounded-full bg-pink-500' />
              </div>
              <div
                className={`p-6 rounded-lg ${theme === "light" ? "bg-white shadow-md" : "bg-[#1e2329]"}`}
              >
                <h3
                  className={`text-2xl mb-1 ${theme === "light" ? "text-gray-900" : "text-white"}`}
                >
                  {exp.title}
                </h3>
                <div className='flex items-center gap-2 mb-4'>
                  <Briefcase className='h-4 w-4 text-pink-500' />
                  <span className='text-pink-500'>{exp.company}</span>
                  <span className={theme === "light" ? "text-gray-500" : "text-gray-400"}>
                    • {exp.period}
                  </span>
                </div>
                <p className={`mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                  {exp.description}
                </p>
                <ul
                  className={`list-disc list-inside mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
                >
                  {Array.isArray(exp.responsibilities)
                    ? exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className='mb-1'>
                          {resp}
                        </li>
                      ))
                    : null}
                </ul>
                <div className='flex flex-wrap gap-2'>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className='text-sm text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
