"use client"
export const dynamic = "force-dynamic"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
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
import { CheckCircle2, Send, Users, MapPin, Video } from "lucide-react"
import { clubsData } from "@/lib/clubs-data"

const features = [
  {
    icon: Users,
    title: "8000 ₽ в месяц",
    description: "Стоимость участия в программе"
  },
  {
    icon: MapPin,
    title: "5 городов",
    description: "Медиа-клубы в крупнейших городах Урала"
  },
  {
    icon: Video,
    title: "Реальный опыт",
    description: "Создание профессиональных репортажей"
  }
]

function JoinPageContent() {
  const searchParams = useSearchParams()
  const clubParam = searchParams.get("club")

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCity, setSelectedCity] = useState<string>("")

  // Pre-select city if coming from a club modal
  useEffect(() => {
    if (clubParam) {
      const club = clubsData.find(c => c.id === clubParam)
      if (club) {
        setSelectedCity(club.city)
      }
    }
  }, [clubParam])

  const selectedClub = clubParam ? clubsData.find(c => c.id === clubParam) : null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-background py-16 md:py-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left side - Info */}
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                  {selectedClub
                    ? `Записаться в ${selectedClub.fullName}`
                    : "Присоединиться к медиа-клубу"
                  }
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {selectedClub
                    ? `Заполните форму для записи в медиа-клуб в городе ${selectedClub.city}. Мы свяжемся с вами для уточнения деталей.`
                    : "Заполните форму, и мы свяжемся с вами для уточнения деталей."
                  }
                </p>

                <div className="mt-10 space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Form */}
              <Card className="border-border bg-card shadow-lg">
                <CardContent className="p-6 md:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">
                        Спасибо!
                      </h2>
                      <p className="text-muted-foreground">
                        Мы свяжемся с вами в ближайшее время.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя ученика</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Введите имя"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="age">Возраст ученика</Label>
                        <Select name="age" required>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Выберите возраст" />
                          </SelectTrigger>
                          <SelectContent>
                            {[12, 13, 14, 15, 16, 17].map((age) => (
                              <SelectItem key={age} value={age.toString()}>
                                {age} лет
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="school">Школа</Label>
                        <Input
                          id="school"
                          name="school"
                          placeholder="Название школы"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">Город</Label>
                        <Select
                          name="city"
                          required
                          value={selectedCity}
                          onValueChange={setSelectedCity}
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Выберите город" />
                          </SelectTrigger>
                          <SelectContent>
                            {clubsData.map((club) => (
                              <SelectItem key={club.id} value={club.city}>
                                {club.city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон родителя</Label>
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
                          placeholder="Расскажите, почему хотите присоединиться (необязательно)"
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
                            Отправить заявку
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

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <JoinPageContent />
    </Suspense>
  )
}
