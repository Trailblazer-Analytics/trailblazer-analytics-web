# GitHub Organization Migration Checklist

## Pre-Migration Setup

- [x] Current changes committed and pushed
- [x] GitHub Organization created (Trailblazer-Analytics)
- [ ] New repository created in organization

## Migration Steps

### Option A: New Repository Method (Recommended)

1. **Create GitHub Organization**
   - Go to [github.com/settings/organizations](https://github.com/settings/organizations)
   - Click "New organization"
   - Choose organization name (suggested: `trailblazer-analytics`)
   - Complete organization setup

2. **Create New Repository**
   - In your new org, create repository: `trailblazer-analytics-devkit`
   - Set visibility (public/private as needed)
   - Do NOT initialize with README/gitignore

3. **Update Git Remotes**
   ```bash
   # Add new organization remote
   git remote add org-origin https://github.com/YOUR-ORG-NAME/trailblazer-analytics-devkit.git
   
   # Push everything to new repository
   git push org-origin --all
   git push org-origin --tags
   
   # Update origin to point to organization
   git remote set-url origin https://github.com/YOUR-ORG-NAME/trailblazer-analytics-devkit.git
   
   # Clean up temporary remote
   git remote remove org-origin
   ```

### Option B: Transfer Repository Method

1. Go to current repository settings
2. Scroll to "Danger Zone"
3. Click "Transfer ownership"
4. Enter organization name as new owner

## Post-Migration Tasks

### Update Deployment Settings

- [ ] **GitHub Pages** (if used):
  - Update Pages source in new repository settings
  - Update custom domain if applicable
  - Verify deployment workflow

- [ ] **Custom Domain** (if applicable):
  - Update DNS records to point to new repository
  - Update CNAME file if needed

### Update Documentation

- [ ] Update README.md with new repository URLs
- [ ] Update any hardcoded repository links in documentation
- [ ] Update deployment guides with new repository information

### Update CI/CD

- [ ] GitHub Actions workflows (should work automatically)
- [ ] Update any external services pointing to old repository
- [ ] Verify build and deployment processes

### Update External References

- [ ] Update any external documentation or wikis
- [ ] Update bookmarks and local development notes
- [ ] Notify team members of new repository location
- [ ] Update any external integrations or webhooks

## Verification Steps

- [ ] Verify git remote points to new organization
- [ ] Test clone from new repository URL
- [ ] Verify all branches and tags migrated
- [ ] Test build process in new repository
- [ ] Verify GitHub Pages deployment (if applicable)
- [ ] Test all CI/CD pipelines

## Repository Information

**Current Repository:** `https://github.com/anykolaiszyn/trailblazer-analytics-devkit`  
**New Organization:** `Trailblazer-Analytics`  
**New Repository:** `https://github.com/Trailblazer-Analytics/trailblazer-analytics-devkit`

## Notes

- All commit history will be preserved
- Issues and pull requests will move with Option B (transfer)
- Issues and pull requests will NOT move with Option A (new repo)
- GitHub Pages settings will need to be reconfigured
- Existing forks will remain pointing to old repository

## Rollback Plan

If something goes wrong:
1. The original repository remains intact until manually deleted
2. Can revert git remote: `git remote set-url origin https://github.com/anykolaiszyn/trailblazer-analytics-devkit.git`
3. Organization repository can be deleted if needed

---

**Migration Date:** [TO BE FILLED]  
**Performed By:** Alexander Nikolaiszyn  
**Status:** [TO BE UPDATED]
