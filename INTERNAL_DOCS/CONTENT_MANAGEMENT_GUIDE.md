# Trailblazer Analytics Content Management Guide

## Overview

This guide provides step-by-step instructions for managing content on the Trailblazer Analytics site. The site uses a simplified static architecture with Astro and three main content types. Articles are sourced from Medium via RSS feed integration.

## Quick Start Checklist

- [ ] Site is deployed at: <https://anykolaiszyn.github.io/trailblazer-analytics-devkit/>
- [ ] GitHub repository: <https://github.com/anykolaiszyn/trailblazer-analytics-devkit>
- [ ] All files are stored in Git (no external storage needed - files are small)
- [ ] Changes auto-deploy via GitHub Actions when pushed to main branch
- [ ] Articles are published on Medium and automatically displayed via RSS feed

## File Structure Overview

```text
src/
├── content/
│   ├── blog/           # Blog posts (.md files) - local content
│   ├── downloads/      # Free downloads/resources (.md files)
│   └── tools/          # Premium tools/gated content (.md files)
├── pages/
│   ├── articles.astro  # Medium RSS feed integration
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
date: 2025-01-XX
author: "Your Name"
tags: ["tag1", "tag2", "tag3"]
featured: false
image: "/images/blog/your-image.jpg"
vibe: "insight" # Options: technical, rant, insight, story, hot-take
difficulty: "intermediate" # Options: beginner, intermediate, advanced, expert
---
```

3. Write your content in Markdown below the frontmatter
4. Save the file
5. Commit and push to GitHub (auto-deploys)

**Example filename:** `2025-01-15-data-strategy-trends.md`

### 2. Adding Downloads (Free Resources)

**Location:** `src/content/downloads/`

**Steps:**

1. Upload your PDF/file to `public/downloads/`
2. Create a new `.md` file with descriptive filename
3. Add frontmatter:

```yaml
---
title: "Resource Title"
description: "What this download provides"
date: 2025-01-XX
category: "Templates" # Options: Templates, Tools, Guides, Checklists, Frameworks, Whitepapers
fileType: "PDF"
fileSize: "2.5 MB"
downloadUrl: "/downloads/your-file.pdf"
featured: false
image: "/images/downloads/your-image.jpg"
pages: 25 # For PDFs
free: true
---
```

4. Write a description of the download
5. Save, commit, and push

### 3. Adding Tools (Premium/Gated Content)

**Location:** `src/content/tools/`

**Steps:**

1. Create `.md` file with descriptive filename
2. Add frontmatter:

```yaml
---
title: "Tool/Course Title"
description: "What this tool provides"
date: 2025-01-XX
category: "Frameworks" # Options: Frameworks, Templates, Calculators, Courses, Premium Tools
price: "$99" # Or "Free" for free tools
demoUrl: "https://example.com/demo"
purchaseUrl: "https://example.com/buy"
featured: false
technologies: ["Excel", "Python", "Dashboard"]
image: "/images/tools/your-image.jpg"
gated: true
premium: true # For paid content
---
```

3. Write a detailed description
4. Save, commit, and push

### 4. Managing Articles (Medium Integration)

**Important:** Articles are NOT managed locally. They are automatically pulled from your Medium profile.

**To add new articles:**
1. Publish on Medium using your account (@alex.nykolaiszyn)
2. Articles automatically appear on the site via RSS feed
3. The Articles page displays your latest Medium posts

**No local article management needed!**
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

1. Add episode notes and transcript
2. Save, commit, and push

### 4. Adding Case Studies

**Location:** `src/content/case-studies/`

**Steps:**

1. Create `.md` file with client/project name
2. Add frontmatter:

```yaml
---
title: "Case Study Title"
client: "Client Name (or Anonymous)"
industry: "Industry Type"
challenge: "Brief challenge description"
solution: "Brief solution description"
results: "Key results achieved"
publishDate: 2025-01-XX
featured: false
image: "/images/case-studies/your-image.jpg"
---
```

1. Structure content with sections:
   - Challenge
   - Approach
   - Implementation
   - Results
   - Lessons Learned

