"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      {/* Dot Pattern - Left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:grid grid-cols-5 gap-2 opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={`left-dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-primary/50" />
        ))}
      </div>
      
      {/* Dot Pattern - Right */}
      <div className="absolute right-8 top-1/3 hidden lg:grid grid-cols-5 gap-2 opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={`right-dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-primary/50" />
        ))}
      </div>

      {/* Social Links - Vertical on Right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
        <span className="text-muted-foreground text-sm tracking-wider rotate-90 mb-8 origin-center">
          Follow me
        </span>
        <div className="w-px h-16 bg-border" />
        <a
          href="https://www.linkedin.com/in/prashik-kadam-a489a8285/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/Prashikdev2315"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </a>
        <a
          href="mailto:kadamprashik23@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <p className="text-muted-foreground text-lg md:text-xl mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {"Hi, I'm Prashik Kadam!"}
        </p>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <span className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
            ))}
          </span>
          <span className="w-24 h-1 bg-accent rounded-full" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-balance">
          Building Intelligent Solutions{" "}
          <br className="hidden sm:block" />
          with{" "}
          <span className="text-accent font-mono">{"<AI & Data/>"}</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 text-pretty">
          Computer Science undergraduate with a strong foundation in AI/ML, Data Analytics, 
          and Web3 technologies. Passionate about building scalable, impactful solutions 
          that bridge the gap between data and innovation.
        </p>

        <p className="text-sm text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          Computer Science Undergraduate | AI & ML Enthusiast | Data & Blockchain Developer
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-border text-foreground hover:bg-secondary hover:text-foreground px-8"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            <a href="#contact">
              {"Let's talk"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12 lg:hidden animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <a
            href="https://www.linkedin.com/in/prashik-kadam-a489a8285/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Prashikdev2315"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:kadamprashik23@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
