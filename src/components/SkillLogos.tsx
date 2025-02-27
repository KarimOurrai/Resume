import { useTheme } from "next-themes";

interface SkillLogoProps {
  name: string;
  url: string;
  className?: string;
}

const SkillLogo = ({ name, url, className = "" }: SkillLogoProps) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={`group relative flex items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-pink-500/10 ${
        theme === 'light' ? 'bg-white/50' : 'bg-white/5'
      } ${className}`}
    >
      <img 
        src={url} 
        alt={name}
        className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-pink-500 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

export const skillLogos = {
  Backend: {
    "Java": "/logos/java.svg",
    "Spring Boot": "/logos/spring.svg",
    "Spring MVC": "/logos/spring.svg",
    "Spring Batch": "/logos/spring.svg",
    "PostgreSQL": "/logos/postgresql.svg",
    "MySQL": "/logos/mysql.svg",
    "Oracle": "/logos/oracle.svg",
    "REST APIs": "/logos/api.svg",
    "SOAP": "/logos/soap.svg",
    "JPA/Hibernate": "/logos/hibernate.svg",
    "EJB 3.0": "/logos/java.svg"
  },
  Frontend: {
    "React": "/logos/react.svg",
    "Angular": "/logos/angular.svg",
    "TypeScript": "/logos/typescript.svg",
    "JavaScript": "/logos/javascript.svg",
    "HTML5": "/logos/html5.svg",
    "CSS3": "/logos/css3.svg",
    "JSF": "/logos/jsf.svg"
  },
  Microservices: {
    "Docker": "/logos/docker.svg",
    "Kubernetes": "/logos/kubernetes.svg",
    "Apache Kafka": "/logos/kafka.svg",
    "Cassandra": "/logos/cassandra.svg",
    "ElasticSearch": "/logos/elasticsearch.svg",
    "Kibana": "/logos/kibana.svg",
    "Jenkins": "/logos/jenkins.svg",
    "GitLab CI/CD": "/logos/gitlab.svg",
    "OAuth/JWT": "/logos/oauth.svg"
  }
};

export default SkillLogo; 