# 🔧 ADMIN GUIDE - Trailblazer Analytics Website

## 🎯 Overview
This guide covers site administration, content management, and maintenance for the Trailblazer Analytics website.

## 🏗️ Architecture Overview

### Tech Stack
- **Framework**: Astro 5.x with React components
- **Styling**: Tailwind CSS with custom utilities
- **Content**: Markdown collections + MDX
- **APIs**: Serverless functions via API routes

### Key Directories
- `/src/content/` - All content collections (MDX files)
- `/public/downloads/` - Downloadable resources
- `/src/components/` - Reusable UI components
- `/src/pages/` - Page templates and routing

## 📝 Content Management

### Blog Posts
1. Create new MDX file in `/src/content/blog/`
2. Follow schema requirements in the [Blog Post Guide](./BLOG_POST_GUIDE.md)
3. File will automatically appear in Insights page

### Case Studies
1. Create new MDX file in `/src/content/caseStudies/`
2. Follow schema requirements in the [Case Study Guide](./CASE_STUDY_GUIDE.md)
3. File will automatically appear in Case Studies page

### White Papers
1. Create MDX file in `/src/content/whitepapers/`
2. Add PDF version to `/public/downloads/`
3. Follow schema in existing whitepaper files

### Tech Notes
1. Create MDX file in `/src/content/techNotes/`
2. Follow schema in existing tech note files
3. File will automatically appear in Tech Notes page

## ⚙️ Configuration

### Site-wide Settings
Edit `/src/site.config.js` to update:
- Site metadata and SEO defaults
- Social media links
- Contact information
- Newsletter settings

### Environment Variables
Create or edit `.env` file with:
```
# Newsletter Provider (choose one)
BEEHIIV_API_KEY=your_beehiiv_key
BEEHIIV_PUBLICATION_ID=your_publication_id

# Email Provider (choose one)  
RESEND_API_KEY=your_resend_key
SENDGRID_API_KEY=your_sendgrid_key

# Analytics (optional)
PLAUSIBLE_DOMAIN=your-domain.com
GOOGLE_ANALYTICS_ID=your_ga_id

# Other settings
CONTACT_EMAIL=your-email@domain.com
```

## 🚀 Deployment

### GitHub Pages
1. Follow the [GitHub Pages Deployment Guide](./GITHUB_PAGES_DEPLOYMENT.md)
2. Automated via GitHub Actions workflow

### Manual Deployment
1. Run `npm run build`
2. Output is in the `/dist/` directory
3. Deploy contents to any static hosting service

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

## 🔄 Content Updates

### Medium RSS Feed
1. Make sure Alexander's Medium profile is active
2. Verify RSS URL in `/src/pages/insights.astro`
3. New posts will appear automatically

### Podcast Episodes
1. Upload new episodes to Spotify
2. Update embed code in `/src/pages/podcast.astro`
3. Add episode details to the podcast collection

### Download Resources
1. Add new PDF/resource to `/public/downloads/`
2. Create corresponding MDX file in `/src/content/downloads/`
3. File will appear on Downloads page automatically

## 📊 Analytics & Tracking

### Google Analytics
1. Set `GOOGLE_ANALYTICS_ID` in `.env`
2. View data in Google Analytics dashboard

### Download Tracking
1. All downloads are tracked automatically
2. View data in Analytics dashboard
3. Optional lead capture is configured per download

### Newsletter Signups
1. Data is stored in selected provider (Beehiiv, etc.)
2. Access dashboard for detailed analytics

## 🔒 Security Considerations

### Form Protection
- Contact form has rate limiting and spam protection
- Suspicious submissions are flagged

### API Keys
- All keys are stored in environment variables
- Never commit `.env` file to repository

### Content Security
- Content Security Policy implemented
- External scripts are limited to trusted sources

## 📱 Mobile Considerations

### Responsive Testing
- Test all pages on various mobile devices
- Verify navigation works on small screens
- Check download functionality on mobile

### Performance
- Images are optimized for mobile
- Critical CSS is inlined
- Lazy loading implemented for non-critical content

## ❓ Troubleshooting

### Build Issues
- Run `npm run clean` to clear cache
- Check for syntax errors in MDX files
- Verify all imports are correctly specified

### Deployment Failures
- Check GitHub Actions logs
- Verify GitHub Pages settings
- Test build locally with `npm run build`

### Content Not Updating
- Clear browser cache
- Verify file is in correct directory
- Check frontmatter schema compliance

## 📞 Support Resources

### Documentation
- [Project Documentation](./PROJECT_DOCUMENTATION.md)
- [GitHub Pages Solution](./GITHUB_PAGES_SOLUTION.md)

### Contact
- Technical issues: [Alexander Nykolaiszyn](mailto:alex@trailblazeranalytics.com)
- Content questions: [Content Team](mailto:content@trailblazeranalytics.com)

---

*Last Updated: June 4, 2025*
