# PR Review Workflow Guide

## How Editorial Workflow Works

When you use the CMS at `/admin`, instead of committing directly to `main`, it:

1. **Creates a branch** (e.g., `cms/blog-post-name`)
2. **Opens a Pull Request** with your changes
3. **Updates the PR** as you make edits
4. **You review and merge** when ready

This gives you a safety net and helps build better Git habits!

## Reviewing Your CMS-Generated PRs

### 1. Finding Your PRs

**GitHub Web:**
- Go to your repo: `https://github.com/Trailblazer-Analytics/trailblazer-analytics-web`
- Click **"Pull requests"** tab
- Look for PRs with titles like: `Create blog-post-name` or `Update blog-post-name`

**GitHub CLI (optional):**
```bash
gh pr list
```

### 2. What to Review

**Content Quality:**
- ✅ Title and description make sense
- ✅ Tags are relevant and properly formatted
- ✅ Date is correct (not in the future unless intentional)
- ✅ Images are optimized and properly linked

**Technical Checks:**
- ✅ Frontmatter is valid YAML
- ✅ Markdown formatting looks good
- ✅ No broken links or missing images
- ✅ Slug is SEO-friendly (lowercase, hyphens)

**Preview the Content:**
- Click **"Files changed"** tab to see the diff
- Look for the **preview link** (Astro will build a preview)

### 3. Approving and Merging

**If everything looks good:**
1. Click **"Merge pull request"**
2. Choose **"Squash and merge"** (cleaner history)
3. Edit the commit message if needed
4. Click **"Confirm squash and merge"**
5. Delete the branch (GitHub will offer this option)

**If you need changes:**
1. Go back to `/admin`
2. Edit the content (it will update the same PR)
3. Review the updated PR
4. Merge when ready

### 4. What Happens After Merge

1. **PR gets merged** into `main`
2. **GitHub Actions runs** your build process
3. **Site updates** automatically on GitHub Pages
4. **Branch gets deleted** (keep repo clean)

## Best Practices for PR Reviews

### Content Reviews
- **Read the full post** - don't just check technical details
- **Test any links** mentioned in the content
- **Verify images load** and are appropriately sized
- **Check mobile formatting** (most readers are on mobile)

### Technical Reviews  
- **Frontmatter validation**: dates, tags, boolean values
- **SEO check**: meta description length, proper headings
- **Performance**: image sizes, external link behavior

### Building the Habit

**Start Small:**
- Review every CMS-generated PR (even small edits)
- Take 2-3 minutes per review
- Focus on catching obvious issues first

**Gradually Add Rigor:**
- Preview content on different screen sizes
- Check for consistency with your content style
- Verify analytics tracking still works

## Troubleshooting

### PR Not Appearing
- Check you clicked "Save" in the CMS (not just "Preview")
- Verify the GitHub App has pull request permissions
- Look in "Closed" PRs - may have been auto-merged

### Build Fails After Merge
- Check GitHub Actions logs
- Common issues: invalid frontmatter, missing images, future dates
- Fix in a follow-up commit or PR

### CMS Shows Old Content
- The CMS reads from the current `main` branch
- If you commit directly to `main`, the CMS will pick up those changes
- PRs in progress won't affect what you see in the CMS editor

## Breaking Old Habits

**Instead of direct commits:**
1. ❌ `git add . && git commit -m "new post" && git push`
2. ✅ Use the CMS → Create PR → Review → Merge

**Benefits you'll see:**
- Catch typos before they go live
- Better commit messages (descriptive PR titles)
- Ability to preview changes
- Practice with PR-based workflows

**Emergency Direct Commits (when needed):**
- Critical fixes can still go direct to `main`
- Just be intentional about it
- The CMS will pick up your direct changes next time you use it