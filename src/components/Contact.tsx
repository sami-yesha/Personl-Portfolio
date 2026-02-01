"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="text-muted-foreground">
              Interested in collaborating or have a project in mind? Let&apos;s talk.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-background">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:samuelyeshambel9@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    samuelyeshambel9@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/samuel-yeshambel-69863629b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <a href="mailto:samuelyeshambel9@gmail.com">
                Say Hello <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
