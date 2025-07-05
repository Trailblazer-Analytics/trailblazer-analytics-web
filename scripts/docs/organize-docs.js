#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');

// Files to consolidate (replace empty originals with _FIXED versions)
const CONSOLIDATION_PAIRS = [
  {
    empty: 'CONTENT_MANAGEMENT_GUIDE.md',
    fixed: 'CONTENT_MANAGEMENT_GUIDE_FIXED.md',
    target: 'CONTENT_MANAGEMENT_GUIDE.md'
  },
  {
    empty: 'QUICK_REFERENCE.md',
    fixed: 'QUICK_REFERENCE_FIXED.md',
    target: 'QUICK_REFERENCE.md'
  },
  {
    empty: 'SITE_DASHBOARD.md',
    fixed: 'SITE_DASHBOARD_FIXED.md',
    target: 'SITE_DASHBOARD.md'
  },
  {
    empty: 'CONTENT_WORKFLOW.md',
    fixed: null, // No _FIXED version, check if docs version exists
    target: 'CONTENT_WORKFLOW.md'
  },
  {
    empty: 'PROJECT_COMPLETE.md',
    fixed: null, // No _FIXED version, use docs version
    target: 'PROJECT_COMPLETE.md'
  }
];

// Additional files to move to docs
const FILES_TO_MOVE = [
  'DOCS_SUMMARY.md',
  'GITHUB_PAGES_SETUP.md',
  'HOSTGATOR_DEPLOYMENT.md',
  'SPOTIFY_INTEGRATION.md'
];

// Files to remove (empty or redundant)
const FILES_TO_REMOVE = [
  'CONTENT_MANAGEMENT_GUIDE_FIXED.md',
  'QUICK_REFERENCE_FIXED.md',
  'SITE_DASHBOARD_FIXED.md'
];

function organizeDocumentation() {
  console.log('📚 Starting documentation organization...\n');

  // 1. Consolidate _FIXED files with their empty originals
  console.log('🔄 Consolidating documentation files:');
  
  CONSOLIDATION_PAIRS.forEach(({ empty, fixed, target }) => {
    const emptyPath = path.join(ROOT_DIR, empty);
    const fixedPath = fixed ? path.join(ROOT_DIR, fixed) : null;
    const targetPath = path.join(DOCS_DIR, target);
    const docsExisting = path.join(DOCS_DIR, empty);

    // Check if docs version already exists and has content
    if (fs.existsSync(docsExisting)) {
      const docsStats = fs.statSync(docsExisting);
      if (docsStats.size > 0) {
        console.log(`  ✅ ${target} already exists in docs with content`);
        // Remove empty root version
        if (fs.existsSync(emptyPath)) {
          fs.unlinkSync(emptyPath);
          console.log(`  🗑️  Removed empty root version: ${empty}`);
        }
        return;
      }
    }

    // Use _FIXED version if available and has content
    if (fixedPath && fs.existsSync(fixedPath)) {
      const fixedStats = fs.statSync(fixedPath);
      if (fixedStats.size > 0) {
        fs.copyFileSync(fixedPath, targetPath);
        console.log(`  ✅ Consolidated: ${fixed} → docs/${target}`);
        
        // Remove original empty file
        if (fs.existsSync(emptyPath)) {
          fs.unlinkSync(emptyPath);
        }
        return;
      }
    }

    // Check if empty root file has any content
    if (fs.existsSync(emptyPath)) {
      const emptyStats = fs.statSync(emptyPath);
      if (emptyStats.size > 0) {
        fs.copyFileSync(emptyPath, targetPath);
        console.log(`  ✅ Moved: ${empty} → docs/${target}`);
        fs.unlinkSync(emptyPath);
      } else {
        console.log(`  ⚠️  ${empty} is empty, skipping`);
        fs.unlinkSync(emptyPath);
      }
    }
  });

  // 2. Move additional documentation files
  console.log('\n📁 Moving additional documentation files:');
  
  FILES_TO_MOVE.forEach(filename => {
    const sourcePath = path.join(ROOT_DIR, filename);
    const targetPath = path.join(DOCS_DIR, filename);
    
    if (fs.existsSync(sourcePath)) {
      if (fs.existsSync(targetPath)) {
        console.log(`  ⚠️  ${filename} already exists in docs, skipping`);
      } else {
        fs.copyFileSync(sourcePath, targetPath);
        fs.unlinkSync(sourcePath);
        console.log(`  ✅ Moved: ${filename} → docs/`);
      }
    } else {
      console.log(`  ℹ️  ${filename} not found in root`);
    }
  });

  // 3. Remove redundant _FIXED files
  console.log('\n🗑️  Removing redundant files:');
  
  FILES_TO_REMOVE.forEach(filename => {
    const filepath = path.join(ROOT_DIR, filename);
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
      console.log(`  ❌ Removed: ${filename}`);
    }
  });

  // 4. Final summary
  console.log('\n📊 Final documentation structure:');
  const docsFiles = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.md')).sort();
  docsFiles.forEach(filename => {
    const filepath = path.join(DOCS_DIR, filename);
    const stats = fs.statSync(filepath);
    const size = stats.size > 0 ? `(${Math.round(stats.size / 1024)}KB)` : '(empty)';
    console.log(`  📄 docs/${filename} ${size}`);
  });

  console.log(`\n✅ Documentation organization complete!`);
  console.log(`📁 Total files in docs/: ${docsFiles.length}`);
}

organizeDocumentation();
