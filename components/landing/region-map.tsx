"use client"

import { useMemo, useState } from "react"
import { ArrowRight, Building2, FileVideo, Users } from "lucide-react"
import { clubsData, getTotalStats } from "@/lib/clubs-data"
import { ClubModal } from "./club-modal"

export function RegionMap() {
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null)
  const totalStats = useMemo(() => getTotalStats(), [])
  const selectedClub = clubsData.clubs.find((club) => club.id === selectedClubId) ?? null

  return (
    <section id="map" className="relative overflow-hidden bg-card py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-0 top-8 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            География проекта
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl md:text-5xl text-balance">
            {clubsData.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {clubsData.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clubsData.clubs.map((club) => (
            <button
              key={club.id}
              type="button"
              onClick={() => setSelectedClubId(club.id)}
              className="group flex h-full flex-col rounded-3xl border border-primary/10 bg-background/95 p-6 text-left shadow-[0_18px_50px_-28px_rgba(22,101,52,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_28px_70px_-30px_rgba(22,101,52,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                    {club.city}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground">
                    {club.name}
                  </h3>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>

              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                {club.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/7 px-3 py-1.5">
                  <Users className="h-4 w-4 text-primary" />
                  {club.participants} участников
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/7 px-3 py-1.5">
                  <FileVideo className="h-4 w-4 text-primary" />
                  {club.reports} репортажей
                </span>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Подробнее
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-[2rem] border border-primary/10 bg-background/90 p-5 shadow-[0_18px_50px_-30px_rgba(22,101,52,0.4)] sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          <div className="rounded-2xl bg-primary/7 p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4 text-primary" />
              Городов
            </div>
            <p className="mt-2 text-3xl font-semibold text-foreground">{totalStats.cities}</p>
          </div>
          <div className="rounded-2xl bg-primary/7 p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              Участников
            </div>
            <p className="mt-2 text-3xl font-semibold text-foreground">{totalStats.participants}</p>
          </div>
          <div className="rounded-2xl bg-primary/7 p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileVideo className="h-4 w-4 text-primary" />
              Репортажей
            </div>
            <p className="mt-2 text-3xl font-semibold text-foreground">{totalStats.reports}</p>
          </div>
          <div className="rounded-2xl bg-primary/7 p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowRight className="h-4 w-4 text-primary" />
              Экскурсий
            </div>
            <p className="mt-2 text-3xl font-semibold text-foreground">{totalStats.excursions}</p>
          </div>
        </div>
      </div>

      <ClubModal
        club={selectedClub}
        open={Boolean(selectedClubId)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedClubId(null)
          }
        }}
      />
    </section>
  )
}
