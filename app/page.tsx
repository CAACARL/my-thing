import { Hero } from "@/components/Hero";
import { About } from "@/components/About/Index";
import { Contact } from "@/components/Contacts/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contact />

      <h1>Test</h1>
      <img className="JohnSex" src="/abigail.jpg" />
    </>
  );
}
