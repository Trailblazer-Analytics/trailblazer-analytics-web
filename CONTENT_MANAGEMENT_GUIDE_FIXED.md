# Trailblazer Analytics Content Management Guide

## Overview

This guide provides step-by-step instructions for managing content on the Trailblazer Analytics site. The site uses Astro with Markdown files for content management, making it easy to add and update content without coding knowledge.

## Quick Start Checklist

- [ ] Site is deployed at: [https://anykolaiszyn.github.io/trailblazer-analytics-devkit/](https://anykolaiszyn.github.io/trailblazer-analytics-devkit/)
- [ ] GitHub repository: [https://github.com/anykolaiszyn/trailblazer-analytics-devkit](https://github.com/anykolaiszyn/trailblazer-analytics-devkit)
- [ ] All files are stored in Git (no external storage needed - files are small)
- [ ] Changes auto-deploy via GitHub Actions when pushed to main branch

## File Structure Overview

```text
src/
├── content/
│   ├── blog/           # Blog posts (.md files)
│   ├── insights/       # Analytics insights (.md files)
│   ├── podcast/        # Podcast episodes (.md files)
│   ├── case-studies/   # Case studies (.md files)
│   └── tech-notes/     # Technical notes (.md files)
├── pages/
│   ├── about.astro     # About page
│   ├── support.astro   # Support page
│   └── connect.astro   # Connect page
public/
├── downloads/          # PDF downloads and resources
└── images/            # Images and media files
```

## Content Management Tasks

### 1. Adding Blog Posts

**Location:** `src/content/blog/`

**Steps:**

1. Create a new `.md` file with filename format: `YYYY-MM-DD-post-title.md`
2. Add frontmatter at the top:

```yaml
---
title: "Your Blog Post Title"
description: "Brief description for SEO and previews"
publishDate: 2025-01-XX
author: "Your Name"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
featured: false
image: "/images/blog/your-image.jpg"
---
```

3. Write your content in Markdown below the frontmatter
4. Save the file
5. Commit and push to GitHub (auto-deploys)

**Example filename:** `2025-01-15-data-strategy-trends.md`

### 2. Adding Insights Articles

**Location:** `src/content/insights/`

**Steps:**

1. Create a new `.md` file with descriptive filename
2. Add frontmatter:

```yaml
---
title: "Analytics Insight Title"
description: "Executive summary of the insight"
publishDate: 2025-01-XX
category: "Market Analysis" # or "Industry Trends", "Best Practices"
readTime: "5 min read"
featured: false
image: "/images/insights/your-image.jpg"
---
```

3. Write content with focus on actionable insights
4. Save, commit, and push

### 3. Adding Podcast Episodes

**Location:** `src/content/podcast/`

**Steps:**

1. Create `.md` file: `episode-XXX-title.md`
2. Add frontmatter:

```yaml
---
title: "Episode Title"
episodeNumber: XXX
description: "Episode description"
publishDate: 2025-01-XX
duration: "45 min"
guest: "Guest Name"
topics: ["topic1", "topic2"]
audioUrl: "https://your-podcast-host.com/episode-xxx"
spotifyUrl: "https://spotify.com/episode/xxx"
appleUrl: "https://podcasts.apple.com/episode/xxx"
image: "/images/podcast/episode-xxx.jpg"
---
```

3. Add episode notes and transcript
4. Save, commit, and push

### 4. Adding Case Studies

**Location:** `src/content/case-studies/`

**Steps:**

1. Create `.md` file with descriptive name
2. Add frontmatter:

```yaml
---
title: "Case Study: Client Success Story"
description: "Brief summary of the case study"
publishDate: 2025-01-XX
client: "Client Name (or Anonymous)"
industry: "Industry Sector"
challenge: "Main challenge addressed"
solution: "Solution implemented"
results: "Key results achieved"
featured: false
image: "/images/case-studies/case-study-image.jpg"
---
```

3. Write detailed case study content
4. Save, commit, and push

### 5. Adding Technical Notes

**Location:** `src/content/tech-notes/`

**Steps:**

1. Create `.md` file with technical topic name
2. Add frontmatter:

```yaml
---
title: "Technical Topic"
description: "Brief description of the technical note"
publishDate: 2025-01-XX
category: "Technical Implementation"
difficulty: "Beginner" # or "Intermediate", "Advanced"
topics: ["topic1", "topic2"]
featured: false
---
```

3. Write technical content with examples
4. Save, commit, and push

## Content Guidelines

### Writing Best Practices

- **Headlines:** Use clear, descriptive titles that include key terms
- **Descriptions:** Write compelling meta descriptions (150-160 characters)
- **Structure:** Use headers (H2, H3) to organize content logically
- **Length:** Aim for 800-2000 words for blog posts, 300-800 for insights
- **Images:** Include relevant images with descriptive alt text

### SEO Optimization

- **Keywords:** Include target keywords naturally in title, headers, and content
- **Internal Links:** Link to related content on your site
- **External Links:** Link to authoritative sources when relevant
- **Meta Data:** Complete all frontmatter fields for better SEO

### Content Calendar Planning

**Monthly Content Goals:**

- Blog Posts: 2-3 per month
- Insights: 1-2 per month
- Podcast Episodes: 2-4 per month (bi-weekly)
- Case Studies: 1 per month
- Technical Notes: As needed

## Deployment Process

### Automatic Deployment (Recommended)

1. **Edit Files:** Make changes to content files locally or via GitHub web interface
2. **Commit Changes:** Add, commit, and push changes to the main branch
3. **Auto-Deploy:** GitHub Actions automatically builds and deploys the site
4. **Verify:** Check the live site in 2-3 minutes to confirm changes

### Manual Deployment (Emergency Backup)

If automatic deployment fails:

```bash
# Build the site locally
npm run build

# Deploy manually
npm run deploy:clean
```

## Troubleshooting

### Common Issues

**Content Not Appearing:**

- Check frontmatter YAML syntax is correct
- Ensure publishDate is not in the future
- Verify file is in the correct directory
- Confirm file has `.md` extension

**Build Failures:**

- Check GitHub Actions for specific error messages
- Validate YAML frontmatter syntax
- Ensure all referenced images exist
- Check for special characters in filenames

**Images Not Loading:**

- Verify image paths start with `/images/`
- Confirm image files are in the `public/images/` directory
- Check image file names match exactly (case sensitive)
- Ensure image formats are web-friendly (jpg, png, webp)

### Getting Help

- **Repository Issues:** Use GitHub Issues for technical problems
- **Content Questions:** Refer to this guide or documentation
- **Build Errors:** Check GitHub Actions logs for detailed error messages

## Advanced Features

### Custom Components

The site supports custom components for enhanced content:

- **Newsletter Signup:** Automatically included in blog posts
- **Social Sharing:** Built-in sharing buttons
- **Related Content:** Automatically suggests related articles
- **Download Buttons:** For PDF resources and tools

### Analytics and Performance

- **Built-in Analytics:** Site includes performance tracking
- **SEO Monitoring:** Regular SEO health checks
- **Performance:** Optimized for fast loading and mobile experience

## Content Management Resources

### Templates and Examples

- **Blog Post Template:** Available in repository
- **Frontmatter Examples:** Complete examples for each content type
- **Style Guide:** Consistent formatting and tone guidelines

### Tools and Utilities

- **Markdown Editors:** Recommended tools for content creation
- **Image Optimization:** Guidelines for preparing images
- **SEO Tools:** Resources for optimizing content

## Support and Maintenance

- **Site URL:** [https://anykolaiszyn.github.io/trailblazer-analytics-devkit/](https://anykolaiszyn.github.io/trailblazer-analytics-devkit/)
- **Repository:** [https://github.com/anykolaiszyn/trailblazer-analytics-devkit](https://github.com/anykolaiszyn/trailblazer-analytics-devkit)
- **Build Status:** Check GitHub Actions tab
- **Issues:** Create GitHub issues for problems or feature requests

For technical assistance with content management or site issues, refer to the repository's issue tracker or documentation.
