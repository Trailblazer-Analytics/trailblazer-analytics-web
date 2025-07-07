# Quick Reference - Trailblazer Analytics

## 🚀 Site Information

- **Live Site:** [https://anykolaiszyn.github.io/trailblazer-analytics-devkit/](https://anykolaiszyn.github.io/trailblazer-analytics-devkit/)
- **GitHub Repo:** [https://github.com/anykolaiszyn/trailblazer-analytics-devkit](https://github.com/anykolaiszyn/trailblazer-analytics-devkit)
- **Status:** ✅ Clean and Operational (Simplified static architecture)

## 📝 Current Content Collections

### Active Collections

- **Blog Posts** (`src/content/blog/`) - Local blog content
- **Downloads** (`src/content/downloads/`) - Free resources and downloads
- **Tools** (`src/content/tools/`) - Premium/gated tools and courses

### Medium Integration

- **Articles** - Integrated via Medium RSS feed (no local storage)
- **Medium Profile:** [@alex.nykolaiszyn](https://medium.com/@alex.nykolaiszyn)
- **RSS Feed:** <https://medium.com/feed/@alex.nykolaiszyn>

## 🔧 Common Tasks

### Add New Blog Post

1. Create: `src/content/blog/YYYY-MM-DD-title-slug.md`
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
description: "SEO description"
date: "2025-01-XX"
author: "Alexander Nykolaiszyn"
tags: ["tag1", "tag2"]
featured: false
vibe: "insight"
difficulty: "intermediate"
---
```

3. Write content in Markdown
4. Test with `npm run build` (optional)
5. Commit and push → Auto-deploys

### Add New Download

1. Place file in: `public/downloads/filename.pdf`
2. Create: `src/content/downloads/resource-name.md`
3. Add frontmatter:

```yaml
---
title: "Resource Title"
description: "What this provides"
date: "2025-01-XX"
category: "Templates"
fileType: "PDF"
downloadUrl: "/downloads/filename.pdf"
featured: false
free: true
---
```

4. Test with `npm run build` (optional)
5. Commit and push → Auto-deploys

### Add New Tool

1. Create: `src/content/tools/tool-name.md`
2. Add frontmatter:

```yaml
---
title: "Tool Name"
description: "Tool description"
date: "2025-01-XX"
category: "Frameworks"
price: "$99"
demoUrl: "https://example.com/demo"
purchaseUrl: "https://example.com/buy"
gated: true
premium: true
---
```

3. Test with `npm run build` (optional)
4. Commit and push → Auto-deploys

### Update Articles (Medium)

Articles are automatically pulled from Medium RSS. No local management needed.

- Publish new articles on Medium
- They automatically appear on the `/articles` page
- No manual sync required

## 🔧 Deployment

### Auto-Deploy (Recommended)

```bash
git add .
git commit -m "Add new content"
git push origin main
```

→ Site updates in 2-3 minutes automatically

### Manual Build (for testing)

```bash
npm run build
```

## 📁 Key Directories

- `src/content/blog/` → Blog posts
- `src/content/downloads/` → Free resources and downloads
- `src/content/tools/` → Premium tools and courses
- `public/downloads/` → PDF files and resources
- `public/images/` → Images and media

## 🎯 Navigation Structure

**Main Nav:** About | Blog | Articles | Downloads | Tools | Support | Connect

**Current Pages:**

- `/` - Homepage
- `/about` - About page
- `/blog` - Local blog posts
- `/articles` - Medium RSS integration
- `/downloads` - Free resources
- `/tools` - Premium offerings
- `/support` - Support page with dynamic coffee counter
- `/connect` - Contact and social links

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
