import Hero from "@/components/sections/Hero";
import MarqueeBanner from "@/components/ui/MarqueeBanner";
import About from "@/components/sections/About";
import LiveAppsShowcase from "@/components/sections/LiveAppsShowcase";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <About />
      <LiveAppsShowcase />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </>
  );
}
