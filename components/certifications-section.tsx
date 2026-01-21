"use client"

import { Award, Medal, Trophy, Users } from "lucide-react"

const certifications = [
  {
    icon: Medal,
    title: "The Joy of Computing Using Python",
    issuer: "NPTEL",
    achievement: "Silver Medal",
    description: "Comprehensive course covering Python programming fundamentals, algorithms, and computational thinking.",
    type: "certification",
  },
  {
    icon: Medal,
    title: "Ethical Hacking",
    issuer: "NPTEL",
    achievement: "Silver Medal",
    description: "In-depth course on cybersecurity principles, penetration testing, and ethical hacking methodologies.",
    type: "certification",
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon (SIH) 2025",
    issuer: "Government of India",
    achievement: "College-level Selection",
    description: "Selected to represent college at the prestigious national-level hackathon focused on solving real-world problems.",
    type: "achievement",
  },
  {
    icon: Users,
    title: "Hackathons & Technical Workshops",
    issuer: "Various Organizations",
    achievement: "Active Participation",
    description: "Regular participation in hackathons and collaborative technical workshops to enhance skills and network.",
    type: "achievement",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Recognition & Growth</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    cert.type === "certification"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {cert.type === "certification" ? "Certification" : "Achievement"}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-foreground mb-1 pr-20">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-accent font-medium text-sm">{cert.achievement}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
