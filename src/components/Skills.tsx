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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-white/5 shadow-lg hover:shadow-primary/10 hover:border-primary/20 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-white/5"
                  >
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
