"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Connect App",
    description: "Nationwide digital financial services platform allowing seamless mobile payments and fund transfers across banks.",
    tags: ["Backend Architecture", "Node.js", "Financial Tech", "Microservices"],
    link: "https://github.com/sami-yesha", // Placeholder
  },
  {
    title: "Dashen SuperApp",
    description: "Multi-service super app integrating wallet services, merchant payments, and digital lifestyle features for millions of users.",
    tags: ["Scalability", "Security", "Optimization", "API Design"],
    link: "https://github.com/sami-yesha",
  },
  {
    title: "Gift Ethiopia Remittance",
    description: "International remittance platform facilitating cross-border money transfers with real-time currency conversions.",
    tags: ["FinTech", "Compliance", "KYC", "Security"],
    link: "https://github.com/sami-yesha",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="text-muted-foreground">Key projects I&apos;ve engineered and contributed to</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50 border border-white/5 text-xs px-2.5 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button variant="ghost" size="sm" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
