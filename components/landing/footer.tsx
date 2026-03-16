import Link from "next/link"
import { Compass, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  project: [
    { label: "О проекте", href: "/#problem" },
    { label: "Как это работает", href: "/#how-it-works" },
    { label: "Профессии", href: "/#professions" },
    { label: "География", href: "/#map" }
  ],
  participants: [
    { label: "Для школьников", href: "/students" },
    { label: "Для родителей", href: "/parents" },
    { label: "Групповые экскурсии", href: "/excursions" },
    { label: "Для организаций", href: "/organizations" },
    { label: "Присоединиться", href: "/join" }
  ],
}

const socialLinks = [
  { label: "Telegram", href: "#", icon: "TG" },
  { label: "VK", href: "#", icon: "VK" }
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Compass className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold tracking-tight text-card-foreground">
                  Компас Будущего
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-xs">
                Профориентационный проект для подростков Уральского региона. 
                Помогаем выбрать профессию через создание медиаконтента.
              </p>
              <div className="space-y-2">
                <a href="mailto:info@compass-future.ru" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  info@compass-future.ru
                </a>
                <a href="tel:+73452000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  +7 (3452) 00-00-00
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  г. Тюмень, ул. Республики, 1
                </div>
              </div>
            </div>

            {/* Project links */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Проект</h4>
              <ul className="space-y-2">
                {footerLinks.project.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Participants links */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Участникам</h4>
              <ul className="space-y-2">
                {footerLinks.participants.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Компас Будущего. Все права защищены.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-bold"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
