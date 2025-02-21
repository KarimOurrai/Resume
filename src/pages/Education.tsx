import { GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";

const Education = () => {
  const { theme } = useTheme();
  const education = [
    {
      degree: "Software Engineer",
      institution: "Mohammed VI International Academy for Civil Engineering",
      period: "2012 - 2015",
      description: "Completed Software Engineering program with focus on practical software development and engineering principles."
    },
    {
      degree: "Classes Préparatoires aux Grandes Écoles",
      institution: "CPGE",
      period: "2010 - 2012",
      description: "Intensive preparation program in Physics"
    },
    {
      degree: "Baccalaureat",
      institution: "High School",
      period: "2009 - 2010",
      description: "Mathematics specialization"
    }
  ];

  const skills = {
    "Backend": [
      "Java/Java EE",
      "Spring Boot",
      "Spring MVC",
      "Spring Batch",
      "EJB 3.0",
      "JPA/Hibernate",
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "REST APIs",
      "SOAP"
    ],
    "Frontend": [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript/ES6",
      "HTML5/CSS3",
      "JSF",
      "PrimeFaces",
      "Responsive Design"
    ],
    "Microservices": [
      "Docker",
      "Kubernetes",
      "Apache Kafka",
      "Cassandra",
      "ElasticSearch",
      "Kibana",
      "Jenkins",
      "GitLab CI/CD",
      "Monitoring/ELK",
      "OAuth/JWT"
    ]
  };

  return (
    <div className={`min-h-screen pt-24 px-8 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1a1e23]'}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-6xl font-light mb-16 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Education & Skills</h1>
        
        {/* Education Section */}
        <div className="mb-16">
          <h2 className={`text-3xl mb-8 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-pink-500">
                <div className="absolute -left-[11px] top-0">
                  <div className="w-5 h-5 rounded-full bg-pink-500" />
                </div>
                <div className={`p-6 rounded-lg ${theme === 'light' ? 'bg-white shadow-md' : 'bg-[#1e2329]'}`}>
                  <h3 className={`text-2xl mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{edu.degree}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-4 w-4 text-pink-500" />
                    <span className="text-pink-500">{edu.institution}</span>
                    <span className={theme === 'light' ? 'text-gray-500' : 'text-gray-400'}>• {edu.period}</span>
                  </div>
                  <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className={`text-3xl mb-8 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Technical Skills</h2>
          <div className="grid grid-cols-1 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className={`p-6 rounded-lg ${theme === 'light' ? 'bg-white shadow-md' : 'bg-[#1e2329]'}`}>
                <h3 className={`text-2xl mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-pink-500 bg-pink-500/10 px-4 py-2 rounded-full hover:bg-pink-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 