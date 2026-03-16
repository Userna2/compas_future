import { Video, Building2, Film, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Video,
    title: "Учимся медиапроизводству",
    description: "Подростки осваивают основы видеосъёмки, монтажа и сторителлинга под руководством профессиональных наставников.",
    color: "bg-primary"
  },
  {
    number: "02",
    icon: Building2,
    title: "Посещаем предприятия",
    description: "Организуем экскурсии на реальные рабочие места: заводы, больницы, IT-компании, медиахолдинги региона.",
    color: "bg-accent"
  },
  {
    number: "03",
    icon: Film,
    title: "Снимаем репортажи",
    description: "Создаём документальные репортажи о профессиях, интервьюируем специалистов, показываем реальный рабочий день.",
    color: "bg-primary"
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Понимаем рынок труда",
    description: "Формируем осознанное представление о востребованных профессиях и карьерных возможностях в регионе.",
    color: "bg-accent"
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Как это работает</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            От идеи до осознанного выбора
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Четыре шага к осознанному выбору профессии через практический опыт 
            и создание медиаконтента.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative mb-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full ${step.color} text-white font-bold text-xl shadow-lg`}>
                    {step.number}
                  </div>
                  {/* Connector dot for desktop */}
                  <div className="hidden lg:block absolute -bottom-[30px] left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-4 border-primary" />
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-4">
                  <step.icon className="h-6 w-6 text-foreground" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features row */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "12", label: "недель программы" },
            { value: "4+", label: "экскурсии на предприятия" },
            { value: "3", label: "готовых репортажа" },
            { value: "100%", label: "практики" }
          ].map((item, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-6 text-center">
              <span className="text-3xl font-bold text-primary">{item.value}</span>
              <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
