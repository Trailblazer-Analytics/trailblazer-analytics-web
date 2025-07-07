# 🔧 ADMIN GUIDE - Trailblazer Analytics Website

## 🎯 Overview

This guide covers site administration, content management, and maintenance for the Trailblazer Analytics website. The site uses a simplified static architecture with Medium RSS integration.

## 🏗️ Architecture Overview

### Tech Stack

- **Framework**: Astro 5.x with React components
- **Styling**: Tailwind CSS with custom utilities
- **Content**: Markdown collections (blog, downloads, tools)
- **Articles**: Medium RSS feed integration
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions

### Current File Structure

```text
src/
├── components/       # Reusable UI components
├── content/         # Markdown content collections
│   ├── blog/        # Local blog posts
│   ├── downloads/   # Free resources
│   └── tools/       # Premium/gated content
├── layouts/         # Page layout templates
├── pages/           # Site pages
│   ├── articles.astro  # Medium RSS integration
│   ├── downloads.astro # Downloads listing
│   ├── tools.astro     # Tools listing
│   └── ...
├── styles/          # CSS and styling
└── site.config.js   # Site configuration
```

## ⚙️ Configuration Management

### Environment Variables

Create `.env` file with these settings:

```bash
# Site Settings
CONTACT_EMAIL=alexander@trailblazer-analytics.com
SITE_URL=https://anykolaiszyn.github.io/trailblazer-analytics-devkit/

# Medium Integration
MEDIUM_USERNAME=@alex.nykolaiszyn
MEDIUM_RSS_URL=https://medium.com/feed/@alex.nykolaiszyn

# Optional Analytics
PLAUSIBLE_DOMAIN=your-domain.com
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Site Configuration (`src/site.config.js`)

Central configuration for:

- Site metadata and SEO
- Social media links
- Business information
- Medium RSS feed settings

## 📝 Content Management

### Content Collections

#### Blog Posts (`src/content/blog/`)

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: "2025-01-15"
author: "Alexander Nykolaiszyn"
tags: ["data-strategy", "analytics"]
featured: true
vibe: "insight"
difficulty: "intermediate"
---

Your content here...
```

#### Downloads (`src/content/downloads/`)

```markdown
---
title: "Resource Title"
description: "What this download provides"
date: "2025-01-15"
category: "Templates"
fileType: "PDF"
fileSize: "2.5 MB"
downloadUrl: "/downloads/your-file.pdf"
featured: false
free: true
---

Description of the resource...
```

#### Tools (`src/content/tools/`)

```markdown
---
title: "Tool Title"
description: "What this tool provides"
date: "2025-01-15"
category: "Frameworks"
price: "$99"
demoUrl: "https://example.com/demo"
purchaseUrl: "https://example.com/buy"
featured: false
gated: true
premium: true
---

Tool description...
```

#### Articles (Medium Integration)

Articles are automatically pulled from Medium RSS feed. No local management required.
- Publish on Medium (@alex.nykolaiszyn)
- Articles appear automatically on `/articles` page
- RSS feed: https://medium.com/feed/@alex.nykolaiszyn
publishDate: "2025-05-31"
category: "Strategy"
featured: true
downloadUrl: "/downloads/filename.pdf"
previewUrl: "/previews/filename-preview.pdf"
---

Summary and description...
```

#### Downloads (`src/content/downloads/`)

```markdown
---
title: "Tool Name"
description: "What it does"
category: "templates"
fileSize: "2.3 MB"
downloadCount: 1250
featured: true
fileUrl: "/downloads/filename.pdf"
---

Detailed description...
```

#### Tech Notes (`src/content/techNotes/`)

```markdown
---
title: "Technical Tutorial"
description: "Brief description"
publishDate: "2025-05-31"
category: "Python"
difficulty: "Intermediate"
tags: ["pandas", "performance"]
---