### 5. Adding Technical Notes

**Location:** `src/content/tech-notes/`

**Steps:**

1. Create `.md` file with technical topic name
2. Add frontmatter:

```yaml
---
title: "Technical Topic"
description: "What this note covers"
publishDate: 2025-01-XX
category: "Code" # or "Tools", "Architecture", "Best Practices"
difficulty: "Intermediate" # or "Beginner", "Advanced"
tags: ["python", "data-analysis", "automation"]
featured: false
---
```

1. Include code examples, configurations, or technical explanations
2. Use proper Markdown code blocks with syntax highlighting

## Navigation Management

Navigation is controlled in `src/components/Navbar.astro`. Current simplified structure:

**Main Navigation:**
- About
- Blog  
- Articles (Medium RSS)
- Downloads
- Tools
- Support
- Connect

## Deployment Process

### Automatic Deployment (Recommended)

1. Make your content changes
2. Commit to Git: `git add . && git commit -m "Add new content"`
3. Push to GitHub: `git push origin main`
4. GitHub Actions automatically builds and deploys
5. Changes appear at <https://anykolaiszyn.github.io/trailblazer-analytics-devkit/> within 2-3 minutes

### Manual Build (for testing)

```bash
npm run build
```

## SEO and Content Best Practices

### Frontmatter Best Practices

- Always include `title`, `description`, and `date`
- Keep descriptions under 160 characters for SEO
- Use relevant tags consistently
- Add featured images when possible

### Content Writing Tips

- Use clear, descriptive headings (H2, H3)
- Include relevant keywords naturally
- Add internal links to related content
- Keep paragraphs concise for web reading
- Include actionable takeaways

### Image Guidelines

- Store images in `public/images/` with descriptive names
- Use web-optimized formats (WebP preferred, JPG/PNG acceptable)
- Include alt text in Markdown: `![Alt text](image-url)`
- Recommended sizes: 1200x630px for featured images

## Troubleshooting

### Build Errors

- Check frontmatter YAML syntax (proper indentation, quotes)
- Ensure all referenced images exist
- Validate Markdown syntax
- Verify content collection schemas match your frontmatter

### Deployment Issues

- Check GitHub Actions tab for error logs
- Verify all files are committed and pushed
- Clear browser cache to see changes

### Content Not Appearing

- Verify file is in correct directory (`blog/`, `downloads/`, or `tools/`)
- Check frontmatter format matches schema
- Ensure file extension is `.md`
- Confirm date is not in future

## Content Planning

### Regular Content Schedule

- **Blog Posts:** 2-3 per month (local content)
- **Articles:** Publish on Medium (automatic RSS sync)
- **Downloads:** Add resources as needed
- **Tools:** Update premium offerings quarterly

### Content Strategy

- **Blog:** Technical insights, tutorials, industry analysis
- **Articles (Medium):** Thought leadership, broader reach content
- **Downloads:** Free resources for lead generation
- **Tools:** Premium offerings and gated content

## Support and Maintenance

- **Site URL:** <https://anykolaiszyn.github.io/trailblazer-analytics-devkit/>
- **Repository:** <https://github.com/anykolaiszyn/trailblazer-analytics-devkit>
- **Build Status:** Check GitHub Actions tab
- **Issues:** Create GitHub issues for problems or feature requests

## Quick Reference

### Adding Content Types

| Content Type | Location | Filename Format | Key Fields |
|--------------|----------|-----------------|------------|
| Blog Post | `src/content/blog/` | `YYYY-MM-DD-title.md` | title, date, description, tags |
| Download | `src/content/downloads/` | `descriptive-name.md` | title, description, downloadUrl, category |
| Tool | `src/content/tools/` | `tool-name.md` | title, description, price, category |

### File Paths for Resources

- Images: `/public/images/[type]/filename.ext`
- Downloads: `/public/downloads/filename.ext`
- Reference in content: `/images/blog/image.jpg` or `/downloads/file.pdf`

For technical assistance with content management or site issues, refer to the repository's documentation or create an issue.
