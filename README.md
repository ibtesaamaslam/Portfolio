
## 🔬 AI/ML Engineer Portfolio

### Overview

This is the personal portfolio of **Muhammad Ibtesaam Aslam**, an AI/ML Engineer specializing in Artificial Intelligence, Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI. It highlights professional experience, projects, skills, education, and certifications — built to connect with collaborators, clients, or recruiters.

The site uses modern web technologies and includes responsive layouts, smooth animations, and interactive UI elements like dynamic project filtering and an animated aurora background.

---

## ⚙️ Features

* **Responsive Design** – Optimized for mobile, tablet, and desktop
* **Dynamic Content** – Projects, experience, skills, and certifications loaded via JavaScript
* **Interactive UI**:

  * Typing effect in the hero section
  * Project filtering by tech tags
  * Scroll-triggered animations via Intersection Observer
* **Aurora Background** – Pure CSS animated radial gradient
* **Experience Timeline** – Hover-activated timeline showcasing roles
* **Hamburger Menu** – Clean mobile-friendly navigation
* **TypeScript Support** – Ensures robust and type-safe development
* **.env.local Support** – Secure environment variable management

---

## 🛠️ Tech Stack

### Frontend

* **HTML5**, **CSS3** (custom properties, animations)
* **JavaScript (ES6+)**, **TypeScript**
* **Vite** (build and dev server)

### Fonts

* Changa (body)
* Orbitron (headings)
* SF Mono, Fira Code, Roboto Mono (monospace)

### Icons

* Font Awesome (skills and UI icons)

### Dev Tools

* Git & GitHub
* npm (Node.js v18+)

### Key Dependencies

* `@types/node`
* `typescript`
* `vite`

---

## 📁 Project Structure

```
ai-ml-engineer-portfolio/
│
├── .env.local           # Environment variables (not tracked by Git)
├── .gitignore           # Ignore list for Git
├── constrants/          # (Likely a typo: rename to constants/)
├── index.html           # Main HTML file
├── index/               # Possibly for entry points or assets
├── metadata.json        # Metadata (name, description)
├── package.json         # Scripts & dependencies
├── profile_pic/         # Profile image for About section
├── README.md            # You’re reading it
├── script.js            # JS for content injection & interactivity
├── style.css            # Styles, variables, animations
├── tsconfig.json        # TypeScript compiler config
├── types/               # Custom TS type definitions
└── vite.config.js       # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js v18+
* npm v9+
* Git

### Setup

```bash
# Clone the repo
git clone https://github.com/your-username/ai-ml-engineer-portfolio.git
cd ai-ml-engineer-portfolio

# Install dependencies
npm install

# Create environment variables
touch .env.local
# Add this inside .env.local
VITE_API_KEY=your-api-key

# Run development server
npm run dev
```

Visit `http://localhost:3000` to preview.

### Build for Production

```bash
npm run build
```

### Preview Production

```bash
npm run preview
```

---

## 💡 Usage

* Navigate via top nav or hamburger menu on mobile
* Filter projects by clicking tech tags
* Check responsiveness across devices
* Use the **Contact** section to reach out or connect via social links

---

## 🧩 Customization

### Update Content

* Edit `script.js` → your data (projects, experience, skills, etc.)
* Replace image in `profile_pic/` and update the `<img>` tag in `index.html`
* Update social/contact links in `index.html`

### Styling

* Modify `:root` in `style.css` for theme colors, fonts, etc.
* Tweak animations or breakpoints as needed

### TypeScript

* Edit `types/` and `tsconfig.json` as needed

### Constants

* Rename `constrants/` to `constants/` (fix typo)
* Store config or reusable values here

### Environment Variables

* Store secrets in `.env.local` (e.g. `VITE_API_KEY`)

### Deployment

* Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages
* Set environment variables in the hosting platform if needed

---

## ⚠️ Notes

* Font Awesome icons are referenced in `script.js`. Make sure CDN is linked in `index.html`.
* Ensure correct image path for profile picture in `index.html`
* If `index/` has a special purpose (e.g., multiple entry points), clarify in this README
* Convert `script.js` to TypeScript for consistency if using TS elsewhere

---

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome.

* Open an issue to propose features or fixes
* Submit a pull request with a clear description of the change

---

## 📜 License

© 2025 Muhammad Ibtesaam Aslam. All rights reserved.


