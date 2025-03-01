import { ThemeProvider } from "next-themes";
import Navigation from "./components/Navigation";
import ParticleGrid from "./components/ParticleGrid";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import './i18n/i18n';
import GoogleAnalytics from './components/GoogleAnalytics';

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <>
      <GoogleAnalytics />
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
    </>
  </ThemeProvider>
);

export default App;