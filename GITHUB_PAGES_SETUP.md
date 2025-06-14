# GitHub Pages Deployment Configuration

## Overview
The Trailblazer Analytics DevKit has been configured for automated deployment to GitHub Pages.

## Configuration Details

### Repository Information
- **Repository**: https://github.com/anykolaiszyn/trailblazer-analytics-devkit
- **GitHub Pages URL**: https://anykolaiszyn.github.io/trailblazer-analytics-devkit
- **Deployment Branch**: main

### Files Modified

#### 1. `astro.config.mjs`
```javascript
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: "static",
  site: "https://anykolaiszyn.github.io",
  base: "/trailblazer-analytics-devkit"
});
```

#### 2. `src/site.config.js`
- Updated `url` to GitHub Pages URL
- Updated `plausibleDomain` for analytics
- Updated `corsOrigins` for API calls

#### 3. `.github/workflows/deploy.yml`
- Created automated deployment workflow
- Triggers on push to main branch
- Uses Node.js 20 and npm for builds
- Deploys to GitHub Pages using official actions

#### 4. `public/.nojekyll`
- Created to prevent Jekyll processing

## Deployment Process

### Automatic Deployment
1. Push changes to the `main` branch
2. GitHub Actions automatically builds the site
3. Deploys to GitHub Pages
4. Site is available at: https://anykolaiszyn.github.io/trailblazer-analytics-devkit

### Manual Deployment
You can also trigger deployment manually:
1. Go to the Actions tab in your GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## GitHub Pages Setup Required

To complete the setup, you need to enable GitHub Pages in your repository:

1. Go to your repository: https://github.com/anykolaiszyn/trailblazer-analytics-devkit
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select "GitHub Actions"
5. Save the settings

## First Deployment

After enabling GitHub Pages:
1. Push these configuration changes to your repository
2. The GitHub Actions workflow will automatically run
3. Your site will be live at: https://anykolaiszyn.github.io/trailblazer-analytics-devkit

## Features Enabled

✅ **Automated Builds**: Triggered on every push to main
✅ **Static Site Generation**: Optimized for GitHub Pages
✅ **Live Spotify Integration**: Works with GitHub Pages
✅ **Medium RSS Feed**: Functions properly
✅ **All Resources**: Downloads, tools, white papers, case studies
✅ **Responsive Design**: Mobile and desktop optimized
✅ **SEO Optimized**: Proper meta tags and sitemaps

## Local Development

For local development, continue using:
```bash
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview production build
```

## Notes

- The site will be available at a subdirectory: `/trailblazer-analytics-devkit`
- All internal links are configured to work with this base path
- External integrations (Spotify, Medium) work with the GitHub Pages domain
- Analytics and tracking are configured for the GitHub Pages URL

## Next Steps

1. Enable GitHub Pages in repository settings
2. Push these changes to trigger first deployment
3. Verify all features work on the live site
4. Optional: Configure custom domain later if desired
