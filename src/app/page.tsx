import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-6 text-center text-sm text-muted-foreground border-t bg-background/50">
        <p>© {new Date().getFullYear()} Samuel Yeshambel. All rights reserved.</p>
      </footer>
    </div>
  );
}
