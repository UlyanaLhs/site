# Ульяна — Digital Studio & Full-Stack Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E=18.0-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Премиальный веб-сайт digital-студии и личное портфолио full-stack разработчика: разработка продающих сайтов под ключ, Telegram-ботов, Mini Apps и веб-сервисов с высокими стандартами UI/UX, производительности и конверсии.

---

## 🌟 Ключевые возможности (Key Features)

- **Динамический интерактивный калькулятор стоимости**: Мгновенный расчет бюджета и сроков проекта с учетом типа разработки, функционала, интеграций и срочности.
- **Интерактивные витрины проектов (Case Studies)**: Презентация коммерческих кейсов с бизнес-метриками, стеком технологий, скриншотами и live-демо модальными окнами.
- **Motion & Micro-interactions**: Аппаратно-ускоренные плавные анимации на базе `Framer Motion` (scroll reveals, 3D tilt карточек, glow-эффекты курсора, staggered-списки).
- **Двухрежимный сервер Express + Vite**:
  - *Режим разработки*: Быстрый запуск с встроенным Vite HMR middleware.
  - *Режим production*: Высокопроизводительная раздача оптимизированной статики `dist/` с healthcheck-эндпоинтами (`/healthz`, `/api/health`).
- **Строгая типизация (TypeScript Strict Mode)**: 100% покрытие интерфейсами компонентов, параметров калькулятора, пропсов и данных портфолио. Без ошибок линтинга (`tsc --noEmit`).
- **Адаптивный дизайн & Доступность**: Полная поддержка мобильных устройств, планшетов и широкоформатных экранов, соответствие контрастности стандарту WCAG AA.
- **Интеграция лидогенерации**: Модальное окно обратной связи с валидацией, выбором предпочтительного мессенджера и прямой маршрутизацией в Telegram.

---

## 🛠 Технологический стек (Tech Stack)

| Категория | Технологии |
|---|---|
| **Frontend Core** | [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Сборщик & Dev Server** | [Vite 6](https://vitejs.dev/) |
| **Стилизация & UI** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/vite` |
| **Анимация & Движение** | [Framer Motion 13](https://www.framer.com/motion/), `motion` |
| **Иконки** | [Lucide React](https://lucide.dev/) |
| **Backend & Serving** | [Express 4](https://expressjs.com/), [tsx](https://github.com/privatenumber/tsx), [Node.js](https://nodejs.org/) |
| **AI Интеграция** | `@google/genai` (Google Gemini API SDK) |

---

## 📁 Структура проекта (Project Structure)

```text
uleanaportfloioaistudio-main/
├── public/                 # Статические ассеты (favicon, логотипы, шрифты)
├── src/
│   ├── components/         # Реакт-компоненты
│   │   ├── BackgroundAnimation.tsx  # Разработческий анимированный фон
│   │   ├── Calculator.tsx           # Калькулятор стоимости проекта
│   │   ├── Cases.tsx                # Секция портфолио и кейсов
│   │   ├── ContactModal.tsx         # Модальное окно связи и захвата лидов
│   │   ├── Footer.tsx               # Подвал сайта с быстрыми ссылками
│   │   ├── Hero.tsx                 # Главный экран (Hero Section)
│   │   ├── MotionReveal.tsx         # Обертка для скролл-анимаций
│   │   ├── Navbar.tsx               # Шапка сайта с мобильным меню
│   │   ├── Pricing.tsx              # Тарифные планы и пакеты услуг
│   │   ├── Reviews.tsx              # Отзывы клиентов и социальное доказательство
│   │   └── Services.tsx             # Перечень услуг и стек технологий
│   ├── data/               # Статические данные (кейсы, тарифы, отзывы)
│   ├── types/              # Описания типов TypeScript
│   ├── App.tsx             # Корневой компонент приложения
│   ├── index.css           # Глобальные стили Tailwind CSS v4
│   └── main.tsx            # Точка входа React SPA
├── .env.example            # Пример файла переменных окружения
├── .gitignore              # Исключения версионного контроля
├── index.html              # Базовый HTML-шаблон с мета-тегами и Open Graph
├── metadata.json           # Метаданные приложения
├── package.json            # Зависимости и npm-скрипты
├── server.ts               # Express сервер (development + production)
├── tsconfig.json           # Конфигурация TypeScript
└── vite.config.ts          # Конфигурация сборщика Vite
```

---

## 🚀 Быстрый старт (Quick Start)

### Требования
- **Node.js**: версия `18.0.0` или выше (рекомендуется `20.x` / `22.x`)
- **npm** (или `pnpm`, `yarn`, `bun`)

### 1. Клонирование репозитория
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Настройка переменных окружения
Создайте файл `.env` на основе примера `.env.example`:
```bash
cp .env.example .env
```
Параметры окружения:
- `PORT` — Порт для запуска веб-сервера (по умолчанию: `3000`).
- `GEMINI_API_KEY` — *(опционально)* API-ключ Google Gemini для серверных ИИ-функций.
- `APP_URL` — *(опционально)* Базовый публичный URL хостинга сервиса.

### 4. Запуск в режиме разработки
```bash
npm run dev
```
Сервер запустится по адресу: **`http://localhost:3000`** с включенным Hot Module Replacement (HMR).

---

## 📜 Доступные скрипты (Available Scripts)

В проекте настроены следующие npm-команды:

| Команда | Описание |
|---|---|
| `npm run dev` | Запуск dev-сервера Express + Vite (`tsx server.ts`) на порту `3000` |
| `npm run build` | Оптимизированная production-сборка клиентской части через `vite build` в папку `dist/` |
| `npm start` | Запуск production-сервера с раздачей готовой статики из `dist/` |
| `npm run preview` | Локальный предпросмотр собранного бандла через Vite Preview |
| `npm run lint` | Проверка типов TypeScript без сборки (`tsc --noEmit`) |
| `npm run clean` | Очистка артефактов сборки (`dist/`, временные файлы) |

---

## 🔍 Проверка здоровья и мониторинг (Health Checks)

В `server.ts` реализованы эндпоинты для систем оркестрации (Docker, Kubernetes, Google Cloud Run, Railway):

- **`GET /healthz`** — Возвращает `200 OK` для liveness probe.
- **`GET /api/health`** — Возвращает JSON-статус и таймстемп:
  ```json
  {
    "status": "healthy",
    "timestamp": "2026-10-07T13:53:19.026Z"
  }
  ```

---

## 🌐 Развертывание (Deployment)

### Вариант 1: Vercel / Netlify (Static SPA)
1. Подключите GitHub-репозиторий в панель Vercel.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Root Directory: `./`

### Вариант 2: Node.js VPS / Cloud Run / Railway (Full-Stack Express)
1. Выполните сборку:
   ```bash
   npm install --production=false
   npm run build
   ```
2. Запустите сервис:
   ```bash
   NODE_ENV=production PORT=8080 npm start
   ```

---

## 👤 Автор и Контакты (Author & Contacts)

- **Разработчик**: Ульяна — Full-Stack Developer & Web Designer
- **Telegram**: [@u_ulyana_dev](https://t.me/u_ulyana_dev)
- **Email**: [ulyanafullstack@gmail.com](mailto:ulyanafullstack@gmail.com)
- **Специализация**: Продающие сайты под ключ, Telegram-боты, Mini Apps, Web-сервисы

---

## 📄 Лицензия (License)

Проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](LICENSE).
