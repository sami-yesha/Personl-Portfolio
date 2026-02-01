"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: Job[] = [
  {
    company: "EagleLion System Technologies",
    role: "Senior Backend Developer",
    location: "Addis Ababa, Ethiopia",
    period: "25/06/2024 - Current",
    description: "Engineered the backend architecture of the Connect App, a nationwide financial services platform.",
    achievements: [
      "Designed a shared wallet system adopted by all banks in the country.",
      "Ensured high system availability and optimized API response times.",
      "Implemented caching and distributed logging, enhancing performance by 40%.",
    ],
  },
  {
    company: "Gift Ethiopia Remittance App",
    role: "Senior Backend Developer",
    location: "Addis Ababa",
    period: "08/06/2025 - 22/10/2025 (Project Based)",
    description: "Built secure backend services for an international remittance platform.",
    achievements: [
      "Enabled cross-border money transfers and real-time currency conversions.",
      "Integrated compliance and KYC verification mechanisms.",
    ],
  },
     {
    company: "Dashen SuperApp",
    role: "Senior Backend Developer",
    location: "Addis Ababa",
    period: "02/12/2024 - 24/06/2025 (Project Based)",
    description: "Contributed to design and backend of a multi-service super app.",
    achievements: [
      "Developed optimized microservice-based APIs.",
      "Ensured high scalability and security for millions of users.",
    ],
  },
  {
    company: "Aladia",
    role: "Software Developer (Frontend Focus)",
    location: "Italy (Remote)",
    period: "15/08/2024 - 12/11/2024",
    description: "Frontend Developer responsible for a modern web platform using Vue.js and Nuxt.js.",
    achievements: [
      "Built responsive UI components and implemented SSR with Nuxt.js.",
      "Optimized page load performance and improved UX.",
      "Collaborated with backend teams for seamless API integration.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <p className="text-muted-foreground">My professional career and key contributions</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border md:left-1/2 md:-ml-[1px]" />

          <div className="space-y-12">
            {experiences.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 mt-1.5 h-10 w-10 rounded-full border bg-background z-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)] p-6 bg-card rounded-xl border border-border/50 shadow-sm hover:border-primary/50 transition-colors">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="font-bold text-lg text-primary">{job.role}</h3>
                      <Badge variant="outline" className="text-xs">
                        {job.company}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground gap-2">
                       <Calendar className="w-3 h-3" />
                       <span>{job.period}</span>
                    </div>
                    <span className="text-xs text-muted-foreground/80">{job.location}</span>
                  </div>
                  
                  <p className="text-sm text-foreground/90 mb-4">{job.description}</p>
                  
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
