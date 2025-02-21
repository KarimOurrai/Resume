import { Briefcase } from "lucide-react";
import { useTheme } from "next-themes";

const Experience = () => {
  const { theme } = useTheme();
  const experiences = [
    {
      title: "Tech Lead and Java Consultant",
      company: "La Poste",
      period: "2021 - Present",
      description: "Leading the Digital Factory project for La Poste France, focusing on integrating premium offerings through microservices architecture.",
      responsibilities: [
        "Technical design of frontend and backend modules",
        "Technical support to the dev team",
        "Strengthening the development team"
      ],
      skills: ["Angular", "Spring Boot", "Kafka", "Cassandra", "ElasticSearch", "Docker", "Jenkins"]
    },
    {
      title: "Full-stack Software Engineer and Tech Lead",
      company: "DOCAPOST",
      period: "2017 - 2021",
      description: "Led development of insurance solution for managing brokers and agents, handling policies, benefits administration, and document management.",
      responsibilities: [
        "Developing new features and Application Maintenance",
        "Payment system integration",
        "Technical design specifications",
        "Code review"
      ],
      skills: ["React", "Spring Boot", "PostgreSQL", "ElasticSearch", "Docker", "GitLab-CI"]
    },
    {
      title: "Full-stack Software Engineer",
      company: "Oritech",
      period: "2015 - 2017",
      description: "Developed various SaaS platforms including vehicle management and tracking systems, and RFID-based applications.",
      responsibilities: [
        "Vehicle management platform development",
        "RFID integration projects",
        "Full-stack development with Java and Angular"
      ],
      skills: ["Angular", "Spring MVC", "MySQL", "Hibernate", "RFID", "Git"]
    }
  ];

  return (
    <div className={`min-h-screen pt-24 px-8 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1a1e23]'}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-6xl font-light mb-16 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Experience</h1>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-pink-500">
              <div className="absolute -left-[11px] top-0">
                <div className="w-5 h-5 rounded-full bg-pink-500" />
              </div>
              <div className={`p-6 rounded-lg ${theme === 'light' ? 'bg-white shadow-md' : 'bg-[#1e2329]'}`}>
                <h3 className={`text-2xl mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{exp.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-4 w-4 text-pink-500" />
                  <span className="text-pink-500">{exp.company}</span>
                  <span className={theme === 'light' ? 'text-gray-500' : 'text-gray-400'}>• {exp.period}</span>
                </div>
                <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{exp.description}</p>
                <ul className={`list-disc list-inside mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="mb-1">{resp}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full"
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