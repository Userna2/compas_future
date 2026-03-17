import { Wrench, Stethoscope, Fuel, Code, Video, Factory, Plane, ChefHat } from "lucide-react"

const professions = [
  {
    icon: Wrench,
    title: "Инженер",
    description: "Проектирование и обслуживание промышленного оборудования",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Stethoscope,
    title: "Врач",
    description: "Работа в больницах и медицинских центрах региона",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Fuel,
    title: "Нефтегазовая отрасль",
    description: "Добыча и переработка на предприятиях Тюменской области",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: Code,
    title: "IT-разработчик",
    description: "Работа в технологических компаниях Урала",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Video,
    title: "Медиаспециалист",
    description: "Видеопроизводство, журналистика, SMM",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Factory,
    title: "Производство",
    description: "Работа на крупнейших заводах Уральского региона",
    color: "bg-slate-100 text-slate-600"
  },
  {
    icon: Plane,
    title: "Авиация",
    description: "Аэропорты, техническое обслуживание самолётов",
    color: "bg-sky-100 text-sky-600"
  },
  {
    icon: ChefHat,
    title: "Общепит и гостеприимство",
    description: "Рестораны, отели, туристическая индустрия",
    color: "bg-orange-100 text-orange-600"
  }
]

export function Professions() {
  return (
    <section id="professions" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Профессии</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Какие профессии изучают участники
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Участники снимут репортажи о более чем 30 профессиях региона — 
            от традиционных индустриальных до современных цифровых.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {professions.map((profession, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${profession.color} mb-4`}>
                <profession.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {profession.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {profession.description}
              </p>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            И ещё более <span className="font-semibold text-foreground">20 профессий</span> у нас в плане
          </p>
        </div>
      </div>
    </section>
  )
}
