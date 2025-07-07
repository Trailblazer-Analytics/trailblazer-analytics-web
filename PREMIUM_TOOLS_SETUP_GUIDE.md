# Premium Tools Setup Guide

This guide explains how to add new premium tools to the Trailblazer Analytics website, including content structure, gating options, and display logic.

## Content Structure

Premium tools are stored in `src/content/tools/` as Markdown files with frontmatter. Each tool needs:

### File Location
```
src/content/tools/tool-name.md
```

### Frontmatter Schema
```yaml
---
title: "Tool Name"
date: "2025-01-03"
description: "Brief description of what this tool does and its value proposition"
category: "Frameworks" # Options: "Frameworks", "Templates", "Calculators", "Courses", "Premium Tools"
price: "$49" # Optional: Display price (can be "Free", "$X", "Contact for pricing", etc.)
featured: true # Optional: Show in featured section
rating: 4.8 # Optional: Tool rating out of 5
technologies: ["Excel", "Power BI", "Python"] # Optional: Tech stack
image: "/images/tool-preview.jpg" # Optional: Tool preview image
gated: true # Required: true for newsletter gate, false for direct access
premium: false # Required: true for external purchase, false for newsletter gate
gatewayType: "newsletter" # Required if gated=true: "newsletter" or "purchase"
purchaseUrl: "https://example.com/buy" # Required if premium=true
demoUrl: "https://example.com/demo" # Optional: Demo/preview link
features: # Optional: Key features list
  - "Feature 1"
  - "Feature 2"
  - "Feature 3"
tags: ["analytics", "framework", "excel"] # Optional: For search/filtering
---

# Tool Content

Full markdown content describing the tool, usage instructions, etc.
This content is shown on the individual tool page after access is granted.
```

## Gating Options

There are three main access patterns for premium tools:

### 1. Newsletter Gated (Free with Email)
```yaml
gated: true
premium: false
gatewayType: "newsletter"
```
- User must sign up for newsletter to access
- Tool content is shown after email capture
- No payment required

### 2. External Purchase (Paid)
```yaml
gated: true
premium: true
gatewayType: "purchase"
purchaseUrl: "https://store.example.com/tool"
```
- User clicks button to external purchase page
- Tool content may show preview or full description
- Payment handled externally

### 3. Free Access (No Gate)
```yaml
gated: false
premium: false
```
- Tool content is immediately accessible
- No email or payment required
- Good for free tools or promotional content

## Display Logic

The tools page automatically handles different access patterns:

### Tool Cards
- **Newsletter Gated**: Shows "Get Free Access" button
- **Premium/Purchase**: Shows "Buy Now" or custom price button
- **Free**: Shows "Access Tool" button

### Tool Detail Pages
- **Newsletter Gated**: Shows newsletter signup form before content
- **Premium**: Shows purchase information and external link
- **Free**: Shows full content immediately

## Adding a New Tool

1. **Create the tool file**:
   ```bash
   # Create new file in tools directory
   touch src/content/tools/my-new-tool.md
   ```

2. **Add frontmatter and content**:
   Use the schema above as a template

3. **Add any images**:
   Place tool images in `public/images/tools/`

4. **Test the tool**:
   ```bash
   # Run development server
   pnpm dev
   
   # Navigate to /tools to see your tool listed
   # Navigate to /tools/my-new-tool to see the detail page
   ```

## Newsletter Integration

Newsletter gated tools use the existing `NewsletterSignup` component:

- Located at: `src/components/NewsletterSignup.astro`
- Integrates with ConvertKit API
- Handles success/error states
- Redirects to tool content after signup

## Purchase Integration

Premium tools can integrate with:

- **Gumroad**: Direct product links
- **Stripe**: Custom checkout pages
- **LemonSqueezy**: Product pages
- **Custom stores**: Any external URL

## Tool Categories

Available categories (defined in `src/content.config.ts`):

- **Frameworks**: Strategic planning frameworks, methodologies
- **Templates**: Excel/PowerBI templates, document templates
- **Calculators**: ROI calculators, sizing tools, assessment tools
- **Courses**: Educational content, training materials
- **Premium Tools**: Software tools, advanced resources

## Featured Tools

To feature a tool on the tools page:

1. Set `featured: true` in frontmatter
2. Optionally add a `rating` for social proof
3. Featured tools appear in the top section with enhanced styling

## SEO and Metadata

Each tool automatically gets:

- SEO-friendly URLs (`/tools/tool-name`)
- Meta descriptions from frontmatter
- Social sharing metadata
- Structured data for search engines

## Content Guidelines

### Tool Descriptions
- Keep descriptions concise but compelling (1-2 sentences)
- Focus on value proposition and outcomes
- Use action-oriented language

### Tool Content
- Structure with clear headings
- Include usage instructions
- Add screenshots or examples where helpful
- Provide clear next steps

### Pricing
- Be transparent about pricing
- Use clear calls-to-action
- Consider offering previews for paid tools

## Example Tool Files

### Newsletter Gated Tool
```markdown
---
title: "Analytics Readiness Assessment"
description: "Comprehensive 50-point assessment to evaluate your organization's analytics maturity and identify improvement opportunities"
category: "Frameworks"
gated: true
premium: false
gatewayType: "newsletter"
featured: true
rating: 4.9
technologies: ["Excel", "Framework"]
features:
  - "50-point comprehensive assessment"
  - "Automated scoring and recommendations"
  - "Industry benchmarking"
  - "Action plan template"
tags: ["assessment", "maturity", "analytics", "framework"]
---

# Analytics Readiness Assessment

A comprehensive tool to evaluate your organization's analytics capabilities...
```

### Premium Tool
```markdown
---
title: "Advanced ROI Calculator"
description: "Professional-grade ROI calculator with NPV, IRR, and sensitivity analysis for data and analytics investments"
category: "Calculators"
price: "$29"
gated: true
premium: true
gatewayType: "purchase"
purchaseUrl: "https://gumroad.com/l/analytics-roi-calculator"
demoUrl: "https://demo.example.com/roi-calculator"
featured: true
rating: 4.8
technologies: ["Excel", "VBA"]
tags: ["roi", "calculator", "business-case", "investment"]
---

# Advanced ROI Calculator

Professional-grade financial modeling tool for analytics investments...
```

## Troubleshooting

### Tool Not Appearing
- Check file is in `src/content/tools/`
- Verify frontmatter syntax
- Ensure required fields are present
- Check console for schema validation errors

### Gating Not Working
- Verify `gated` and `premium` boolean values
- Check `gatewayType` is either "newsletter" or "purchase"
- Ensure `purchaseUrl` is provided for premium tools

### Layout Issues
- Check image paths are correct
- Verify category is from allowed enum
- Test on different screen sizes

## Future Enhancements

Potential additions to the tools system:

- **Analytics**: Track tool usage and conversion
- **Reviews**: User ratings and reviews
- **Bundles**: Package multiple tools together
- **Subscriptions**: Recurring access models
- **Previews**: Show partial content before gating
- **Search**: Enhanced search and filtering
- **Tags**: More granular topic filtering

---

For technical questions about the tools system, see the main README.md or contact the development team.
