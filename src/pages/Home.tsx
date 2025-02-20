import { ArrowRight, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-secondary to-primary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Java Developer & Software Engineer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Passionate about creating robust, scalable applications and solving complex problems
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/resume"
              className="bg-secondary border border-primary/50 hover:border-primary text-white px-6 py-3 rounded-lg transition-colors"
            >
              Resume
            </Link>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <a
              href="mailto:karim.ourrai@gmail.com"
              className=" text-white p-3 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/KarimOurrai"
              className=" text-white p-3 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;