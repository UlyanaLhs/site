# Ulyana — Digital Studio & Full-Stack Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E=18.0-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Премиальный веб-сайт digital-студии и личное портфолио full-stack разработчика: разработка продающих сайтов под ключ, Telegram-ботов, Mini Apps и веб-сервисов с высокими стандартами UI/UX, производительности и конверсии.

---

## Features

- **Интерактивный калькулятор стоимости (ROI & Project Cost Calculator)**: Мгновенный прозрачный расчет стоимости и сроков проекта с учетом типа разработки, функциональных модулей и интеграций.
- **Интерактивная витрина проектов (Commercial Case Studies)**: Презентация коммерческих кейсов с бизнес-метриками, стеком технологий, скриншотами и live-демо модальными окнами.
- **Hardware-Accelerated Motion**: Аппаратно-ускоренные плавные анимации на базе `Framer Motion` (scroll reveals, 3D tilt карточек, glow-эффекты курсора, staggered-списки).
- **Разработческий анимированный фон (Dev Ambient Background)**: Canvas-графика с плавающими токенами, соединениями узлов и интерактивным взаимодействием с курсором.
- **Двухрежимный сервер Express + Vite**:
  - *Режим разработки*: Быстрый запуск с встроенным Vite HMR middleware.
  - *Режим production*: Раздача оптимизированной статики `dist/` с healthcheck-эндпоинтами (`/healthz`, `/api/health`).
- **Строгая типизация (TypeScript Strict Mode)**: 100% покрытие типами компонентов, параметров калькулятора, пропсов и данных портфолио. Без ошибок линтинга (`tsc --noEmit`).
- **Адаптивный дизайн & Доступность**: Полная поддержка мобильных устройств, планшетов и десктопов, соответствие контрастности стандарту WCAG AA.
- **Интеграция лидогенерации**: Модальное окно обратной связи с клиентской валидацией, выбором предпочтительного мессенджера и прямой маршрутизацией в Telegram.

---

## Tech Stack

| Категория | Технологии |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Сборщик & Dev Server** | [Vite 6](https://vitejs.dev/) |
| **Стилизация & UI** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/vite` |
| **Анимация & Движение** | [Framer Motion 13](https://www.framer.com/motion/), `motion` |
| **Иконки** | [Lucide React](https://lucide.dev/) |
| **Backend & Serving** | [Express 4](https://expressjs.com/), [tsx](https://github.com/privatenumber/tsx), [Node.js](https://nodejs.org/) |
| **AI Интеграция** | `@google/genai` (Google Gemini API SDK) |

---

## Getting Started

### Требования
- **Node.js**: версия `18.0.0` или выше (рекомендуется `20.x` / `22.x`)
- **npm** (или `pnpm`, `yarn`, `bun`)

### Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

2. Установите зависимости:
```bash
npm install
```

---

## Environment Variables

Для настройки локального запуска или деплоя скопируйте `.env.example` в `.env`:

```bash
cp .env.example .env
```

Доступные переменные:

| Переменная | Описание | Обязательная | По умолчанию |
|---|---|---|---|
| `PORT` | Порт локального веб-сервера | Нет | `3000` |
| `GEMINI_API_KEY` | API-ключ Google Gemini для серверных ИИ-функций | Нет | — |
| `APP_URL` | Публичный URL приложения (для ссылок и OAuth) | Нет | — |

---

## Development

Запуск локального сервера разработки с поддержкой Hot Module Replacement (HMR):

```bash
npm run dev
```

После старта проект доступен по адресу: **`http://localhost:3000`**.

---

## Production Build

Сборка оптимизированного клиентского приложения для production:

```bash
npm run build
```

Результат сборки помещается в директорию `dist/`.

Проверка типов без сборки:
```bash
npm run lint
```

Запуск production-сервера, обслуживающего собранную статику:
```bash
npm start
```

---

## Preview

Локальный предпросмотр готовой сборки через встроенный сервер Vite:

```bash
npm run preview
```

---

## Project Structure

```text
uleanaportfloioaistudio-main/
├── public/                 # Статические файлы (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── components/         # Модульные React-компоненты
│   │   ├── motion/         # Базовые примитивы движения (MagneticButton, AnimatedCounter, TextMaskReveal)
│   │   ├── AutomationCaseStudies.tsx
│   │   ├── BotShowcaseGallery.tsx
│   │   ├── CaseCard.tsx
│   │   ├── CaseModal.tsx
│   │   ├── CasesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CoreValuePillars.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── FaqSection.tsx
│   │   ├── FeaturedCaseSpotlight.tsx
│   │   ├── FloatingNavDock.tsx
│   │   ├── Footer.tsx
│   │   ├── GlobalAmbientVisualBackground.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroMotionBackground.tsx
│   │   ├── InteractiveArchitecturePipeline.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── MotionReveal.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── RoiCalculator.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   ├── ServicesPricing.tsx
│   │   ├── SocialLinksGrid.tsx
│   │   ├── SoloVsAgency.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── TelegramShowcase.tsx
│   │   └── Toast.tsx
│   ├── context/            # Контексты приложения (LanguageContext)
│   ├── data/               # Данные кейсов, ботов, отзывов и переводов
│   ├── pages/              # Дополнительные экраны и страницы
│   ├── types.ts            # Глобальные интерфейсы и типы TypeScript
│   ├── App.tsx             # Корневой компонент страницы
│   ├── index.css           # Tailwind CSS v4 токены и стили
│   └── main.tsx            # Точка монтирования React SPA
├── .env.example            # Шаблон переменных окружения
├── .gitignore              # Исключения версионного контроля
├── index.html              # HTML-шаблон с мета-тегами
├── LICENSE                 # Лицензия MIT
├── metadata.json           # Метаданные студии
├── package.json            # Манифест зависимостей и скриптов
├── README.md               # Документация проекта
├── server.ts               # Production/development сервер Express
├── tsconfig.json           # Настройки компилятора TypeScript
└── vite.config.ts          # Конфигурация сборщика Vite
```

---

## Deployment

### Вариант 1: Vercel / Netlify (Static Web Hosting)
1. Импортируйте репозиторий в панель управления хостинга.
2. Параметры сборки:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Вариант 2: Node.js VPS / Docker / Cloud Run (Full-Stack Express)
1. Выполните установку зависимостей и сборку:
   ```bash
   npm install --production=false
   npm run build
   ```
2. Запустите production-сервер:
   ```bash
   NODE_ENV=production PORT=8080 npm start
   ```

---

## Health Checks & API

В `server.ts` реализованы эндпоинты проверки состояния приложения:

- `GET /healthz` — Liveness probe (HTTP 200 OK).
- `GET /api/health` — JSON-статус с временной меткой:
  ```json
  {
    "status": "healthy",
    "timestamp": "2026-10-07T13:55:09.101Z"
  }
  ```

---

## Author & Contacts

- **Разработчик**: Ульяна — Full-Stack Developer & Web Designer
- **Telegram**: [@u_ulyana_dev](https://t.me/u_ulyana_dev)
- **Email**: [ulyanafullstack@gmail.com](mailto:ulyanafullstack@gmail.com)
- **Услуги**: Продающие сайты под ключ, Telegram-боты, Mini Apps, Web-сервисы

---

## License

Проект распространяется под свободной лицензией MIT. Подробности см. в файле [LICENSE](LICENSE).
