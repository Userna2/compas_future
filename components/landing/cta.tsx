import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Building, Users, Users2 } from "lucide-react"

export function CTA() {
  return (
    <section id="join" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 px-6 py-16 md:px-16 md:py-24">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl text-balance">
              Готовы открыть мир профессий?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Присоединяйтесь к нашему проекту и помогите подросткам сделать осознанный выбор профессии. 
              Набор в медиа-клубы открыт!
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Для школьников
                </h3>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Записаться в медиа-клуб и создавать репортажи
                </p>
                <Link href="/join">
                  <Button 
                    className="w-full bg-white text-primary hover:bg-white/90 gap-2"
                    size="lg"
                  >
                    Записаться
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Групповые экскурсии
                </h3>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Организовать экскурсию для школьного класса
                </p>
                <Link href="/excursions">
                  <Button 
                    className="w-full bg-white text-primary hover:bg-white/90 gap-2"
                    size="lg"
                  >
                    Подробнее
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                  <Users2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Для родителей
                </h3>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Помочь ребёнку разобраться с профессией
                </p>
                <Link href="/parents">
                  <Button 
                    className="w-full bg-white text-primary hover:bg-white/90 gap-2"
                    size="lg"
                  >
                    Узнать больше
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                  <Building className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Для организаций
                </h3>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Пригласить медиа-клуб к себе в компанию
                </p>
                <Link href="/organizations">
                  <Button 
                    className="w-full bg-white text-primary hover:bg-white/90 gap-2"
                    size="lg"
                  >
                    Пригласить
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
