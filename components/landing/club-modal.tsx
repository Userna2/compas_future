"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  FileVideo, 
  MapPin, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Check,
  ArrowRight
} from "lucide-react"
import type { ClubData } from "@/lib/clubs-data"

interface ClubModalProps {
  club: ClubData | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ClubModal({ club, open, onOpenChange }: ClubModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!club) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % club.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + club.images.length) % club.images.length)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-8 text-primary-foreground">
          <DialogHeader>
            <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{club.city}</span>
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-primary-foreground">
              {club.fullName}
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80 mt-2">
              {club.shortDescription}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-8">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
              <Image
                src={club.images[currentImageIndex]}
                alt={`${club.fullName} - фото ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors shadow-lg"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors shadow-lg"
                aria-label="Следующее фото"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-sm text-foreground">
                {currentImageIndex + 1} / {club.images.length}
              </div>
            </div>

            {/* Thumbnail dots */}
            <div className="flex justify-center gap-2 mt-4">
              {club.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? "bg-primary w-6" 
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Users className="h-5 w-5" />
              </div>
              <div className="text-3xl font-bold text-foreground">{club.participants}</div>
              <div className="text-sm text-muted-foreground">Участников</div>
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <FileVideo className="h-5 w-5" />
              </div>
              <div className="text-3xl font-bold text-foreground">{club.reports}</div>
              <div className="text-sm text-muted-foreground">Репортажей</div>
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="text-3xl font-bold text-foreground">{club.excursions}</div>
              <div className="text-sm text-muted-foreground">Экскурсий</div>
            </div>
          </div>

          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">О клубе</h3>
            <p className="text-muted-foreground leading-relaxed">{club.fullDescription}</p>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Чем занимаются участники</h3>
            <ul className="space-y-2">
              {club.activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Расписание занятий
            </h3>
            <div className="rounded-xl border border-border overflow-hidden">
              {club.schedule.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 ${
                    index !== club.schedule.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className="text-muted-foreground text-sm">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Join button */}
          <div className="pt-4 border-t border-border">
            <Link href={`/join?club=${club.id}`}>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Присоединиться к этому клубу
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
