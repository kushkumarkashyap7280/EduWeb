# EduWeb

EduWeb is a modern, responsive learning platform front‑end built with React and Vite. It showcases course listings, reasons to choose the platform, company outcomes, reviews, and more—optimized for performance and a smooth user experience.

## Live Demo

- Deployment: https://edu-web-hazel.vercel.app/

## Repository

- GitHub: https://github.com/kushkumarkashyap7280/EduWeb

## Features

- Clean, responsive UI with Tailwind CSS
- Page transitions and micro‑interactions using Framer Motion
- Client‑side routing (React Router)
- Accessible images, lazy loading, and semantic markup
- Modular components (e.g., Courses, WhyUs, Companies, Reviews)

## Tech Stack

- React (Vite)
- React Router
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

Prerequisites: Node.js (LTS recommended) and npm or yarn.

1. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

2. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open the app
   Vite will print a local URL (typically http://localhost:5173). Open it in your browser.

## Build

Create an optimized production build:
```bash
npm run build
# or
yarn build
```
Serve the `dist/` folder with any static file server.

## Project Structure (high level)

```
EduWeb/
├─ public/
│  └─ logo.svg               # App logo (also used as favicon)
├─ src/
│  ├─ components/            # Reusable UI components
│  │  ├─ Navbar.jsx, Footer.jsx
│  │  ├─ Companies.jsx, Courses.jsx, WhyUs.jsx, Reviews.jsx, ...
│  ├─ pages/                  # Route-level pages (compose components)
│  │  ├─ Home.jsx, Courses.jsx, WhyUs.jsx, Companies.jsx, Outcomes.jsx, Reviews.jsx
│  ├─ assets/                 # Images and media used by components
│  ├─ App.jsx                 # App shell and route transitions
│  └─ main.jsx                # App bootstrap
└─ index.html                 # Vite entry HTML
```

## Conventions & Notes

- Animations use capitalized aliases (e.g., `const MotionDiv = motion.div`) to satisfy ESLint rules.
- Public logo is served from `public/logo.svg` and referenced as `/logo.svg` in components.
- Company logos are sized responsively for clarity across breakpoints.

## Roadmap

- Course detail pages and enrollment flow
- Real backend integration for data (courses, companies, reviews)
- Light/dark theme
