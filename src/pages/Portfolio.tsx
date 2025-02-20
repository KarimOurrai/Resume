import { Github, Link as LinkIcon } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A scalable e-commerce platform built with Spring Boot and microservices architecture.",
      technologies: ["Java", "Spring Boot", "MySQL", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management System",
      description: "Enterprise task management system with real-time updates and team collaboration features.",
      technologies: ["Java", "Spring Boot", "MongoDB", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Banking API",
      description: "Secure banking API implementing OAuth2 and handling thousands of transactions per second.",
      technologies: ["Java", "Spring Security", "PostgreSQL", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-secondary to-primary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Portfolio</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors animate-fade-up"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary flex items-center gap-1"
                  >
                    <LinkIcon className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;