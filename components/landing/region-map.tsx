"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin, Users, FileVideo, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { clubsData, getTotalStats } from "@/lib/clubs-data"
import { ClubModal } from "./club-modal"

export function RegionMap() {
  const [activeCity, setActiveCity] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedClub, setSelectedClub] = useState<string | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  
  const activeCityData = clubsData.find(c => c.id === activeCity)
  const selectedClubData = clubsData.find(c => c.id === selectedClub)
  const totalStats = getTotalStats()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setActiveCity(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleCityClick = (cityId: string) => {
    setActiveCity(activeCity === cityId ? null : cityId)
  }

  const handleOpenModal = (clubId: string) => {
    setSelectedClub(clubId)
    setModalOpen(true)
  }

  return (
    <section id="map" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">География проекта</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl md:text-5xl text-balance">
            Медиа-клубы Уральского региона
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Сеть из {clubsData.length} медиа-клубов охватывает крупнейшие города Урала и Западной Сибири. 
            Нажмите на маркер, чтобы узнать больше о клубе.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr,400px] items-start" ref={mapRef}>
          {/* Map */}
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 via-secondary to-accent/5 border border-border overflow-hidden">
            {/* SVG Map of Ural Region */}
            <svg 
              viewBox="0 0 400 300" 
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Ural Federal District outline - simplified shape */}
              <path 
                d="M 80 40 
                   L 120 25 L 180 20 L 240 25 L 300 35 L 340 50 
                   L 355 80 L 360 120 L 355 160 L 340 200 
                   L 310 240 L 260 265 L 200 275 L 140 270 
                   L 90 250 L 55 210 L 45 160 L 50 110 L 60 70 Z"
                fill="currentColor"
                className="text-primary/10"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/30"
              />
              
              {/* Region subdivisions (oblast boundaries) */}
              <path 
                d="M 150 45 L 160 120 L 120 180 M 160 120 L 250 100 L 300 150 M 160 120 L 180 200 L 250 220"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 2"
                className="text-primary/20"
              />
              
              {/* Region labels */}
              <text x="90" y="100" className="text-[8px] fill-muted-foreground font-medium" opacity="0.6">Пермский край</text>
              <text x="260" y="80" className="text-[8px] fill-muted-foreground font-medium" opacity="0.6">Свердловская обл.</text>
              <text x="280" y="180" className="text-[8px] fill-muted-foreground font-medium" opacity="0.6">Челябинская обл.</text>
              <text x="150" y="250" className="text-[8px] fill-muted-foreground font-medium" opacity="0.6">Курганская обл.</text>
              <text x="120" y="170" className="text-[8px] fill-muted-foreground font-medium" opacity="0.6">Тюменская обл.</text>
            </svg>

            {/* City markers */}
            {clubsData.map((club) => (
              <button
                key={club.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-200 ${
                  activeCity === club.id ? "scale-125 z-20" : "hover:scale-110"
                }`}
                style={{ top: club.position.top, left: club.position.left }}
                onClick={() => handleCityClick(club.id)}
                aria-label={`Показать информацию о городе ${club.name}`}
              >
                <div className={`relative flex h-10 w-10 items-center justify-center rounded-full ${
                  activeCity === club.id ? "bg-primary ring-4 ring-primary/20" : "bg-primary/80 hover:bg-primary"
                } text-primary-foreground shadow-lg transition-all`}>
                  <MapPin className="h-5 w-5" />
                  {/* Pulse effect for active city */}
                  {activeCity === club.id && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>
                <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCity === club.id ? "text-primary font-semibold" : "text-muted-foreground"
                }`}>
                  {club.name}
                </span>
              </button>
            ))}

          </div>

          {/* City info cards */}
          <div className="space-y-4">
            {activeCityData ? (
              <div className="rounded-2xl border border-primary/20 bg-background p-6 shadow-lg relative">
                <button
                  onClick={() => setActiveCity(null)}
                  className="absolute top-4 right-4 p-1 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Закрыть"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
                <div className="flex items-start justify-between mb-4 pr-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{activeCityData.fullName}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{activeCityData.shortDescription}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="rounded-xl bg-secondary p-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Users className="h-4 w-4" />
                      <span className="text-xs">Участников</span>
                    </div>
                    <span className="text-2xl font-bold text-foreground">{activeCityData.participants}</span>
                  </div>
                  <div className="rounded-xl bg-secondary p-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <FileVideo className="h-4 w-4" />
                      <span className="text-xs">Репортажей</span>
                    </div>
                    <span className="text-2xl font-bold text-foreground">{activeCityData.reports}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => handleOpenModal(activeCityData.id)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  Подробнее о клубе
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-background p-6 text-center">
                <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Нажмите на маркер города, чтобы увидеть информацию о клубе</p>
              </div>
            )}

            {/* Stats summary */}
            <div className="rounded-2xl border border-border bg-background p-6">
              <h4 className="font-semibold text-foreground mb-4">Общая статистика</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Всего участников</span>
                  <span className="font-semibold text-foreground">{totalStats.participants}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Всего репортажей</span>
                  <span className="font-semibold text-foreground">{totalStats.reports}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Всего экскурсий</span>
                  <span className="font-semibold text-foreground">{totalStats.excursions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Городов</span>
                  <span className="font-semibold text-foreground">{totalStats.cities}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Club Modal */}
      <ClubModal 
        club={selectedClubData || null}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
