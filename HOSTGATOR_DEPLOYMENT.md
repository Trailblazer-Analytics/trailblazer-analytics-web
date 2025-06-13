# HostGator Deployment Guide

This guide shows you how to deploy the Trailblazer Analytics site to HostGator or similar cPanel-based hosting.

## Prerequisites

- HostGator hosting account with cPanel access
- FTP client or file manager access
- Domain name configured

## Step 1: Build the Site

On your local machine:

```bash
# Install dependencies
pnpm install

# Build for production
pnpm run build
```

This creates a `dist/` folder with all the static files.

## Step 2: Upload Files

### Option A: cPanel File Manager
1. Log in to your HostGator cPanel
2. Open "File Manager"
3. Navigate to `public_html` (or your domain's folder)
4. Delete any existing files (index.html, etc.)
5. Upload all contents from the `dist/` folder
6. Extract if needed

### Option B: FTP Client
1. Connect to your hosting via FTP
2. Navigate to `public_html`
3. Upload all files and folders from `dist/`

## Step 3: Configure Environment (Optional)

If your site uses API features:

1. Create a `.env` file in the root directory
2. Add your environment variables:
   ```
   CONTACT_EMAIL=your-email@domain.com
   BEEHIIV_API_KEY=your_api_key
   ```

## Step 4: Test

1. Visit your domain
2. Test all pages and functionality
3. Check forms and API endpoints

## File Structure After Deployment

```
public_html/
├── index.html
├── about/
├── blog/
├── case-studies/
├── downloads/
├── _astro/
│   ├── client.js
│   └── styles.css
└── api/
    ├── contact.js
    └── newsletter.js
```

## Troubleshooting

### 404 Errors
- Ensure all files are uploaded to the correct directory
- Check that `index.html` exists in the root

### API Not Working
- Verify environment variables are set
- Check server logs in cPanel

### Images Not Loading
- Verify image files are uploaded
- Check file permissions (755 for directories, 644 for files)

## Updates

To update the site:
1. Make changes locally
2. Run `pnpm run build`
3. Upload new `dist/` contents
4. Clear any caches

The site is now ready for production use!
