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
import { CheckCircle2, Send, Building2, Users, Megaphone, Video, Award, Briefcase } from "lucide-react"

const cities = [
  "Тюмень",
  "Екатеринбург",
  "Челябинск",
  "Пермь",
  "Курган"
]

const benefits = [
  {
    icon: Megaphone,
    title: "Популяризация профессий",
    description: "Расскажите молодому поколению о востребованных специальностях вашей отрасли"
  },
  {
    icon: Users,
    title: "Знакомство школьников с отраслью",
    description: "Покажите подросткам реальные рабочие процессы и карьерные возможности"
  },
  {
    icon: Video,
    title: "Медиа-репортаж о компании",
    description: "Получите качественный видеоматериал о профессиях вашей организации"
  },
  {
    icon: Award,
    title: "Участие в образовательной инициативе",
    description: "Станьте частью важного проекта по профориентации молодёжи региона"
  }
]

const steps = [
  {
    number: "1",
    title: "Команда медиа-клуба приезжает в организацию",
    description: "Мы согласуем удобную дату и приедем с оборудованием"
  },
  {
    number: "2",
    title: "Специалисты рассказывают о профессиях",
    description: "Ваши сотрудники показывают рабочие процессы и отвечают на вопросы"
  },
  {
    number: "3",
    title: "Школьники снимают репортаж",
    description: "Участники медиа-клуба проводят интервью и съёмку"
  },
  {
    number: "4",
    title: "Создаётся медиа-материал о профессии",
    description: "Готовый репортаж публикуется и передаётся вам"
  }
]

export default function OrganizationsPage() {
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
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent mb-6">
                <Building2 className="h-4 w-4" />
                Для компаний и организаций
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Пригласите медиа-клуб к себе
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Организации могут пригласить школьный медиа-клуб «Компас будущего», 
                чтобы познакомить подростков с профессиями вашей компании.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Что получают организации
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 mb-4">
                      <benefit.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Как проходит визит
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 pb-6 border-b border-border last:border-0">
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Заявка на визит медиа-клуба
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Заполните форму, и мы свяжемся с вами для обсуждения деталей
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
                        Мы свяжемся с вами для обсуждения визита.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="organization">Название организации</Label>
                        <Input
                          id="organization"
                          name="organization"
                          placeholder="Введите название компании"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact">Контактное лицо</Label>
                        <Input
                          id="contact"
                          name="contact"
                          placeholder="Имя и фамилия"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="position">Должность</Label>
                        <Input
                          id="position"
                          name="position"
                          placeholder="Ваша должность в компании"
                          required
                          className="bg-background"
                        />
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
                          placeholder="example@company.ru"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Краткое описание профессии или экскурсии</Label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Расскажите о профессиях, которые можно показать школьникам"
                          rows={4}
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
                            Пригласить медиа-клуб
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
