import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ArrowRight, 
  ShieldCheck, 
  Brain, 
  Video, 
  Target, 
  Heart,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Play
} from "lucide-react"

const benefits = [
  {
    title: "Soft skills",
    description: "Развитие коммуникативных навыков, умение работать в команде, публичные выступления",
    icon: Brain
  },
  {
    title: "Медиа-навыки",
    description: "Профессиональная видеосъёмка, монтаж, работа с современным оборудованием",
    icon: Video
  },
  {
    title: "Понимание профессий",
    description: "Знакомство с реальными специальностями региона, общение с профессионалами",
    icon: Target
  },
  {
    title: "Уверенность в выборе",
    description: "Осознанный подход к выбору профессии на основе реального опыта",
    icon: Heart
  }
]

const safetyPoints = [
  "Все занятия проходят под руководством опытных наставников",
  "Выезды на предприятия организуются с соблюдением техники безопасности",
  "Подписывается согласие родителей на участие в программе",
  "Дети всегда находятся под присмотром взрослых",
  "Мы работаем только с проверенными партнёрами"
]

const schedule = [
  { day: "Понедельник", time: "16:00 - 18:00", activity: "Монтаж видео" },
  { day: "Среда", time: "16:00 - 18:00", activity: "Обучение съёмке" },
  { day: "Пятница", time: "16:00 - 18:00", activity: "Подготовка репортажа" },
  { day: "Суббота", time: "10:00 - 14:00", activity: "Выезд на предприятие" }
]

const sampleReports = [
  { title: "Профессия: Инженер-технолог", location: "Тюменский станкостроительный завод", views: 1240 },
  { title: "Один день с ветеринаром", location: "Ветеринарная клиника «Айболит»", views: 980 },
  { title: "Как работает современная пекарня", location: "Хлебозавод №3", views: 856 }
]

export default function ParentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary w-fit mx-auto mb-6">
                <ShieldCheck className="h-4 w-4" />
                Для родителей
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                Помогите ребёнку выбрать профессию осознанно
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Наша программа помогает подросткам познакомиться с реальными профессиями 
                через создание видеорепортажей. Это бесплатно, безопасно и полезно.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/join">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base h-12 px-8">
                    Записать ребёнка
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Преимущества</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl text-balance">
                Что получит ваш ребёнок
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Участие в программе даёт навыки, которые пригодятся в любой профессии
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Безопасность</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Безопасность и контроль
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Мы понимаем вашу заботу о безопасности ребёнка. Все занятия и выезды 
                  проводятся под контролем опытных наставников.
                </p>

                <div className="mt-8 space-y-4">
                  {safetyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Наставники</h3>
                    <p className="text-muted-foreground">Профессионалы своего дела</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Наши наставники — это педагоги и журналисты с опытом работы с подростками. 
                  Они не только учат медиа-навыкам, но и помогают детям раскрыть свой потенциал.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Расписание</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl text-balance">
                  Расписание занятий
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Занятия проходят в удобное время после школы. Суббота — день практических 
                  выездов на предприятия региона.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Участие в программе бесплатное. Все материалы и оборудование предоставляются.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Недельное расписание</h3>
                </div>

                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.day}</p>
                          <p className="text-sm text-muted-foreground">{item.activity}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-primary">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Reports */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Примеры работ</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Репортажи наших участников
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Посмотрите, какие репортажи создают участники медиа-клуба
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {sampleReports.map((report, index) => (
                <Card key={index} className="border-border bg-card overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-card-foreground mb-1">{report.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{report.location}</p>
                    <p className="text-xs text-muted-foreground">{report.views} просмотров</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Запишите ребёнка в медиа-клуб
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Участие бесплатное. Оставьте заявку, и мы свяжемся с вами для уточнения деталей.
              </p>
              <div className="mt-8">
                <Link href="/join">
                  <Button size="lg" variant="secondary" className="gap-2 text-base h-12 px-8">
                    Оставить заявку
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
