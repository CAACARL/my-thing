import "./index.css";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About/Index";
import { Contact } from "@/components/Contacts/Index";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects/Index";
import { Experience } from "@/components/Experience/index";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <About />
      {/* Skills section */}
      <Skills />
      {/* Projects section */}
      <Projects />
      {/* Experience section */}
      <Experience />
      {/* Contact section */}
      <Contact />
    </>
  );
}
