"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 bg-background/50 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground">My professional journey and technical focus</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card/50 border-primary/10">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold text-xl">Backend Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in designing and building scalable, high-performance systems using Node.js (Express / Nest.js). 
                  My core focus is on developing RESTful APIs, microservices, and secure data-driven architectures that power enterprise-grade applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/10">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold text-xl">Full-Stack Capability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While backend is my forte, I am proficient in React and Next.js, allowing me to deliver full-stack solutions when needed. 
                  I care deeply about system design, optimization, and clean architecture.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground text-center">
            <p>
              I thrive in collaborative teams and continuously explore emerging technologies to enhance performance and reliability across distributed systems. 
              Currently based in Addis Ababa, Ethiopia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
