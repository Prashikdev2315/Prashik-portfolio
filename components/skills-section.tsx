"use client"

import { Code, Database, Wrench, BookOpen } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Programming & Querying",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "C/C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "Solidity", level: 60 },
    ],
  },
  {
    icon: Database,
    title: "Data & AI",
    skills: [
      { name: "Data Cleaning", level: 90 },
      { name: "Exploratory Data Analysis", level: 88 },
      { name: "Descriptive Statistics", level: 85 },
      { name: "Feature Engineering", level: 82 },
      { name: "Model Evaluation", level: 85 },
      { name: "Machine Learning", level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 88 },
      { name: "Windows Environment", level: 85 },
    ],
  },
  {
    icon: BookOpen,
    title: "Core CS Knowledge",
    skills: [
      { name: "Operating Systems", level: 80 },
      { name: "DBMS", level: 85 },
      { name: "Computer Networks", level: 78 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Cryptography", level: 72 },
      { name: "Object-Oriented Programming", level: 88 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I work with</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
