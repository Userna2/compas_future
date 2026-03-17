"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileVideo,
  MapPin,
  Users,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { ClubData } from "@/lib/clubs-data"

interface ClubModalProps {
  club: ClubData | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ClubModal({ club, open, onOpenChange }: ClubModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [club?.id, open])

  if (!club) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % club.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + club.gallery.length) % club.gallery.length)
  }

  const currentImage = club.gallery[currentImageIndex]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-primary/10 bg-background p-0 shadow-[0_30px_80px_-30px_rgba(22,101,52,0.45)] sm:max-h-[90vh]">
        <div className="relative overflow-hidden rounded-t-[2rem] bg-gradient-to-br from-primary to-primary/80 px-5 py-8 text-primary-foreground sm:px-8 sm:py-10">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-white/5 blur-3xl" />
          <DialogHeader className="relative w-full max-w-none">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-primary-foreground/90">
              <MapPin className="h-4 w-4" />
              {club.city}
            </div>
            <DialogTitle className="mt-4 w-full max-w-none text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
              {club.name}
            </DialogTitle>
            <DialogDescription className="mt-3 w-full max-w-none text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {club.shortDescription}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="flex flex-col gap-6 p-5 sm:p-8">
          <div className="w-full max-w-none">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-muted">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 py-4 text-white">
                <p className="text-sm text-white/80">Фотогалерея клуба</p>
                <p className="text-lg font-medium">{currentImage.label}</p>
              </div>

              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-lg transition-colors hover:bg-background"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-lg transition-colors hover:bg-background"
                aria-label="Следующее фото"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {club.gallery.map((image, index) => (
                <button
                  key={image.src + index}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  className={`group relative overflow-hidden rounded-2xl border transition-all ${
                    index === currentImageIndex
                      ? "border-primary shadow-[0_18px_40px_-24px_rgba(22,101,52,0.65)]"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full max-w-none rounded-[1.5rem] border border-primary/10 bg-primary/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">О клубе</p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                <span className="font-medium text-foreground">Название клуба:</span> {club.name}
              </p>
              <p>
                <span className="font-medium text-foreground">Город:</span> {club.city}
              </p>
              <p>
                <span className="font-medium text-foreground">Описание клуба:</span> {club.fullDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="w-full min-w-0 rounded-[1.5rem] border border-primary/10 bg-background p-4 text-center shadow-sm">
              <Users className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-3 text-3xl font-semibold text-foreground">{club.participants}</p>
              <p className="text-sm text-muted-foreground">Количество участников</p>
            </div>
            <div className="w-full min-w-0 rounded-[1.5rem] border border-primary/10 bg-background p-4 text-center shadow-sm">
              <FileVideo className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-3 text-3xl font-semibold text-foreground">{club.reports}</p>
              <p className="text-sm text-muted-foreground">Количество репортажей</p>
            </div>
            <div className="w-full min-w-0 rounded-[1.5rem] border border-primary/10 bg-background p-4 text-center shadow-sm">
              <MapPin className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-3 text-3xl font-semibold text-foreground">{club.excursions}</p>
              <p className="text-sm text-muted-foreground">Количество экскурсий</p>
            </div>
          </div>

          <div className="w-full max-w-none rounded-[1.75rem] border border-border bg-card p-5 shadow-sm sm:p-6">
            <h3 className="text-xl font-semibold text-foreground">Что делают участники</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {club.activities.map((activity) => (
                <div
                  key={activity}
                  className="rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-none rounded-[1.75rem] border border-border bg-card p-5 shadow-sm sm:p-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              Пример расписания
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{club.scheduleNote}</p>
            <div className="mt-5 space-y-3">
              {club.schedule.map((item) => (
                <div
                  key={`${item.day}-${item.activity}`}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3"
                >
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className="text-right text-sm text-muted-foreground">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-2">
            <Link href={`/join?club=${club.id}`}>
              <Button className="h-12 w-full rounded-xl bg-primary text-base text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-8">
                Присоединиться к этому клубу
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
