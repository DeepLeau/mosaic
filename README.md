# mosaic

A modern Next.js landing page for Mosaic — the app that connects you with people who want to attend the same cultural events.

## ✨ Features

- Responsive landing page with multiple sections (Hero, How it works, Features, Categories, Testimonials, CTA, Footer)
- Sticky navigation with announcement banner
- Floating notification widgets with CSS animations
- Interactive tab selector for filtering categories
- Scattered tile layout for featured events
- CSS variables for a fully themeable design system (zero hardcoded colors)
- TypeScript for type safety

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Plain CSS with CSS custom properties (design tokens)
- **Fonts**: Cabinet Grotesk (Fontshare) + Inter (Google Fonts)
- **Linting**: ESLint

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ — [Download here](https://nodejs.org/)
- A code editor — [VS Code](https://code.visualstudio.com/) recommended
- Git installed

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/mosaic.git
cd mosaic
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> 💡 **VS Code tip**: Open the integrated terminal with `` Ctrl+` `` (Windows/Linux) or `` Cmd+` `` (Mac)

## 📁 Project Structure

- `src/app` — Next.js App Router entry points
  - `layout.tsx` — root layout with font preconnects and metadata
  - `page.tsx` — home page assembling all sections
  - `globals.css` — design tokens (colors, gradients, spacing, typography) and global styles
- `src/components` — shared components (e.g. `LogoMark`)
- `src/components/sections` — landing page sections, one file per section:
  - `Announcement`, `Navigation`, `Hero`, `HowItWorks`
  - `FeatureEventCard`, `FeatureScatteredTiles`
  - `Categories`, `Testimonials`, `FinalCTA`, `Footer`

## 🎨 Design Tokens

All colors, gradients, spacing, radii, shadows and typography are defined as CSS custom properties in `src/app/globals.css` under the `:root` selector. No colors are hardcoded in components — to rebrand the site, edit the variables in one place.

Examples:

- Base palette: `--color-midnight-ink`, `--color-pure-canvas`, `--color-party-pink`, `--color-spearmint`, …
- Gradients: `--gradient-hero-bg`, `--gradient-party-pink`, `--gradient-spearmint`, …
- Spacing scale: `--spacing-4` through `--spacing-120`
- Radii: `--radius-buttons`, `--radius-cards`, `--radius-modals`, `--radius-pill`

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Step by step:**

1. Click the deploy button above or go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Click **Deploy**

Your site will be live at a Vercel-provided URL (e.g., `mosaic.vercel.app`).

## 📝 License

MIT