# User Guide: Adding New Downloads and Tools

This guide explains how to add new downloadable resources and tools to the Trailblazer Analytics website.

**Current Status**: Downloads collection is empty and ready for new content. Tools collection has 2 existing items.

## 📁 Adding New Downloads (Free Resources)

### Step 1: Upload the File

1. Place your file (PDF, Excel, etc.) in the `public/downloads/` directory
2. Use descriptive filenames (e.g., `data-strategy-template-2025.pdf`)
3. Supported formats: PDF, Excel (.xlsx), Word (.docx), PowerPoint (.pptx)

### Step 2: Create Content Entry

1. Create a new `.mdx` file in `src/content/downloads/`
2. Use the filename as the basis for the slug (e.g., `data-strategy-template.mdx`)

### Step 3: Add Frontmatter

Add the following metadata at the top of your `.mdx` file:

```yaml
---
title: "Data Strategy Template 2025"
date: "2025-01-15"
description: "A comprehensive template to help organizations develop their data strategy roadmap."
category: "Templates"  # Options: Templates, Tools, Guides, Checklists, Frameworks, Whitepapers
fileType: "PDF"
fileSize: "2.1 MB"
downloadUrl: "/downloads/data-strategy-template-2025.pdf"
featured: true  # Set to true for featured downloads
rating: 4.8
downloads: 1250
image: "/images/download-data-strategy.jpg"  # Optional preview image
pages: 12  # For PDFs
free: true
gated: false
tableOfContents: ["Executive Summary", "Current State Analysis", "Future Vision", "Implementation Roadmap"]
---
```

### Step 4: Add Content

Below the frontmatter, add a description:

```markdown
# Data Strategy Template 2025

This comprehensive template provides a structured approach to developing your organization's data strategy.

## What's Included
- Executive summary template
- Current state assessment framework  
- Future vision planning guide
- Implementation roadmap

## Who Should Use This
- Data leaders and executives
- Strategic planning teams
- Digital transformation teams

*Download includes fillable PDF template and Excel worksheets.*
```

### Step 5: Test and Deploy

1. Run `pnpm build` to verify no errors
2. Test the download page locally with `pnpm dev`
3. Commit and push to deploy
- Implementation roadmap

## Who Should Use This
- Data leaders and executives
- Strategic planning teams
- Digital transformation teams

*Download includes fillable PDF template and Excel worksheets.*
```

### Step 5: Test and Deploy
1. Run `pnpm build` to verify no errors
2. Test the download page locally
3. Deploy when ready

## 🔧 Adding New Tools (Gated/Premium Content)

### Step 1: Upload Files (if applicable)
- For direct downloads: Place in `public/downloads/`
- For external tools: Skip this step

### Step 2: Create Content Entry
Create a new `.mdx` file in `src/content/tools/`

### Step 3: Add Frontmatter
```yaml
---
title: "Advanced Analytics ROI Calculator"
date: "2025-01-15"
description: "Calculate the ROI of your analytics investments with this comprehensive calculator."
category: "Calculators"  # Options: Frameworks, Templates, Calculators, Courses, Premium Tools
price: "Free"  # or "$99", "Contact for Pricing"
demoUrl: "https://demo.example.com"  # Optional
purchaseUrl: "/downloads/roi-calculator.xlsx"  # or external URL
featured: true
rating: 4.9
technologies: ["Excel", "Power BI", "Analytics"]
image: "/images/tool-roi-calculator.jpg"
gated: false  # true for email capture required
premium: false  # true for paid content
---
```

### Step 4: Add Content
```markdown
# Advanced Analytics ROI Calculator

Calculate the return on investment for your analytics initiatives with precision.

## Features
- Comprehensive cost modeling
- ROI projections and scenarios
- Visual dashboards and charts
- Multi-year planning capabilities

## Requirements
- Microsoft Excel 2016 or newer
- Basic understanding of financial metrics

## What You'll Learn
- How to quantify analytics value
- Cost modeling best practices
- ROI presentation techniques
```

## 🎨 Adding Preview Images

### Image Guidelines
- **Size**: 1200x630px for social sharing
- **Format**: JPG or PNG
- **Location**: `public/images/`
- **Naming**: `download-[slug].jpg` or `tool-[slug].jpg`

### Creating Images
1. Use your preferred design tool
2. Include the resource title prominently
3. Use brand colors and fonts
4. Add the Trailblazer Analytics logo
5. Keep text readable at small sizes

## ⚙️ Categories and Organization

### Download Categories
- **Templates**: Fillable documents and frameworks
- **Tools**: Calculators and interactive resources
- **Guides**: How-to documents and best practices
- **Checklists**: Step-by-step verification lists
- **Frameworks**: Strategic and methodological guides
- **Whitepapers**: Research and thought leadership

### Tool Categories  
- **Frameworks**: Strategic planning tools
- **Templates**: Structured documents
- **Calculators**: Interactive calculation tools
- **Courses**: Educational content
- **Premium Tools**: Advanced paid resources

## 🔄 Updating Existing Resources

### To Update Content
1. Edit the `.mdx` file in the appropriate content directory
2. Update the `date` field to reflect the last modification
3. Increment version numbers if applicable
4. Test the changes locally

### To Replace Files
1. Upload the new file to `public/downloads/`
2. Update the `downloadUrl` in the frontmatter if filename changed
3. Update `fileSize` and `pages` as needed

## 🚨 Troubleshooting

### Common Issues

**Build Errors**
- Check frontmatter YAML syntax
- Ensure all required fields are present
- Verify file paths are correct

**Download Not Working**
- Confirm file exists in `public/downloads/`
- Check `downloadUrl` path in frontmatter
- Verify file permissions

**Images Not Displaying**
- Ensure images are in `public/images/`
- Check file paths in frontmatter
- Verify image file formats (JPG/PNG)

### Getting Help
1. Check the browser console for errors
2. Run `pnpm build` to identify build issues
3. Review existing working examples in the content directories
4. Contact the development team if issues persist

## 📊 Analytics and Tracking

### Download Tracking
- Downloads are automatically tracked via the `/api/download` endpoint
- View analytics in the admin dashboard
- Popular downloads are highlighted on the site

### SEO Optimization
- Use descriptive titles and descriptions
- Include relevant keywords naturally
- Optimize images with alt text
- Ensure proper categorization

## 🔐 Security Notes

### File Security
- Only upload files you have rights to distribute
- Scan all files for malware before uploading
- Use appropriate file permissions
- Regular security audits of uploaded content

### Content Guidelines
- Ensure all content is original or properly licensed
- Include appropriate disclaimers
- Follow brand guidelines for all materials
- Maintain professional quality standards

---

**Need Help?** Contact the content team or refer to the technical documentation for advanced configurations.
