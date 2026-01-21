"use client"

import { Github, Brain, Pill, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    icon: Brain,
    title: "AI Driven Osteoporosis Detection Using X-Ray Images",
    description:
      "Built comprehensive ML pipelines for medical image classification to detect osteoporosis from X-ray images. Focused on explainable AI for healthcare applications.",
    highlights: [
      "Expanded dataset to 8,000+ images using preprocessing & augmentation",
      "Achieved 93% accuracy with optimized model architecture",
      "Implemented Grad-CAM++ for model interpretability",
      "Focus on explainable AI and healthcare impact",
    ],
    tags: ["Python", "TensorFlow", "Medical Imaging", "Grad-CAM++", "CNN"],
    github: "https://github.com/Prashikdev2315",
    featured: true,
  },
  {
    icon: Pill,
    title: "Drug Side Effect Prediction Using AI",
    description:
      "Developed an intelligent system to predict potential side effects of drugs using molecular fingerprints and machine learning models.",
    highlights: [
      "Analyzed data from 1,100+ drugs",
      "Converted SMILES strings to ECFP fingerprints",
      "Built multi-label prediction models for 20+ side-effect categories",
      "Evaluated using macro & micro F1-scores",
      "Delivered insights via an interactive prediction interface",
    ],
    tags: ["Python", "Scikit-learn", "RDKit", "Multi-label Classification", "Cheminformatics"],
    github: "https://github.com/Prashikdev2315",
    featured: true,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="px-6 pb-4">
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 py-4 border-t border-border bg-secondary/30">
                <div className="flex items-center gap-4">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-border text-foreground hover:bg-secondary hover:text-foreground"
          >
            <a
              href="https://github.com/Prashikdev2315"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
