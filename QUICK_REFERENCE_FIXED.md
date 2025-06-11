# Quick Reference - Trailblazer Analytics

## 🚀 Site Information

- **Live Site:** [https://anykolaiszyn.github.io/trailblazer-analytics-devkit/](https://anykolaiszyn.github.io/trailblazer-analytics-devkit/)
- **GitHub Repo:** [https://github.com/anykolaiszyn/trailblazer-analytics-devkit](https://github.com/anykolaiszyn/trailblazer-analytics-devkit)
- **Status:** ✅ Deployed and Operational (45 pages building successfully)

## 📝 Common Tasks

### Add New Blog Post

1. Create: `src/content/blog/YYYY-MM-DD-title.md`
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
description: "SEO description"
publishDate: 2025-01-XX
author: "Your Name"
category: "Category"
tags: ["tag1", "tag2"]
---
```

1. Write content in Markdown
2. Commit and push → Auto-deploys

### Add New Insight Article

1. Create: `src/content/insights/insight-title.md`
2. Add frontmatter with `category: "Market Analysis"` etc.
3. Focus on actionable insights
4. Commit and push → Auto-deploys

### Add Podcast Episode

1. Create: `src/content/podcast/episode-XXX-title.md`
2. Include audio URLs (Spotify, Apple, etc.)
3. Add episode notes and guest info
4. Commit and push → Auto-deploys

### Add Downloads/Resources

1. Place files in: `public/downloads/`
2. Link in content: `/downloads/filename.pdf`
3. Current files are small (<2KB) - no storage issues
4. Commit and push → Auto-deploys

## 🔧 Deployment

### Auto-Deploy (Recommended)

```bash
git add .
git commit -m "Add new content"
git push origin main
```

→ Site updates in 2-3 minutes automatically

### Manual Deploy (Emergency)

```bash
npm run build
npm run deploy:clean
```

## 📁 Key Directories

- `src/content/blog/` → Blog posts
- `src/content/insights/` → Analytics insights  
- `src/content/podcast/` → Podcast episodes
- `src/content/case-studies/` → Case studies
- `src/content/tech-notes/` → Technical notes
- `public/downloads/` → PDFs and resources
- `public/images/` → Images and media

## 🎯 Navigation Structure

**Main Nav:** Insights | Blog | Podcast | About | Resources ↓ | Support | Connect

**Resources Dropdown:**

- Tech Notes
- Case Studies  
- ---- (separator)
- Downloads
- Tools
- Templates

## ⚡ Quick Fixes

### Build Errors

- Check YAML frontmatter syntax
- Verify image paths exist
- Ensure `.md` file extension

### Content Not Showing

- Check file is in correct directory
- Verify frontmatter format
- Confirm publishDate is not future

### Deployment Issues

- Check GitHub Actions tab for errors
- Try manual deployment
- Verify all files committed and pushed

## 📚 Full Documentation

For detailed guides, see: `CONTENT_MANAGEMENT_GUIDE.md`

## 💡 Content Tips

- Keep descriptions under 160 characters
- Use descriptive filenames
- Include relevant tags
- Add featured images when possible
- Focus on actionable content
- Link to related articles internally

## 🛠️ File Sizes

Current downloads are very small (<2KB each):

- No GitHub storage concerns
- No need for external file hosting
- All resources can stay in Git repository
