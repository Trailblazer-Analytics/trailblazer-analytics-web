# GitHub App Setup for Static CMS

## Step 1: Create GitHub App

1. Go to **GitHub Settings** → **Developer settings** → **GitHub Apps**
2. Click **"New GitHub App"**

### App Configuration

**GitHub App name**: `Trailblazer Analytics CMS`

**Homepage URL**: `https://trailblazeranalytics.com`

**Callback URL**: `https://trailblazeranalytics.com/admin/`

**Request user authorization (OAuth) during installation**: ✅ **CHECKED**

**Webhook**: ❌ **UNCHECKED** (leave "Active" unchecked)

### Permissions

**Repository permissions:**
- Contents: **Read and write**
- Metadata: **Read** 
- Pull requests: **Read and write**

**Account permissions:**
- Leave all **unchecked**

### Where can this GitHub App be installed?
- Select **"Only on this account"**

## Step 2: Install the App

1. After creating the app, click **"Install App"** (left sidebar)
2. Click **"Install"** next to your account
3. Select **"Only select repositories"** 
4. Choose: `trailblazer-analytics-web`
5. Click **"Install"**

## Step 3: Verify Setup

1. Deploy your site with the new admin files
2. Go to `https://trailblazeranalytics.com/admin/`
3. Click **"Login with GitHub"**
4. Authorize the app
5. You should see the CMS interface with your collections

## Troubleshooting

### "Login with GitHub" doesn't appear
- Check that callback URL matches exactly: `https://trailblazeranalytics.com/admin/`
- Ensure app is installed on the correct repository

### Authentication fails
- Verify the app has correct permissions (Contents: Read/Write, Pull requests: Read/Write)
- Check that the repository name in `config.yml` matches exactly

### Can't see collections
- Verify folder paths in `config.yml` match your actual content structure
- Check that branch name is correct (`main`)

## Security Notes

- The GitHub App only has access to the specific repository you selected
- It cannot access other repositories or organization data
- You can revoke access anytime in GitHub Settings → Applications