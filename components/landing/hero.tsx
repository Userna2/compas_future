import Link from "next/link"
import { ArrowRight, MapPin, Play, Users, Video } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Набор открыт в 5 городах
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary">Компас</span>{" "}
              <span className="relative">
                Будущего
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path
                    d="M2 8.5C50 2.5 150 2.5 298 8.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-accent"
                  />
                </svg>
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Помогаем подросткам открыть реальные профессии своего региона через
              медиа-сторителлинг и репортажи с реальных рабочих мест.
            </p>

            <div className="flex w-fit items-center gap-3 rounded-xl bg-accent/10 px-4 py-3">
              <span className="text-sm text-muted-foreground">Стоимость участия:</span>
              <span className="text-lg font-bold text-accent">8000 ₽ в месяц</span>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link href="/students">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 px-6 text-base text-primary-foreground hover:bg-primary/90 sm:w-auto"
                >
                  Для школьников
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/parents">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full gap-2 border-border px-6 text-base hover:bg-secondary sm:w-auto"
                >
                  Для родителей
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">70+</span>
                <span className="text-sm text-muted-foreground">участников</span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">10+</span>
                <span className="text-sm text-muted-foreground">репортажей</span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">15+</span>
                <span className="text-sm text-muted-foreground">профессий</span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/10">
              <div className="relative aspect-video bg-muted">
                <video
                  src="/videos/hero-video.mp4"
                  controls
                  preload="metadata"
                  poster="/images/report5.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    <button
                      type="button"
                      aria-label="Смотреть репортаж"
                      className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
                    >
                      <Play className="ml-1 h-8 w-8" fill="currentColor" />
                    </button>
                  </div>
                </div> */}
              </div>

              {/* <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex gap-2">
                <div className="flex items-center gap-2 rounded-lg bg-background/90 px-3 py-2 text-sm shadow-lg backdrop-blur">
                  <Video className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">Смотреть репортаж</span>
                </div>
              </div> */}
            </div>

            {/* Floating cards */}
            {/* <div className="absolute -left-4 top-8 hidden rounded-xl border border-border bg-card p-4 shadow-lg lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Медиа-клубы</p>
                  <p className="text-xs text-muted-foreground">в 5 городах Урала</p>
                </div>
              </div>
            </div> */}

            {/* <div className="absolute -right-4 bottom-24 hidden rounded-xl border border-border bg-card p-4 shadow-lg lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Тюмень</p>
                  <p className="text-xs text-muted-foreground">Новый репортаж!</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
