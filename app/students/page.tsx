import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ArrowRight, 
  Video, 
  Users, 
  Building2, 
  FileVideo,
  Calendar,
  Clock,
  CheckCircle2
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Обучение видеосъёмке",
    description: "Изучаешь основы операторского мастерства, работу со светом и звуком",
    icon: Video
  },
  {
    number: "02",
    title: "Работа в команде",
    description: "Учишься работать в редакции: распределять роли, планировать съёмки",
    icon: Users
  },
  {
    number: "03",
    title: "Выезд на предприятия",
    description: "Посещаешь реальные рабочие места и общаешься с профессионалами",
    icon: Building2
  },
  {
    number: "04",
    title: "Съёмка репортажей",
    description: "Создаёшь профессиональные видеорепортажи о профессиях региона",
    icon: FileVideo
  }
]

const schedule = [
  { day: "Вторник", time: "16:00 - 18:00"},
  { day: "Четверг", time: "16:00 - 18:00"},
  { day: "Суббота", time: "10:00 - 14:00", activity: "Выезд на предприятие" }
]

const skills = [
  "Видеосъёмка и монтаж",
  "Работа с профессиональной техникой",
  "Интервьюирование",
  "Командная работа",
  "Публичные выступления",
  "Понимание реальных профессий"
]

export default function StudentsPage() {
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
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Для школьников 12-17 лет
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                Попробуй реальные профессии через медиа
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Научись снимать профессиональное видео, посещай реальные предприятия 
                и создавай репортажи о профессиях своего региона. Узнай, кем хочешь стать, 
                пока ещё учишься в школе.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/join">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base h-12 px-8">
                    Присоединиться к клубу
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Как это работает</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl text-balance">
                Формат работы клуба
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Четыре простых шага от новичка до автора профессиональных репортажей
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <Card key={step.number} className="relative overflow-hidden border-border bg-background">
                  <CardContent className="p-6">
                    <span className="text-6xl font-bold text-primary/10 absolute -top-2 -right-2">
                      {step.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Расписание</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Расписание занятий клуба
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Занятия проходят 4 раза в неделю в удобное время после школы. 
                  Суббота — день выездов на предприятия и съёмок репортажей.
                </p>

                <div className="mt-8 space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">Недельное расписание</h3>
                </div>

                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
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

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Готов открыть мир профессий?
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Присоединяйся к медиа-клубу и начни создавать репортажи о профессиях своего региона. 
                Это бесплатно!
              </p>
              <div className="mt-8">
                <Link href="/join">
                  <Button size="lg" variant="secondary" className="gap-2 text-base h-12 px-8">
                    Присоединиться к клубу
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
