"use client"

import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "PDPM IIITDM, Jabalpur",
    location: "Jabalpur, Madhya Pradesh",
    period: "2023 - Present",
    description: "Pursuing undergraduate studies with focus on AI/ML, Data Analytics, and Software Engineering. Active participant in hackathons and technical workshops.",
    current: true,
  },
  {
    degree: "Higher Secondary (Class XII - Science Stream)",
    institution: "Maharashtra State Board",
    location: "Maharashtra, India",
    period: "2023",
    description: "Completed higher secondary education with a strong foundation in Mathematics, Physics, and Computer Science.",
    percentage: "84.6%",
    current: false,
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 bg-card/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Academic Journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-8 md:mt-6 ring-4 ring-background" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    {item.current && (
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                        Current
                      </span>
                    )}
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground leading-tight">
                          {item.degree}
                        </h3>
                        <p className="text-primary font-medium">{item.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {item.percentage && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">Percentage: </span>
                        <span className="text-lg font-bold text-accent">{item.percentage}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
