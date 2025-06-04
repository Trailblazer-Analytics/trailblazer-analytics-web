# Lighthouse CI Setup Guide

This guide explains how to set up and use Lighthouse CI (LHCI) to automatically check your site's performance and accessibility.

## 1. Install Lighthouse CI
Open PowerShell and run:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
pnpm add -D @lhci/cli
```

## 2. Add a Lighthouse CI config file
Create a new file at the project root named `lighthouserc.json` with this content:
```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:4173/"],
      "startServerCommand": "pnpm run preview",
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.95}]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

## 3. Add a script to `package.json`
Add this to your `scripts` section:
```json
"lighthouse-ci": "lhci autorun"
```

## 4. Run Lighthouse CI locally
After building your site, run:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
pnpm run lighthouse-ci
```
- This will build, preview, and test your site.
- If scores are below the thresholds, you'll see errors in the output.
- A report link will be provided for detailed results.

## 5. (Optional) Add to GitHub Actions
You can add a job to your workflow to run LHCI on every push. Ask your developer for help if needed.

---
If you have questions or need help, contact your developer or project lead.
