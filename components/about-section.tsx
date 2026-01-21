"use client"

import { Brain, Code, Database, Blocks } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Experience in model building, evaluation, and explainable AI techniques",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Skilled in data preprocessing, EDA, and feature engineering",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Strong foundation in algorithms, DSA, and software engineering principles",
  },
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    description: "Familiar with smart contracts, Solidity, and decentralized applications",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Prashik Kadam
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {"I'm a Computer Science undergraduate at PDPM IIITDM Jabalpur with a deep passion for building intelligent systems that solve real-world problems. My journey in technology has been driven by curiosity and a growth-oriented mindset."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in AI/ML experimentation, data handling, and model evaluation, I thrive on transforming raw data into meaningful insights. My interests span across healthcare AI, predictive analytics, and blockchain technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"I believe in writing clean, efficient code and building solutions that are not just technically sound but also impactful. Whether it's developing ML pipelines for medical image classification or exploring Web3 applications, I approach every project with an engineering-driven mindset."}
            </p>
            
            {/* Academic Focus */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-foreground mb-3">Academic Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "DBMS",
                  "Operating Systems",
                  "Computer Networks",
                  "Cryptography",
                  "Object-Oriented Programming",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
