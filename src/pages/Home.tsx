import { ArrowRight } from "lucide-react";
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
              to="/portfolio"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/resume"
              className="bg-secondary border border-primary/50 hover:border-primary text-white px-6 py-3 rounded-lg transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;