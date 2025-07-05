# Trailblazer Analytics Content Management Guide

## Overview

This guide provides step-by-step instructions for managing content on the Trailblazer Analytics site. The site uses Astro with Markdown files for content management, making it easy to add and update content without coding knowledge.

## Quick Start Checklist

- [ ] Site is deployed at: <https://anykolaiszyn.github.io/trailblazer-analytics-devkit/>
- [ ] GitHub repository: <https://github.com/anykolaiszyn/trailblazer-analytics-devkit>
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

1. Write your content in Markdown below the frontmatter
2. Save the file
3. Commit and push to GitHub (auto-deploys)

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

1. Write content with focus on actionable insights
2. Save, commit, and push

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

### 6. Managing Downloads

**Location:** `public/downloads/`

**Current files (all small, <2KB each):**

- AI_Driven_Analytics_Framework_v2025.pdf
- Analytics_Readiness_Checklist_v2024.pdf
- Analytics_ROI_Calculator_v2025.xlsx
- Data_Governance_Framework_Guide_v2025.pdf
- Data_Mesh_Implementation_Guide_v2025.pdf
- Data_Strategy_Canvas_v2024.pdf
- Executives_Guide_Data_Strategy_v2025.pdf

**To add new downloads:**

1. Place PDF, Excel, or other files in `public/downloads/`
2. Reference in content with: `/downloads/filename.pdf`
3. Update relevant content pages to link to new resources
4. Commit and push

**File size note:** Current files are very small (<2KB), so GitHub storage isn't a concern. If you need to add larger files (>100MB), consider using Git LFS or external hosting.

### 7. Updating Static Pages

**About Page:** `src/pages/about.astro`
**Support Page:** `src/pages/support.astro`  
**Connect Page:** `src/pages/connect.astro`

These are Astro component files. Edit the HTML/content directly and commit changes.

## Navigation Management

Navigation is controlled in `src/components/Navbar.astro`. Current structure:

**Main Navigation:**

- Insights
- Blog  
- Podcast
- About
- Resources (dropdown)
- Support
- Connect

**Resources Dropdown:**

- Tech Notes
- Case Studies
- ---- (separator)
- Downloads
- Tools
- Templates

## Deployment Process

### Automatic Deployment (Recommended)

1. Make your content changes
2. Commit to Git: `git add . && git commit -m "Add new blog post"`
3. Push to GitHub: `git push origin main`
4. GitHub Actions automatically builds and deploys
5. Changes appear at <https://anykolaiszyn.github.io/trailblazer-analytics-devkit/> within 2-3 minutes

### Manual Deployment (Backup)

If automatic deployment fails:

```bash
npm run build
npm run deploy:clean
```

## SEO and Content Best Practices

### Frontmatter Best Practices

- Always include `title`, `description`, and `publishDate`
- Keep descriptions under 160 characters for SEO
- Use relevant tags and categories consistently
- Add featured images when possible

### Content Writing Tips

- Use clear, descriptive headings (H2, H3)
- Include relevant keywords naturally
- Add internal links to related content
- Keep paragraphs concise for web reading
- Include actionable takeaways

### Image Guidelines

- Store images in `public/images/` with descriptive names
- Use web-optimized formats (JPG for photos, PNG for graphics)
- Include alt text in Markdown: `![Alt text](image-url)`
- Recommended sizes: 1200x630px for featured images

## Troubleshooting

### Build Errors

- Check frontmatter YAML syntax (proper indentation, quotes)
- Ensure all referenced images exist
- Validate Markdown syntax

### Deployment Issues

- Check GitHub Actions tab for error logs
- Verify all files are committed and pushed
- Try manual deployment as backup

### Content Not Appearing

- Verify file is in correct directory
- Check frontmatter format
- Ensure file extension is `.md`
- Confirm publishDate is not in future

## Content Planning

### Regular Content Schedule

- **Blog Posts:** 2-3 per month
- **Insights:** 1-2 per month  
- **Podcast Episodes:** Weekly/bi-weekly
- **Case Studies:** Monthly
- **Tech Notes:** As needed for updates

### Content Calendar Template

| Week | Blog | Insights | Podcast | Other |
|------|------|----------|---------|-------|
| Week 1 | Industry Trends | Market Analysis | Episode X | - |
| Week 2 | How-to Guide | - | Episode Y | Case Study |
| Week 3 | Tool Review | Best Practices | Episode Z | - |
| Week 4 | - | - | Episode A | Tech Notes |

## Support and Maintenance

- **Site URL:** <https://anykolaiszyn.github.io/trailblazer-analytics-devkit/>
- **Repository:** <https://github.com/anykolaiszyn/trailblazer-analytics-devkit>
- **Build Status:** Check GitHub Actions tab
- **Issues:** Create GitHub issues for problems or feature requests

For technical assistance with content management or site issues, refer to the repository's issue tracker or documentation.
