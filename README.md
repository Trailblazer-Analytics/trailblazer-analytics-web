# Trailblazer Analytics - Personal Branding Website

This repository contains the source code for my personal branding website. Built with Astro, React, and Tailwind CSS, this site serves as a central hub for my work as a thought leader in the data analytics space.

**🎉 Cleanup Complete**: Simplified static architecture with clean navigation, Medium RSS integration for articles, and robust empty state handling.

**Live Site**: [https://anykolaiszyn.github.io/trailblazer-analytics-devkit/](https://anykolaiszyn.github.io/trailblazer-analytics-devkit/)

## 🚀 Key Features

- **Content Hub**: Blog posts, case studies, and tech notes hosted locally.
- **Articles Integration**: Clean RSS feed integration with Medium publication.
- **Resource Downloads**: Ready for new downloads (currently empty, awaiting content).
- **Interactive Tools**: Premium calculators and frameworks for analytics professionals.
- **Modern Design**: Responsive, accessible design with dynamic features like coffee counter.

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Development Setup

```bash
# Clone and install dependencies
git clone <repository-url>
cd trailblazer-analytics-devkit
pnpm install

# Start development server
pnpm run dev   # http://localhost:4321

# Build for production
pnpm build

# Preview production build
pnpm run preview
```

## 📚 Documentation

- `USER_GUIDE_UPLOADS.md` - How to add downloads and tools
- `INTERNAL_DOCS/` - Internal development documentation

## 🏗️ Current Structure

```text
src/
├── components/          # React/Astro components
├── content/            # Content collections
│   ├── blog/          # Blog posts (local)
│   ├── downloads/     # Downloads (empty - ready for content)
│   └── tools/         # Interactive tools
├── layouts/            # Page layouts
├── pages/              # Route pages and API endpoints
│   ├── articles.astro # Medium RSS integration
│   ├── downloads.astro # Downloads with empty state
│   └── tools.astro    # Interactive tools
└── styles/            # Tailwind CSS
└── styles/             # Global CSS and Tailwind config

INTERNAL_DOCS/          # User and admin documentation
public/                 # Static assets and downloads
dist/                   # Built site files (for deployment)
```

## 🌐 Connect with Me

- **Website**: [trailblazeranalytics.com](https://trailblazeranalytics.com)
- **GitHub**: [github.com/alexnyk](https://github.com/alexnyk)
- **LinkedIn**: [linkedin.com/in/alexnyk](https://linkedin.com/in/alexnyk)
- **Twitter**: [@AlexNyk](https://twitter.com/AlexNyk)
- **Medium**: [@alex.nykolaiszyn](https://medium.com/@alex.nykolaiszyn)
