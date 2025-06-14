# Trailblazer Analytics - Professional Data Strategy Hub

A modern, responsive website built with Astro + React + Tailwind CSS for data strategy consulting and analytics expertise. Features comprehensive content management, YouTube integration, resource consolidation, and automated deployment.

## 🚀 Current Features (December 2024)

### 🎨 Enhanced User Experience
- **Professional Navigation**: Resource-centric structure with clean dropdown menus
- **YouTube Integration**: Dedicated channel page with full social media integration
- **Enhanced Blog**: White cards, improved readability, and mobile optimization
- **Resource Consolidation**: All downloads, tools, white papers unified under `/resources`
- **Mobile-First Design**: Responsive navigation with hamburger menu and touch-friendly UX

### 📱 Content Management
- **Unified Resource Hub**: Tech notes, case studies, white papers, downloads, and tools
- **Blog System**: Enhanced blog with improved typography and tag system
- **YouTube Content**: Video tutorials and channel integration throughout site
- **Podcast Integration**: Spotify embed with episode management
- **Newsletter Integration**: Multi-provider support (Beehiiv, Mailchimp, ConvertKit)

### 🚀 Technical Excellence
- **GitHub Actions Deployment**: Automated CI/CD with latest action versions
- **Custom Domain Ready**: CNAME configured for trailblazeranalytics.com
- **Asset Optimization**: Efficient loading and GitHub Pages compatibility
- **SEO Optimization**: Complete meta tags, structured data, and performance optimization
- **Performance Monitoring**: Built-in analytics and Lighthouse CI integration

## 🛠️ Quick Start

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
pnpm run build

# Preview production build
pnpm run preview
```

### Environment Configuration
1. Copy `.env.example` to `.env`
2. Fill in your API keys and configuration values
3. See `DEPLOYMENT_CHECKLIST.md` for production setup

## 📚 Documentation

### Complete Documentation Suite
- **[Main Documentation Hub](docs/README.md)** - Central documentation index
- **[Project Status & Features](docs/PROJECT_COMPLETE.md)** - Current project status and achievements
- **[Current Deployment Status](docs/CURRENT_DEPLOYMENT_STATUS.md)** - Deployment configuration and status
- **[Features Summary](docs/FEATURES_SUMMARY.md)** - Comprehensive feature overview

### User Guides
- **[Content Management Guide](docs/CONTENT_MANAGEMENT_GUIDE.md)** - Step-by-step content creation
- **[Quick Reference](docs/QUICK_REFERENCE.md)** - Common tasks and troubleshooting
- **[Site Dashboard Guide](docs/SITE_DASHBOARD.md)** - Site management and maintenance

### Developer Resources
- **[Development Setup](docs/DEV_SETUP.md)** - Development environment setup
- **[GitHub Pages Deployment](docs/GITHUB_PAGES_DEPLOYMENT.md)** - Deployment guides
- **[TODO List](docs/TODO.md)** - Current roadmap and planned features

## 🏗️ Project Structure

```
src/
├── components/          # React/Astro components
├── content/            # MDX content files (case studies, blog posts, etc.)
├── layouts/            # Page layouts
├── pages/              # Route pages and API endpoints
└── styles/             # Global CSS and Tailwind config

docs/                   # User and admin documentation
public/                 # Static assets and downloads
dist/                   # Built site files (for deployment)
```

## 🚀 Live Site & Deployment

### Current Deployment Status
- **Live Site**: [https://anykolaiszyn.github.io/trailblazer-analytics-devkit/](https://anykolaiszyn.github.io/trailblazer-analytics-devkit/)
- **Custom Domain Ready**: [https://trailblazeranalytics.com](https://trailblazeranalytics.com) (CNAME configured)
- **Build Status**: ✅ All 45+ pages building successfully
- **Auto-Deploy**: GitHub Actions triggers on every push to main branch

### GitHub Actions Deployment
The site automatically deploys via GitHub Actions with:
- **Latest Action Versions**: checkout@v4, setup-node@v4, pnpm/action-setup@v3
- **Optimized Build Process**: pnpm with frozen lockfile for consistent builds
- **GitHub Pages Deploy**: JamesIves/github-pages-deploy-action@v4.6.1
- **Custom Domain Support**: CNAME configured for seamless domain activation

### Alternative Hosting Options
- **Netlify**: Connect repository for automatic deployment
- **Vercel**: Connect repository for automatic deployment  
- **Traditional Hosting**: Upload `dist/` folder to web root
- **CDN Options**: Cloudflare Pages, AWS S3 + CloudFront

## 🔧 Built With

- **[Astro](https://astro.build/)** - Static site generator
- **[React](https://reactjs.org/)** - UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[MDX](https://mdxjs.com/)** - Content management
- **[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)** - Performance monitoring

## 📈 Performance & SEO

- Lighthouse scores optimized for 90+ across all metrics
- SEO-optimized with structured data and meta tags
- Mobile-first responsive design
- Fast loading with optimized assets
- Accessibility compliant (WCAG 2.1)

## 🤝 Contributing

1. Follow the guides in `docs/` for content management
2. Use the development setup in `DEV_SETUP.md`
3. Check `TODO.md` for current priorities
4. Run tests and performance checks before deploying

---

For questions or support, see the documentation in `docs/` or check the TODO list for known issues and planned improvements.
