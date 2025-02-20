import { Award, Code, User } from "lucide-react";
import { useTheme } from "next-themes";

const Resume = () => {
  const { theme } = useTheme();

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
            <p className={theme === "light" ? "text-gray-800" : "text-gray-300"}>
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
                  className={`bg-secondary/50 p-3 rounded text-center ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}
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
                <h3 className={`text-xl font-semibold ${theme === "light" ? "text-gray-800" : "text-white"}`}>Tech Lead Java Developer</h3>
                <p className="text-primary">Intelcia • 2023 - Present</p>
                <ul className={`list-disc list-inside mt-2 ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}>
                  <li>Led development of microservices-based applications</li>
                  <li>Implemented CI/CD pipelines using Gitlab CI/CD and Kubernetes</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${theme === "light" ? "text-gray-800" : "text-white"}`}>Tech Lead at Atos</h3>
                <p className="text-primary">Atos Inc • 2020 - 2023</p>
                <ul className={`list-disc list-inside mt-2 ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}>
                  <li>Led development of microservices-based applications</li>
                  <li>Implemented CI/CD pipelines using Jenking and RedHat Open Shift</li>
                  <li>Led development of Angular based applications</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${theme === "light" ? "text-gray-800" : "text-white"}`}>Tech Lead and Software Engineer at Docaposte</h3>
                <p className="text-primary">Docaposte • 2017 - 2020</p>
                <ul className={`list-disc list-inside mt-2 ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}>
                  <li>Led development of Spring Boot based Application</li>
                  <li>Implemented CI/CD pipelines using Jenking</li>
                  <li>Led development of React based applications</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${theme === "light" ? "text-gray-800" : "text-white"}`}>Software Engineer at Oritech</h3>
                <p className="text-primary">Oritech • 2015 - 2017</p>
                <ul className={`list-disc list-inside mt-2 ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}>
                  <li>Devolopped Spring Boot based Application</li>
                  <li>Devolopped an app with JQuery and JS</li>
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