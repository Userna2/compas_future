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
import { CheckCircle2, Send } from "lucide-react"
import { clubsData } from "@/lib/clubs-data"

function JoinPageContent() {
  const searchParams = useSearchParams()
  const clubParam = searchParams.get("club")

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCity, setSelectedCity] = useState<string>("")

  useEffect(() => {
    if (clubParam) {
      const club = clubsData.find((item) => item.id === clubParam)
      if (club) {
        setSelectedCity(club.city)
      }
    }
  }, [clubParam])

  const selectedClub = clubParam ? clubsData.find((item) => item.id === clubParam) : null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Запись в клуб
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                  {selectedClub
                    ? `Записаться в ${selectedClub.fullName}`
                    : "Присоединиться к медиа-клубу"}
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {selectedClub
                    ? `Заполните форму для записи в клуб в городе ${selectedClub.city}. Мы свяжемся с вами, чтобы уточнить детали участия.`
                    : "Заполните форму, и мы свяжемся с вами, чтобы уточнить детали участия и подобрать подходящий клуб."}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground">Что дальше</h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>1. Вы оставляете заявку на участие.</p>
                  <p>2. Мы связываемся с вами и подтверждаем детали.</p>
                  <p>3. Ребёнок приходит на знакомство с клубом и пробует себя в медиаработе.</p>
                </div>
              </div>
            </div>

            <Card className="border-border bg-white shadow-sm">
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Спасибо!</h2>
                    <p className="mt-3 text-muted-foreground">
                      Мы свяжемся с вами в ближайшее время.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Имя ученика</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Введите имя"
                        required
                        className="border-input bg-background text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-foreground">Возраст ученика</Label>
                      <Select name="age" required>
                        <SelectTrigger className="border-input bg-background text-foreground">
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
                      <Label htmlFor="school" className="text-foreground">Школа</Label>
                      <Input
                        id="school"
                        name="school"
                        placeholder="Название школы"
                        required
                        className="border-input bg-background text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-foreground">Город</Label>
                      <Select name="city" required value={selectedCity} onValueChange={setSelectedCity}>
                        <SelectTrigger className="border-input bg-background text-foreground">
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
                      <Label htmlFor="phone" className="text-foreground">Телефон родителя</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        required
                        className="border-input bg-background text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@mail.ru"
                        required
                        className="border-input bg-background text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comment" className="text-foreground">Комментарий</Label>
                      <Textarea
                        id="comment"
                        name="comment"
                        placeholder="Расскажите, почему хотите присоединиться (необязательно)"
                        rows={4}
                        className="resize-none border-input bg-background text-foreground"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90"
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

                    <p className="text-center text-xs leading-relaxed text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
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
