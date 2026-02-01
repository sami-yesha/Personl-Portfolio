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
    link: "#", // Placeholder
  },
  {
    title: "Dashen SuperApp",
    description: "Multi-service super app integrating wallet services, merchant payments, and digital lifestyle features for millions of users.",
    tags: ["Scalability", "Security", "Optimization", "API Design"],
    link: "#",
  },
  {
    title: "Gift Ethiopia Remittance",
    description: "International remittance platform facilitating cross-border money transfers with real-time currency conversions.",
    tags: ["FinTech", "Compliance", "KYC", "Security"],
    link: "#",
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all hover:border-primary/50">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <a href={project.link} className="flex items-center gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
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
