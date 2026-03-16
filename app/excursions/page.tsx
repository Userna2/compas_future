"use client"

import { useState } from "react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Send, Users, GraduationCap, Building2, Lightbulb, MessageSquare, Video, MapPin } from "lucide-react"

const cities = [
  "Тюмень",
  "Екатеринбург",
  "Челябинск",
  "Пермь",
  "Курган"
]

const steps = [
  {
    icon: Lightbulb,
    title: "Знакомство с профессией",
    description: "Вводная часть о профессии и предприятии"
  },
  {
    icon: MapPin,
    title: "Экскурсия по предприятию",
    description: "Осмотр рабочих мест и производственных процессов"
  },
  {
    icon: MessageSquare,
    title: "Общение со специалистами",
    description: "Вопросы и ответы с профессионалами отрасли"
  },
  {
    icon: Video,
    title: "Съёмка репортажа",
    description: "Участие в создании медиа-материала о профессии"
  }
]

const audiences = [
  {
    icon: GraduationCap,
    title: "Школьные классы",
    description: "Организованные группы учащихся с педагогом"
  },
  {
    icon: Users,
    title: "Родительские комитеты",
    description: "Инициативные группы родителей с детьми"
  },
  {
    icon: Building2,
    title: "Образовательные группы",
    description: "Кружки, секции и другие детские объединения"
  }
]

export default function ExcursionsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-16 md:py-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Users className="h-4 w-4" />
                Для школьных групп
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Групповые экскурсии для школьников
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Школьные классы и родительские комитеты могут организовать профориентационную экскурсию 
                вместе с медиа-клубом «Компас будущего». Ученики посещают реальные предприятия, 
                знакомятся с профессиями региона и участвуют в создании медиа-репортажа.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Как проходит экскурсия
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <Card key={index} className="relative border-border bg-card">
                  <CardContent className="p-6">
                    <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 mt-2">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Кому подойдёт
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              {audiences.map((audience, index) => (
                <Card key={index} className="border-border bg-card text-center">
                  <CardContent className="p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 mx-auto mb-4">
                      <audience.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground">{audience.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Заявка на групповую экскурсию
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Заполните форму, и мы свяжемся с вами для организации экскурсии
                </p>
              </div>

              <Card className="border-border bg-card shadow-lg">
                <CardContent className="p-6 md:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-4">
                        Спасибо!
                      </h3>
                      <p className="text-muted-foreground">
                        Мы свяжемся с вами для уточнения деталей экскурсии.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="organizer">Имя организатора</Label>
                        <Input
                          id="organizer"
                          name="organizer"
                          placeholder="Введите имя"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="school">Школа / класс</Label>
                        <Input
                          id="school"
                          name="school"
                          placeholder="Например: Школа №15, 8Б класс"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="students">Количество учеников</Label>
                        <Select name="students" required>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Выберите количество" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5-10">5-10 человек</SelectItem>
                            <SelectItem value="10-15">10-15 человек</SelectItem>
                            <SelectItem value="15-20">15-20 человек</SelectItem>
                            <SelectItem value="20-25">20-25 человек</SelectItem>
                            <SelectItem value="25+">Более 25 человек</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">Город</Label>
                        <Select name="city" required>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Выберите город" />
                          </SelectTrigger>
                          <SelectContent>
                            {cities.map((city) => (
                              <SelectItem key={city} value={city}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="example@mail.ru"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="comment">Комментарий</Label>
                        <Textarea
                          id="comment"
                          name="comment"
                          placeholder="Пожелания по дате, профессии или другие детали"
                          rows={3}
                          className="bg-background resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          "Отправка..."
                        ) : (
                          <>
                            Оставить заявку на экскурсию
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
