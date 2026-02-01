"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Nest.js", "Node.js", "Express", "GraphQL", "Hasura", "REST APIs", "Microservices"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "MariaDB", "Elasticsearch (Basics)"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript", "HTML5/CSS3"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "GitLab CI", "RabbitMQ", "Kafka", "SonarQube", "ELK Stack", "Git"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Supertest", "JUnit", "Mockito", "Postman", "Newman"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-card rounded-lg border border-border shadow-sm hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
