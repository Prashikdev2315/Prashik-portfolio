import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/prashik-kadam-a489a8285/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/Prashikdev2315",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:kadamprashik23@gmail.com",
    label: "Email",
  },
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="text-2xl font-bold text-foreground">
              Prashik<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Computer Science undergraduate passionate about AI, Machine Learning, and building impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              kadamprashik23@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {currentYear} Prashik Kadam. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
