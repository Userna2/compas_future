import { MessageSquare, Camera, Compass, Shield, Check } from "lucide-react"

const benefits = [
  {
    icon: MessageSquare,
    title: "Коммуникативные навыки",
    description: "Умение брать интервью, задавать вопросы, общаться с профессионалами из разных сфер",
    features: ["Публичные выступления", "Работа в команде", "Навыки презентации"]
  },
  {
    icon: Camera,
    title: "Медиаграмотность",
    description: "Практические навыки создания видеоконтента, которые востребованы в любой профессии",
    features: ["Видеосъёмка", "Монтаж видео", "Сторителлинг"]
  },
  {
    icon: Compass,
    title: "Осознанность выбора",
    description: "Ребёнок видит реальную работу изнутри и принимает решение на основе опыта, а не мечтаний",
    features: ["Знание рынка труда", "Реальные впечатления", "Понимание требований"]
  },
  {
    icon: Shield,
    title: "Уверенность в себе",
    description: "Опыт общения с профессионалами и создания контента повышает самооценку подростка",
    features: ["Портфолио работ", "Публичный опыт", "Признание результатов"]
  }
]

export function ParentsBenefits() {
  return (
    <section id="parents" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Для родителей</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl md:text-5xl text-balance">
              Что получит ваш ребёнок
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              «Компас Будущего» — это не просто профориентация. Это комплексная программа 
              развития навыков, которые пригодятся в любой профессии.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Занятия 2 раза в неделю по 2 часа",
                "Профессиональное оборудование",
                "Опытные наставники-практики",
                "Сертификат по окончании программы",
                "Портфолио готовых работ"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-card-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-background p-6 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <ul className="space-y-1.5">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
