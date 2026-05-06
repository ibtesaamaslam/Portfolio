# Futuristic Portfolio

A highly polished, cinematic, and human-made portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Cinematic Design**: Glassmorphism, neon accents, and subtle depth.
- **Micro-interactions**: Hover lifts, button ripples, and custom cursor.
- **Responsive**: Fluid layouts that adapt to mobile, tablet, and desktop.
- **Accessible**: Semantic HTML, keyboard navigation, and reduced-motion support.
- **Dark/Light Mode**: Seamless theme switching.
- **Performance**: Optimized assets and lazy-loaded animations.

## Tech Stack

- **Framework**: React 19 + Vite (Optimized for fast development and builds)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & Lottie React
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

*Note: While the prompt requested Next.js, this project is built using Vite + React to perfectly align with the current AI Studio execution environment constraints, ensuring it runs flawlessly out of the box while meeting all visual, performance, and structural requirements.*

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment (Vercel)

This project is ready to be deployed to Vercel.

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect the Vite framework and configure the build settings (`npm run build` and `dist` output directory).
4. Click "Deploy".

## Design Tradeoffs & Notes

- **Vite vs Next.js**: Used Vite to ensure compatibility with the provided AI Studio environment. The structure mimics a modern component-based architecture.
- **Lottie Animation**: A placeholder JSON structure is used for the Lottie animation in the Hero component. Replace it with your actual Lottie JSON file for production.
- **Contact Form**: The contact form simulates a network request. You will need to connect it to a real backend or service like EmailJS or Formspree.
- **Humanized Copy**: The copy avoids generic AI phrases like "cutting-edge" or "revolutionary". It focuses on real metrics, simple language, and a conversational tone.

## "Doesn't look AI" Checklist

- [x] Humanized copy with contractions and modesty.
- [x] Real-world project examples with specific impact metrics.
- [x] Subtle imperfections and conversational tone.
- [x] Varied sentence lengths and natural rhythm.
- [x] No over-optimized keyword stuffing.
