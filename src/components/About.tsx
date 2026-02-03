"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="space-y-4 mb-20 text-center md:text-left">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                About <span className="text-primary italic">Me</span>
              </h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mx-auto md:mx-0" />
            </div>
          </Reveal>
          
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <Reveal delay={0.3}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Backend Engineering</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in designing and building scalable, high-performance systems using 
                  <span className="text-foreground font-medium"> Node.js, Express, and Nest.js</span>. 
                  My core focus is on developing robust RESTful APIs, microservices, and secure 
                  architectures that power enterprise-grade applications.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Full-Stack Capability</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond the backend, I am proficient in <span className="text-foreground font-medium">React and Next.js</span>, 
                  allowing me to deliver comprehensive full-stack solutions. I care deeply about 
                  system design, performance optimization, and maintaining clean, maintainable architecture.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.7}>
            <div className="mt-20 p-8 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-white/5 border-l-primary border-l-4">
              <p className="text-xl text-muted-foreground italic leading-relaxed text-center">
                "I thrive in collaborative teams and continuously explore emerging technologies to 
                enhance performance and reliability across distributed systems. Currently building 
                impactful solutions in Addis Ababa, Ethiopia."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
