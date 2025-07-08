---
title: "Streamline Your BI Documentation with bi‑doc 🚀"
description: "Automatically generate beautiful, human-friendly documentation from Power BI and Tableau with bi‑doc—your new favorite tool for BI governance, collaboration, and automation."
author: "Alexander Nykolaiszyn"
date: 2025-07-08
publishDate: 2025-07-08
tags: ["bi-doc", "documentation", "power bi", "tableau", "data governance", "automation"]
image: "/images/article-analytics.jpg"
featured: true
readingTime: 5
---

In today’s fast-paced analytics world, keeping your BI assets well-documented and up-to-date is critical—but often tedious. That’s where **bi‑doc** from Trailblazer Analytics comes in.

## What is bi‑doc?

**bi‑doc** is a command-line tool designed for data professionals to automatically generate comprehensive documentation from your Business Intelligence artifacts. It reads:

- **Power BI** `.pbix` files
- **Tableau** `.twb` and `.twbx` workbooks

…and outputs polished, human-friendly documentation in **Markdown** and **JSON** formats.

---

## Why It Matters

**Governance & Transparency**  
Automatically document your datasets, visuals, measures, and lineage—ensuring clarity for audits, onboarding, and team transitions.

**Collaboration Ready**  
Using GitHub or Confluence? Markdown files are easily versioned, reviewed, and shared with stakeholders.

**Seamless Toolchain Integration**  
JSON output enables introspection by other tools—like data catalogs, automated pipelines, or report quality dashboards.

---

## How It Works

1. **Install via pip or download the executable**
2. **Point it at your BI file:**
   ```bash
   bi-doc generate my-report.pbix
   ```
3. **Get instant documentation:**
   - `README.md`: summary, author, updated date
   - Per-workbook JSON & Markdown files with descriptions, fields, datasets
   - Optional: YAML front matter for static-site/blog/wiki integration

---

## Who’s It For?

- **BI Developers & Analysts** aiming to reduce manual documentation overhead
- **Data Engineers** seeking consistent docs for operational pipelines
- **Analytics Leads** building internal data governance

---

## Try It Yourself

Explore the project, run it on your dashboards, and let us know what you think! Need help setting it up? We’re happy to share tips or jump on a quick call.

👉 **Check it out:** [Trailblazer‑Analytics/bi‑doc](https://github.com/Trailblazer-Analytics/bi-doc)

If you find it helpful, please ⭐ star the repo, share it, or contribute your own ideas—your support means the world!

---

## Next Steps

- **Install & test:** See how it works with your `.pbix` / `.twbx` files
- **Integrate:** Connect docs into your CI/CD, GitOps, or internal wiki
- **Contribute:** We welcome ideas for new features—like support for additional BI platforms, output formats, or CI/CD triggers

---
