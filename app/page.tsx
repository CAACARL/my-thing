import "./index.css";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About/Index";
import { Contact } from "@/components/Contacts/Index";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects/Index";
import { Experience } from "@/components/Experience/index";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="flex items-center gap-8">
        <Hero />
        <FadeIn>
          {/* Fixed oval container */}
          <div className="relative w-64 h-80 mt-20 border-2 border-[#e53935] rounded-[50%/40%] overflow-hidden shadow-sm">
            <img src="tenshi.jpg" alt="League streamer" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>
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
