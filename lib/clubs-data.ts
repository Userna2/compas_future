export interface ClubData {
  id: string
  name: string
  city: string
  fullName: string
  participants: number
  reports: number
  excursions: number
  shortDescription: string
  fullDescription: string
  activities: string[]
  schedule: { day: string; activity: string }[]
  position: { top: string; left: string }
  images: string[]
}

export const clubsData: ClubData[] = [
  {
    id: "tyumen",
    name: "Тюмень",
    city: "Тюмень",
    fullName: "Медиа-клуб «Компас будущего — Тюмень»",
    participants: 142,
    reports: 38,
    excursions: 24,
    shortDescription: "Главный медиа-клуб региона с самым большим количеством участников",
    fullDescription: "Тюменский медиа-клуб — флагман проекта «Компас будущего». Здесь подростки изучают основы журналистики, видеосъёмки и монтажа, а также посещают ведущие предприятия нефтегазовой, IT и производственной отрасли региона. Клуб активно сотрудничает с крупнейшими работодателями Тюменской области.",
    activities: [
      "Обучение профессиональной видеосъёмке",
      "Монтаж видеороликов в Adobe Premiere",
      "Создание репортажей о профессиях региона",
      "Выезды на предприятия нефтегазовой отрасли",
      "Интервью с профессионалами разных сфер"
    ],
    schedule: [
      { day: "Вторник", activity: "Обучение съёмке (16:00 — 18:00)" },
      { day: "Четверг", activity: "Монтаж видео (16:00 — 18:00)" },
      { day: "Суббота", activity: "Выездные репортажи (10:00 — 14:00)" }
    ],
    position: { top: "35%", left: "58%" },
    images: [
      "/images/club-filming.jpg",
      "/images/club-excursion.jpg",
      "/images/club-editing.jpg",
      "/images/club-group.jpg"
    ]
  },
  {
    id: "ekaterinburg",
    name: "Екатеринбург",
    city: "Екатеринбург",
    fullName: "Медиа-клуб «Компас будущего — Екатеринбург»",
    participants: 98,
    reports: 24,
    excursions: 18,
    shortDescription: "Уральская столица с фокусом на IT и промышленность",
    fullDescription: "Екатеринбургский клуб специализируется на знакомстве с IT-индустрией и современным производством. Участники посещают технопарки, IT-компании и машиностроительные заводы столицы Урала. Особое внимание уделяется созданию качественного видеоконтента о высокотехнологичных профессиях.",
    activities: [
      "Обучение видеосъёмке и операторскому мастерству",
      "Монтаж и цветокоррекция видео",
      "Создание репортажей об IT-профессиях",
      "Экскурсии в технопарки и IT-компании",
      "Съёмка на машиностроительных предприятиях"
    ],
    schedule: [
      { day: "Понедельник", activity: "Теория видеосъёмки (17:00 — 19:00)" },
      { day: "Среда", activity: "Практика монтажа (17:00 — 19:00)" },
      { day: "Суббота", activity: "Выездные съёмки (11:00 — 15:00)" }
    ],
    position: { top: "45%", left: "42%" },
    images: [
      "/images/club-filming.jpg",
      "/images/club-excursion.jpg",
      "/images/club-editing.jpg",
      "/images/club-group.jpg"
    ]
  },
  {
    id: "chelyabinsk",
    name: "Челябинск",
    city: "Челябинск",
    fullName: "Медиа-клуб «Компас будущего — Челябинск»",
    participants: 87,
    reports: 21,
    excursions: 15,
    shortDescription: "Промышленный центр с уникальными производствами",
    fullDescription: "Челябинский клуб открывает двери на крупнейшие металлургические и машиностроительные предприятия России. Участники снимают репортажи о профессиях в тяжёлой промышленности, энергетике и логистике. Клуб известен своими масштабными экскурсиями на заводы-гиганты.",
    activities: [
      "Обучение документальной видеосъёмке",
      "Монтаж промышленных репортажей",
      "Экскурсии на металлургические комбинаты",
      "Съёмка на энергетических объектах",
      "Интервью с инженерами и технологами"
    ],
    schedule: [
      { day: "Вторник", activity: "Основы съёмки (16:30 — 18:30)" },
      { day: "Пятница", activity: "Монтаж и постпродакшн (16:30 — 18:30)" },
      { day: "Воскресенье", activity: "Выездные репортажи (10:00 — 14:00)" }
    ],
    position: { top: "60%", left: "48%" },
    images: [
      "/images/club-filming.jpg",
      "/images/club-excursion.jpg",
      "/images/club-editing.jpg",
      "/images/club-group.jpg"
    ]
  },
  {
    id: "perm",
    name: "Пермь",
    city: "Пермь",
    fullName: "Медиа-клуб «Компас будущего — Пермь»",
    participants: 64,
    reports: 18,
    excursions: 12,
    shortDescription: "Культурная столица Урала с творческим уклоном",
    fullDescription: "Пермский клуб сочетает изучение традиционных промышленных профессий с креативными индустриями. Участники знакомятся с работой в сфере культуры, медиа и дизайна, а также посещают химические и авиационные предприятия края. Особый акцент на storytelling и креативный подход к репортажам.",
    activities: [
      "Обучение креативной видеосъёмке",
      "Сторителлинг и сценарное мастерство",
      "Репортажи о креативных профессиях",
      "Экскурсии в музеи и культурные центры",
      "Съёмки на авиационных предприятиях"
    ],
    schedule: [
      { day: "Среда", activity: "Теория и практика съёмки (16:00 — 18:00)" },
      { day: "Пятница", activity: "Монтаж и сторителлинг (16:00 — 18:00)" },
      { day: "Суббота", activity: "Выездные проекты (11:00 — 15:00)" }
    ],
    position: { top: "30%", left: "25%" },
    images: [
      "/images/club-filming.jpg",
      "/images/club-excursion.jpg",
      "/images/club-editing.jpg",
      "/images/club-group.jpg"
    ]
  },
  {
    id: "kurgan",
    name: "Курган",
    city: "Курган",
    fullName: "Медиа-клуб «Компас будущего — Курган»",
    participants: 45,
    reports: 12,
    excursions: 8,
    shortDescription: "Новый клуб 2024 года с большим потенциалом",
    fullDescription: "Самый молодой клуб проекта, открытый в 2024 году. Курганский медиа-клуб знакомит подростков с профессиями в сельском хозяйстве, пищевой промышленности и машиностроении. Несмотря на молодой возраст, клуб уже выпустил несколько ярких репортажей о профессиях Зауралья.",
    activities: [
      "Базовый курс видеосъёмки",
      "Основы видеомонтажа",
      "Репортажи об агропромышленных профессиях",
      "Экскурсии на пищевые производства",
      "Знакомство с медицинскими профессиями"
    ],
    schedule: [
      { day: "Понедельник", activity: "Обучение съёмке (15:30 — 17:30)" },
      { day: "Четверг", activity: "Практика монтажа (15:30 — 17:30)" },
      { day: "Суббота", activity: "Выездные мероприятия (10:00 — 13:00)" }
    ],
    position: { top: "55%", left: "65%" },
    images: [
      "/images/club-filming.jpg",
      "/images/club-excursion.jpg",
      "/images/club-editing.jpg",
      "/images/club-group.jpg"
    ]
  }
]

export function getClubById(id: string): ClubData | undefined {
  return clubsData.find(club => club.id === id)
}

export function getTotalStats() {
  return {
    participants: clubsData.reduce((acc, club) => acc + club.participants, 0),
    reports: clubsData.reduce((acc, club) => acc + club.reports, 0),
    excursions: clubsData.reduce((acc, club) => acc + club.excursions, 0),
    cities: clubsData.length
  }
}
