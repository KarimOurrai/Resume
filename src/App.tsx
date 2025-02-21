import { ThemeProvider } from "next-themes";
import Navigation from "./components/Navigation";
import Home from "./pages/Home.tsx";
import Experience from "./pages/Experience.tsx";
import Education from "./pages/Education.tsx";
import Contact from "./pages/Contact.tsx";

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="bg-[#1a1e23]">
        <Navigation />
        <section id="home">
          <Home />
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
      </div>
    </ThemeProvider>
  );
};

export default App;