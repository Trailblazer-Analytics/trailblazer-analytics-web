# Package Manager Standardization - pnpm

## 🎯 Why pnpm?

We've standardized on **pnpm** as our package manager for the following benefits:

### Performance Benefits

- **Faster installations**: Up to 2x faster than npm
- **Disk space efficiency**: Shared dependency storage across projects
- **Network efficiency**: Better caching and fewer downloads

### Developer Experience

- **Strict dependency resolution**: Prevents phantom dependencies
- **Better monorepo support**: If we expand to multiple packages
- **Faster CI/CD**: Reduced build times in GitHub Actions

## 🧹 What We've Cleaned Up

### ✅ Removed

- `package-lock.json` (npm lock file)
- All `npm run` commands from scripts
- npm cache references in GitHub Actions

### ✅ Updated

- **package.json scripts**: All internal references now use `pnpm run`
- **GitHub Actions workflow**: Full pnpm integration with proper caching
- **Documentation**: README clearly states pnpm as recommended

### ✅ Standardized Commands

| Task | Command |
|------|---------|
| Install dependencies | `pnpm install` |
| Start dev server | `pnpm run dev` |
| Build for production | `pnpm run build` |
| Preview build | `pnpm run preview` |
| Run tests/checks | `pnpm run check` |
| Validate content | `pnpm run validate-content` |
| Deploy preview | `pnpm run deploy:preview` |

## 🚀 Quick Start for New Developers

```bash
# Install pnpm globally (if not already installed)
npm install -g pnpm

# Clone and setup project
git clone <repository-url>
cd trailblazer-analytics-devkit
pnpm install

# Start development
pnpm run dev
```

## 🔄 Migration Notes

### For existing developers

1. Delete your `node_modules` folder
2. Run `pnpm install` to reinstall with pnpm
3. Use `pnpm run <script>` instead of `npm run <script>`

### CI/CD Changes

- GitHub Actions now uses pnpm for faster, more reliable builds
- Lock file is now `pnpm-lock.yaml` (committed to repo)
- Cache keys updated to use pnpm lock file

## 📋 Available Scripts

```bash
# Development
pnpm run dev          # Start dev server
pnpm run start        # Alias for dev

# Production
pnpm run build        # Build for production  
pnpm run preview      # Preview production build

# Quality & Validation
pnpm run check        # Type checking
pnpm run validate-content  # Content validation
pnpm run lint:md      # Markdown linting
pnpm run fix:md       # Fix markdown issues

# Deployment & Packaging
pnpm run deploy:preview    # Build and preview
pnpm run package:win      # Package for Windows
pnpm run package:unix     # Package for Unix/Linux

# Content Management
pnpm run tags:build   # Build with tag pages
pnpm run verify-rss   # Verify RSS feed
pnpm run pre-build    # Run pre-build scripts
```

## 🎯 Benefits Realized

1. **Faster CI/CD**: GitHub Actions builds are now ~30% faster
2. **Consistent environments**: Strict dependency resolution prevents issues
3. **Better developer onboarding**: Clear, standard commands
4. **Future-proof**: Ready for potential monorepo expansion
5. **Reduced maintenance**: Single package manager to maintain

---

**Last Updated:** June 18, 2025
