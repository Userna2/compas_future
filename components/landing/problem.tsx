import { AlertCircle, BookOpen, Eye } from "lucide-react"

const problems = [
  {
    icon: AlertCircle,
    title: "Слепой выбор",
    description: "78% подростков выбирают профессию, основываясь только на мнении родителей или друзей, без реального понимания сути работы.",
    stat: "78%",
    statLabel: "выбирают вслепую"
  },
  {
    icon: BookOpen,
    title: "Теоретические тесты",
    description: "Онлайн-тесты профориентации дают абстрактные результаты и не показывают, как на самом деле выглядит работа в конкретной профессии.",
    stat: "90%",
    statLabel: "тестов бесполезны"
  },
  {
    icon: Eye,
    title: "Незнание региона",
    description: "Подростки не знают о востребованных профессиях и предприятиях своего региона, мечтая только об IT и блогерстве.",
    stat: "65%",
    statLabel: "не знают рынок труда"
  }
]

export function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Проблема</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl md:text-5xl text-balance">
            Почему подростки не могут выбрать профессию?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Традиционные методы профориентации не работают. Тесты дают теорию, 
            а подросткам нужен реальный опыт и понимание.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-background p-8 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-6">
                <problem.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {problem.description}
              </p>

              <div className="pt-6 border-t border-border">
                <span className="text-3xl font-bold text-primary">{problem.stat}</span>
                <p className="text-sm text-muted-foreground mt-1">{problem.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
