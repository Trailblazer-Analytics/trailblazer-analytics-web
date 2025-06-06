# Trailblazer Analytics Project Documentation

This document serves as the central hub for all documentation related to the Trailblazer Analytics website project.

## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Development Setup](#development-setup)
3. [Deployment](#deployment)
4. [Content Management](#content-management)
5. [Current Status](#current-status)
6. [Pending Tasks](#pending-tasks)
7. [Known Issues](#known-issues)

## Project Overview

A modern, responsive website built with Astro + React + Tailwind CSS for data strategy consulting and analytics expertise. Features comprehensive content management, newsletter integration, and production-ready deployment.

### Key Features

- **Content Management**: Blog posts, case studies, white papers, tech notes, podcast integration
- **Advanced Functionality**: Newsletter integration, contact forms, download tracking
- **SEO Optimization**: Complete meta tags, structured data, and performance optimization
- **Mobile-First Design**: Responsive navigation and mobile-optimized experience

## Development Setup

### Prerequisites
- Node.js 18+
- npm or pnpm (recommended)

### Getting Started

```bash
# Clone the repository
git clone <repository-url>
cd trailblazer-analytics-devkit

# Install dependencies
npm install
# or with pnpm
pnpm install

# Start development server
npm run dev
```

### Project Structure

```
src/
  ├── components/ - Reusable UI components
  ├── content/    - MDX content files for blog, case studies, etc.
  ├── layouts/    - Page layout templates
  ├── pages/      - Astro pages (routes)
  ├── styles/     - Global CSS and styling
  └── site.config.js - Site-wide configuration
```

## Deployment

### GitHub Pages Deployment

The site is configured for GitHub Pages deployment with the base path `/trailblazer-analytics-devkit`.

#### Deployment Commands

```bash
# Standard deployment
npm run deploy

# Clean deployment (removes previous history)
npm run deploy:clean
```

#### Configuration

The site is configured in `astro.config.mjs`:

```javascript
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: "static",
  site: "https://anykolaiszyn.github.io/trailblazer-analytics-devkit",
  base: "/trailblazer-analytics-devkit",
  build: {
    assets: "assets",
  },
});
```

#### Important Files

- `.nojekyll`: Prevents GitHub Pages from processing with Jekyll
- `.github/workflows/deploy.yml`: GitHub Actions workflow for automated deployment
- `scripts/verify-build.js`: Tool to verify asset paths in build output

For detailed GitHub Pages deployment information, see [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md).

## Content Management

### Blog Posts

Blog posts are stored as MDX files in `src/content/blog/`. Each post should include the following frontmatter:

```yaml
---
title: "Post Title"
excerpt: "Brief summary of the post"
date: "2025-06-01"
author: "Author Name"
image: "/images/posts/example.jpg"
tags: ["tag1", "tag2"]
---
```

### Case Studies

Case studies are stored in `src/content/caseStudies/`. For detailed information on creating case studies, see [CASE_STUDY_GUIDE.md](./CASE_STUDY_GUIDE.md).

### Downloads & Resources

Place downloadable files in the `public/downloads/` directory. Update the corresponding MDX files in `src/content/downloads/` to link to these resources.

## Current Status

**Last Updated**: June 4, 2025

### Recent Accomplishments

- ✅ **GitHub Pages Deployment Fixed**: Resolved 404 errors for CSS/JS files
- ✅ **Dependencies Updated**: All npm packages updated to latest versions
- ✅ **Build Issues Fixed**: Fixed Astro.glob deprecation warning
- ✅ **Case Study Guide**: Updated with complete schema fields
- ✅ **Project Structure**: Cleaned up and ready for content integration

For a detailed development plan and timeline, see the [Development Roadmap](./DEVELOPMENT_ROADMAP.md).

## Known Issues

1. **Shiki Language Warning**: "The language 'tableau' doesn't exist, falling back to 'plaintext'" - This is a warning during build but doesn't affect functionality
2. **API Routes Warning**: Warnings about API routes during build - These are expected as we only have POST handlers

## Additional Resources

- [GITHUB_PAGES_SOLUTION.md](./GITHUB_PAGES_SOLUTION.md) - Details on the GitHub Pages deployment solution
- [CASE_STUDY_GUIDE.md](./CASE_STUDY_GUIDE.md) - Guide for creating case studies
- [BLOG_POST_GUIDE.md](./BLOG_POST_GUIDE.md) - Guide for creating blog posts
