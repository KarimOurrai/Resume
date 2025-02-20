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

            I am a passionate software engineer who loves building great products and helping companies succeed. 
            
            With experience across all layers of web development—from databases to services to user interfaces—I value good design and adapt quickly to changing technologies. 
            
            Strong organizational and analytical skills enhance my ability to deliver high-quality solutions.            
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
                "JS/TS",
                "React",
                "Angular",
                "SQL",
                "Git",
                "Docker",
                "Kubernetes",
                "AWS",
                "Kafka"
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
                <h3 className="text-xl font-semibold text-white">Tech Lead Java Developer</h3>
                <p className="text-primary">Intelcia • 2023 - Present</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Led development of microservices-based applications</li>
                  <li>Implemented CI/CD pipelines using Gitlab CI/CD and Kubernetes</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Senior Java Developer</h3>
                <p className="text-primary">Software Solutions Inc • 2020 - 2023</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Developed aof microservices-based applications</li>
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