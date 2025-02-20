import { Award, Code, User } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-secondary to-primary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Professional Summary */}
          <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Professional Summary</h2>
            </div>
            <p className="text-gray-300">
              Senior Java Developer with 5+ years of experience in developing enterprise-level applications.
              Specialized in Spring Boot, microservices architecture, and cloud technologies.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Java",
                "Spring Boot",
                "Microservices",
                "REST APIs",
                "SQL",
                "Git",
                "Docker",
                "Kubernetes",
                "AWS",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-secondary/50 p-3 rounded text-gray-300 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Senior Java Developer</h3>
                <p className="text-primary">Tech Corp • 2020 - Present</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Led development of microservices-based applications</li>
                  <li>Implemented CI/CD pipelines using Jenkins</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Java Developer</h3>
                <p className="text-primary">Software Solutions Inc • 2018 - 2020</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Developed and maintained Spring Boot applications</li>
                  <li>Implemented RESTful APIs</li>
                  <li>Optimized database queries and performance</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;