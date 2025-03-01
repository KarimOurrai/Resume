import { ThemeProvider } from "next-themes";
import Navigation from "./components/Navigation";
import ParticleGrid from "./components/ParticleGrid";
import Footer from "./components/Footer";
import Home from "./pages/Home.tsx";
import Experience from "./pages/Experience.tsx";
import Education from "./pages/Education.tsx";
import Skills from "./pages/Skills.tsx";
import Contact from "./pages/Contact.tsx";
import './i18n/i18n';

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="bg-[#1a1e23] relative">
        <ParticleGrid />
        <Navigation />
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;