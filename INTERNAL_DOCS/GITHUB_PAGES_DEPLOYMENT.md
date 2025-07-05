# GitHub Pages Deployment Guide

This document outlines the process for deploying the Trailblazer Analytics website to GitHub Pages, including common issues and solutions.

## Configuration

The site is configured to be deployed to GitHub Pages with the following settings:

1. **Base URL**: `/trailblazer-analytics-devkit`
2. **Site URL**: `https://anykolaiszyn.github.io/trailblazer-analytics-devkit`
3. **Asset Directory**: Assets are now stored in `/assets/` instead of the default `/_astro/` to avoid GitHub Pages issues with underscore directories

## Deployment Process

### Automatic Deployment via GitHub Actions

The easiest way to deploy is through the configured GitHub Actions workflow:

1. Push your changes to the main/master branch
2. GitHub Actions will automatically build and deploy the site
3. You can also manually trigger the workflow from the Actions tab in GitHub

### Manual Deployment Using NPM Scripts

We have added scripts to simplify the manual deployment process:

```bash
# Standard deployment - builds and deploys to GitHub Pages
npm run deploy

# Clean deployment - removes previous files and deploys without history
npm run deploy:clean
```

### Manual Deployment Steps

If you need to deploy manually without the scripts, follow these steps:

1. Build the site:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:

   ```bash
   npx gh-pages -d dist
   ```

## Important Files

- **`.nojekyll`**: This file at the root of the repository tells GitHub Pages not to process the site with Jekyll, which is crucial for properly serving files and directories that start with underscores.
  
- **`astro.config.mjs`**: Contains the Astro configuration, including the `site`, `base`, and `build.assets` settings.

- **`404.html`**: Custom 404 page with debugging information to help diagnose path issues.

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow file for automated deployments.

## Debugging Tools

We've added several debugging tools to help diagnose deployment issues:

### Debug Mode in Browser

The site includes debug logging that can be enabled by:

- Running locally in development mode
- Adding `?debug=true` to any URL of the deployed site

### Build Verification

Run the verification script to check that assets are correctly referenced:

```bash
npm run verify-build
```

This will:

- Check that all CSS/JS files exist in the assets directory
- Verify that HTML files correctly reference these assets
- Report any potential issues

## Troubleshooting Common Issues

### 404 Errors for CSS/JS Files

If you're experiencing 404 errors for CSS or JS files:

1. **Check the asset paths**: Ensure that assets are being referenced correctly in the HTML with the correct base path.

2. **Verify the build output**: Use `npm run verify-build` to check if assets are being generated and referenced correctly.

3. **Check browser console**: Look for network errors in the browser console to identify specific missing files.

4. **Ensure `.nojekyll` exists**: Make sure the `.nojekyll` file exists at the root of the deployed site.

### Page Not Found Errors

If pages are not loading correctly:

1. **Check the routing**: Ensure that internal links include the base path (`/trailblazer-analytics-devkit`).

2. **Verify the build**: Check that all pages are being generated correctly during the build process.

3. **Check GitHub Pages settings**: Verify that GitHub Pages is set to deploy from the correct branch and location.

## Asset Handling

As of the latest update, assets are now configured to be placed in `/assets/` instead of the default `/_astro/` directory to avoid issues with GitHub Pages' handling of underscore-prefixed paths.

```javascript
// astro.config.mjs
export default defineConfig({
  // ...other config
  build: {
    assets: "assets",
  },
});
```

## Future Improvements

Consider the following improvements for more robust deployments:

1. **Caching strategy**: Implement a better caching strategy for assets to improve performance.

2. **Preloading critical assets**: Use `<link rel="preload">` for critical resources.

3. **Service worker**: Add a service worker for offline support and better asset caching.

Last updated: June 4, 2025
