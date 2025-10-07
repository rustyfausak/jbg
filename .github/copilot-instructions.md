# Copilot Instructions for Jess's Brain Group (JBG)

## Project Overview
This is a React + Vite website for "Jess's Brain Group," a peer-driven community for brain injury survivors. The site uses modern React 19 with Tailwind CSS v4 and Headless UI components.

## Tech Stack & Key Dependencies
- **React 19** with Vite 7 (ES modules, JSX)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **Headless UI** (`@headlessui/react`) for accessible components
- **Heroicons** (`@heroicons/react`) for SVG icons
- **ESLint 9** with React Hooks and React Refresh plugins

## Project Structure & Patterns

### Asset Management
- **Static assets** in `/public/` (favicons, etc.)
- **Component assets** in `/src/assets/` (logos, backgrounds, icons)
- **Import pattern**: Use ES6 imports for assets in components: `import bgImage from './assets/bg-friendly-lg.jpg'`
- **Logo variants**: Both color and white versions available (logo-color.svg, logo-white.svg, icon-color.svg, icon-white.svg)

### Component Architecture
- **Functional components** with hooks (no class components)
- **Component export**: Use `export default function ComponentName()` pattern
- **File naming**: PascalCase for components (`Header.jsx`), camelCase for utilities
- **Import structure**: External deps → internal components → assets

### Styling Conventions
- **Tailwind-first approach**: Use Tailwind utilities, minimal custom CSS
- **CSS import pattern**: `@import "tailwindcss"` in index.css only
- **Responsive design**: Mobile-first with `lg:` breakpoints
- **Color scheme**: Primary stone/gray palette with sky-600 accents
- **Typography**: Font-serif for headings, default sans for body text

### Navigation & UI Patterns
- **Mobile menu**: Uses Headless UI Dialog with slide-in panel pattern
- **State management**: `useState` for simple component state (no external state library)
- **Accessibility**: Proper ARIA labels, screen reader text with `sr-only` class
- **Icon usage**: Heroicons with `size-6` standard sizing

## Development Workflow

### Commands
- **Dev server**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (outputs to `/dist/`)
- **Lint**: `npm run lint` (ESLint with React-specific rules)
- **Preview**: `npm run preview` (preview production build)

### Build Configuration
- **Base path**: Configured for GitHub Pages deployment (`base: '/jbg/'` in vite.config.js)
- **Plugins**: React + Tailwind CSS via Vite plugins
- **Target**: Modern browsers, ES2020

### Deployment
- **GitHub Pages**: Automated via GitHub Actions workflow
- **Build artifacts**: Static files in `/dist/` directory
- **Domain**: Served from `/jbg/` subdirectory

## Code Quality & Linting
- **ESLint config**: Uses new flat config format (eslint.config.js)
- **React rules**: React Hooks and React Refresh plugins enabled
- **Unused vars**: Allowed if starting with uppercase (constants pattern)
- **Global ignores**: `/dist/` directory excluded

## Project-Specific Patterns
- **Background images**: Applied via inline styles with `backgroundImage: url()` for dynamic imports
- **Text shadows**: Custom `text-shadow-lg` utility used for hero text
- **Backdrop effects**: Uses `backdrop-grayscale-25` and `backdrop-brightness-50` for image overlays
- **Layout**: Flexbox-based with `min-h-dvh` for full viewport height
- **Component naming**: Header component function exports as "Example" (should be renamed to "Header")

## Brand & Content Guidelines
- **Brand name**: "Jess's Brain Group" or "JBG"
- **Mission**: Peer-driven community for brain injury survivors and loved ones
- **Tone**: Supportive, inclusive, healing-focused
- **CTA pattern**: "Find Your Peer →" style with arrow unicode character
