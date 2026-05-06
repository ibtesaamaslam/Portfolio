<div align="center">

<br/>

# ✦ Futuristic Portfolio

### *A Cinematic, Human-Made Developer Portfolio — Built with React 19, Vite & Framer Motion*

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-95%25-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://portfolio-eight-azure-61.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

<br/>

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-portfolio--eight--azure--61.vercel.app-0070f3?style=for-the-badge)](https://portfolio-eight-azure-61.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/📂%20Repository-ibtesaamaslam%2FPortfolio-181717?style=for-the-badge&logo=github)](https://github.com/ibtesaamaslam/Portfolio)

<br/>

---

</div>

## Table of Contents

1. [Introduction](#1-introduction)
2. [Live Demo](#2-live-demo)
3. [Design Philosophy](#3-design-philosophy)
4. [Features](#4-features)
5. [Tech Stack](#5-tech-stack)
6. [Project Structure](#6-project-structure)
7. [Prerequisites](#7-prerequisites)
8. [Installation & Local Development](#8-installation--local-development)
9. [Available Scripts](#9-available-scripts)
10. [Environment Variables](#10-environment-variables)
11. [Deployment on Vercel](#11-deployment-on-vercel)
12. [Design Tradeoffs & Notes](#12-design-tradeoffs--notes)
13. [Customisation Guide](#13-customisation-guide)
14. [Performance & Accessibility](#14-performance--accessibility)
15. [Roadmap](#15-roadmap)
16. [License](#16-license)
17. [Author](#17-author)

---

## 1. Introduction

This is a **personal developer portfolio** built to be visually distinctive, performant, and genuinely human in its tone — not another template-driven, AI-buzzword-filled showcase. Every design decision was made with intention: the glassmorphism layers, the neon accents, the spring-physics micro-interactions, the dark/light mode toggle, the custom cursor — all of it earned, not copied.

The portfolio is built on **React 19 + Vite** with **TypeScript** at 95%+ coverage, styled with **Tailwind CSS v4**, and animated with **Framer Motion** and **Lottie React**. It is live at [portfolio-eight-azure-61.vercel.app](https://portfolio-eight-azure-61.vercel.app) and deploys automatically on every push to `main`.

**What makes this different from a typical portfolio template?**

- Copy is written in plain, conversational English — no "passionate developer leveraging synergistic solutions"
- Project examples use real impact metrics, not vague claims
- Animations are spring-physics based — they feel organic, not mechanical
- Reduced-motion support is built in — accessibility is not an afterthought
- The design has deliberate asymmetry and subtle imperfections that signal human authorship

---

## 2. Live Demo

**🔗 [portfolio-eight-azure-61.vercel.app](https://portfolio-eight-azure-61.vercel.app)**

---

## 3. Design Philosophy

The portfolio was built around one core principle:

> *"It should look like a person made it — not a prompt."*

This shaped every decision from typography to copy to animation timing:

| Principle | How It's Applied |
|---|---|
| **Cinematic depth** | Glassmorphism cards, layered shadows, neon glow accents |
| **Humanised copy** | Contractions, real metrics, conversational rhythm, no keyword stuffing |
| **Purposeful motion** | Framer Motion spring physics — interactions feel weighted, not instant |
| **Considered accessibility** | `prefers-reduced-motion` support, keyboard nav, semantic HTML |
| **Real imperfection** | Varied sentence lengths, modest tone, no over-polish |

---

## 4. Features

**🎬 Cinematic Visual Design**
Glassmorphism panels with frosted-glass depth, neon accent colours, and layered background gradients create a dark, atmospheric aesthetic that feels designed — not generated.

**🖱️ Custom Cursor**
A bespoke cursor with a trailing glow effect replaces the default system cursor, adding personality and reinforcing the premium feel throughout all interactions.

**⚡ Micro-Interactions**
Every interactive element has a deliberate response — hover lifts on cards, button ripple effects on click, smooth focus transitions, and spring-animated entrance sequences on scroll.

**🌗 Dark / Light Mode**
A seamless theme toggle switches between a deep dark mode and a clean light mode, with smooth colour transitions throughout all components. Preference is persisted to `localStorage`.

**📱 Fully Responsive**
Fluid grid layouts adapt gracefully from 320px mobile screens to large desktop displays. All animations, typography, and spacing are tuned per breakpoint.

**♿ Accessible by Default**
Semantic HTML5 throughout, full keyboard navigation support, ARIA labels on all interactive elements, and `prefers-reduced-motion` media query support that disables animations for users who need it.

**🚀 Optimised Performance**
Lazy-loaded animations, code-split routes, tree-shaken Tailwind output, and Vite's ESM build pipeline combine to produce lean, fast bundle sizes.

**✉️ Contact Form**
A functional contact form with client-side validation and simulated network request — ready to be connected to [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/) with a single configuration change.

---

## 5. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI component framework |
| [Vite](https://vitejs.dev/) | Latest | Build tool — dev server + production bundler |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety across all components and utilities |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first styling with custom design tokens |
| [Framer Motion](https://www.framer.com/motion/) | Latest | Spring-physics animations and page transitions |
| [Lottie React](https://github.com/LottieFiles/lottie-react) | Latest | JSON-based vector animations in the Hero section |
| [Lucide React](https://lucide.dev/) | Latest | Clean, consistent icon set |
| [clsx](https://github.com/lukeed/clsx) | Latest | Conditional className composition |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Latest | Conflict-free Tailwind class merging |
| [Vercel](https://vercel.com/) | — | Hosting, CDN, and automatic deployments |

---

## 6. Project Structure

```
Portfolio/
│
├── public/                        # Static assets served as-is
│   ├── favicon.ico
│   └── assets/
│
├── src/
│   ├── components/                # Reusable UI components
│   │   ├── Cursor/                # Custom animated cursor
│   │   ├── Navbar/                # Navigation with theme toggle
│   │   ├── Hero/                  # Landing section with Lottie animation
│   │   ├── About/                 # Bio, skills, and personality
│   │   ├── Projects/              # Project cards with live/repo links
│   │   ├── Experience/            # Timeline of work and education
│   │   ├── Contact/               # Contact form with validation
│   │   └── Footer/                # Footer with social links
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useTheme.ts            # Dark/light mode toggle + persistence
│   │   ├── useScrollAnimation.ts  # Intersection Observer scroll triggers
│   │   └── useReducedMotion.ts    # prefers-reduced-motion detection
│   │
│   ├── utils/                     # Helper functions
│   │   ├── cn.ts                  # clsx + tailwind-merge combined utility
│   │   └── constants.ts           # Site metadata, nav links, social URLs
│   │
│   ├── types/                     # TypeScript type definitions
│   ├── App.tsx                    # Root component with routing
│   ├── main.tsx                   # ReactDOM entry point
│   └── index.css                  # Global styles + Tailwind directives
│
├── .env.example                   # Environment variable template
├── .gitignore                     # Git ignore rules
├── index.html                     # HTML entry point
├── metadata.json                  # Site metadata
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript compiler config
├── vite.config.ts                 # Vite bundler config
└── README.md                      # This file
```

---

## 7. Prerequisites

| Requirement | Minimum Version | Check |
|---|---|---|
| [Node.js](https://nodejs.org/) | v18.0.0 | `node --version` |
| npm | v9.0.0 | `npm --version` |
| [Git](https://git-scm.com/) | Any recent | `git --version` |

---

## 8. Installation & Local Development

**Step 1 — Clone the repository**

```bash
git clone https://github.com/ibtesaamaslam/Portfolio.git
cd Portfolio
```

**Step 2 — Install dependencies**

```bash
npm install
```

**Step 3 — Set up environment variables**

```bash
cp .env.example .env
```

Open `.env` and fill in your values (see Section 10).

**Step 4 — Start the development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The dev server supports Hot Module Replacement — changes appear instantly without a full page reload.

---

## 9. Available Scripts

| Script | Command | Description |
|---|---|---|
| **Development** | `npm run dev` | Start Vite dev server with HMR on `localhost:5173` |
| **Build** | `npm run build` | Type-check + production build → output to `/dist` |
| **Preview** | `npm run preview` | Serve the `/dist` production build locally |
| **Lint** | `npm run lint` | Run ESLint across all TypeScript and TSX files |
| **Type Check** | `npm run type-check` | Run `tsc --noEmit` — catch type errors without building |

---

## 10. Environment Variables

Copy `.env.example` to `.env` and configure the following:

```env
# ─────────────────────────────────────────────
# Portfolio — Environment Configuration
# DO NOT commit .env to version control
# ─────────────────────────────────────────────

# Contact form — choose one:

# Option A: EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Option B: Formspree
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

| Variable | Required | Description |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | If using EmailJS | EmailJS service ID from dashboard |
| `VITE_EMAILJS_TEMPLATE_ID` | If using EmailJS | Email template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | If using EmailJS | EmailJS public key |
| `VITE_FORMSPREE_ENDPOINT` | If using Formspree | Full Formspree form endpoint URL |

> ⚠️ All Vite environment variables must be prefixed with `VITE_` to be accessible in the browser bundle.

---

## 11. Deployment on Vercel

This project is pre-configured for zero-setup Vercel deployment.

**Step 1 — Push to GitHub**

```bash
git add .
git commit -m "chore: ready for deployment"
git push origin main
```

**Step 2 — Import on Vercel**

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Select the `Portfolio` repository
3. Vercel auto-detects **Vite** — no manual settings needed

**Step 3 — Set Environment Variables**

In Vercel's project settings → **Environment Variables**, add all variables from your `.env` file.

**Step 4 — Deploy**

Click **Deploy**. Your portfolio goes live in under 60 seconds.

**Automatic deployments:** Every push to `main` triggers a new production deployment. Pull requests generate isolated Preview deployments with unique URLs.

---

## 12. Design Tradeoffs & Notes

**Vite vs Next.js**
This project uses Vite + React rather than Next.js. Vite produces faster development builds, simpler configuration, and a leaner output for a purely client-side static portfolio — where server-side rendering and ISR provide no meaningful benefit. The component architecture is identical to what you'd write in Next.js.

**Lottie Animation**
The Hero section uses a placeholder Lottie JSON structure. To use your own animation, replace the placeholder JSON file in `src/components/Hero/` with any animation exported from [LottieFiles](https://lottiefiles.com/) and update the import path accordingly.

**Contact Form Backend**
The contact form includes client-side validation and a simulated network request out of the box. To make it functional, connect it to either:
- **[EmailJS](https://www.emailjs.com/)** — browser-side email sending, no backend required, generous free tier
- **[Formspree](https://formspree.io/)** — form endpoint service, simplest possible integration (one URL)

**Humanised Copy**
All text content deliberately avoids generic developer portfolio phrases. The copy uses contractions, real impact metrics, conversational sentence rhythm, and moderate modesty — hallmarks of writing that sounds like a person rather than a prompt.

---

## 13. Customisation Guide

**Changing personal information:**
Edit `src/utils/constants.ts` — this file contains your name, bio, social links, navigation items, and site metadata. Updating it propagates changes across all components automatically.

**Replacing project cards:**
Edit the `projects` array in `src/utils/constants.ts`. Each project object contains: `title`, `description`, `tech` (array), `liveUrl`, `repoUrl`, and `image`.

**Changing the colour scheme:**
Edit `tailwind.config.ts` — the `theme.extend.colors` object contains all custom colour tokens (neon accents, glass backgrounds, border colours). Changing these propagates the new palette throughout the entire site.

**Swapping the Lottie animation:**
Download any animation from [LottieFiles](https://lottiefiles.com/) as a `.json` file, place it in `src/components/Hero/`, and update the import in `Hero.tsx`.

**Connecting the contact form:**
Open `src/components/Contact/ContactForm.tsx`, find the `handleSubmit` function, and replace the simulated request with your EmailJS or Formspree call using the environment variables from Section 10.

---

## 14. Performance & Accessibility

**Performance targets:**

| Metric | Target | Strategy |
|---|---|---|
| First Contentful Paint | < 1.2s | Static assets on Vercel CDN edge |
| Largest Contentful Paint | < 2.0s | Hero image/Lottie lazy loaded |
| Cumulative Layout Shift | < 0.05 | Reserved space for all dynamic content |
| Lighthouse Performance | > 90 | Vite tree-shaking + code splitting |

**Accessibility features:**

- All images have descriptive `alt` attributes
- All interactive elements have ARIA labels
- Full keyboard navigation with visible focus indicators
- `prefers-reduced-motion` media query disables all Framer Motion animations for users who need it
- Colour contrast ratios meet WCAG 2.1 AA minimums in both dark and light modes
- Semantic HTML5 elements throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)

---

## 15. Roadmap

- [ ] Connect contact form to EmailJS (production-ready)
- [ ] Replace Lottie placeholder with custom animation
- [ ] Add blog section with MDX support
- [ ] Add testimonials / recommendations section
- [ ] Implement page transition animations between sections
- [ ] Add loading skeleton states for project images
- [ ] PWA support with service worker for offline access
- [ ] Analytics integration (Vercel Analytics or Plausible)

---

## 16. License

```
MIT License — Copyright (c) 2025 Ibtesaam Aslam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 17. Author

<div align="center">

### **Ibtesaam Aslam**
*Full-Stack Developer · UI/UX Engineer · Open-Source Builder*

[![GitHub](https://img.shields.io/badge/GitHub-%40ibtesaamaslam-181717?style=for-the-badge&logo=github)](https://github.com/ibtesaamaslam)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live%20Site-0070f3?style=for-the-badge&logo=vercel)](https://portfolio-eight-azure-61.vercel.app)

</div>

---

<div align="center">

*Built with intention. Deployed with care.*

[![Star on GitHub](https://img.shields.io/github/stars/ibtesaamaslam/Portfolio?style=social)](https://github.com/ibtesaamaslam/Portfolio)

</div>
