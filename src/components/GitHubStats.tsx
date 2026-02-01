"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, GitFork, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GitHubStats() {
  // Replace with your actual GitHub username
  const githubUsername = "sami-yesha";

  return (
    <section id="github" className="py-24 bg-background/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">GitHub Activity</h2>
            <p className="text-muted-foreground">My open source contributions and coding activity</p>
          </div>

          {/* GitHub Stats Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Github className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">Active Developer</h3>
                <p className="text-sm text-muted-foreground">Contributing to open source and personal projects</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <GitFork className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">Backend Focus</h3>
                <p className="text-sm text-muted-foreground">Node.js, Nest.js, and microservices architecture</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">Quality Code</h3>
                <p className="text-sm text-muted-foreground">Clean architecture and best practices</p>
              </CardContent>
            </Card>
          </div>

          {/* GitHub Profile Link */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Check out my repositories and contributions on GitHub
            </p>
            <Button size="lg" variant="outline" asChild>
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
          </div>

          {/* Optional: Uncomment below if you want to try the stats images again */}
          {/* 
          <div className="flex flex-col items-center gap-4">
            <a 
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-2xl hover:opacity-80 transition-opacity"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=0c0a09&title_color=10b981&text_color=fafaf9&icon_color=10b981&border_color=292524&hide_border=false`}
                alt="GitHub Stats"
                className="w-full rounded-lg border border-border"
                loading="lazy"
              />
            </a>
          </div>
          */}
        </motion.div>
      </div>
    </section>
  );
}