Tutorial content with code examples...
```

### Adding New Content

#### 1. Blog Posts

1. Create new `.mdx` file in `src/content/blog/`
2. Add frontmatter with required fields
3. Write content in Markdown
4. Images go in `public/images/blog/`
5. Rebuild site to see changes

#### 2. White Papers

1. Upload PDF to `public/downloads/`
2. Create preview PDF in `public/previews/`
3. Add entry to `src/content/whitepapers/`
4. Update download tracking if needed

#### 3. Downloads

1. Upload file to `public/downloads/`
2. Create content entry in `src/content/downloads/`
3. Ensure download API can track it
4. Test download functionality

#### 4. Tech Notes

1. Create `.mdx` file in `src/content/techNotes/`
2. Include code examples with proper syntax highlighting
3. Add relevant tags for discoverability
4. Test all code examples

## 🔌 API Management

### Newsletter API (`/api/newsletter`)

- **Purpose**: Handle newsletter subscriptions
- **Providers**: Beehiiv, Mailchimp, ConvertKit, Buttondown
- **Configuration**: Set provider API keys in environment
- **Monitoring**: Check provider dashboards for delivery

### Contact API (`/api/contact`)

- **Purpose**: Process contact form submissions
- **Email Providers**: Resend, SendGrid, Mailgun
- **Features**: Spam protection, email templates
- **Monitoring**: Check email delivery logs

### Download API (`/api/download`)

- **Purpose**: Track downloads and deliver files
- **Features**: Analytics tracking, email capture
- **File Storage**: Currently local, can upgrade to S3
- **Monitoring**: Review download statistics

## 📊 Analytics & Monitoring

### Plausible Analytics

- **Setup**: Add domain to Plausible account
- **Configuration**: Set `PLAUSIBLE_DOMAIN` in environment
- **Metrics**: Page views, downloads, conversions
- **Access**: <https://plausible.io/your-domain.com>

### Download Tracking

- **Location**: Built into download API
- **Data Collected**: File name, timestamp, source page
- **Storage**: Can integrate with analytics platform
- **Reports**: Custom dashboard needed

### Form Analytics

- **Newsletter**: Track signup source and success rate
- **Contact**: Monitor submission rate and response time
- **Downloads**: Track conversion rate by content type

## 🚀 Deployment & Hosting

### Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview
```

### Netlify Deployment

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables
5. Enable form handling for contact form

### Vercel Deployment

1. Connect GitHub repository
2. Framework preset: Astro
3. Configure environment variables
4. Enable serverless functions

### Custom Hosting

1. Build static files: `npm run build`
2. Upload `dist/` contents to web server
3. Configure redirects for API routes
4. Set up SSL certificate

## 🔧 Maintenance Tasks

### Weekly Tasks

- [ ] Review analytics and download stats
- [ ] Check contact form submissions
- [ ] Monitor newsletter signup rate
- [ ] Verify RSS feed is updating from Medium
- [ ] Test all download links

### Monthly Tasks

- [ ] Update dependencies: `npm update`
- [ ] Review and update content collections
- [ ] Check for broken links
- [ ] Review site performance metrics
- [ ] Backup download files and data

### Quarterly Tasks

- [ ] Update white papers and featured content
- [ ] Review and optimize SEO performance
- [ ] Update social media integration
- [ ] Plan new content and features
- [ ] Review security and updates

## 🔒 Security Considerations

### API Security

- **Rate Limiting**: Implement for form submissions
- **Input Validation**: Sanitize all user inputs
- **CORS**: Configure allowed origins
- **Environment Variables**: Never commit to repository

### Content Security

- **File Uploads**: Validate file types and sizes
- **Download Links**: Use signed URLs for sensitive content
- **Spam Protection**: Honeypot fields in forms
- **Email Security**: Use established providers

## 🐛 Troubleshooting

### Common Issues

#### RSS Feed Not Loading

1. Check Medium URL in environment variables
2. Verify RSS to JSON API is accessible
3. Check browser network tab for CORS issues
4. Add fallback content for offline scenarios

#### Forms Not Submitting

1. Verify API endpoints are accessible
2. Check environment variables for email/newsletter providers
3. Review browser console for JavaScript errors
4. Test with different providers

#### Downloads Not Working

1. Verify files exist in `public/downloads/`
2. Check download API is functioning
3. Review file permissions and sizes
4. Test tracking functionality

#### Performance Issues

1. Check image optimization and sizes
2. Review bundle size and dependencies
3. Enable compression and caching
4. Use performance monitoring tools

## 📈 Optimization Tips

### Performance

- Optimize images with appropriate formats and sizes
- Use lazy loading for below-fold content
- Minimize JavaScript bundle size
- Enable compression and caching headers

### SEO

- Ensure all pages have unique meta descriptions
- Use structured data for rich snippets
- Optimize images with alt text
- Submit sitemap to search engines

### User Experience

- Test mobile responsiveness regularly
- Ensure fast loading times
- Maintain consistent navigation
- Provide clear calls to action

---

**Need technical support?** Check the troubleshooting section or contact the development team.
