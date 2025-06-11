# Trailblazer Analytics - Professional Data Strategy Hub

A modern, responsive website built with Astro + React + Tailwind CSS for data strategy consulting and analytics expertise. Features comprehensive content management, newsletter integration, and production-ready deployment.

## 🌐 Live Site
**Production URL:** https://anykolaiszyn.github.io/trailblazer-analytics-devkit/

## 📊 Current Status
✅ **DEPLOYED & OPERATIONAL**
- All 45 pages building successfully
- GitHub Pages deployment working
- Clean navigation structure implemented
- All monetization features active

## 🚀 Features

### Content Management
- **Insights Page**: Enhanced Medium RSS integration with search, filtering, and categorization
- **Case Studies**: MDX-based case study system with easy content management
- **Blog Posts**: Structured blog content with tagging and SEO optimization
- **White Papers**: Professional document library with download tracking
- **Tech Notes**: Technical documentation and tutorials
- **Podcast Integration**: Spotify embed with episode management

### Advanced Functionality
- **Newsletter Integration**: Multi-provider support (Beehiiv, Mailchimp, ConvertKit, Buttondown)
- **Contact Forms**: Professional contact system with email delivery
- **Download Tracking**: Analytics for resource downloads with optional lead capture
- **SEO Optimization**: Complete meta tags, structured data, and performance optimization
- **Mobile-First Design**: Responsive navigation and mobile-optimized experience

## 📚 Documentation

For comprehensive project documentation, please refer to these guides:

- [**Project Documentation**](./docs/PROJECT_DOCUMENTATION.md) - Central hub for all project information
- [**Current Status Summary**](./docs/CURRENT_STATUS_SUMMARY.md) - Overview of current project status
- [**To-Do List**](./docs/TODO.md) - Current tasks and priorities
- [**Admin Guide**](./docs/ADMIN_GUIDE.md) - Guide for site administration and maintenance
- [**Deployment Checklist**](./docs/DEPLOYMENT_CHECKLIST.md) - Pre-deployment checklist
- [**GitHub Pages Deployment**](./docs/GITHUB_PAGES_DEPLOYMENT.md) - Guide for deploying to GitHub Pages
- [**Development Setup**](./docs/DEV_SETUP.md) - How to set up the development environment
- [**Case Study Guide**](./docs/CASE_STUDY_GUIDE.md) - Guide for creating case studies
- [**Blog Post Guide**](./docs/BLOG_POST_GUIDE.md) - Guide for creating blog posts

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

- **[Content Management Guides](docs/)** - User and admin guides
- **[Case Study Guide](CASE_STUDY_GUIDE.md)** - How to add/edit case studies
- **[Blog Post Guide](BLOG_POST_GUIDE.md)** - How to manage blog content
- **[Development Setup](DEV_SETUP.md)** - Detailed development environment setup
- **[Deployment Checklist](DEPLOYMENT_CHECKLIST.md)** - Production deployment guide
- **[TODO List](TODO.md)** - Current project roadmap and tasks

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
```

## 🚀 Deployment

### Current Deployment Setup
- **Production Site:** https://anykolaiszyn.github.io/trailblazer-analytics-devkit/
- **Repository:** https://github.com/anykolaiszyn/trailblazer-analytics-devkit
- **Auto-Deploy:** GitHub Actions (on push to main branch)
- **Build Status:** ✅ All 45 pages building successfully

### Deployment Methods

#### Automatic (Recommended)
Changes automatically deploy when pushed to main branch via GitHub Actions.

```bash
git add .
git commit -m "Your changes"
git push origin main
# Site updates automatically in 2-3 minutes
```

#### Manual Deployment
For emergency deployments or when GitHub Actions is down:

```bash
npm run build
npm run deploy:clean
```

### File Storage
All files are currently small (<2KB each) and stored directly in Git. No external storage needed.

The site supports deployment to various hosting platforms:
- **Static Hosting**: Netlify, Vercel, GitHub Pages ✅ (current)
- **Traditional Hosting**: HostGator, cPanel-based hosts
- **CDN**: Cloudflare Pages, AWS S3 + CloudFront

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
