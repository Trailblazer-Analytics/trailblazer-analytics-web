# How to Add, Edit, or Remove Case Studies

This guide explains how to manage case studies on your Trailblazer Analytics site. No coding experience is required—just follow these steps!

## 1. Add a New Case Study

1. Open the folder: `src/content/caseStudies/`.
2. Create a new file. Name it something short and unique, like `client-name.mdx`.
3. Copy and paste this template at the top of your new file:

   ```mdx
   ---
   title: "Case Study Title"
   date: "2025-05-31"
   client: "Client Name"
   industry: "Technology" # e.g., Healthcare, Finance, Retail, etc.
   summary: "Short summary of the project outcome."
   description: "Brief description of the project scope."
   challenge: "What problem needed to be solved?"
   solution: "How did we solve it?"
   results: 
     - "Increased data accuracy by 95%"
     - "Reduced reporting time by 60%"
     - "Improved decision-making speed by 40%"
   technologies: 
     - "Power BI"
     - "Azure Data Factory"
     - "SQL Server"
   featured: false # Set to true to feature on homepage
   ---
   
   ## Project Overview
   Write the full case study details here. You can use Markdown formatting including:
   - **Bold text**
   - *Italic text*
   - Lists and bullet points
   - Headers and subheaders
   - Links and images
   
   ## The Challenge
   Describe the specific business challenges the client faced...
   
   ## Our Solution
   Explain the approach and methodology used...
   
   ## Results & Impact
   Detail the measurable outcomes and business impact...
   ```

4. Fill in all the fields in the frontmatter (between the `---` lines). Then write your case study content below.
5. Save the file. The new case study will appear on the homepage automatically.

## 2. Edit an Existing Case Study

1. In `src/content/caseStudies/`, find the `.mdx` file you want to update.
2. Open it and change any of the fields or content.
3. Save the file. Your changes will show up on the site after the next build or deploy.

## 3. Remove a Case Study

1. In `src/content/caseStudies/`, find the `.mdx` file you want to remove.
2. Delete the file.
3. The case study will disappear from the homepage automatically.

## 4. Tips

- You can preview your changes locally by running `pnpm run dev` and visiting the homepage.
- All case studies are version-controlled in Git, so you can always restore previous versions if needed.
- If you want to add new fields (like a project URL or image), ask your developer to update the schema in `src/content.config.ts` and the card layout in `CaseStudyCard.jsx`.

---
If you have questions or need help, contact your developer or project lead.
